import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
let IntroducePageComponent = class IntroducePageComponent {
    constructor() {
        this.activeIndex = 0;
    }
    ngOnInit() {
    }
    changeIndex(idx) {
        this.activeIndex = idx;
    }
};
IntroducePageComponent = __decorate([
    Component({
        selector: 'ust-introduce-page',
        templateUrl: './introduce-page.component.html',
        styleUrls: ['./introduce-page.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], IntroducePageComponent);
export { IntroducePageComponent };
//# sourceMappingURL=introduce-page.component.js.map