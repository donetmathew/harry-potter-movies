import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie, MovieDetails } from '../model/movies.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMoviesList(): Observable<Movie[]> {
    return this.http.get<Movie[]>(window.location.href);
  }

  getMovieDetails():Observable<MovieDetails>{
    return this.http.get<MovieDetails>(window.location.href)
  }
}
