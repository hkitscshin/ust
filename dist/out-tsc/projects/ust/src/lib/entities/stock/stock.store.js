import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { StoreConfig } from '@datorama/akita';
import { DnlFirestoreStore } from '@dminine/ng-lib';
let StockStore = class StockStore extends DnlFirestoreStore {
    constructor() {
        super();
    }
};
StockStore = __decorate([
    Injectable({ providedIn: 'root' }),
    StoreConfig({ name: 'stock' })
], StockStore);
export { StockStore };
//# sourceMappingURL=stock.store.js.map