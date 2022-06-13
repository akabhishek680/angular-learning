import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoftColorDirective } from './soft-color.directive';

@NgModule({
  declarations: [
    SoftColorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SoftColorDirective
  ]
})
export class CustomDirectiveModule { }
