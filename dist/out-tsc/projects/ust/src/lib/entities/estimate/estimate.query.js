import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { DnlFirestoreQuery } from '@dminine/ng-lib';
let EstimateQuery = class EstimateQuery extends DnlFirestoreQuery {
    constructor(store) {
        super(store);
        this.store = store;
    }
};
EstimateQuery = __decorate([
    Injectable({ providedIn: 'root' })
], EstimateQuery);
export { EstimateQuery };
//# sourceMappingURL=estimate.query.js.map