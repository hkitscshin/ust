import { __decorate } from "tslib";
import { Component } from '@angular/core';
let StoryPageComponent = class StoryPageComponent {
    constructor(scrollTriggerService) {
        this.scrollTriggerService = scrollTriggerService;
        this.Opened = false;
        this.activeIndex = 0;
    }
    ngOnInit() {
        this.initScrollTrigger();
    }
    changeIndex(idx) {
        this.activeIndex = idx;
    }
    onClick() {
        this.Opened = !this.Opened;
    }
    onSlideChange(startPosition) {
        this.startPosition = startPosition;
    }
    initScrollTrigger() {
        const trigger = this.scrollTriggerService.createScrollTrigger();
    }
};
StoryPageComponent = __decorate([
    Component({
        selector: 'ust-story-page',
        templateUrl: './story-page.component.html',
        styleUrls: ['./story-page.component.scss']
    })
], StoryPageComponent);
export { StoryPageComponent };
//# sourceMappingURL=story-page.component.js.map