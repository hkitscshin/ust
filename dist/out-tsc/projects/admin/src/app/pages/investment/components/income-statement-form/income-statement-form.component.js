import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroupBaseComponent } from '@dminine/ng-lib';
import { FinanceCategory } from '../../../../../../../ust/src/lib/entities/finance/types';
let IncomeStatementFormComponent = class IncomeStatementFormComponent extends FormGroupBaseComponent {
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
    get incomeStatementData() {
        return this.formGroup.get('incomeStatementData');
    }
    increaseRow() {
        this.rows = this.incomeStatementData;
        this.rows.push(this.createFormGroup());
    }
    deleteRow(index) {
        this.rows.removeAt(index);
    }
    initArrayRow(value) {
        if (value.incomeStatementData &&
            value.incomeStatementData.length !== this.incomeStatementData.length) {
            for (let i = 0; i < value.incomeStatementData.length - this.arrayLength; i++) {
                this.increaseRow();
            }
        }
    }
    createForm() {
        return this.fb.group({
            category: [FinanceCategory.손익계산서, Validators.required],
            incomeStatementData: this.fb.array(new Array(this.arrayLength).fill(true).map(() => this.createFormGroup()))
        });
    }
    createFormGroup() {
        return this.fb.group({
            year: [null, Validators.required],
            sales: [null, Validators.required],
            netProfit: [null, Validators.required],
            operatingProfit: [null, Validators.required]
        });
    }
};
__decorate([
    Input()
], IncomeStatementFormComponent.prototype, "value", null);
IncomeStatementFormComponent = __decorate([
    Component({
        selector: 'ust-income-statement-form',
        templateUrl: './income-statement-form.component.html',
        styleUrls: ['./income-statement-form.component.scss']
    })
], IncomeStatementFormComponent);
export { IncomeStatementFormComponent };
//# sourceMappingURL=income-statement-form.component.js.map