import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroupBaseComponent } from '@dminine/ng-lib';
import { DownloadFileCategory } from '../../../../../../../ust/src/lib/entities/download-file/types';

@Component({
  selector: 'ust-download-form',
  templateUrl: './download-form.component.html',
  styleUrls: ['./download-form.component.scss']
})
export class DownloadFormComponent extends FormGroupBaseComponent {
  formGroup = this.createForm();
  categories = Object.keys(DownloadFileCategory).map(key => DownloadFileCategory[key]);

  constructor(
    private fb: FormBuilder
  ) {
    super();
  }

  get fileTitle(): string {
    return this.formGroup.get('file').get('title').value;
  }

  private createForm() {
    return this.fb.group({
      category: [null, Validators.required],
      file: this.fb.group({
        title: [null, Validators.required],
        url: [null, Validators.required]
      })
    });
  }
}
