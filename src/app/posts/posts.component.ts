import { Component, OnInit } from '@angular/core';
import {PostService} from "../services/post.service";
import {AppError} from "../common/validators/app-error";
import {NotFoundError} from "../common/validators/not-found-error";
import {BadInput} from "../common/validators/bad-input";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  // post определена в post.service

  constructor(private service: PostService) {

  }
  ngOnInit() {
    this.service.getPosts()
    .subscribe(response => {
      this.posts = response.json();
    }, error => {
      alert('Неизвестная ошибка.');
      console.log(error);
    });
  }
  // создание новой записи
  createPost(input: HTMLInputElement) {
    let post = {title: input.value};
    input.value = '';

    this.service.createPost(post)
    .subscribe(response => {
      post['id'] = response.json().id;
      this.posts.splice(0, 0, post);
    },
      (error: AppError) => {
        if (error instanceof BadInput) {
          // this.form.setErrors(error.originalError);
        }
        else {
          alert('Неизхвестная ошибка создания!');
          console.log(error);
        }
      });
  }
  // обновление записи
  updatePost(post) {
    this.service.updatePost(post)
    .subscribe(response => {
      console.log(response.json());
    });
  }
  // удаление записи
  deletePost(post) {
    this.service.deletePost(post.id)
    .subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    },
        (error: AppError) => {
        if (error instanceof NotFoundError)
          alert('Статья уже удалена!');
        else {
          alert('Неизхвестная ошибка удаления!');
          console.log(error);
        }
      });
  }
}
