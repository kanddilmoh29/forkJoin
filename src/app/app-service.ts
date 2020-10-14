import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User {
  id: number;
}

export interface Post {
  id: number;
}
@Injectable({
  providedIn: 'root',
})
export class AppService {
  usersUrl = 'https://jsonplaceholder.typicode.com/users/';
  postsUrl = 'https://jsonplaceholder.typicode.com/posts/';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>(this.usersUrl);
  }

  getPosts() {
    return this.http.get<Post[]>(this.postsUrl);
  }
}
