import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { AdminBoardAddBaseComponent } from '../../../../modules/admin-board-base/components/admin-board-add-base.component';
let RecruitAddPageComponent = class RecruitAddPageComponent extends AdminBoardAddBaseComponent {
    constructor(router, recruitmentService, notifier) {
        super(router, recruitmentService, notifier);
        this.router = router;
        this.recruitmentService = recruitmentService;
        this.notifier = notifier;
        this.boardPath = '/recruit';
    }
};
RecruitAddPageComponent = __decorate([
    Component({
        selector: 'ust-recruit-add-page',
        templateUrl: './recruit-add-page.component.html',
        styleUrls: ['./recruit-add-page.component.scss']
    })
], RecruitAddPageComponent);
export { RecruitAddPageComponent };
//# sourceMappingURL=recruit-add-page.component.js.map