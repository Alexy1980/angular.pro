import { Component } from '@angular/core';
import {CoursesService} from './courses.service';

@Component({
  selector: 'courses',
  template: `
    <h2>{{ "Title: " + title }}</h2>
            <ul>
              <li *ngFor="let course of courses">
                {{ course }}
              </li>
            </ul>
  `
})

export class CoursesComponent {
  title = 'Список продуктов';
  // геттер
  /*getTitle() {
    return this.title;
  }*/
  courses;
  // CoursesService необходимо зарегистрировать в app.module
  constructor(service: CoursesService) {
    // такой подход лучше при unit тестировании
    this.courses = service.getCourses();
  }
}
