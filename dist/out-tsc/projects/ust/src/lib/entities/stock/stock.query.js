import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { DnlFirestoreQuery } from '@dminine/ng-lib';
let StockQuery = class StockQuery extends DnlFirestoreQuery {
    constructor(store) {
        super(store);
        this.store = store;
    }
};
StockQuery = __decorate([
    Injectable({ providedIn: 'root' })
], StockQuery);
export { StockQuery };
//# sourceMappingURL=stock.query.js.map