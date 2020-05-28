import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { StoreConfig } from '@datorama/akita';
import { DnlFirestoreStore } from '@dminine/ng-lib';
let PressReleaseStore = class PressReleaseStore extends DnlFirestoreStore {
    constructor() {
        super();
    }
};
PressReleaseStore = __decorate([
    Injectable({ providedIn: 'root' }),
    StoreConfig({ name: 'pressRelease' })
], PressReleaseStore);
export { PressReleaseStore };
//# sourceMappingURL=press-release.store.js.map