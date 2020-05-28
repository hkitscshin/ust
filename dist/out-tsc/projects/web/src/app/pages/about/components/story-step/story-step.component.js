import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let StoryStepComponent = class StoryStepComponent {
    constructor(scrollTriggerService) {
        this.scrollTriggerService = scrollTriggerService;
        this.startPosition = 0;
    }
    ngOnInit() {
        this.initScrollTrigger();
    }
    initScrollTrigger() {
        const trigger = this.scrollTriggerService.createScrollTrigger();
    }
};
__decorate([
    Input()
], StoryStepComponent.prototype, "tabIndex", void 0);
__decorate([
    Input()
], StoryStepComponent.prototype, "startPosition", void 0);
StoryStepComponent = __decorate([
    Component({
        selector: 'ust-story-step',
        templateUrl: './story-step.component.html',
        styleUrls: ['./story-step.component.scss']
    })
], StoryStepComponent);
export { StoryStepComponent };
//# sourceMappingURL=story-step.component.js.map