import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroupBaseComponent } from '@dminine/ng-lib';
import { RecruitmentStatus } from '../../../../../../../ust/src/lib/entities/recruitment/types';
let RecruitFormComponent = class RecruitFormComponent extends FormGroupBaseComponent {
    constructor(fb) {
        super();
        this.fb = fb;
        this.formGroup = this.createForm();
        this.statuses = Object.keys(RecruitmentStatus).map(key => RecruitmentStatus[key]);
    }
    get jobkoreaUrl() {
        return this.formGroup.get('jobkoreaUrl').value;
    }
    get saraminUrl() {
        return this.formGroup.get('saraminUrl').value;
    }
    get worknetUrl() {
        return this.formGroup.get('worknetUrl').value;
    }
    moveToUrl(url) {
        window.open(url, '_blank');
    }
    createForm() {
        return this.fb.group({
            title: [null, Validators.required],
            startAt: [null, Validators.required],
            endAt: [null, Validators.required],
            status: [null, Validators.required],
            content: [null, Validators.required],
            jobkoreaUrl: [null],
            saraminUrl: [null],
            worknetUrl: [null]
        });
    }
};
RecruitFormComponent = __decorate([
    Component({
        selector: 'ust-recruit-form',
        templateUrl: './recruit-form.component.html',
        styleUrls: ['./recruit-form.component.scss']
    })
], RecruitFormComponent);
export { RecruitFormComponent };
//# sourceMappingURL=recruit-form.component.js.map