import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { StoreConfig } from '@datorama/akita';
import { DnlFirestoreStore } from '@dminine/ng-lib';
const initialState = {
    ui: { filter: '' }
};
let UserStore = class UserStore extends DnlFirestoreStore {
    constructor() {
        super(initialState);
    }
};
UserStore = __decorate([
    Injectable({ providedIn: 'root' }),
    StoreConfig({ name: 'user' })
], UserStore);
export { UserStore };
//# sourceMappingURL=user.store.js.map