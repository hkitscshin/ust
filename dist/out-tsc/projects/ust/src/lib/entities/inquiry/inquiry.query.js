import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { DnlFirestoreQuery } from '@dminine/ng-lib';
let InquiryQuery = class InquiryQuery extends DnlFirestoreQuery {
    constructor(store) {
        super(store);
        this.store = store;
    }
};
InquiryQuery = __decorate([
    Injectable({ providedIn: 'root' })
], InquiryQuery);
export { InquiryQuery };
//# sourceMappingURL=inquiry.query.js.map