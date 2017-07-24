import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {PostService} from "../../services/post.service";

export class Post {
  id: number;
  date: string;
  title: string;
  description: string;
  photo: string;
  milesSinceLastPost: number;
  comment: string;
}

@Component({
  selector: 'app-feed-root',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})

export class FeedComponent implements OnInit {
  constructor(private postService: PostService) {}

  selectedPost: Post;
  posts: Post[];

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts(): void {
    this.postService.getAllPosts().then(posts => this.posts = posts);
  }

  onSelect(post: Post): void {
    this.selectedPost = post;
  }
}
