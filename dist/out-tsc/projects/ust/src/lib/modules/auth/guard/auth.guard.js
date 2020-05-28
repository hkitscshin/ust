import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map, tap, first } from 'rxjs/operators';
let AuthGuard = class AuthGuard {
    constructor(authQuery, router) {
        this.authQuery = authQuery;
        this.router = router;
    }
    canLoad(route) {
        return this.checkLoggedIn();
    }
    canActivateChild(route) {
        return this.canActivate(route);
    }
    canActivate(route) {
        return this.checkLoggedIn();
    }
    checkLoggedIn() {
        return this.authQuery.select(state => state).pipe(first(state => state.isAuthLoaded), map(state => state.isLoggedIn), tap(isLoggedIn => {
            if (!isLoggedIn) {
                this.router.navigateByUrl('/login');
                throw new Error('access denied!');
            }
        }));
    }
};
AuthGuard = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map