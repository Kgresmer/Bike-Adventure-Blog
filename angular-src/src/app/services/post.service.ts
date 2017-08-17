import {Injectable} from "@angular/core";
import { Http, Headers} from '@angular/http';


@Injectable()
export class PostService {

  constructor(private http: Http) {

  }

  addToTotals(dataToAdd) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/posts/addToTotals', dataToAdd)
      .map(res => res.json());
  }

  addPost(post) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/posts/add', post)
      .map(res => res.json());
  }

  editPost(post) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/posts/edit', post, {headers: headers})
      .map(res => res.json());
  }

  deletePhoto(photo) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/posts/photo/delete', {photo: photo}, {headers: headers})
      .map(res => res.json());
  }

  deletePost(postId) {
    const body = {
      postId: postId
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/posts/delete', body, {headers: headers})
      .map(res => res.json());
  }

  getAllPosts() {
    return this.http.get('http://localhost:3000/posts/all')
      .map(res => res.json());
  }

  getPostByDate(date) {
    const params: URLSearchParams = new URLSearchParams();
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

  getPictures() {
    return this.http.get('http://localhost:3000/posts/uploads/all')
      .map(res => res.json());
  }

}
