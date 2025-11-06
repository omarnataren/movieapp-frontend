import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../../interfaces/movie.interface';
@Injectable({
  providedIn: 'root'
})

export class MovieService {
  private url = environment.apiURL; 
  private http = inject(HttpClient);
  getMovies() {
    return this.http.get<Movie[]>(`${this.url}movie`);
  }
  postMovie(movie: Movie) {
    return this.http.post<Movie>(`${this.url}movie`, movie);
  }
}
