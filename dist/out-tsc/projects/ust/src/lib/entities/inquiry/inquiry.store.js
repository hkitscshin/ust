import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { StoreConfig } from '@datorama/akita';
import { DnlFirestoreStore } from '@dminine/ng-lib';
let InquiryStore = class InquiryStore extends DnlFirestoreStore {
    constructor() {
        super();
    }
};
InquiryStore = __decorate([
    Injectable({ providedIn: 'root' }),
    StoreConfig({ name: 'inquiry' })
], InquiryStore);
export { InquiryStore };
//# sourceMappingURL=inquiry.store.js.map