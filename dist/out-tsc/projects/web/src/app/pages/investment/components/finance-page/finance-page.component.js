import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { SubscriptionBaseComponent } from '@dminine/ng-lib';
import { FinanceCategory } from '../../../../../../../ust/src/lib/entities/finance/types';
let FinancePageComponent = class FinancePageComponent extends SubscriptionBaseComponent {
    constructor(financeService) {
        super();
        this.financeService = financeService;
    }
    ngOnInit() {
        this.addSubscription(this.initFinance());
    }
    initFinance() {
        return this.financeService.list().subscribe(finance => {
            this.incomeStatement = finance.filter(element => element.category === FinanceCategory.손익계산서)[0];
            this.financialStatement = finance.filter(element => element.category === FinanceCategory.재무상태표)[0];
            if (this.incomeStatement) {
                this.setChartData();
            }
        });
    }
    setChartData() {
        const incomeStatementData = this.incomeStatement.incomeStatementData;
        this.salesChartData = incomeStatementData.map(data => [data.year.toString(), data.sales]);
        this.netProfitChartData = incomeStatementData.map(data => [data.year.toString(), data.netProfit]);
        this.operatingProfitChartData = incomeStatementData.map(data => [data.year.toString(), data.operatingProfit]);
    }
};
FinancePageComponent = __decorate([
    Component({
        selector: 'ust-finance-page',
        templateUrl: './finance-page.component.html',
        styleUrls: ['./finance-page.component.scss']
    })
], FinancePageComponent);
export { FinancePageComponent };
//# sourceMappingURL=finance-page.component.js.map