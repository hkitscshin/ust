import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { DnlFirestoreService } from '@dminine/ng-lib';
let StockService = class StockService extends DnlFirestoreService {
    constructor(stockStore, stockQuery, afs) {
        super(stockStore, stockQuery, afs, 'stocks');
        this.stockStore = stockStore;
        this.stockQuery = stockQuery;
        this.afs = afs;
    }
};
StockService = __decorate([
    Injectable({ providedIn: 'root' })
], StockService);
export { StockService };
//# sourceMappingURL=stock.service.js.map