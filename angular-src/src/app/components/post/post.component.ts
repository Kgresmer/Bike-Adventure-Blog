import {Component, Input} from '@angular/core';
import {Post} from '../feed/feed.component';
import {OnInit} from '@angular/core';


@Component({
  selector: 'app-post',
  template: `
    <div style="border: 1px black solid;">
      <h4>{{selectedPost.title}} - {{selectedPost.date}}</h4>
    </div>
    <div style="text-align:center; display: inline-block; width: 70%" class="blog-post" *ngIf="selectedPost">
      <div style="border: 1px black solid;">
        <h1>{{selectedPost.title}} - {{selectedPost.date}}</h1>
        <img src={{selectedPost.photo[0]}} />
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

  ngOnInit(): void {
    if (this.selectedPost.timeBikedToday) {
      let hours = Math.floor(this.selectedPost.timeBikedToday / 60);
      let minutes = this.selectedPost.timeBikedToday % 60;
      this.timeBiked = hours + ' hours ' + minutes + ' minutes'
    }
  }
}
