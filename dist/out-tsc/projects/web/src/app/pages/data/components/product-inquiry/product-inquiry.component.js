import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { take, finalize } from 'rxjs/operators';
import { InquiryStatus } from '../../../../../../../ust/src/lib/entities/inquiry/types';
let ProductInquiryComponent = class ProductInquiryComponent {
    constructor(inquiryService, caller, router) {
        this.inquiryService = inquiryService;
        this.caller = caller;
        this.router = router;
        this.isLoading = false;
    }
    submit(formValue) {
        this.isLoading = true;
        const mailOptions = {
            email: 'sales.us@esgroup.net',
            subject: `[제품문의] ${formValue.title}`,
            text: `성명: ${formValue.name}
이메일: ${formValue.email}
제목: ${formValue.title}
내용
${formValue.content}`,
            attachments: formValue.attachments
        };
        this.isLoading = true;
        forkJoin([
            this.inquiryService.add(Object.assign(Object.assign({}, formValue), { status: InquiryStatus.제출 })).pipe(take(1)),
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
ProductInquiryComponent = __decorate([
    Component({
        selector: 'ust-product-inquiry',
        templateUrl: './product-inquiry.component.html',
        styleUrls: ['./product-inquiry.component.scss']
    })
], ProductInquiryComponent);
export { ProductInquiryComponent };
//# sourceMappingURL=product-inquiry.component.js.map