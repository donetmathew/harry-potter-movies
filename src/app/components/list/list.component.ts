import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ui-movie-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() releaseDate:string;
  @Input() duration:string;
  @Input() budget:string;
  @Input() title:string;
  @Input() id:string;
  
  
}
