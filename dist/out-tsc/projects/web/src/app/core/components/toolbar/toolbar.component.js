import { __decorate } from "tslib";
import { Component, HostListener } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { SubscriptionBaseComponent } from '@dminine/ng-lib';
let ToolbarComponent = class ToolbarComponent extends SubscriptionBaseComponent {
    constructor(router, appQuery, appService) {
        super();
        this.router = router;
        this.appQuery = appQuery;
        this.appService = appService;
        this.language = 'ko-KR';
        this.pages = [
            { url: '/about', translate: 'TOOLBAR.MENU.NAV1' },
            { url: '/product', translate: 'TOOLBAR.MENU.NAV2' },
            { url: '/research', translate: 'TOOLBAR.MENU.NAV3' },
            { url: '/investment', translate: 'TOOLBAR.MENU.NAV4' },
            { url: '/data', translate: 'TOOLBAR.MENU.NAV5' },
            { url: '/recruit', translate: 'TOOLBAR.MENU.NAV6' }
        ];
        this.navFixed = false;
        this.scrollOffset = 70;
    }
    onWindowScroll() {
        this.navFixed = (window.pageYOffset
            || document.documentElement.scrollTop
            || document.body.scrollTop || 0) > this.scrollOffset;
    }
    ngOnInit() {
        this.filterCurrentPage();
        this.addSubscription(this.initLanguage());
        this.addSubscription(this.initRouterEvent());
    }
    toggleLanguage() {
        this.appService.toggleLanguage();
    }
    filterCurrentPage() {
        this.currentPage = this.pages.find(page => this.router.url.startsWith(page.url));
    }
    initLanguage() {
        return this.appQuery.language$.subscribe(language => {
            this.language = language;
        });
    }
    initRouterEvent() {
        return this.router.events.subscribe(e => {
            if (e instanceof NavigationEnd) {
                this.filterCurrentPage();
            }
        });
    }
};
__decorate([
    HostListener('window:scroll')
], ToolbarComponent.prototype, "onWindowScroll", null);
ToolbarComponent = __decorate([
    Component({
        selector: 'ust-toolbar',
        templateUrl: './toolbar.component.html',
        styleUrls: ['./toolbar.component.scss']
    })
], ToolbarComponent);
export { ToolbarComponent };
//# sourceMappingURL=toolbar.component.js.map