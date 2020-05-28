import { Component, OnInit, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DnlFireUploader } from '@dminine/ng-lib';
import { finalize } from 'rxjs/operators';
import { InquiryService } from '../../../../../../../ust/src/lib/entities/inquiry/inquiry.service';

@Component({
  selector: 'ust-inquiry-form',
  templateUrl: './inquiry-form.component.html',
  styleUrls: ['./inquiry-form.component.scss']
})
export class InquiryFormComponent implements OnInit {
  @ViewChild('fileInputRef', { static: true }) fileInputRef: ElementRef;

  @Input() isLoading = false;

  @Output() submitted = new EventEmitter();

  inquiryForm = this.createForm();
  isUploading = false;

  constructor(
    private fb: FormBuilder,
    private inquiryService: InquiryService,
    private router: Router,
    private uploader: DnlFireUploader
  ) { }

  ngOnInit() {
  }

  get attachmentsArray(): FormArray {
    return this.inquiryForm.get('attachments') as FormArray;
  }

  addAttachment(file: File): void {
    if (file) {
      const fileName = file.name;

      this.isUploading = true;

      this.uploader.upload(file, 'attachments').getDownloadURL().pipe(
        finalize(() => this.isUploading = false)
      ).subscribe(url => {
        this.attachmentsArray.push(this.makeAttachmentFormGroup(fileName, url));
        this.fileInputRef.nativeElement.value = null;
      });
    }
  }

  deleteAttachment(index: number): void {
    this.attachmentsArray.removeAt(index);
  }

  submit() {
    const formValue = this.inquiryForm.value;
    this.submitted.emit(formValue);
  }

  private createForm() {
    return this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      title: [null],
      content: [null],
      attachments: this.fb.array([])
    });
  }

  private makeAttachmentFormGroup(fileName: string, url: string) {
    return this.fb.group({
      fileName: [fileName],
      url: [url]
    });
  }
}
