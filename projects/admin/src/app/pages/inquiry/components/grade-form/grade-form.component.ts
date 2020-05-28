import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroupBaseComponent } from '@dminine/ng-lib';

@Component({
  selector: 'ust-grade-form',
  templateUrl: './grade-form.component.html',
  styleUrls: ['./grade-form.component.scss']
})
export class GradeFormComponent extends FormGroupBaseComponent {
  formGroup = this.createForm();

  constructor(
    private fb: FormBuilder,
  ) {
    super();
  }

  get certificationTitle(): string {
    return this.formGroup.get('certification').get('title').value;
  }

  private createForm() {
    return this.fb.group({
      certification: this.fb.group({
        title: [null, Validators.required],
        url: [null, Validators.required]
      }),
      status: [null]
    });
  }
}
