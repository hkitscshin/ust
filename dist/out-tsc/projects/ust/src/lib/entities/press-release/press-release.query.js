import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { DnlFirestoreQuery } from '@dminine/ng-lib';
let PressReleaseQuery = class PressReleaseQuery extends DnlFirestoreQuery {
    constructor(store) {
        super(store);
        this.store = store;
    }
};
PressReleaseQuery = __decorate([
    Injectable({ providedIn: 'root' })
], PressReleaseQuery);
export { PressReleaseQuery };
//# sourceMappingURL=press-release.query.js.map