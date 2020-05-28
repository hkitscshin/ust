import { __decorate } from "tslib";
import { Component } from '@angular/core';
let GroupPageComponent = class GroupPageComponent {
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
GroupPageComponent = __decorate([
    Component({
        selector: 'ust-group-page',
        templateUrl: './group-page.component.html',
        styleUrls: ['./group-page.component.scss']
    })
], GroupPageComponent);
export { GroupPageComponent };
//# sourceMappingURL=group-page.component.js.map