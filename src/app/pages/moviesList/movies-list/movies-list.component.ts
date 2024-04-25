import { Component, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import { ListComponent } from "../../../components/list/list.component";
import { MoviesService } from '../../../services/movies.service';
import { CommonModule } from '@angular/common';
import { DurationConverterPipe } from "../../../shared/pipes/duration-converter.pipe";
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
    selector: 'movies-list',
    standalone: true,
    templateUrl: './movies-list.component.html',
    styleUrl: './movies-list.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ListComponent, CommonModule, DurationConverterPipe,FormsModule]
})
export class MoviesListComponent{
 constructor(private service:MoviesService, private cd:ChangeDetectorRef){}

 movies:any;
 title:string;
 releaseYear:number;
 subscription:Subscription;
 filteredMovies:any


 ngOnInit(){
  this.subscription=this.service.getMoviesList().subscribe((data)=>{
    this.movies=data;
    this.cd.markForCheck();
  })
 }

 filter(e:Event){
  this.filteredMovies=this.movies.filter((movie:any)=>{
    if(movie.title && this.title.trim()){
      return movie.title.toLowerCase().includes(this.title.toLowerCase())
    }
  });
 }

 ngOnDestroy(){
  this.subscription.unsubscribe();
 }
}
