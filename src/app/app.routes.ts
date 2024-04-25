import { Routes } from '@angular/router';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';

export const routes: Routes = [
    { path: '', redirectTo:"movies",pathMatch: 'full' }, // Home route
    {
      path:'movies', component: MoviesListComponent
    },
    {
        path: 'movies/:id',
        loadComponent: () =>
          import('./pages/movies-details/movies-details.component').then((x) => x.MoviesDetailsComponent),
    },

];
