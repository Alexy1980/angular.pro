import { Component } from '@angular/core';
// import { FavoriteChangedEventArgs} from "./favorite/favorite.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  viewMode = 'somethingElse';
  post = {
    title: 'Angular app',
    isFavorite: true
  };

  courses;

  canSave = true;

  onAdd() {
    this.courses.push({id: 5, name: 'Course 5'});
  }

  loadCourses() {
    this.courses = [
      {id: 1, name: 'course 1'},
      {id: 2, name: 'course 2'},
      {id: 3, name: 'course 3'},
      {id: 4, name: 'course 4'}
    ];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }

  onChange(course) {
    course.name = 'UPDATED';
    /*let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);*/
  }

  /*onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("Favorite changed!!!", eventArgs);
  }*/
}
