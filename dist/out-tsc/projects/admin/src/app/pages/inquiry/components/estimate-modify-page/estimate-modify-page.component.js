import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { stripTag } from '../../../../../../../ust/src/lib/utils';
import { AdminBoardModifyBaseComponent } from '../../../../modules/admin-board-base/components/admin-board-modify-base.component';
let EstimateModifyPageComponent = class EstimateModifyPageComponent extends AdminBoardModifyBaseComponent {
    constructor(router, route, estimateService, notifier, caller) {
        super(router, route, estimateService, notifier);
        this.router = router;
        this.route = route;
        this.estimateService = estimateService;
        this.notifier = notifier;
        this.caller = caller;
        this.boardPath = '/inquiry/estimate';
    }
    modifyCallback() {
        const request = {
            email: this.entity.email,
            subject: '[UST] 견적문의에 대한 답변입니다',
            text: stripTag(this.formValue.answer),
            html: this.formValue.answer
        };
        return this.caller.sendMail(request).toPromise();
    }
};
EstimateModifyPageComponent = __decorate([
    Component({
        selector: 'ust-estimate-modify-page',
        templateUrl: './estimate-modify-page.component.html',
        styleUrls: ['./estimate-modify-page.component.scss']
    })
], EstimateModifyPageComponent);
export { EstimateModifyPageComponent };
//# sourceMappingURL=estimate-modify-page.component.js.map