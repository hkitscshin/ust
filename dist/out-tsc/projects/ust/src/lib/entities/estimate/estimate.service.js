import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { DnlFirestoreService } from '@dminine/ng-lib';
let EstimateService = class EstimateService extends DnlFirestoreService {
    constructor(estimateStore, estimateQuery, afs) {
        super(estimateStore, estimateQuery, afs, 'estimates');
        this.estimateStore = estimateStore;
        this.estimateQuery = estimateQuery;
        this.afs = afs;
    }
};
EstimateService = __decorate([
    Injectable({ providedIn: 'root' })
], EstimateService);
export { EstimateService };
//# sourceMappingURL=estimate.service.js.map