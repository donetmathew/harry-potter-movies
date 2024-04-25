import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyPrefix',
  standalone: true
})
export class CurrencyPrefixPipe implements PipeTransform {

  transform(value: string, currency:string): string {
    if(value && currency){
      return `${currency} ${value}`
    }
    return value;
  }

}
