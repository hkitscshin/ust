import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroupBaseComponent } from '@dminine/ng-lib';
let InquiryFormComponent = class InquiryFormComponent extends FormGroupBaseComponent {
    constructor(fb) {
        super();
        this.fb = fb;
        this.formGroup = this.createForm();
    }
    createForm() {
        return this.fb.group({
            answer: [null, Validators.required],
            status: [null]
        });
    }
};
InquiryFormComponent = __decorate([
    Component({
        selector: 'ust-inquiry-form',
        templateUrl: './inquiry-form.component.html',
        styleUrls: ['./inquiry-form.component.scss']
    })
], InquiryFormComponent);
export { InquiryFormComponent };
//# sourceMappingURL=inquiry-form.component.js.map