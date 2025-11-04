import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../../services/movie-service';
import { Movie } from '../../../interfaces/movie.interface';
@Component({
  selector: 'app-table-movies',
  imports: [],
  templateUrl: './tableMovies.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableMovies { 
  private router = inject(Router);
  private movieService = inject(MovieService);
  movies: Movie[] = [];

  constructor(){
    this.getMovies();
  }
  
  AgregarPelicula() {
    this.router.navigate(['/add-Movie']);
  }
  
  getMovies(){
    this.movieService.getMovies().subscribe(
      {
        next: (data: any) => {
          console.log(data);
          this.movies = data;
        },
        error: (e)=> console.error(e)
      }
  )
  }
}
