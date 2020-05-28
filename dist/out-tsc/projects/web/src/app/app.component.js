import { __decorate } from "tslib";
import { Component } from '@angular/core';
import 'hammerjs';
import { NavigationEnd } from '@angular/router';
import { SubscriptionBaseComponent } from '@dminine/ng-lib';
let AppComponent = class AppComponent extends SubscriptionBaseComponent {
    constructor(router, appService, translate) {
        super();
        this.router = router;
        this.appService = appService;
        this.translate = translate;
    }
    ngOnInit() {
        this.initLanguage();
        this.addSubscription(this.initRouterEvent());
    }
    initLanguage() {
        this.translate.setDefaultLang('en');
        const localLanguage = window.localStorage.getItem('language');
        if (localLanguage) {
            this.appService.setLanguage(localLanguage);
        }
        else {
            const browserLang = navigator.language || navigator.userLanguage;
            this.appService.setLanguage(browserLang);
        }
    }
    initRouterEvent() {
        return this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.moveToTop();
                this.initGtag(event);
            }
        });
    }
    moveToTop() {
        window.scrollTo(0, 0);
    }
    initGtag(event) {
        gtag('config', 'UA-154681557-1', {
            page_path: event.urlAfterRedirects
        });
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