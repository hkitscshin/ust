import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { AdminBoardModifyBaseComponent } from '../../../../modules/admin-board-base/components/admin-board-modify-base.component';
let RecruitModifyPageComponent = class RecruitModifyPageComponent extends AdminBoardModifyBaseComponent {
    constructor(router, route, recruitmentService, notifier) {
        super(router, route, recruitmentService, notifier);
        this.router = router;
        this.route = route;
        this.recruitmentService = recruitmentService;
        this.notifier = notifier;
        this.boardPath = '/recruit';
    }
};
RecruitModifyPageComponent = __decorate([
    Component({
        selector: 'ust-recruit-modify-page',
        templateUrl: './recruit-modify-page.component.html',
        styleUrls: ['./recruit-modify-page.component.scss']
    })
], RecruitModifyPageComponent);
export { RecruitModifyPageComponent };
//# sourceMappingURL=recruit-modify-page.component.js.map