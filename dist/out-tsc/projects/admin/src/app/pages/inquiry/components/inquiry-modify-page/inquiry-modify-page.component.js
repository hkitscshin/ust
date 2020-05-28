import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { stripTag } from '../../../../../../../ust/src/lib/utils';
import { AdminBoardModifyBaseComponent } from '../../../../modules/admin-board-base/components/admin-board-modify-base.component';
let InquiryModifyPageComponent = class InquiryModifyPageComponent extends AdminBoardModifyBaseComponent {
    constructor(router, route, inquiryService, notifier, caller) {
        super(router, route, inquiryService, notifier);
        this.router = router;
        this.route = route;
        this.inquiryService = inquiryService;
        this.notifier = notifier;
        this.caller = caller;
        this.boardPath = '/inquiry/inquiry';
    }
    modifyCallback() {
        const request = {
            email: this.entity.email,
            subject: '[UST] 제품문의에 대한 답변입니다',
            text: stripTag(this.formValue.answer),
            html: this.formValue.answer
        };
        return this.caller.sendMail(request).toPromise();
    }
};
InquiryModifyPageComponent = __decorate([
    Component({
        selector: 'ust-inquiry-modify-page',
        templateUrl: './inquiry-modify-page.component.html',
        styleUrls: ['./inquiry-modify-page.component.scss']
    })
], InquiryModifyPageComponent);
export { InquiryModifyPageComponent };
//# sourceMappingURL=inquiry-modify-page.component.js.map