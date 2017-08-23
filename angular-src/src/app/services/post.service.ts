import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions, URLSearchParams} from '@angular/http';


@Injectable()
export class PostService {

  constructor(private http: Http) {

  }

  addToTotals(dataToAdd) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('posts/addToTotals', dataToAdd)
      .map(res => res.json());
  }

  addPost(post) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('posts/add', post)
      .map(res => res.json());
  }

  editPost(post) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('posts/edit', post, {headers: headers})
      .map(res => res.json());
  }

  deletePhoto(photo) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('photo/delete', {photo: photo}, {headers: headers})
      .map(res => res.json());
  }

  deletePost(postId) {
    const body = {
      postId: postId
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('posts/delete', body, {headers: headers})
      .map(res => res.json());
  }

  getAllPosts() {
    return this.http.get('posts/all')
      .map(res => res.json());
  }

  getPostsByTag(tag) {
    const params: URLSearchParams = new URLSearchParams();
    params.set('tag', tag);
    const requestOptions = new RequestOptions();
    requestOptions.params = params;
    return this.http.get('posts/filterByTag', requestOptions)
    .map(res => res.json());
  }

  getPostsByDate(date) {
    const params: URLSearchParams = new URLSearchParams();
    params.set('date', date);
    const requestOptions = new RequestOptions();
    requestOptions.params = params;
    return this.http.get('posts/filterByDate', requestOptions)
      .map(res => res.json());
  }

  getTotals() {
    return this.http.get('posts/totals')
      .map(res => res.json());
  }

  getPictures() {
    return this.http.get('posts/uploads/all')
      .map(res => res.json());
  }

}
