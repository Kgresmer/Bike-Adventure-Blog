import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from "angular2-jwt";

@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: Http) { }

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/register', user, {headers: headers})
      .map(res => res.json());
  }

  editUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('users/update', user, {headers: headers})
      .map(res => res.json());
  }

  deleteUser(userId) {
    const body = {
      userId: userId
    };
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('users/delete', body, {headers: headers})
      .map(res => res.json());
  }

  authenticateUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/authenticate', user, {headers: headers})
      .map(res => res.json());
  }

  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('users/profile', {headers: headers})
      .map(res => res.json());
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('name', user.name);
    this.authToken = token;
    this.user = user;
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
