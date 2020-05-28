import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { AdminBoardAddBaseComponent } from '../../../../modules/admin-board-base/components/admin-board-add-base.component';
let NoticeAddPageComponent = class NoticeAddPageComponent extends AdminBoardAddBaseComponent {
    constructor(router, noticeService, notifier) {
        super(router, noticeService, notifier);
        this.router = router;
        this.noticeService = noticeService;
        this.notifier = notifier;
        this.boardPath = '/data/notice';
    }
};
NoticeAddPageComponent = __decorate([
    Component({
        selector: 'ust-notice-add-page',
        templateUrl: './notice-add-page.component.html',
        styleUrls: ['./notice-add-page.component.scss']
    })
], NoticeAddPageComponent);
export { NoticeAddPageComponent };
//# sourceMappingURL=notice-add-page.component.js.map