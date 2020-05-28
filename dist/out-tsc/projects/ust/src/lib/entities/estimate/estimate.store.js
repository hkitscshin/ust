import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { StoreConfig } from '@datorama/akita';
import { DnlFirestoreStore } from '@dminine/ng-lib';
let EstimateStore = class EstimateStore extends DnlFirestoreStore {
    constructor() {
        super();
    }
};
EstimateStore = __decorate([
    Injectable({ providedIn: 'root' }),
    StoreConfig({ name: 'estimate' })
], EstimateStore);
export { EstimateStore };
//# sourceMappingURL=estimate.store.js.map