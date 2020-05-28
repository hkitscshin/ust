import { Component, ViewChild, ElementRef, forwardRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  DnlFireUploader,
  DnlGroupValueAccessor,
  HashMap,
  AbstractControlType, DNL_GROUP_VALUE_ACCESSOR
} from '@dminine/ng-lib';
import { DnlFormGroup } from '@dminine/ng-lib/lib/form/form-group';

@Component({
  selector: 'ust-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
  providers: [
    {
      provide: DNL_GROUP_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileUploaderComponent),
    }
  ]
})
export class FileUploaderComponent implements DnlGroupValueAccessor {
  @ViewChild('fileInputRef', { static: true }) fileInputRef: ElementRef;

  formGroup: DnlFormGroup = this.createForm() as DnlFormGroup;
  controlTypeMap: HashMap<AbstractControlType> = {
    title: 'formControl',
    url: 'formControl',
  };

  constructor(
    private fb: FormBuilder,
    private uploader: DnlFireUploader,
  ) { }

  onButtonClick() {
    this.fileInputRef.nativeElement.click();
  }

  uploadFile(file: File) {
    if (file) {
      const uploadTask = this.uploader.upload(file, 'board-file');
      uploadTask.getDownloadURL().subscribe(url => {
        this.formGroup.setValue({
          title: file.name,
          url
        });

        this.fileInputRef.nativeElement.value = '';
      });
    }
  }

  private createForm(): FormGroup {
    return this.fb.group({
      title: [null, Validators.required],
      url: [null, Validators.required]
    });
  }
}
