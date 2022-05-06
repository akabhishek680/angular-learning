import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/components/about/about.component';
import { ContactComponent } from 'src/components/contact/contact.component';
import { HomeComponent } from 'src/components/home/home.component';
import { PageNotFoundComponent } from 'src/components/page-not-found/page-not-found.component';
import { ProfileComponent } from 'src/components/profile/profile.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'profile/:name',
    component: ProfileComponent
  },
  {
    path: 'profile/:name/:location',
    component: ProfileComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  //wildcard routing
  {
    path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProfileComponent,
    ContactComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
