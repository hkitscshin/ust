import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { StoreConfig } from '@datorama/akita';
import { DnlFirestoreStore } from '@dminine/ng-lib';
let NoticeStore = class NoticeStore extends DnlFirestoreStore {
    constructor() {
        super();
    }
};
NoticeStore = __decorate([
    Injectable({ providedIn: 'root' }),
    StoreConfig({ name: 'notice' })
], NoticeStore);
export { NoticeStore };
//# sourceMappingURL=notice.store.js.map