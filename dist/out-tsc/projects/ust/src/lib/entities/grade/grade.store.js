import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { StoreConfig } from '@datorama/akita';
import { DnlFirestoreStore } from '@dminine/ng-lib';
let GradeStore = class GradeStore extends DnlFirestoreStore {
    constructor() {
        super();
    }
};
GradeStore = __decorate([
    Injectable({ providedIn: 'root' }),
    StoreConfig({ name: 'grade' })
], GradeStore);
export { GradeStore };
//# sourceMappingURL=grade.store.js.map