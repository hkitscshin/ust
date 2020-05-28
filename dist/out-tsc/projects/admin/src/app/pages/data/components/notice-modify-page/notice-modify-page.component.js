import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { AdminBoardModifyBaseComponent } from '../../../../modules/admin-board-base/components/admin-board-modify-base.component';
let NoticeModifyPageComponent = class NoticeModifyPageComponent extends AdminBoardModifyBaseComponent {
    constructor(router, route, noticeService, notifier) {
        super(router, route, noticeService, notifier);
        this.router = router;
        this.route = route;
        this.noticeService = noticeService;
        this.notifier = notifier;
        this.boardPath = '/data/notice';
    }
};
NoticeModifyPageComponent = __decorate([
    Component({
        selector: 'ust-notice-modify-page',
        templateUrl: './notice-modify-page.component.html',
        styleUrls: ['./notice-modify-page.component.scss']
    })
], NoticeModifyPageComponent);
export { NoticeModifyPageComponent };
//# sourceMappingURL=notice-modify-page.component.js.map