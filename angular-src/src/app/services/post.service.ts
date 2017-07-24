import {Injectable} from "@angular/core";
import {Http} from "@angular/http";


@Injectable()
export class PostService {

  constructor(private http: Http) {

  }

  addPost(post) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('post/add', post, {headers: headers})
      .map(res => res.json());
  }

  editPost(post) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('post/edit', post, {headers: headers})
      .map(res => res.json());
  }

  deletePost(postId) {
    const body = {
      postId: postId
    };
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('post/delete', body, {headers: headers})
      .map(res => res.json());
  }

  getAllPosts() {
    return this.http.get('post/all')
      .map(res => res.json());
  }

  getPostByDate(date) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('date', date);
    return this.http.get('post/all', {
      search: params
    })
    .map(res => res.json());
  }

}
