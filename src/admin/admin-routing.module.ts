import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from 'src/components/page-not-found/page-not-found.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

const routes: Routes = [
  {
    path: 'admin',
    children: [
      {
        path: 'admin-login',
        component: AdminLoginComponent,
        pathMatch: 'full'
      },
      {
        path: 'add-admin',
        component: AddAdminComponent,
        pathMatch: 'full'
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
