import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { AdminBoardAddBaseComponent } from '../../../../modules/admin-board-base/components/admin-board-add-base.component';
let PressReleaseAddPageComponent = class PressReleaseAddPageComponent extends AdminBoardAddBaseComponent {
    constructor(router, pressReleaseService, notifier) {
        super(router, pressReleaseService, notifier);
        this.router = router;
        this.pressReleaseService = pressReleaseService;
        this.notifier = notifier;
        this.boardPath = '/data/press-release';
    }
};
PressReleaseAddPageComponent = __decorate([
    Component({
        selector: 'ust-press-release-add-page',
        templateUrl: './press-release-add-page.component.html',
        styleUrls: ['./press-release-add-page.component.scss']
    })
], PressReleaseAddPageComponent);
export { PressReleaseAddPageComponent };
//# sourceMappingURL=press-release-add-page.component.js.map