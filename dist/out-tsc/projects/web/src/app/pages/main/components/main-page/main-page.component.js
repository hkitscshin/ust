import { __decorate } from "tslib";
import { Component } from '@angular/core';
let MainPageComponent = class MainPageComponent {
    constructor(scrollTriggerService) {
        this.scrollTriggerService = scrollTriggerService;
        this.initFullPageConfig();
    }
    ngOnInit() {
        this.initScrollTrigger();
    }
    getRef(fullPageRef) {
        this.fullPageApi = fullPageRef;
    }
    initFullPageConfig() {
        this.config = {
            licenseKey: '9378C9D3-EAC443EF-AADF0223-61496A00',
            navigation: true,
            scrollBar: true,
            responsiveWidth: 599,
            responsiveSlides: false,
        };
    }
    initScrollTrigger() {
        const trigger = this.scrollTriggerService.createScrollTrigger();
    }
};
MainPageComponent = __decorate([
    Component({
        selector: 'ust-main-page',
        templateUrl: './main-page.component.html',
        styleUrls: ['./main-page.component.scss'],
    })
], MainPageComponent);
export { MainPageComponent };
//# sourceMappingURL=main-page.component.js.map