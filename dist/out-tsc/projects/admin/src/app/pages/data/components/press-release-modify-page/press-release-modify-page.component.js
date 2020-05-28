import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { AdminBoardModifyBaseComponent } from '../../../../modules/admin-board-base/components/admin-board-modify-base.component';
let PressReleaseModifyPageComponent = class PressReleaseModifyPageComponent extends AdminBoardModifyBaseComponent {
    constructor(router, route, pressReleaseService, notifier) {
        super(router, route, pressReleaseService, notifier);
        this.router = router;
        this.route = route;
        this.pressReleaseService = pressReleaseService;
        this.notifier = notifier;
        this.boardPath = '/data/press-release';
    }
};
PressReleaseModifyPageComponent = __decorate([
    Component({
        selector: 'ust-press-release-modify-page',
        templateUrl: './press-release-modify-page.component.html',
        styleUrls: ['./press-release-modify-page.component.scss']
    })
], PressReleaseModifyPageComponent);
export { PressReleaseModifyPageComponent };
//# sourceMappingURL=press-release-modify-page.component.js.map