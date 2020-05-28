import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { DnlFirestoreService } from '@dminine/ng-lib';
let GradeService = class GradeService extends DnlFirestoreService {
    constructor(gradeStore, gradeQuery, afs) {
        super(gradeStore, gradeQuery, afs, 'grades');
        this.gradeStore = gradeStore;
        this.gradeQuery = gradeQuery;
        this.afs = afs;
    }
};
GradeService = __decorate([
    Injectable({ providedIn: 'root' })
], GradeService);
export { GradeService };
//# sourceMappingURL=grade.service.js.map