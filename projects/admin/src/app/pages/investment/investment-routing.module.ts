import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinancePageComponent } from './components/finance-page/finance-page.component';
import { InvestmentPageComponent } from './components/investment-page/investment-page.component';


const routes: Routes = [
  {
    path: '',
    component: InvestmentPageComponent,
    children: [
      { path: 'finance', component: FinancePageComponent },
      { path: '', redirectTo: 'finance', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestmentRoutingModule { }
