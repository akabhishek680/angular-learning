import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDivChangeDirective]'
})
export class DivChangeDirectiveDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click') click() {
    this.el.nativeElement.style.color = 'white';
    this.el.nativeElement.style.background = 'black';
  }

  @HostListener('mouseover') mouseover() {
    this.el.nativeElement.style.color = 'red';
    this.el.nativeElement.style.background = 'yellow';
  }

  @HostListener('mouseout') mouseout() {
    this.el.nativeElement.style.color = 'black';
    this.el.nativeElement.style.background = 'pink';
  }
}
