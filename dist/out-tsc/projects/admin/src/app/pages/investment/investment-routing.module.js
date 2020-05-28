import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FinancePageComponent } from './components/finance-page/finance-page.component';
import { InvestmentPageComponent } from './components/investment-page/investment-page.component';
const routes = [
    {
        path: '',
        component: InvestmentPageComponent,
        children: [
            { path: 'finance', component: FinancePageComponent },
            { path: '', redirectTo: 'finance', pathMatch: 'full' }
        ]
    }
];
let InvestmentRoutingModule = class InvestmentRoutingModule {
};
InvestmentRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], InvestmentRoutingModule);
export { InvestmentRoutingModule };
//# sourceMappingURL=investment-routing.module.js.map