import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroupBaseComponent } from '@dminine/ng-lib';

@Component({
  selector: 'ust-inquiry-form',
  templateUrl: './inquiry-form.component.html',
  styleUrls: ['./inquiry-form.component.scss']
})
export class InquiryFormComponent extends FormGroupBaseComponent {
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
