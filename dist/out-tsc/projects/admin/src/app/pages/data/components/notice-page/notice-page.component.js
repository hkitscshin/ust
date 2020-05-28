import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { AdminBoardListBaseComponent } from '../../../../modules/admin-board-base/components/admin-board-list-base.component';
let NoticePageComponent = class NoticePageComponent extends AdminBoardListBaseComponent {
    constructor(noticeService) {
        super(noticeService);
        this.noticeService = noticeService;
    }
};
NoticePageComponent = __decorate([
    Component({
        selector: 'ust-notice-page',
        templateUrl: './notice-page.component.html',
        styleUrls: ['./notice-page.component.scss']
    })
], NoticePageComponent);
export { NoticePageComponent };
//# sourceMappingURL=notice-page.component.js.map