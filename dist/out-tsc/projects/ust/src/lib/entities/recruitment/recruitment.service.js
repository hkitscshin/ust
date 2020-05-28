import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { DnlFirestoreService } from '@dminine/ng-lib';
let RecruitmentService = class RecruitmentService extends DnlFirestoreService {
    constructor(recruitmentStore, recruitmentQuery, afs) {
        super(recruitmentStore, recruitmentQuery, afs, 'recruitment');
        this.recruitmentStore = recruitmentStore;
        this.recruitmentQuery = recruitmentQuery;
        this.afs = afs;
    }
};
RecruitmentService = __decorate([
    Injectable({ providedIn: 'root' })
], RecruitmentService);
export { RecruitmentService };
//# sourceMappingURL=recruitment.service.js.map