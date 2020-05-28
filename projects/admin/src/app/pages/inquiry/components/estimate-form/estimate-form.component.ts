import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroupBaseComponent } from '@dminine/ng-lib';

@Component({
  selector: 'ust-estimate-form',
  templateUrl: './estimate-form.component.html',
  styleUrls: ['./estimate-form.component.scss']
})
export class EstimateFormComponent extends FormGroupBaseComponent {
  formGroup = this.createForm();

  constructor(
    private fb: FormBuilder,
  ) {
    super();
  }

  private createForm() {
    return this.fb.group({
      answer: [null, Validators.required],
      status: [null]
    });
  }
}
