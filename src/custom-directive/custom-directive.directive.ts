import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor() { }

  @HostBinding('class.red-text') redText: any;
  @HostListener('click') changeTextColor = () => {
    this.redText = !this.redText;
  }

  @HostBinding('style.cursor') mouse = 'pointer';
  @HostBinding('style.backgroundColor') bgColor = 'pink';
  @HostListener('mouseover') mouseover = () => {
    this.mouse = 'cursor';
    this.bgColor = 'skyblue';
  }

  @HostListener('mouseout') mouesout = () => {
    this.mouse = 'pointer';
    this.bgColor = 'pink';
  }
}
