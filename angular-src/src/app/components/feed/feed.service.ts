import { Injectable } from '@angular/core';
import {Post} from './feed.component';
import {POSTS} from './mock-feed';

@Injectable()
export class PostService {
  getAllPosts():  Promise<Post[]> {
    return Promise.resolve(POSTS);
  }
}

