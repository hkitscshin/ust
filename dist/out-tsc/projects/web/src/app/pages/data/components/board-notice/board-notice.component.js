import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { BoardListBaseComponent } from '../../../../core/modules/board-base/components/board-list-base.component';
let BoardNoticeComponent = class BoardNoticeComponent extends BoardListBaseComponent {
    constructor(noticeService) {
        super(noticeService);
        this.noticeService = noticeService;
    }
};
BoardNoticeComponent = __decorate([
    Component({
        selector: 'ust-board-notice',
        templateUrl: './board-notice.component.html',
        styleUrls: ['./board-notice.component.scss']
    })
], BoardNoticeComponent);
export { BoardNoticeComponent };
//# sourceMappingURL=board-notice.component.js.map