import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminServiceService } from './admin-service.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAuthService } from './user-auth.service';
import { UserDetailsService } from './user-details.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AdminServiceService,
    UserDetailsService,
    UserAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
