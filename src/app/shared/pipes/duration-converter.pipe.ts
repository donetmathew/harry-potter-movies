import { Pipe, PipeTransform } from '@angular/core';
import { min } from 'rxjs';

@Pipe({
  name: 'durationConverter',
  standalone: true
})
export class DurationConverterPipe implements PipeTransform {


  transform(value: string): string {
    const minuteValue:number=60;
    if(+value < minuteValue){
      return `${value} min`;
    }
    else{
      const min= +value % minuteValue;
      const hours= +value/minuteValue;
      return `${hours.toFixed(0)}h ${min}min`;
    }
  }

}
