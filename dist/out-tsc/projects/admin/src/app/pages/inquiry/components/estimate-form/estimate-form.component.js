import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroupBaseComponent } from '@dminine/ng-lib';
let EstimateFormComponent = class EstimateFormComponent extends FormGroupBaseComponent {
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
EstimateFormComponent = __decorate([
    Component({
        selector: 'ust-estimate-form',
        templateUrl: './estimate-form.component.html',
        styleUrls: ['./estimate-form.component.scss']
    })
], EstimateFormComponent);
export { EstimateFormComponent };
//# sourceMappingURL=estimate-form.component.js.map