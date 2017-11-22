import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: any[];

  constructor(http: Http) {
    // используем CRUD сервис
    http.get('https://jsonplaceholder.typicode.com/posts').subscribe(response => {
      this.posts = response.json();
    });
  }
}
