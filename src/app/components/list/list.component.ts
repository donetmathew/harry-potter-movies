import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CurrencyPrefixPipe } from "../../shared/pipes/currency-prefix.pipe";

@Component({
    selector: 'ui-movie-list',
    standalone: true,
    templateUrl: './list.component.html',
    styleUrl: './list.component.css',
    imports: [CommonModule, RouterModule, CurrencyPrefixPipe]
})
export class ListComponent {
  @Input() releaseDate:string;
  @Input() duration:string;
  @Input() budget:string;
  @Input() title:string;
  @Input() id:string;
  
  
}
