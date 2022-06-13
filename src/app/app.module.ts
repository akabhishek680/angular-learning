import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomDirectiveModule } from 'src/custom-directive/custom-directive.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomDirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
