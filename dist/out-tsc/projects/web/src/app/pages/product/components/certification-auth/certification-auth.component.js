import { __decorate } from "tslib";
import { Component, HostListener } from '@angular/core';
let CertificationAuthComponent = class CertificationAuthComponent {
    constructor() {
        this.navFixed = false;
        this.scrollOffset = 120;
        this.activeIndex = 0;
    }
    onWindowScroll() {
        this.navFixed = (window.pageYOffset
            || document.documentElement.scrollTop
            || document.body.scrollTop || 120) > this.scrollOffset;
    }
    ngOnInit() {
    }
    changeIndex(idx) {
        this.activeIndex = idx;
    }
};
__decorate([
    HostListener('window:scroll')
], CertificationAuthComponent.prototype, "onWindowScroll", null);
CertificationAuthComponent = __decorate([
    Component({
        selector: 'ust-certification-auth',
        templateUrl: './certification-auth.component.html',
        styleUrls: ['./certification-auth.component.scss']
    })
], CertificationAuthComponent);
export { CertificationAuthComponent };
//# sourceMappingURL=certification-auth.component.js.map