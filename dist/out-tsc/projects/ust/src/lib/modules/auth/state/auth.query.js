import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
let AuthQuery = class AuthQuery extends Query {
    constructor(store) {
        super(store);
        this.store = store;
        this.user$ = this.select(state => state.user);
        this.isLoggedIn$ = this.select(state => state.isLoggedIn);
    }
    get user() {
        return this.getValue().user;
    }
    get isLoggedIn() {
        return this.getValue().isLoggedIn;
    }
};
AuthQuery = __decorate([
    Injectable({ providedIn: 'root' })
], AuthQuery);
export { AuthQuery };
//# sourceMappingURL=auth.query.js.map