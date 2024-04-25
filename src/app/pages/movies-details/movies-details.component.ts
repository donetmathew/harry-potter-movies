import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Subscription } from 'rxjs';
import { MovieDetails } from '../../model/movies.model';
import { RouterModule } from '@angular/router';
import { DurationConverterPipe } from "../../shared/pipes/duration-converter.pipe";
import { CommonModule } from '@angular/common';
import { CurrencyPrefixPipe } from '../../shared/pipes/currency-prefix.pipe';

@Component({
    selector: 'app-movies-details',
    standalone: true,
    templateUrl: './movies-details.component.html',
    styleUrl: './movies-details.component.css',
    imports: [RouterModule, DurationConverterPipe, CommonModule,CurrencyPrefixPipe]
})
export class MoviesDetailsComponent {
  constructor(private service: MoviesService){}
  subscription:Subscription;
  movieDetails:MovieDetails

  ngOnInit(){
    this.subscription=this.service.getMovieDetails().subscribe((data)=>{
      console.log(data);
      this.movieDetails=data;
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
