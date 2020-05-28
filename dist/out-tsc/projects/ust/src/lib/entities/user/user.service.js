import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { DnlFirestoreService } from '@dminine/ng-lib';
let UserService = class UserService extends DnlFirestoreService {
    constructor(userStore, userQuery, afs) {
        super(userStore, userQuery, afs, 'users');
        this.userStore = userStore;
        this.userQuery = userQuery;
        this.afs = afs;
    }
};
UserService = __decorate([
    Injectable({ providedIn: 'root' })
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map