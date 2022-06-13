import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSoftColor]'
})
export class SoftColorDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.color = 'grey';
  }

}
