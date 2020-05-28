import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { AdminBoardListBaseComponent } from '../../../../modules/admin-board-base/components/admin-board-list-base.component';
let EstimatePageComponent = class EstimatePageComponent extends AdminBoardListBaseComponent {
    constructor(estimateService) {
        super(estimateService);
        this.estimateService = estimateService;
    }
};
EstimatePageComponent = __decorate([
    Component({
        selector: 'ust-estimate-page',
        templateUrl: './estimate-page.component.html',
        styleUrls: ['./estimate-page.component.scss']
    })
], EstimatePageComponent);
export { EstimatePageComponent };
//# sourceMappingURL=estimate-page.component.js.map