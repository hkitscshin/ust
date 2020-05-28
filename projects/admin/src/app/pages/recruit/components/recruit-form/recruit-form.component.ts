import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroupBaseComponent } from '@dminine/ng-lib';
import { RecruitmentStatus } from '../../../../../../../ust/src/lib/entities/recruitment/types';

@Component({
  selector: 'ust-recruit-form',
  templateUrl: './recruit-form.component.html',
  styleUrls: ['./recruit-form.component.scss']
})
export class RecruitFormComponent extends FormGroupBaseComponent {
  formGroup = this.createForm();
  statuses = Object.keys(RecruitmentStatus).map(key => RecruitmentStatus[key]);

  constructor(
    private fb: FormBuilder
  ) {
    super();
  }

  get jobkoreaUrl(): string {
    return this.formGroup.get('jobkoreaUrl').value;
  }

  get saraminUrl(): string {
    return this.formGroup.get('saraminUrl').value;
  }

  get worknetUrl(): string {
    return this.formGroup.get('worknetUrl').value;
  }

  moveToUrl(url: string): void {
    window.open(url, '_blank');
  }

  private createForm() {
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
}
