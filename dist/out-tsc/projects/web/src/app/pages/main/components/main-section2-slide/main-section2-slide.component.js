import { __decorate } from "tslib";
import { Component } from '@angular/core';
let MainSection2SlideComponent = class MainSection2SlideComponent {
    constructor() {
        this.customOptions = {
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            dots: true,
            navSpeed: 700,
            navText: ['<i class="main-slide-left"></i>', '<i class="main-slide-right"></i>'],
            nav: true,
            items: 1,
            responsive: {
                0: {
                    items: 1,
                },
            },
        };
    }
    ngOnInit() {
    }
};
MainSection2SlideComponent = __decorate([
    Component({
        selector: 'ust-main-section2-slide',
        templateUrl: './main-section2-slide.component.html',
        styleUrls: ['./main-section2-slide.component.scss']
    })
], MainSection2SlideComponent);
export { MainSection2SlideComponent };
//# sourceMappingURL=main-section2-slide.component.js.map