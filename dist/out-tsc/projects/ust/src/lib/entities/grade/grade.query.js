import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { DnlFirestoreQuery } from '@dminine/ng-lib';
let GradeQuery = class GradeQuery extends DnlFirestoreQuery {
    constructor(store) {
        super(store);
        this.store = store;
    }
};
GradeQuery = __decorate([
    Injectable({ providedIn: 'root' })
], GradeQuery);
export { GradeQuery };
//# sourceMappingURL=grade.query.js.map