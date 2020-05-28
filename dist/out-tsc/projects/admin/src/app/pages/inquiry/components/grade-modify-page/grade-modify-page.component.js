import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { AdminBoardModifyBaseComponent } from '../../../../modules/admin-board-base/components/admin-board-modify-base.component';
let GradeModifyPageComponent = class GradeModifyPageComponent extends AdminBoardModifyBaseComponent {
    constructor(router, route, gradeService, notifier, caller) {
        super(router, route, gradeService, notifier);
        this.router = router;
        this.route = route;
        this.gradeService = gradeService;
        this.notifier = notifier;
        this.caller = caller;
        this.boardPath = '/inquiry/grade';
    }
    modifyCallback() {
        const request = {
            email: this.entity.email,
            subject: '[UST] 성적서요청에 대한 답변입니다',
            text: '성적서',
            attachments: [{ filename: this.formValue.certification.title, path: this.formValue.certification.url }]
        };
        return this.caller.sendMail(request).toPromise();
    }
};
GradeModifyPageComponent = __decorate([
    Component({
        selector: 'ust-grade-modify-page',
        templateUrl: './grade-modify-page.component.html',
        styleUrls: ['./grade-modify-page.component.scss']
    })
], GradeModifyPageComponent);
export { GradeModifyPageComponent };
//# sourceMappingURL=grade-modify-page.component.js.map