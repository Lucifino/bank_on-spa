import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NgxPermissionsGuard} from "ngx-permissions";

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // providers: [AppAuthGuard]

})
export class AppRoutingModule { }
