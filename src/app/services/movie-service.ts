import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private url = environment.apiURL; 
  private http = inject(HttpClient);
  getMovies() {
    return this.http.get(`${this.url}movie`);
  }
}
