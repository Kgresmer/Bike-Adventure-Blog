import { Injectable } from '@angular/core';
import {Post} from './post.component';
import {POSTS} from './mock-posts';

@Injectable()
export class PostService {
  getAllPosts():  Promise<Post[]> {
    return Promise.resolve(POSTS);
  }
}

