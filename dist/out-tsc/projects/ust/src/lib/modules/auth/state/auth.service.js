import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { partition } from 'rxjs';
import { tap, switchMap, filter, take } from 'rxjs/operators';
let AuthService = class AuthService {
    constructor(authStore, authQuery, afAuth, userService) {
        this.authStore = authStore;
        this.authQuery = authQuery;
        this.afAuth = afAuth;
        this.userService = userService;
    }
    init() {
        const [loggedIn$, notLoggedIn$] = this.partCheckedHavingFirebaseUser(this.afAuth.authState);
        loggedIn$.pipe(tap(() => this.updateLoggedInStateInAkita()), switchMap(firebaseUser => this.userService.get(firebaseUser.uid)), filter(user => Boolean(user))).subscribe(user => {
            this.updateJoinedStateInAkita(user);
        });
        notLoggedIn$.subscribe(() => this.updateNotLoggedInStateInAkita());
    }
    loginWithEmail(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.afAuth.auth.currentUser) {
                yield this.afAuth.auth.signOut();
            }
            return this.afAuth.auth.signInWithEmailAndPassword(email, password);
        });
    }
    logout() {
        return this.afAuth.auth.signOut().then(() => this.updateNotLoggedInStateInAkita()).then();
    }
    partCheckedHavingFirebaseUser(state) {
        return partition(state, firebaseUser => Boolean(firebaseUser));
    }
    updateLoggedInStateInAkita() {
        this.authStore.update({
            isAuthLoaded: true,
            isLoggedIn: true
        });
    }
    updateNotLoggedInStateInAkita() {
        this.authStore.update({
            isAuthLoaded: true,
            isLoggedIn: false,
            isDbLoaded: true,
            user: null
        });
    }
    updateJoinedStateInAkita(user) {
        this.authStore.update({
            isLoggedIn: true,
            isDbLoaded: true,
            user
        });
    }
    putUserToDb(id, userInfo) {
        const user = {
            isAdmin: true
        };
        return this.userService.upsert(id, user).pipe(take(1));
    }
};
AuthService = __decorate([
    Injectable({ providedIn: 'root' })
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map