import { __decorate } from "tslib";
import { Component, HostListener, ViewEncapsulation } from '@angular/core';
let CertificationPageComponent = class CertificationPageComponent {
    constructor() {
        this.navFixed = false;
        this.scrollOffset = 70;
        this.activeIndex = 0;
    }
    onWindowScroll() {
        this.navFixed = (window.pageYOffset
            || document.documentElement.scrollTop
            || document.body.scrollTop || 0) > this.scrollOffset;
    }
    ngOnInit() {
    }
    changeIndex(idx) {
        this.activeIndex = idx;
    }
};
__decorate([
    HostListener('window:scroll')
], CertificationPageComponent.prototype, "onWindowScroll", null);
CertificationPageComponent = __decorate([
    Component({
        selector: 'ust-certification-page',
        templateUrl: './certification-page.component.html',
        styleUrls: ['./certification-page.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], CertificationPageComponent);
export { CertificationPageComponent };
//# sourceMappingURL=certification-page.component.js.map