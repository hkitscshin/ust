import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { AdminBoardListBaseComponent } from '../../../../modules/admin-board-base/components/admin-board-list-base.component';
let GradePageComponent = class GradePageComponent extends AdminBoardListBaseComponent {
    constructor(gradeService) {
        super(gradeService);
        this.gradeService = gradeService;
    }
};
GradePageComponent = __decorate([
    Component({
        selector: 'ust-grade-page',
        templateUrl: './grade-page.component.html',
        styleUrls: ['./grade-page.component.scss']
    })
], GradePageComponent);
export { GradePageComponent };
//# sourceMappingURL=grade-page.component.js.map