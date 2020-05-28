import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { StoreConfig, Store } from '@datorama/akita';
export function createInitialState() {
    return {
        isAuthLoaded: false,
        isDbLoaded: false,
        isLoggedIn: false,
        user: null,
        redirectUrl: '/'
    };
}
let AuthStore = class AuthStore extends Store {
    constructor() {
        super(createInitialState());
    }
};
AuthStore = __decorate([
    Injectable({ providedIn: 'root' }),
    StoreConfig({ name: 'auth' })
], AuthStore);
export { AuthStore };
//# sourceMappingURL=auth.store.js.map