import { Component } from '@angular/core';
import { MovieListComponent } from './movie-list/movie-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MovieListComponent],
  template: `<app-movie-list></app-movie-list>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-list';
}