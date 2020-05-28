import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor(authService) {
        this.authService = authService;
        this.authService.init();
    }
};
AppComponent = __decorate([
    Component({
        selector: 'ust-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map