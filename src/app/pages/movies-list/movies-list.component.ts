import { Component, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import { ListComponent } from "../../components/list/list.component";
import { MoviesService } from '../../services/movies.service';
import { CommonModule } from '@angular/common';
import { DurationConverterPipe } from "../../shared/pipes/duration-converter.pipe";
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Movie } from '../../model/movies.model';
import { CurrencyPrefixPipe } from "../../shared/pipes/currency-prefix.pipe";

@Component({
    selector: 'movies-list',
    standalone: true,
    templateUrl: './movies-list.component.html',
    styleUrl: './movies-list.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ListComponent, CommonModule, DurationConverterPipe, FormsModule, CurrencyPrefixPipe]
})
export class MoviesListComponent{
 constructor(private service:MoviesService, private cd:ChangeDetectorRef){}

 movies:Array<Movie>;
 title:string;
 releaseYear:number;
 subscription:Subscription;
 filteredMovies:Array<Movie>;


 ngOnInit(){
  this.subscription=this.service.getMoviesList().subscribe((data)=>{
    this.movies=data;
    this.cd.markForCheck();
  })
 }

 filter(e:Event){
  this.filteredMovies=this.movies.filter((movie:Movie)=>{
    let movieReleaseDate= new Date(movie.release_date).getFullYear();
    if(movie.title && this.title && this.title.trim() && movie.release_date && this.releaseYear){
      return ( movie.title.toLowerCase().includes(this.title.toLowerCase()) &&
      movieReleaseDate.toString().includes(this.releaseYear.toString()) )
    }
    else if(movie.title && this.title && this.title.trim()){
      return movie.title.toLowerCase().includes(this.title.toLowerCase())
    }
    else if(movie.release_date && this.releaseYear){
      return movieReleaseDate.toString().includes(this.releaseYear.toString())
    }else{
      return;
    }
  });
 }

 ngOnDestroy(){
  this.subscription.unsubscribe();
 }
}
