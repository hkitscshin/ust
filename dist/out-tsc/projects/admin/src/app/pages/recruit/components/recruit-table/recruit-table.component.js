import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let RecruitTableComponent = class RecruitTableComponent {
    constructor() {
        this.displayedColumns = ['no', 'title', 'date', 'status', 'createdAt', 'modify'];
    }
};
__decorate([
    Input()
], RecruitTableComponent.prototype, "recruitment", void 0);
RecruitTableComponent = __decorate([
    Component({
        selector: 'ust-recruit-table',
        templateUrl: './recruit-table.component.html',
        styleUrls: ['./recruit-table.component.scss']
    })
], RecruitTableComponent);
export { RecruitTableComponent };
//# sourceMappingURL=recruit-table.component.js.map