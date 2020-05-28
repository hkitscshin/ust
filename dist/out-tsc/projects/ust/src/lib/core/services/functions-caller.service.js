import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let FunctionsCaller = class FunctionsCaller {
    constructor(aff) {
        this.aff = aff;
    }
    sendMail(request) {
        return this.aff.httpsCallable('sendMail')(request);
    }
};
FunctionsCaller = __decorate([
    Injectable({
        providedIn: 'root'
    })
], FunctionsCaller);
export { FunctionsCaller };
//# sourceMappingURL=functions-caller.service.js.map