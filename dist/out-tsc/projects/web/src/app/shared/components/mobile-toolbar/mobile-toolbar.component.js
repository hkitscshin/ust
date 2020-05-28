import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { SubscriptionBaseComponent } from '@dminine/ng-lib';
let MobileToolbarComponent = class MobileToolbarComponent extends SubscriptionBaseComponent {
    constructor(appQuery, appService) {
        super();
        this.appQuery = appQuery;
        this.appService = appService;
        this.language = 'ko-KR';
        this.isMobileMenuClosed = true;
        this.isOpened = new Array(2).fill(false);
    }
    ngOnInit() {
        this.addSubscription(this.initLanguage());
    }
    toggleLanguage() {
        this.appService.toggleLanguage();
    }
    openMobileMenu() {
        this.isMobileMenuClosed = false;
    }
    closeMobileMenu() {
        this.isMobileMenuClosed = true;
    }
    initLanguage() {
        return this.appQuery.language$.subscribe(language => {
            this.language = language;
        });
    }
};
MobileToolbarComponent = __decorate([
    Component({
        selector: 'ust-mobile-toolbar',
        templateUrl: './mobile-toolbar.component.html',
        styleUrls: ['./mobile-toolbar.component.scss']
    })
], MobileToolbarComponent);
export { MobileToolbarComponent };
//# sourceMappingURL=mobile-toolbar.component.js.map