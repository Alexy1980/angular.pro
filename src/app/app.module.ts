import { CoursesComponent } from "./courses.component";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import {CoursesService} from "./courses.service";

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    // регистрируем сервис
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
