import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  private hostName:string=window.location.href;

  getMoviesList(){    
    return this.http.get(`${this.hostName}movies`);
  }

}
