import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { take, finalize } from 'rxjs/operators';
import { EstimateStatus } from '../../../../../../../ust/src/lib/entities/estimate/types';
let EstimateInquiryComponent = class EstimateInquiryComponent {
    constructor(estimateService, caller, router) {
        this.estimateService = estimateService;
        this.caller = caller;
        this.router = router;
        this.isLoading = false;
    }
    submit(formValue) {
        this.isLoading = true;
        const mailOptions = {
            email: 'sales.us@esgroup.net',
            subject: `[견적문의] ${formValue.title}`,
            text: `성명: ${formValue.name}
이메일: ${formValue.email}
제목: ${formValue.title}
내용
${formValue.content}`,
            attachments: formValue.attachments
        };
        this.isLoading = true;
        forkJoin([
            this.estimateService.add(Object.assign(Object.assign({}, formValue), { status: EstimateStatus.제출 })).pipe(take(1)),
            this.caller.sendMail(mailOptions)
        ]).pipe(finalize(() => this.isLoading = false)).subscribe(() => {
            alert('제출하였습니다');
            this.router.navigate(['/']);
        }, err => {
            console.error(err);
            alert(`오류가 발생하였습니다\nError: ${err.message}`);
        });
    }
};
EstimateInquiryComponent = __decorate([
    Component({
        selector: 'ust-estimate-inquiry',
        templateUrl: './estimate-inquiry.component.html',
        styleUrls: ['./estimate-inquiry.component.scss']
    })
], EstimateInquiryComponent);
export { EstimateInquiryComponent };
//# sourceMappingURL=estimate-inquiry.component.js.map