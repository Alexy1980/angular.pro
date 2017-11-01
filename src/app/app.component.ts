import { Component } from '@angular/core';
// import { FavoriteChangedEventArgs} from "./favorite/favorite.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  viewMode = 'somethingElse';
  /*post = {
    title: 'Angular app',
    isFavorite: true
  };

  courses = [1, 2, 3, 4];*/

  /*onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("Favorite changed!!!", eventArgs);
  }*/
}
