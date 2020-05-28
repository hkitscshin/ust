import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { DnlFirestoreQuery } from '@dminine/ng-lib';
let NoticeQuery = class NoticeQuery extends DnlFirestoreQuery {
    constructor(store) {
        super(store);
        this.store = store;
    }
};
NoticeQuery = __decorate([
    Injectable({ providedIn: 'root' })
], NoticeQuery);
export { NoticeQuery };
//# sourceMappingURL=notice.query.js.map