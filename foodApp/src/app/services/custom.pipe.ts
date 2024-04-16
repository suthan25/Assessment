import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {
  private readonly currencyRate:any={
    USD:83.5,
    INR:1,
    CAN:77,
    EUR:89
  }
  transform(value: number, currency: string): number {
    return Math.round(value/this.currencyRate[currency])
  }
}
