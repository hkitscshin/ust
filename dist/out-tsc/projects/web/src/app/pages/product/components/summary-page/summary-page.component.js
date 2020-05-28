import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SummaryPageComponent = class SummaryPageComponent {
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
SummaryPageComponent = __decorate([
    Component({
        selector: 'ust-summary-page',
        templateUrl: './summary-page.component.html',
        styleUrls: ['./summary-page.component.scss']
    })
], SummaryPageComponent);
export { SummaryPageComponent };
//# sourceMappingURL=summary-page.component.js.map