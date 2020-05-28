import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LocationPageComponent = class LocationPageComponent {
    constructor(scrollTriggerService) {
        this.scrollTriggerService = scrollTriggerService;
        this.Opened = false;
        this.activeIndex = 0;
    }
    ngOnInit() {
        this.initScrollTrigger();
    }
    changeIndex(idx) {
        this.activeIndex = idx;
    }
    onClick() {
        this.Opened = !this.Opened;
    }
    initScrollTrigger() {
        const trigger = this.scrollTriggerService.createScrollTrigger();
    }
};
LocationPageComponent = __decorate([
    Component({
        selector: 'ust-location-page',
        templateUrl: './location-page.component.html',
        styleUrls: ['./location-page.component.scss']
    })
], LocationPageComponent);
export { LocationPageComponent };
//# sourceMappingURL=location-page.component.js.map