import { Component, OnInit } from '@angular/core';
import { SubscriptionBaseComponent } from '@dminine/ng-lib';
import { Subscription } from 'rxjs';
import { FinanceService } from '../../../../../../../ust/src/lib/entities/finance/finance.service';
import { FinanceCategory, Finance } from '../../../../../../../ust/src/lib/entities/finance/types';


@Component({
  selector: 'ust-finance-page',
  templateUrl: './finance-page.component.html',
  styleUrls: ['./finance-page.component.scss']
})
export class FinancePageComponent extends SubscriptionBaseComponent implements OnInit {
  incomeStatement: Finance;
  financialStatement: Finance;

  salesChartData: any[];
  netProfitChartData: any[];
  operatingProfitChartData: any[];

  constructor(
    private financeService: FinanceService
  ) {
    super();
  }

  ngOnInit(): void {
    this.addSubscription(this.initFinance());
  }

  private initFinance(): Subscription {
    return this.financeService.list().subscribe(finance => {
      this.incomeStatement = finance.filter(element => element.category === FinanceCategory.손익계산서)[0];
      this.financialStatement = finance.filter(element => element.category === FinanceCategory.재무상태표)[0];

      if (this.incomeStatement) {
        this.setChartData();
      }
    });
  }

  private setChartData(): void {
    const incomeStatementData = this.incomeStatement.incomeStatementData;

    this.salesChartData = incomeStatementData.map(data => [data.year.toString(), data.sales]);
    this.netProfitChartData = incomeStatementData.map(data => [data.year.toString(), data.netProfit]);
    this.operatingProfitChartData = incomeStatementData.map(data => [data.year.toString(), data.operatingProfit]);
  }
}
