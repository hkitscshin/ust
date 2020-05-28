import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { AdminBoardListBaseComponent } from '../../../../modules/admin-board-base/components/admin-board-list-base.component';
let PressReleasePageComponent = class PressReleasePageComponent extends AdminBoardListBaseComponent {
    constructor(pressReleaseService) {
        super(pressReleaseService);
        this.pressReleaseService = pressReleaseService;
    }
};
PressReleasePageComponent = __decorate([
    Component({
        selector: 'ust-press-release-page',
        templateUrl: './press-release-page.component.html',
        styleUrls: ['./press-release-page.component.scss']
    })
], PressReleasePageComponent);
export { PressReleasePageComponent };
//# sourceMappingURL=press-release-page.component.js.map