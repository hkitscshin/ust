import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { AdminBoardListBaseComponent } from '../../../../modules/admin-board-base/components/admin-board-list-base.component';
let InquiryPageComponent = class InquiryPageComponent extends AdminBoardListBaseComponent {
    constructor(inquiryService) {
        super(inquiryService);
        this.inquiryService = inquiryService;
    }
};
InquiryPageComponent = __decorate([
    Component({
        selector: 'ust-inquiry-page',
        templateUrl: './inquiry-page.component.html',
        styleUrls: ['./inquiry-page.component.scss']
    })
], InquiryPageComponent);
export { InquiryPageComponent };
//# sourceMappingURL=inquiry-page.component.js.map