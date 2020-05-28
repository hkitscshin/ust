import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { SubscriptionBaseComponent } from '@dminine/ng-lib';
let BoardPageComponent = class BoardPageComponent extends SubscriptionBaseComponent {
    constructor(router, route) {
        super();
        this.router = router;
        this.route = route;
        this.activeIndex = 0;
        this.Opened = false;
        this.activeIndex = 0;
    }
    ngOnInit() {
        this.addSubscription(this.initActiveIndex());
    }
    initActiveIndex() {
        return this.route.url.subscribe(url => {
            const path = url[1].path;
            switch (path) {
                case 'notice':
                    this.activeIndex = 0;
                    break;
                case 'press-release':
                    this.activeIndex = 1;
                    break;
                case 'news':
                    this.activeIndex = 2;
                    break;
            }
        });
    }
    changeIndex(idx) {
        this.activeIndex = idx;
    }
    onClick() {
        this.Opened = !this.Opened;
    }
};
BoardPageComponent = __decorate([
    Component({
        selector: 'ust-board-page',
        templateUrl: './board-page.component.html',
        styleUrls: ['./board-page.component.scss']
    })
], BoardPageComponent);
export { BoardPageComponent };
//# sourceMappingURL=board-page.component.js.map