import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let FinanceChartNetProfitComponent = class FinanceChartNetProfitComponent {
    constructor() {
        this.type = 'ColumnChart';
        this.columnNames = ['월', '당기순이익'];
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
], FinanceChartNetProfitComponent.prototype, "data", void 0);
FinanceChartNetProfitComponent = __decorate([
    Component({
        selector: 'ust-finance-chart-net-profit',
        templateUrl: './finance-chart-net-profit.component.html',
        styleUrls: ['./finance-chart-net-profit.component.scss']
    })
], FinanceChartNetProfitComponent);
export { FinanceChartNetProfitComponent };
//# sourceMappingURL=finance-chart-net-profit.component.js.map