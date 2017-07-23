import {Component, Input} from '@angular/core';
import {Post} from '../posts/posts.component';


@Component({
  selector: 'app-post-detail',
  template: `
    <div style="border: 1px black solid;">
      <h4>{{selectedPost.title}} - {{selectedPost.date}}</h4>
    </div>
    <div style="text-align:center; display: inline-block; width: 70%" class="blog-post" *ngIf="selectedPost">
      <div style="border: 1px black solid;">
        <h1>{{selectedPost.title}} - {{selectedPost.date}}</h1>
        <img src={{selectedPost.photo}} />
        <p>Miles Since last Post: {{selectedPost.milesSinceLastPost}}</p>
        <p>{{selectedPost.description}}</p>
      </div>
      <label>Comment: </label>
      <input [(ngModel)]="selectedPost.comment" placeholder="Well thats neat"/>
    </div>
  `
})

export class PostDetailComponent {
  @Input() selectedPost: Post;
}
