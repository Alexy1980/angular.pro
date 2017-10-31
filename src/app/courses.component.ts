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
            <h2 [textContent]="title"></h2>
            <table>
              <tr>
                <td [attr.colspan]="colSpan"></td>
              </tr>
            </table>
            <br>
            <button class="btn btn-primary" [class.active]="isActive" (click)="onSave($event)">Save</button><br>
            <p><button [style.backgroundColor]="isActive ? 'blue' : 'white'" >Кнопка</button></p>
            <!--при нажатии на enter в консоли появится введенное значение, которое будет проверено на email-->
            <!--<input #email (keyup.enter)="onKeyUp(email.value)" />-->
            <input [value]="email" (keyup.enter)="onKey()" />
            <!--двунаправленная связь с первым input-ом-->
            <input [(ngModel)]="email" (keyup.enter)="onKey()" />
            <br>
            <!--<img [src]="imageUrl" />-->
            <p>{{ text | summary:160 }}</p>
  `
})

export class CoursesComponent {
  email = 'vasya@mail.ru';
  title = 'Список продуктов';
  isActive = false;
  text = 'Разнообразный и богатый опыт начало повседневной работы по формированию позиции в значительной степени обуславливает создание дальнейших направлений развития. Задача организации, в особенности же постоянное информационно-пропагандистское обеспечение нашей деятельности требуют от нас анализа существенных финансовых и административных условий. Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации форм развития. Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание существенных финансовых и административных условий.';
  // геттер
  /*getTitle() {
    return this.title;
  }*/
  colSpan = 2;
  courses;
  // imageUrl = "http://lorempixel.com/400/200";
  // CoursesService необходимо зарегистрировать в app.module
  constructor(service: CoursesService) {
    // такой подход лучше при unit тестировании
    this.courses = service.getCourses();
  }

  onSave($event) {
    // чтобы событие отрабатывало только на кнопке
    $event.stopPropagation();
    console.log($event);
  }

  onKey() {
    console.log(this.email);
  }

  /*onKeyUp(email) {
     console.log(email);
  }*/
}
