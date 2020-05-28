import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let FinanceChartOperatingProfitComponent = class FinanceChartOperatingProfitComponent {
    constructor() {
        this.type = 'ColumnChart';
        this.columnNames = ['월', '영업이익'];
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
                0: { color: '#ea4d07' }
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
], FinanceChartOperatingProfitComponent.prototype, "data", void 0);
FinanceChartOperatingProfitComponent = __decorate([
    Component({
        selector: 'ust-finance-chart-operating-profit',
        templateUrl: './finance-chart-operating-profit.component.html',
        styleUrls: ['./finance-chart-operating-profit.component.scss']
    })
], FinanceChartOperatingProfitComponent);
export { FinanceChartOperatingProfitComponent };
//# sourceMappingURL=finance-chart-operating-profit.component.js.map