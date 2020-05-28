import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let InquiryTableComponent = class InquiryTableComponent {
    constructor() {
        this.displayedColumns = ['createdAt', 'name', 'title', 'status', 'modify'];
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], InquiryTableComponent.prototype, "entities", void 0);
InquiryTableComponent = __decorate([
    Component({
        selector: 'ust-inquiry-table',
        templateUrl: './inquiry-table.component.html',
        styleUrls: ['./inquiry-table.component.scss']
    })
], InquiryTableComponent);
export { InquiryTableComponent };
//# sourceMappingURL=inquiry-table.component.js.map