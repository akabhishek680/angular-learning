import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemAdminRoutingModule } from './system-admin-routing.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from 'src/components/page-not-found/page-not-found.component';

const route: Routes = [
  {
    path: 'system-admin',
    children: [
      {
        path: 'add-admin',
        component: AddAdminComponent
      },
      {
        path: 'admin-login',
        component: AdminLoginComponent
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AdminLoginComponent,
    AddAdminComponent
  ],
  imports: [
    CommonModule,
    SystemAdminRoutingModule,
    RouterModule.forChild(route)
  ]
})
export class SystemAdminModule { }
