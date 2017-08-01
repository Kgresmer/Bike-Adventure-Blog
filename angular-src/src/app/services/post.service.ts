import {Injectable} from "@angular/core";
import { Http, Headers} from '@angular/http';


@Injectable()
export class PostService {

  constructor(private http: Http) {

  }

  addToTotals(dataToAdd) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/posts/addToTotals', dataToAdd)
      .map(res => res.json());
  }

  addPost(post) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/posts/add', post)
      .map(res => res.json());
  }

  editPost(post) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/posts/edit', post, {headers: headers})
      .map(res => res.json());
  }

  deletePost(postId) {
    const body = {
      postId: postId
    };
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/posts/delete', body, {headers: headers})
      .map(res => res.json());
  }

  getAllPosts() {
    return this.http.get('http://localhost:3000/posts/all')
      .map(res => res.json());
  }

  getPostByDate(date) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('date', date);
    return this.http.get('http://localhost:3000/posts/all', {
      search: params
    })
    .map(res => res.json());
  }

  getTotals() {
    return this.http.get('http://localhost:3000/posts/totals')
      .map(res => res.json());
  }

}
