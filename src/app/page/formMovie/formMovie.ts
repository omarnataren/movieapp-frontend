import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Movie } from '../../../interfaces/movie.interface';
import { inject } from '@angular/core';
import { MovieService } from '../../services/movie-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form-movie',
  imports: [FormsModule],
  templateUrl: './formMovie.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormMovie { 
  private movieService = inject(MovieService);
  private router = inject(Router);
  newMovie: Movie = {
    title: '',
    sinopsis: '',
    genre: '',
    releaseDate: '',
    poster_url: '',
    rating: 0,

  }
  saveMovie() {
    console.log('Saving movie:', this.newMovie);
    this.movieService.postMovie(this.newMovie).subscribe({
      next: (movie) => {
        console.log('Movie saved successfully:', movie);
        this.router.navigate(['/table-movies']);
      },
      error: (e) => console.error('Error saving movie:', e)
    });
  }
}
