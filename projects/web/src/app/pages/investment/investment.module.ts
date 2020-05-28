import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';
import { DnlSharedModule } from '@dminine/ng-lib';
import { TranslateModule } from '@ngx-translate/core';
import { GoogleChartsModule } from 'angular-google-charts';
import { MaterialModule } from '../../../../../ust/src/lib/modules/material/material.module';
import { UstSharedModule } from '../../../../../ust/src/lib/shared/ust-shared.module';

import { InvestmentRoutingModule } from './investment-routing.module';
import { InvestmentPageComponent } from './components/investment-page/investment-page.component';
import { FinancePageComponent } from './components/finance-page/finance-page.component';
import { StockPageComponent } from './components/stock-page/stock-page.component';
import { FinanceChartSalesComponent } from './components/finance-chart-sales/finance-chart-sales.component';
import { FinanceChartNetProfitComponent } from './components/finance-chart-net-profit/finance-chart-net-profit.component';
import { FinanceChartOperatingProfitComponent } from './components/finance-chart-operating-profit/finance-chart-operating-profit.component';
import { StockChartComponent } from './components/stock-chart/stock-chart.component';


@NgModule({
  declarations: [
    InvestmentPageComponent,
    FinancePageComponent,
    StockPageComponent,
    FinanceChartSalesComponent,
    FinanceChartNetProfitComponent,
    FinanceChartOperatingProfitComponent,
    StockChartComponent
  ],
  imports: [
    CommonModule,
    InvestmentRoutingModule,
    FlexModule,
    TranslateModule,
    DnlSharedModule,
    GoogleChartsModule,
    MaterialModule,
    UstSharedModule
  ]
})
export class InvestmentPageModule { }
