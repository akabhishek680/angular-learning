import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyDiscountPipe } from './apply-discount.pipe';

@NgModule({
  declarations: [
    ApplyDiscountPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ApplyDiscountPipe
  ]
})
export class CustomPipesModule { }
