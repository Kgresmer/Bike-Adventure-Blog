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
  public uploader: FileUploader = new FileUploader({url: 'posts/upload'});

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
    this.currentPost.timeBikedToday = 0;
    this.currentPost.milesSinceLastPost = 0;
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

  deletePost(postToDelete) {
    const dataToAddToTripTotals: TotalsAddition = {
      milesSinceLastPost: -Math.abs(postToDelete.milesSinceLastPost),
      timeBikedToday: -Math.abs(postToDelete.timeBikedToday)
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
    if (postToDelete.photos && postToDelete.photos.length > 0) {
      for (let i = 0; i < postToDelete.photos.length; i++) {
        this.deletePhoto(postToDelete.photos[i]);
      }
    }
    this.postService.deletePost(postToDelete._id).subscribe(response => {
      if (response.success) {
        this.flashMessagesService.show(response.msg, {
          cssClass: 'alert-success',
          timeout: 5000
        });
        this.postAction = '';
      } else {
        this.flashMessagesService.show(response.msg, {
          cssClass: 'alert-danger',
          timeout: 5000
        });
      }
    });
  }

  updateEditPostData() {
    this.currentPost = new Post();
    this.currentPost.timeBikedToday = this.postToEdit.timeBikedToday || 0;
    this.currentPost.milesSinceLastPost = this.postToEdit.milesSinceLastPost || 0;
    this.currentPost.photos = this.postToEdit.photos;
    this.currentPost.author = this.postToEdit.author;
    this.currentPost.body = this.postToEdit.body;
    this.currentPost._id = this.postToEdit._id;
    this.currentPost.recap = this.postToEdit.recap;
    this.currentPost.tags = this.postToEdit.tags;
    this.currentPost.title = this.postToEdit.title;
    this.currentPost.temperature = this.postToEdit.temperature || 0;
    this.currentPost.weatherCondition = this.postToEdit.weatherCondition;
    this.currentPost.date = this.postToEdit.date.split('T')[0];
    this.currentPost.weatherCondition = this.currentPost.weatherCondition[0];
  }

  updatePostForm() {
    this.currentPost = new Post();
  }

  onSubmitPost() {
      if (!this.validateInputs()) return;

      if (this.uploader.queue.length > 0) {
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
        if (this.currentPost) {
          this.currentPost.photos.splice(this.currentPost.photos.indexOf(photo), 1);
        }
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
        this.uploader.clearQueue();
        this.flashMessagesService.show(data.msg, {
          cssClass: 'alert-success',
          timeout: 5000
        });
        this.updatePostForm();
        this.postAction = '';
        this.postToEdit = null;
      } else {
        this.flashMessagesService.show(data.msg, {
          cssClass: 'alert-danger',
          timeout: 5000
        });
      }
    });
  }

  private sendUpdateTotalsRequest() {
    let dataToAddToTripTotals: TotalsAddition = {
      milesSinceLastPost: this.currentPost.milesSinceLastPost,
      timeBikedToday: this.currentPost.timeBikedToday
    };
    if (this.postAction === 'edit') {
      if (this.postToEdit.milesSinceLastPost === this.currentPost.milesSinceLastPost &&
        this.postToEdit.timeBikedToday === this.currentPost.timeBikedToday) {
        return;
      } else if (this.postToEdit.milesSinceLastPost !== this.currentPost.milesSinceLastPost ||
        this.postToEdit.timeBikedToday !== this.currentPost.timeBikedToday) {
        dataToAddToTripTotals.timeBikedToday = this.currentPost.timeBikedToday - this.postToEdit.timeBikedToday;
        dataToAddToTripTotals.milesSinceLastPost = this.currentPost.milesSinceLastPost - this.postToEdit.milesSinceLastPost;
      }
    }
    if (typeof this.currentPost.milesSinceLastPost === 'number' &&
      typeof this.currentPost.timeBikedToday === 'number') {
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
