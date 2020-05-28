import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FinanceCategory } from '../../../../../../../ust/src/lib/entities/finance/types';
let FinancePageComponent = class FinancePageComponent {
    constructor() {
        this.categories = Object.keys(FinanceCategory).map(key => FinanceCategory[key]);
    }
    ngOnInit() {
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