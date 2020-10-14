import { AppService } from './app-service';
import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
export interface User {
  id: number;
}

export interface Post {
  id: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data: { users: User[]; posts: Post[] };
  constructor(private appService: AppService) {}

  ngOnInit() {
    const users = this.appService.getUsers();
    const posts = this.appService.getPosts();

    forkJoin({
      users,
      posts,
    }).subscribe((res) => {
      this.data = res;
    });
  }
}
