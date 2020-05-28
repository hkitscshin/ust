import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroupBaseComponent } from '@dminine/ng-lib';
let GradeFormComponent = class GradeFormComponent extends FormGroupBaseComponent {
    constructor(fb) {
        super();
        this.fb = fb;
        this.formGroup = this.createForm();
    }
    get certificationTitle() {
        return this.formGroup.get('certification').get('title').value;
    }
    createForm() {
        return this.fb.group({
            certification: this.fb.group({
                title: [null, Validators.required],
                url: [null, Validators.required]
            }),
            status: [null]
        });
    }
};
GradeFormComponent = __decorate([
    Component({
        selector: 'ust-grade-form',
        templateUrl: './grade-form.component.html',
        styleUrls: ['./grade-form.component.scss']
    })
], GradeFormComponent);
export { GradeFormComponent };
//# sourceMappingURL=grade-form.component.js.map