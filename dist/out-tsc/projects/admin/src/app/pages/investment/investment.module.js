import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../../ust/src/lib/modules/material/material.module';
import { InvestmentRoutingModule } from './investment-routing.module';
import { InvestmentPageComponent } from './components/investment-page/investment-page.component';
import { FinancePageComponent } from './components/finance-page/finance-page.component';
import { IncomeStatementComponent } from './components/income-statement/income-statement.component';
import { FinancialStatementComponent } from './components/financial-statement/financial-statement.component';
import { IncomeStatementFormComponent } from './components/income-statement-form/income-statement-form.component';
import { FinancialStatementFormComponent } from './components/financial-statement-form/financial-statement-form.component';
let InvestmentPageModule = class InvestmentPageModule {
};
InvestmentPageModule = __decorate([
    NgModule({
        declarations: [
            InvestmentPageComponent,
            FinancePageComponent,
            IncomeStatementComponent,
            FinancialStatementComponent,
            IncomeStatementFormComponent,
            FinancialStatementFormComponent
        ],
        imports: [
            CommonModule,
            MaterialModule,
            FlexModule,
            ReactiveFormsModule,
            InvestmentRoutingModule
        ]
    })
], InvestmentPageModule);
export { InvestmentPageModule };
//# sourceMappingURL=investment.module.js.map