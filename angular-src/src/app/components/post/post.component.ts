import {Component, Input} from '@angular/core';
import {Post} from '../feed/feed.component';
import {OnInit} from '@angular/core';
import { Http, Headers} from '@angular/http';
import {Observable} from "rxjs/Observable";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
  @Input() selectedPost: Post;
  formattedWeatherPhotoName: string;
  s3url: string;
  timeBiked: string;
  formattedDate: string;

  ngOnInit(): void {
    this.s3url = 'https://blog-post-photos.s3.amazonaws.com/';
    if (this.selectedPost.weatherCondition) {
      this.setWeatherPhoto();
    }
    if (this.selectedPost.date) {
      this.formattedDate = new Date(this.selectedPost.date).toLocaleString().split(',')[0];
    }
    if (this.selectedPost.timeBikedToday) {
      let hours = Math.floor(this.selectedPost.timeBikedToday / 60);
      let minutes = this.selectedPost.timeBikedToday % 60;
      this.timeBiked = hours + ' hours ' + minutes + ' minutes';
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


}
