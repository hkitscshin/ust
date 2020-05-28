import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
let AppQuery = class AppQuery extends Query {
    constructor(store) {
        super(store);
        this.store = store;
        this.language$ = this.select(store => store.language);
    }
};
AppQuery = __decorate([
    Injectable({ providedIn: 'root' })
], AppQuery);
export { AppQuery };
//# sourceMappingURL=app.query.js.map