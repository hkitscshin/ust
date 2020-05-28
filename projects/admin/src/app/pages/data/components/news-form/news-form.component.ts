import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroupBaseComponent } from '@dminine/ng-lib';

@Component({
  selector: 'ust-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss']
})
export class NewsFormComponent extends FormGroupBaseComponent {
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
      imageUrl: [null],
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
