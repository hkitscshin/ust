import { Component, Input } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { FormGroupBaseComponent } from '@dminine/ng-lib';
import { FinanceCategory, Finance } from '../../../../../../../ust/src/lib/entities/finance/types';

@Component({
  selector: 'ust-financial-statement-form',
  templateUrl: './financial-statement-form.component.html',
  styleUrls: ['./financial-statement-form.component.scss']
})
export class FinancialStatementFormComponent extends FormGroupBaseComponent {
  @Input()
  set value(value: Finance) {
    if (value && value !== this._value) {
      this.initArrayRow(value);
      this.resetForm(this.convertToFormValue(value));
    }
  }
  _value: Finance;

  formGroup = this.createForm();
  rows: FormArray;
  arrayLength = 1;

  constructor(
    private fb: FormBuilder
  ) {
    super();
  }

  get financialStatementData(): FormArray {
    return this.formGroup.get('financialStatementData') as FormArray;
  }

  increaseRow(): void {
    this.rows = this.financialStatementData;
    this.rows.push(this.createFormGroup());
  }

  deleteRow(index: number): void {
    this.rows.removeAt(index);
  }

  private initArrayRow(value: Finance): void {
    if (
      value.financialStatementData &&
      value.financialStatementData.length !== this.financialStatementData.length
    ) {
      for (let i = 0; i < value.financialStatementData.length - this.arrayLength; i++) {
        this.increaseRow();
      }
    }
  }

  private createForm() {
    return this.fb.group({
      category: [FinanceCategory.재무상태표, Validators.required],
      financialStatementData: this.fb.array(
        new Array(this.arrayLength).fill(true).map(() => this.createFormGroup())
      )
    });
  }

  private createFormGroup(): FormGroup {
    return this.fb.group({
      year: [null, Validators.required],
      totalAssets: [null, Validators.required],
      totalLiabilities: [null, Validators.required],
      totalCapital: [null, Validators.required],
    });
  }
}
