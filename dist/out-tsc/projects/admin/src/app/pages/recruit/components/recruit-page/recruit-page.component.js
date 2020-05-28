import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { AdminBoardListBaseComponent } from '../../../../modules/admin-board-base/components/admin-board-list-base.component';
let RecruitPageComponent = class RecruitPageComponent extends AdminBoardListBaseComponent {
    constructor(recruitmentService) {
        super(recruitmentService);
        this.recruitmentService = recruitmentService;
    }
};
RecruitPageComponent = __decorate([
    Component({
        selector: 'ust-recruit-page',
        templateUrl: './recruit-page.component.html',
        styleUrls: ['./recruit-page.component.scss']
    })
], RecruitPageComponent);
export { RecruitPageComponent };
//# sourceMappingURL=recruit-page.component.js.map