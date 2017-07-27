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
  public uploader: FileUploader = new FileUploader({url: 'http://localhost:3000/posts/upload'});

  constructor(private postService: PostService,
              private flashMessagesService: FlashMessagesService,
              private router: Router) {
  }

  ngOnInit() {
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

      if (this.newPost.photos) {
        this.newPost.photos = this.newPost.photos.map(photo => {
          return photo.replace(/ /g, '-');
        });
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
  }

  changeWeatherCondition(condition: string) {
    if (condition !== null || condition !== undefined) {
      this.newPost.weatherCondition = condition;
    }
  }

  onSubmitNewPost() {
    for (let item of this.uploader.queue) {
      item.upload();
    }
  }

}
