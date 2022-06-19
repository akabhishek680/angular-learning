import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstUserComponent } from './first-user/first-user.component';
import { SecondUserComponent } from './second-user/second-user.component';



@NgModule({
  declarations: [
    FirstUserComponent,
    SecondUserComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    FirstUserComponent, 
    SecondUserComponent
  ]
})
export class UsersModule { }
