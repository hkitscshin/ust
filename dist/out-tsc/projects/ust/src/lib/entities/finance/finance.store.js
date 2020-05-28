import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { StoreConfig } from '@datorama/akita';
import { DnlFirestoreStore } from '@dminine/ng-lib';
let FinanceStore = class FinanceStore extends DnlFirestoreStore {
    constructor() {
        super();
    }
};
FinanceStore = __decorate([
    Injectable({ providedIn: 'root' }),
    StoreConfig({ name: 'finance' })
], FinanceStore);
export { FinanceStore };
//# sourceMappingURL=finance.store.js.map