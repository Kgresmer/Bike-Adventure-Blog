import {Component, Input} from '@angular/core';
import {Post} from '../feed/feed.component';
import {OnInit} from '@angular/core';
import {PostService} from "../../services/post.service";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
  @Input() selectedPost: Post;
  formattedWeatherPhotoName: string;
  newComment: string;
  newCommentAuthor: string;
  s3url: string;
  timeBiked: string;
  formattedDate: string;

  constructor(private postService: PostService,
              private flashMessagesService: FlashMessagesService) {
  }

  ngOnInit(): void {
    this.newComment = null;
    this.newCommentAuthor = null;
    this.s3url = 'https://blog-post-photos.s3.amazonaws.com/';
    if (this.selectedPost.weatherCondition) {
      this.setWeatherPhoto();
    }
    if (this.selectedPost.date) {
      this.formattedDate = this.selectedPost.date.split('T')[0];
    }
    if (this.selectedPost.timeBikedToday) {
      let hours = Math.floor(this.selectedPost.timeBikedToday / 60);
      let minutes = this.selectedPost.timeBikedToday % 60;
      this.timeBiked = hours + ' hours ' + minutes + ' minutes';
    } else {
      this.timeBiked = '0 hours 0 minutes';
    }
  }

  setWeatherPhoto() {
    switch (this.selectedPost.weatherCondition[0]) {
      case 'Cloudy': {
        this.formattedWeatherPhotoName = '../../../assets/cloudy.png';
        return;
      }
      case 'Partly Cloudy': {
        this.formattedWeatherPhotoName = '../../../assets/partlycloudy.png';
        return;
      }
      case 'Sunny': {
        this.formattedWeatherPhotoName = '../../../assets/sunny.png';
        return;
      }
      case 'Rainy': {
        this.formattedWeatherPhotoName = '../../../assets/rain.png';
        return;
      }
      case 'Raining Cats and Dogs': {
        this.formattedWeatherPhotoName = '../../../assets/rainycats.png';
        return;
      }
    }
  }

  submitComment() {
    if (!this.newComment || !this.newCommentAuthor) {
      this.flashMessagesService.show('Please add a name to be displayed and a comment', {
        cssClass: 'alert-success',
        timeout: 4000
      });
      return;
    }
    let comment = {
      text: this.newComment,
      author: this.newCommentAuthor
    };
    this.selectedPost.comments.push(comment);

    this.postService.editPost(this.selectedPost).subscribe(data => {
      if (data.success) {
        this.flashMessagesService.show('Comment was Added.', {
          cssClass: 'alert-success',
          timeout: 5000
        });
        this.newComment = null;
        this.newCommentAuthor = null;
      } else {
        this.flashMessagesService.show('I messed something up. Refresh the page and try again?', {
          cssClass: 'alert-danger',
          timeout: 5000
        });
      }
    });
  }


}
