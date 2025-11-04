import { Routes } from '@angular/router';
import { TableMovies } from './page/tableMovies/tableMovies';
import { Movies } from './page/movies/movies';
import { TableUsers } from './page/tableUsers/tableUsers';
export const routes: Routes = [
    { path: 'table-movies', component: TableMovies },
    { path: 'form-movies', component: Movies },
    { path: 'movies', component: Movies },
    { path: 'table-usuarios', component: TableUsers },
    { path: '**', redirectTo: 'table-movies', pathMatch: 'full' }

];
