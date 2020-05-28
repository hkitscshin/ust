import { __decorate } from "tslib";
import { Component } from '@angular/core';
let EstimatePageComponent = class EstimatePageComponent {
    constructor() {
        this.Opened = false;
        this.activeIndex = 0;
    }
    ngOnInit() {
    }
    changeIndex(idx) {
        this.activeIndex = idx;
    }
    onClick() {
        this.Opened = !this.Opened;
    }
};
EstimatePageComponent = __decorate([
    Component({
        selector: 'ust-estimate-page',
        templateUrl: './estimate-page.component.html',
        styleUrls: ['./estimate-page.component.scss']
    })
], EstimatePageComponent);
export { EstimatePageComponent };
//# sourceMappingURL=estimate-page.component.js.map