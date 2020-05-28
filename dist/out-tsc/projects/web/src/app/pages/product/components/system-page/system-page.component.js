import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
let SystemPageComponent = class SystemPageComponent {
    constructor(scrollTriggerService) {
        this.scrollTriggerService = scrollTriggerService;
        this.Opened = false;
        this.activeIndex = 0;
    }
    ngOnInit() {
        this.initScrollTrigger();
    }
    initScrollTrigger() {
        const trigger = this.scrollTriggerService.createScrollTrigger();
    }
    changeIndex(idx) {
        this.activeIndex = idx;
    }
    onClick() {
        this.Opened = !this.Opened;
    }
};
SystemPageComponent = __decorate([
    Component({
        selector: 'ust-system-page',
        templateUrl: './system-page.component.html',
        styleUrls: ['./system-page.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], SystemPageComponent);
export { SystemPageComponent };
//# sourceMappingURL=system-page.component.js.map