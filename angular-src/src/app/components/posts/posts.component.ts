<<<<<<< HEAD:angular-src/src/app/components/post/post.component.ts
import { Component, Input } from '@angular/core';
import {Post} from '../feed/feed.component';
=======
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { PostService } from './posts.service';
>>>>>>> 807002605594a68535177d2c714a1e134b5e02e3:angular-src/src/app/components/posts/posts.component.ts


@Component({
<<<<<<< HEAD:angular-src/src/app/components/post/post.component.ts
  selector: 'app-post-detail',
  template: `
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
=======
  selector: 'app-post-root',
  templateUrl: 'posts.component.html',
  styleUrls: ['posts.component.css']
>>>>>>> 807002605594a68535177d2c714a1e134b5e02e3:angular-src/src/app/components/posts/posts.component.ts
})

export class PostDetailComponent {
  @Input() selectedPost: Post;
}
