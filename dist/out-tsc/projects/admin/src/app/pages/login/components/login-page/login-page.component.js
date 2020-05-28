import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let LoginPageComponent = class LoginPageComponent {
    constructor(fb, router, authService, notifier) {
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.notifier = notifier;
        this.loginForm = this.createForm();
        this.isLoading = false;
    }
    ngOnInit() {
    }
    login() {
        return __awaiter(this, void 0, void 0, function* () {
            const formValue = this.loginForm.value;
            this.isLoading = true;
            try {
                yield this.authService.loginWithEmail(formValue.email, formValue.password);
                yield this.router.navigate(['/dashboard']);
            }
            catch (err) {
                this.notifier.error(err.message);
            }
            this.isLoading = false;
        });
    }
    createForm() {
        return this.fb.group({
            email: [null, Validators.required],
            password: [null, Validators.required]
        });
    }
};
LoginPageComponent = __decorate([
    Component({
        selector: 'ust-login-page',
        templateUrl: './login-page.component.html',
        styleUrls: ['./login-page.component.scss']
    })
], LoginPageComponent);
export { LoginPageComponent };
//# sourceMappingURL=login-page.component.js.map