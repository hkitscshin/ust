import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { ActivationEnd } from '@angular/router';
import { SubscriptionBaseComponent } from '@dminine/ng-lib';
let SidebarComponent = class SidebarComponent extends SubscriptionBaseComponent {
    constructor(router) {
        super();
        this.router = router;
    }
    ngOnInit() {
        this.addSubscription(this.initRouterEvents());
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
SidebarComponent = __decorate([
    Component({
        selector: 'ust-sidebar',
        templateUrl: './sidebar.component.html',
        styleUrls: ['./sidebar.component.scss']
    })
], SidebarComponent);
export { SidebarComponent };
//# sourceMappingURL=sidebar.component.js.map