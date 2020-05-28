import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let StorySlideComponent = class StorySlideComponent {
    constructor() {
        this.changeSlide = new EventEmitter();
        this.customOptions = {
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            dots: true,
            navSpeed: 700,
            navText: ['<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
            },
            nav: true,
        };
    }
    ngOnInit() {
    }
    slideChange(slidesOutputData) {
        this.changeSlide.emit(slidesOutputData.startPosition);
    }
};
__decorate([
    Input()
], StorySlideComponent.prototype, "tabIndex", void 0);
__decorate([
    Output()
], StorySlideComponent.prototype, "changeSlide", void 0);
StorySlideComponent = __decorate([
    Component({
        selector: 'ust-story-slide',
        templateUrl: './story-slide.component.html',
        styleUrls: ['./story-slide.component.scss']
    })
], StorySlideComponent);
export { StorySlideComponent };
//# sourceMappingURL=story-slide.component.js.map