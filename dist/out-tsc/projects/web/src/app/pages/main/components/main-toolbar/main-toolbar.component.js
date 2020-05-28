import { __decorate } from "tslib";
import { Component, HostListener } from '@angular/core';
import { SubscriptionBaseComponent } from '@dminine/ng-lib';
let MainToolbarComponent = class MainToolbarComponent extends SubscriptionBaseComponent {
    constructor(appQuery, appService) {
        super();
        this.appQuery = appQuery;
        this.appService = appService;
        this.language = 'ko-KR';
        this.navFixed = false;
        this.scrollOffset = 70;
    }
    onWindowScroll() {
        this.navFixed = (window.pageYOffset
            || document.documentElement.scrollTop
            || document.body.scrollTop || 0) > this.scrollOffset;
    }
    ngOnInit() {
        this.addSubscription(this.initLanguage());
    }
    toggleLanguage() {
        this.appService.toggleLanguage();
    }
    initLanguage() {
        return this.appQuery.language$.subscribe(language => {
            this.language = language;
        });
    }
};
__decorate([
    HostListener('window:scroll')
], MainToolbarComponent.prototype, "onWindowScroll", null);
MainToolbarComponent = __decorate([
    Component({
        selector: 'ust-main-toolbar',
        templateUrl: './main-toolbar.component.html',
        styleUrls: ['./main-toolbar.component.scss']
    })
], MainToolbarComponent);
export { MainToolbarComponent };
//# sourceMappingURL=main-toolbar.component.js.map