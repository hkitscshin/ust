import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let GradeTableComponent = class GradeTableComponent {
    constructor() {
        this.displayedColumns = ['createdAt', 'company', 'goods', 'standard', 'status', 'modify'];
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], GradeTableComponent.prototype, "entities", void 0);
GradeTableComponent = __decorate([
    Component({
        selector: 'ust-grade-table',
        templateUrl: './grade-table.component.html',
        styleUrls: ['./grade-table.component.scss']
    })
], GradeTableComponent);
export { GradeTableComponent };
//# sourceMappingURL=grade-table.component.js.map