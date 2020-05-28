import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { DnlFirestoreQuery } from '@dminine/ng-lib';
let NewsQuery = class NewsQuery extends DnlFirestoreQuery {
    constructor(store) {
        super(store);
        this.store = store;
    }
};
NewsQuery = __decorate([
    Injectable({ providedIn: 'root' })
], NewsQuery);
export { NewsQuery };
//# sourceMappingURL=news.query.js.map