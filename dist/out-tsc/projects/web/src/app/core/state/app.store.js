import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { StoreConfig, Store } from '@datorama/akita';
export function createInitialState() {
    return {
        language: 'ko-KR'
    };
}
let AppStore = class AppStore extends Store {
    constructor() {
        super(createInitialState());
    }
};
AppStore = __decorate([
    Injectable({ providedIn: 'root' }),
    StoreConfig({ name: 'app' })
], AppStore);
export { AppStore };
//# sourceMappingURL=app.store.js.map