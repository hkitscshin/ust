import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroupBaseComponent } from '@dminine/ng-lib';
import { BoardFile } from '../../../../../../../ust/src/lib/types';

@Component({
  selector: 'ust-press-release-form',
  templateUrl: './press-release-form.component.html',
  styleUrls: ['./press-release-form.component.scss']
})
export class PressReleaseFormComponent extends FormGroupBaseComponent {
  formGroup = this.createForm();

  constructor(
    private fb: FormBuilder
  ) {
    super();
  }

  get fileTitle1(): string {
    return this.formGroup.get('file1').get('title').value;
  }

  get fileTitle2(): string {
    return this.formGroup.get('file2').get('title').value;
  }

  private createForm() {
    return this.fb.group({
      title: [null, Validators.required],
      content: [null, Validators.required],
      sourceUrl: [null],
      file1: this.fb.group({
        title: [null],
        url: [null]
      }),
      file2: this.fb.group({
        title: [null],
        url: [null]
      }),
      viewCount: [0]
    });
  }
}
