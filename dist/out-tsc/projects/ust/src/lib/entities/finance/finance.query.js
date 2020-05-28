import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { DnlFirestoreQuery } from '@dminine/ng-lib';
let FinanceQuery = class FinanceQuery extends DnlFirestoreQuery {
    constructor(store) {
        super(store);
        this.store = store;
    }
};
FinanceQuery = __decorate([
    Injectable({ providedIn: 'root' })
], FinanceQuery);
export { FinanceQuery };
//# sourceMappingURL=finance.query.js.map