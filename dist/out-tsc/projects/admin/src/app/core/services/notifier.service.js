import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let Notifier = class Notifier {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    info(message, duration = 2000) {
        this.snackBar.open(message, '', { duration, panelClass: 'info' });
    }
    success(message, duration = 2000) {
        this.snackBar.open(message, '', { duration, panelClass: 'success' });
    }
    warning(message, duration = 2000) {
        this.snackBar.open(message, '', { duration, panelClass: 'warning' });
    }
    error(message, err, duration = 5000) {
        this.snackBar.open(message, '', { duration, panelClass: 'error' });
        if (err) {
            console.error(err);
        }
    }
};
Notifier = __decorate([
    Injectable({
        providedIn: 'root'
    })
], Notifier);
export { Notifier };
//# sourceMappingURL=notifier.service.js.map