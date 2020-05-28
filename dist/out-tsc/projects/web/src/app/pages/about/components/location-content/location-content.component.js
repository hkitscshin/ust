import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let LocationContentComponent = class LocationContentComponent {
    constructor(scrollTriggerService) {
        this.scrollTriggerService = scrollTriggerService;
    }
    ngOnInit() {
        this.initScrollTrigger();
    }
    initScrollTrigger() {
        const trigger = this.scrollTriggerService.createScrollTrigger();
    }
};
__decorate([
    Input()
], LocationContentComponent.prototype, "tabIndex", void 0);
LocationContentComponent = __decorate([
    Component({
        selector: 'ust-location-content',
        templateUrl: './location-content.component.html',
        styleUrls: ['./location-content.component.scss']
    })
], LocationContentComponent);
export { LocationContentComponent };
//# sourceMappingURL=location-content.component.js.map