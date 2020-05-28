import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { BoardDetailBaseComponent } from '../../../../core/modules/board-base/components/board-detail-base.component';
let BoardNoticeDetailComponent = class BoardNoticeDetailComponent extends BoardDetailBaseComponent {
    constructor(route, noticeService) {
        super(route, noticeService);
        this.route = route;
        this.noticeService = noticeService;
    }
    ngOnInit() {
        super.ngOnInit();
        this.increaseViewCount();
    }
    increaseViewCount() {
        if (this.entity) {
            this.noticeService.update(this.entity.id, { viewCount: this.entity.viewCount + 1 });
        }
    }
};
BoardNoticeDetailComponent = __decorate([
    Component({
        selector: 'ust-board-notice-detail',
        templateUrl: './board-notice-detail.component.html',
        styleUrls: ['./board-notice-detail.component.scss']
    })
], BoardNoticeDetailComponent);
export { BoardNoticeDetailComponent };
//# sourceMappingURL=board-notice-detail.component.js.map