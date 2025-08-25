import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

interface Movie {
  title: string;
  posterUrl: string;
  genre: string;
  rating: number;
  description: string;
}

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule
  ],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [
    { title: 'Tholi Prema', posterUrl: 'https://i.ytimg.com/vi/FGVmFG6M3SQ/maxresdefault.jpg', genre: 'Romance', rating: 5, description: 'An engineering student falls in love with a girl he meets on a bus.' },
    { title: 'Khushi', posterUrl: 'https://tse2.mm.bing.net/th/id/OIP.qY9yH_cLy0ukhzdHQrUnvgHaEK?pid=Api&h=220&P=0', genre: 'Romance', rating: 4, description: 'A student couple falls in love, but their egos and minor misunderstandings create a rift between them.' },
    { title: 'Thammudu', posterUrl: 'https://wallpapercave.com/wp/wp11513156.jpg', genre: 'Action', rating: 5, description: 'A young man struggles to get his degree while trying to woo a girl, but circumstances lead him to become a boxer.' },
    { title: 'Panjaa', posterUrl: 'https://tse1.mm.bing.net/th/id/OIP.XNMTgswzOlxJywwOg-fofwHaE7?pid=Api&h=220&P=0', genre: 'Action', rating: 4, description: 'A mafia member turns against his boss and goes into hiding, but the boss\'s son hunts him down.' },
    { title: 'Gabbar Singh', posterUrl: 'https://tse1.mm.bing.net/th/id/OIP.x-SRNIQ_BmIltLbdUll8HQHaDt?pid=Api&h=220&P=0', genre: 'Action', rating: 5, description: 'An eccentric police officer is transferred to a village ruled by a notorious goon.' },
  ];
  filteredMovies: Movie[] = [];
  genres: string[] = [];
  selectedGenre = 'All';

  constructor() { }

  ngOnInit(): void {
    this.filteredMovies = this.movies;
    this.genres = ['All', ...new Set(this.movies.map(movie => movie.genre))];
  }

  get averageRating(): number {
    if (this.filteredMovies.length === 0) {
      return 0;
    }
    const totalRating = this.filteredMovies.reduce((sum, movie) => sum + movie.rating, 0);
    return totalRating / this.filteredMovies.length;
  }

  filterByGenre(): void {
    if (this.selectedGenre === 'All') {
      this.filteredMovies = this.movies;
    } else {
      this.filteredMovies = this.movies.filter(movie => movie.genre === this.selectedGenre);
    }
  }

  isTopRated(rating: number): boolean {
    return rating >= 5;
  }
}