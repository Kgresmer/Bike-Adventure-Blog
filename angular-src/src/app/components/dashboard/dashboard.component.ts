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
  newPost: Post;
  weatherConditions: [string];
  errorMessages: string[];
  public uploader: FileUploader = new FileUploader({url: 'http://localhost:3000/posts/upload'});

  constructor(private postService: PostService,
              private flashMessagesService: FlashMessagesService,
              private router: Router) {
  }

  ngOnInit() {
    this.errorMessages = [];
    this.newPost = new Post();
    this.newPost.author = localStorage.getItem('name');
    this.weatherConditions = ['Cloudy', 'Partly Cloudy', 'Overcast', 'Sunny', 'Rainy'];
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      let responsePath = JSON.parse(response);
      if (responsePath.fileName && responsePath.fileName !== 'hasnt been set yet') {
        if (this.newPost.photos) {
          this.newPost.photos.push(responsePath.fileName);
        } else {
          this.newPost.photos = [responsePath.fileName];
        }
      }
    };
    this.uploader.onCompleteAll = () => {
      this.sendUpdateTotalsRequest();
      this.sendPostRequests();
    }
  }

  onSubmitNewPost() {
    //TODO implement validation
    this.validateInputs();

    // TODO update if based on what empty queue looks like
    if (this.uploader.queue) {
      for (let item of this.uploader.queue) {
        item.upload();
      }
    } else {
      this.sendUpdateTotalsRequest();
      this.sendPostRequests();
    }
  }

  private validateInputs() {
    // date: string;
    if (typeof this.newPost.date === 'undefined' || this.newPost.date.length < 4) {
      this.errorMessages.push('Enter in a date! ');
    }
    // title: string;
    if (typeof this.newPost.title === 'undefined' || this.newPost.title.length < 2) {
      this.errorMessages.push('What you dont want a title?!');
    }
    // body: string;
    if (typeof this.newPost.body === 'undefined' || this.newPost.body.length < 5) {
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
    if (typeof this.newPost.author === 'undefined' || this.newPost.author.length < 2) {
      this.errorMessages.push('If you wrote it own it. Enter an author');
    }

    setTimeout(() => {
      this.errorMessages = [];
    }, 9000);
  }

  private sendPostRequests() {
    if (this.newPost.photos) {
      this.newPost.photos = this.newPost.photos.map(photo => {
        return photo.replace(/ /g, '-');
      });
    }
    if (this.newPost.date) {

    }

    this.postService.addPost(this.newPost).subscribe(data => {
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

  private sendUpdateTotalsRequest() {
    let dataToAddToTripTotals: TotalsAddition = {
      milesSinceLastPost: this.newPost.milesSinceLastPost,
      timeBikedToday: this.newPost.timeBikedToday
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
