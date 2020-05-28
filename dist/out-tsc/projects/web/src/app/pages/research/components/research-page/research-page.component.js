import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ResearchPageComponent = class ResearchPageComponent {
    constructor() {
        this.activeIndex = 0;
    }
    ngOnInit() {
    }
    changeIndex(idx) {
        this.activeIndex = idx;
    }
};
ResearchPageComponent = __decorate([
    Component({
        selector: 'ust-research-page',
        templateUrl: './research-page.component.html',
        styleUrls: ['./research-page.component.scss']
    })
], ResearchPageComponent);
export { ResearchPageComponent };
//# sourceMappingURL=research-page.component.js.map