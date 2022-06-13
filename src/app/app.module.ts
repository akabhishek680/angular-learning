import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomPipesModule } from 'src/custom-pipes/custom-pipes.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomPipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
