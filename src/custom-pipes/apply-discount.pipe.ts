import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'applyDiscount'
})
export class ApplyDiscountPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    let discountAmt = args[0];
    console.log('value: ', value);
    console.log('discountAmt: ', discountAmt);
    return value - (value*discountAmt/100);
  }

}
