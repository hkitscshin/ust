import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { ActivationEnd } from '@angular/router';
import { SubscriptionBaseComponent } from '@dminine/ng-lib';
let ToolbarComponent = class ToolbarComponent extends SubscriptionBaseComponent {
    constructor(router, authService) {
        super();
        this.router = router;
        this.authService = authService;
        this.addSubscription(this.initRouterEvents());
    }
    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
    initRouterEvents() {
        return this.router.events.subscribe(event => {
            if (event instanceof ActivationEnd) {
                if (event.snapshot.data.title) {
                    this.title = event.snapshot.data.title;
                }
            }
        });
    }
};
ToolbarComponent = __decorate([
    Component({
        selector: 'ust-toolbar',
        templateUrl: './toolbar.component.html',
        styleUrls: ['./toolbar.component.scss']
    })
], ToolbarComponent);
export { ToolbarComponent };
//# sourceMappingURL=toolbar.component.js.map