import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { DnlFirestoreService } from '@dminine/ng-lib';
let PressReleaseService = class PressReleaseService extends DnlFirestoreService {
    constructor(pressReleaseStore, pressReleaseQuery, afs) {
        super(pressReleaseStore, pressReleaseQuery, afs, 'pressReleases');
        this.pressReleaseStore = pressReleaseStore;
        this.pressReleaseQuery = pressReleaseQuery;
        this.afs = afs;
    }
};
PressReleaseService = __decorate([
    Injectable({ providedIn: 'root' })
], PressReleaseService);
export { PressReleaseService };
//# sourceMappingURL=press-release.service.js.map