import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { DnlFirestoreQuery } from '@dminine/ng-lib';
let UserQuery = class UserQuery extends DnlFirestoreQuery {
    constructor(store) {
        super(store);
        this.store = store;
    }
};
UserQuery = __decorate([
    Injectable({ providedIn: 'root' })
], UserQuery);
export { UserQuery };
//# sourceMappingURL=user.query.js.map