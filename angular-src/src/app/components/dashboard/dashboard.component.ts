import {Component, OnInit} from '@angular/core';
import {Post} from '../feed/feed.component';
import {PostService} from '../../services/post.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {FileUploader} from 'ng2-file-upload';

export class TotalsAddition {
  milesSinceLastPost: number;
  timeBikedToday: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  postAction: string;
  postToEdit: Post;
  posts: Post[];
  currentPost: Post;
  weatherConditions: [string];
  errorMessages: string[];
  public uploader: FileUploader = new FileUploader({url: 'http://localhost:3000/posts/upload'});

  constructor(private postService: PostService,
              private flashMessagesService: FlashMessagesService,
              private router: Router) {
  }

  ngOnInit() {
    this.postService.getAllPosts().subscribe(response => {
      this.posts = response.posts;
    });
    this.errorMessages = [];
    this.currentPost = new Post();
    this.currentPost.author = localStorage.getItem('name');
    this.weatherConditions = ['Cloudy', 'Partly Cloudy', 'Overcast', 'Sunny', 'Rainy'];
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      let responsePath = JSON.parse(response);
      if (responsePath.fileName && responsePath.fileName !== 'hasnt been set yet') {
        if (this.currentPost.photos) {
          this.currentPost.photos.push(responsePath.fileName);
        } else {
          this.currentPost.photos = [responsePath.fileName];
        }
      }
    };
    this.uploader.onCompleteAll = () => {
      if (this.postAction === 'create') {
        this.sendUpdateTotalsRequest();
        this.sendPostRequests();
      } else if (this.postAction === 'edit') {
        this.sendUpdateTotalsRequest();
        this.sendEditRequest();
      }
    };
  }

  updateEditPostData() {
    this.currentPost = this.postToEdit;
    this.currentPost.date = this.currentPost.date.split('T')[0];
    this.currentPost.weatherCondition = this.currentPost.weatherCondition[0];
  }

  updatePostForm() {
    this.currentPost = new Post();
  }

  onSubmitPost() {
      if (!this.validateInputs()) return;

      if (this.uploader.queue) {
        for (let item of this.uploader.queue) {
          item.upload();
        }
      } else if (this.postAction === 'create') {
        this.sendUpdateTotalsRequest();
        this.sendPostRequests();
      } else if (this.postAction === 'edit') {
        this.sendUpdateTotalsRequest();
        this.sendEditRequest();
      }
  }

  private validateInputs(): boolean {
    // date: string;
    if (typeof this.currentPost.date === 'undefined' || this.currentPost.date.length < 4) {
      this.errorMessages.push('Enter in a date! ');
    }
    // title: string;
    if (typeof this.currentPost.title === 'undefined' || this.currentPost.title.length < 2) {
      this.errorMessages.push('What you dont want a title?!');
    }
    // body: string;
    if (typeof this.currentPost.body === 'undefined' || this.currentPost.body.length < 5) {
      this.errorMessages.push('This isn\'t a blog that just shows headlines. Give it a body. ');
    }
    // _________________ Do any of these need validation or are they optional?
    // photos: string[];
    // tags: [string];
    // recap: boolean;
    // milesSinceLastPost: number;
    // timeBikedToday: number;
    // temperature: string;
    // weatherCondition: string;

    // author: string;
    if (typeof this.currentPost.author === 'undefined' || this.currentPost.author.length < 2) {
      this.errorMessages.push('If you wrote it own it. Enter an author');
    }

    if (this.errorMessages.length > 0) {
      setTimeout(() => {
        this.errorMessages = [];
      }, 3000);
      return false;
    }
    return true;
  }

  public deletePhoto(photo: string) {
    this.postService.deletePhoto(photo).subscribe(response => {
      if (response.success) {
        this.currentPost.photos.splice(this.currentPost.photos.indexOf(photo), 1);
        this.flashMessagesService.show(response.msg, {
          cssClass: 'alert-success',
          timeout: 5000
        });
      } else {
        this.flashMessagesService.show(response.msg, {
          cssClass: 'alert-danger',
          timeout: 5000
        });
      }
    });
  }

  private sendPostRequests() {
    if (this.currentPost.photos) {
      this.currentPost.photos = this.currentPost.photos.map(photo => {
        return photo.replace(/ /g, '-');
      });
    }

    this.postService.addPost(this.currentPost).subscribe(data => {
      if (data.success) {
        this.flashMessagesService.show(data.msg, {
          cssClass: 'alert-success',
          timeout: 5000
        });
        location.reload();
        this.router.navigate(['/dashboard']);
      } else {
        this.flashMessagesService.show(data.msg, {
          cssClass: 'alert-danger',
          timeout: 5000
        });
        this.router.navigate(['/login']);
      }
    });
  }

  private sendEditRequest() {
    if (this.currentPost.photos) {
      this.currentPost.photos = this.currentPost.photos.map(photo => {
        return photo.replace(/ /g, '-');
      });
    }

    this.postService.editPost(this.currentPost).subscribe(data => {
      if (data.success) {
        this.flashMessagesService.show(data.msg, {
          cssClass: 'alert-success',
          timeout: 5000
        });
      } else {
        this.flashMessagesService.show(data.msg, {
          cssClass: 'alert-danger',
          timeout: 5000
        });
      }
    });
  }

  private sendUpdateTotalsRequest() {
    if (this.currentPost.milesSinceLastPost && this.currentPost.timeBikedToday) {
      let dataToAddToTripTotals: TotalsAddition = {
        milesSinceLastPost: this.currentPost.milesSinceLastPost,
        timeBikedToday: this.currentPost.timeBikedToday
      };
      this.postService.addToTotals(dataToAddToTripTotals).subscribe(data => {
        if (data.success) {
          this.flashMessagesService.show(data.msg, {
            cssClass: 'alert-success',
            timeout: 5000
          });
          this.router.navigate(['/dashboard']);
        } else {
          this.flashMessagesService.show(data.msg, {
            cssClass: 'alert-danger',
            timeout: 5000
          });
          this.router.navigate(['/login']);
        }
      });
    }
  }

}
