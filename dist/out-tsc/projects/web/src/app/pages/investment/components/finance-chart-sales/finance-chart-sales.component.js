import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let FinanceChartSalesComponent = class FinanceChartSalesComponent {
    constructor() {
        this.type = 'ColumnChart';
        this.columnNames = ['월', '매출액'];
        this.options = {
            legend: {
                position: 'none'
            },
            chartArea: {
                left: 70,
                top: 20,
                width: '70%',
                height: '80%',
            },
            vAxis: {
                minValue: 0
            },
            series: {
                0: { color: '#ea4d07' },
            }
        };
        this.width = 294;
        this.height = 307;
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], FinanceChartSalesComponent.prototype, "data", void 0);
FinanceChartSalesComponent = __decorate([
    Component({
        selector: 'ust-finance-chart-sales',
        templateUrl: './finance-chart-sales.component.html',
        styleUrls: ['./finance-chart-sales.component.scss']
    })
], FinanceChartSalesComponent);
export { FinanceChartSalesComponent };
//# sourceMappingURL=finance-chart-sales.component.js.map