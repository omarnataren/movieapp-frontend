import { Routes } from '@angular/router';
import { TableMovies } from './page/tableMovies/tableMovies';
import { Movies } from './page/movies/movies';
import { TableUsers } from './page/tableUsers/tableUsers';
import { FormMovie } from './page/formMovie/formMovie';
export const routes: Routes = [
    { path: 'table-movies', component: TableMovies },
    { path: 'form-movies', component: FormMovie },
    { path: 'movies', component: Movies },
    { path: 'table-usuarios', component: TableUsers },
    { path: '**', redirectTo: 'table-movies', pathMatch: 'full' }

];
