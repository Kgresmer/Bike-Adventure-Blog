import {Component, Input} from '@angular/core';
import {Post} from '../feed/feed.component';
import {OnInit} from '@angular/core';


@Component({
  selector: 'app-post',
  template: `    
    <div style="display: inline-block; width: 85%" class="blog-post" *ngIf="selectedPost">
      <div style="border: 1px black solid;">
        <h3>{{selectedPost.title}} - {{formattedDate}}</h3>
        <img style="height: 100px; width: 100px;" src="../uploads/{{selectedPost.photos[0]}}" />
        <p>Miles Since last Post: {{selectedPost.milesSinceLastPost}}</p>
        <p>Time spent biking: {{timeBiked}}</p>
        <p>Body: {{selectedPost.body}}</p>
        <p>Tags: {{selectedPost.tags}}</p>
        <p>Temp: {{selectedPost.temperature}}</p>
        <p>Weather Condition: {{selectedPost.weatherCondition}} (I was thinking we could have an image to go with each choice)</p>
        <small>{{selectedPost.author}}</small>
      </div>
    </div>
  `
})

export class PostComponent implements OnInit {
  @Input() selectedPost: Post;
  timeBiked: string;
  formattedDate: string;

  ngOnInit(): void {
    if (this.selectedPost.date) {
      this.formattedDate = new Date(this.selectedPost.date).toLocaleString().substr(0, 10);
    }
    if (this.selectedPost.timeBikedToday) {
      let hours = Math.floor(this.selectedPost.timeBikedToday / 60);
      let minutes = this.selectedPost.timeBikedToday % 60;
      this.timeBiked = hours + ' hours ' + minutes + ' minutes'
    }
  }
}
