import { Component, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { FormGroupBaseComponent } from '@dminine/ng-lib';
import { FinanceCategory, Finance } from '../../../../../../../ust/src/lib/entities/finance/types';

@Component({
  selector: 'ust-income-statement-form',
  templateUrl: './income-statement-form.component.html',
  styleUrls: ['./income-statement-form.component.scss']
})
export class IncomeStatementFormComponent extends FormGroupBaseComponent {
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

  get incomeStatementData(): FormArray {
    return this.formGroup.get('incomeStatementData') as FormArray;
  }

  increaseRow(): void {
    this.rows = this.incomeStatementData;
    this.rows.push(this.createFormGroup());
  }

  deleteRow(index: number): void {
    this.rows.removeAt(index);
  }

  private initArrayRow(value: Finance): void {
    if (
      value.incomeStatementData &&
      value.incomeStatementData.length !== this.incomeStatementData.length
    ) {
      for (let i = 0; i < value.incomeStatementData.length - this.arrayLength; i++) {
        this.increaseRow();
      }
    }
  }

  private createForm() {
    return this.fb.group({
      category: [FinanceCategory.손익계산서, Validators.required],
      incomeStatementData: this.fb.array(
        new Array(this.arrayLength).fill(true).map(() => this.createFormGroup())
      )
    });
  }

  private createFormGroup(): FormGroup {
    return this.fb.group({
      year: [null, Validators.required],
      sales: [null, Validators.required],
      netProfit: [null, Validators.required],
      operatingProfit: [null, Validators.required]
    });
  }
}
