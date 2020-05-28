import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { DnlFirestoreService } from '@dminine/ng-lib';
let FinanceService = class FinanceService extends DnlFirestoreService {
    constructor(financeStore, financeQuery, afs) {
        super(financeStore, financeQuery, afs, 'finances');
        this.financeStore = financeStore;
        this.financeQuery = financeQuery;
        this.afs = afs;
    }
};
FinanceService = __decorate([
    Injectable({ providedIn: 'root' })
], FinanceService);
export { FinanceService };
//# sourceMappingURL=finance.service.js.map