import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin.component";
import {FinanceRequestOverviewComponent} from "./finance-request-overview/finance-request-overview.component";
import {FinanceSettingsComponent} from "./finance-settings/finance-settings.component";
const routes: Routes = [{
  path: '',
  component: AdminComponent,
  children: [
    {
      path: '',
      component: FinanceRequestOverviewComponent
    },
    {
      path: 'settings',
      component: FinanceSettingsComponent
    },


  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
