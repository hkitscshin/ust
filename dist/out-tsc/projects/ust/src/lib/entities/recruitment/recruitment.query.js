import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { DnlFirestoreQuery } from '@dminine/ng-lib';
let RecruitmentQuery = class RecruitmentQuery extends DnlFirestoreQuery {
    constructor(store) {
        super(store);
        this.store = store;
    }
};
RecruitmentQuery = __decorate([
    Injectable({ providedIn: 'root' })
], RecruitmentQuery);
export { RecruitmentQuery };
//# sourceMappingURL=recruitment.query.js.map