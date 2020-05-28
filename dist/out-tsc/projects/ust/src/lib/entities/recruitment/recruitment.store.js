import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { StoreConfig } from '@datorama/akita';
import { DnlFirestoreStore } from '@dminine/ng-lib';
let RecruitmentStore = class RecruitmentStore extends DnlFirestoreStore {
    constructor() {
        super();
    }
};
RecruitmentStore = __decorate([
    Injectable({ providedIn: 'root' }),
    StoreConfig({ name: 'recruitment' })
], RecruitmentStore);
export { RecruitmentStore };
//# sourceMappingURL=recruitment.store.js.map