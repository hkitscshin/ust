import { __decorate } from "tslib";
import { Component } from '@angular/core';
let MainSlideComponent = class MainSlideComponent {
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
MainSlideComponent = __decorate([
    Component({
        selector: 'ust-main-slide',
        templateUrl: './main-slide.component.html',
        styleUrls: ['./main-slide.component.scss']
    })
], MainSlideComponent);
export { MainSlideComponent };
//# sourceMappingURL=main-slide.component.js.map