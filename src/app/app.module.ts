import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstModuleModule } from './first-module/first-module.module';
import { SecondModuleModule } from './second-module/second-module.module';

const route: Route[] = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'first-module',
    loadChildren: () => import('./first-module/first-module.module').then(mod => mod.FirstModuleModule)
  },
  {
    path: 'second-module',
    loadChildren: () => import('./second-module/second-module.module').then(mod => mod.SecondModuleModule)
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
