import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { BoardDetailBaseComponent } from '../../../../core/modules/board-base/components/board-detail-base.component';
let RecruitDetailComponent = class RecruitDetailComponent extends BoardDetailBaseComponent {
    constructor(route, recruitmentService) {
        super(route, recruitmentService);
        this.route = route;
        this.recruitmentService = recruitmentService;
    }
};
RecruitDetailComponent = __decorate([
    Component({
        selector: 'ust-recruit-detail',
        templateUrl: './recruit-detail.component.html',
        styleUrls: ['./recruit-detail.component.scss']
    })
], RecruitDetailComponent);
export { RecruitDetailComponent };
//# sourceMappingURL=recruit-detail.component.js.map