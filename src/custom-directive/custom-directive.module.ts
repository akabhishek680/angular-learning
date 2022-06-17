import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DivChangeDirectiveDirective } from './div-change-directive.directive';



@NgModule({
  declarations: [
    DivChangeDirectiveDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DivChangeDirectiveDirective
  ]
})
export class CustomDirectiveModule { }
