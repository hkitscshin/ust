import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroupBaseComponent } from '@dminine/ng-lib';
import { FinanceCategory } from '../../../../../../../ust/src/lib/entities/finance/types';
let FinancialStatementFormComponent = class FinancialStatementFormComponent extends FormGroupBaseComponent {
    constructor(fb) {
        super();
        this.fb = fb;
        this.formGroup = this.createForm();
        this.arrayLength = 1;
    }
    set value(value) {
        if (value && value !== this._value) {
            this.initArrayRow(value);
            this.resetForm(this.convertToFormValue(value));
        }
    }
    get financialStatementData() {
        return this.formGroup.get('financialStatementData');
    }
    increaseRow() {
        this.rows = this.financialStatementData;
        this.rows.push(this.createFormGroup());
    }
    deleteRow(index) {
        this.rows.removeAt(index);
    }
    initArrayRow(value) {
        if (value.financialStatementData &&
            value.financialStatementData.length !== this.financialStatementData.length) {
            for (let i = 0; i < value.financialStatementData.length - this.arrayLength; i++) {
                this.increaseRow();
            }
        }
    }
    createForm() {
        return this.fb.group({
            category: [FinanceCategory.재무상태표, Validators.required],
            financialStatementData: this.fb.array(new Array(this.arrayLength).fill(true).map(() => this.createFormGroup()))
        });
    }
    createFormGroup() {
        return this.fb.group({
            year: [null, Validators.required],
            totalAssets: [null, Validators.required],
            totalLiabilities: [null, Validators.required],
            totalCapital: [null, Validators.required],
        });
    }
};
__decorate([
    Input()
], FinancialStatementFormComponent.prototype, "value", null);
FinancialStatementFormComponent = __decorate([
    Component({
        selector: 'ust-financial-statement-form',
        templateUrl: './financial-statement-form.component.html',
        styleUrls: ['./financial-statement-form.component.scss']
    })
], FinancialStatementFormComponent);
export { FinancialStatementFormComponent };
//# sourceMappingURL=financial-statement-form.component.js.map