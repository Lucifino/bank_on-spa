import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin.component";
import {FinanceRequestOverviewComponent} from "./finance-request-overview/finance-request-overview.component";
import {FinanceSettingsComponent} from "./finance-settings/finance-settings.component";
import {FinanceRequestViewerComponent} from "./finance-request-viewer/finance-request-viewer.component";
import {FinanceRequestCalculatorComponent} from "./finance-request-calculator/finance-request-calculator.component";
import {FinanceRequestQuotationComponent} from "./finance-request-quotation/finance-request-quotation.component";
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
    {
      path: 'viewer/:id',
      component: FinanceRequestViewerComponent
    },
    {
      path: 'calculate/:id',
      component: FinanceRequestCalculatorComponent
    },
    {
      path: 'quotation/:id',
      component: FinanceRequestQuotationComponent
    },


  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
