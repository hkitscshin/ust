import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import ScrollTrigger from '@terwanerik/scrolltrigger';
let ScrollTriggerService = class ScrollTriggerService {
    constructor() { }
    createScrollTrigger() {
        return new ScrollTrigger({
            trigger: {
                once: false
            }
        });
    }
};
ScrollTriggerService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ScrollTriggerService);
export { ScrollTriggerService };
//# sourceMappingURL=scroll-trigger.service.js.map