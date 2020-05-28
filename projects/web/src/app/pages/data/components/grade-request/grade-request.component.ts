import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { DnlFireUploader, SubscriptionBaseComponent } from '@dminine/ng-lib';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { take, finalize } from 'rxjs/operators';
import { FunctionsCaller } from '../../../../../../../ust/src/lib/core/services/functions-caller.service';
import { GradeService } from '../../../../../../../ust/src/lib/entities/grade/grade.service';
import { GradeStatus } from '../../../../../../../ust/src/lib/entities/grade/types';

@Component({
  selector: 'ust-grade-request',
  templateUrl: './grade-request.component.html',
  styleUrls: ['./grade-request.component.scss']
})

export class GradeRequestComponent  extends SubscriptionBaseComponent {
  @ViewChild('fileInputRef', { static: true}) fileInputRef: ElementRef;

  gradeForm = this.createForm();
  isLoading = false;
  isUploading = false;


  constructor(
    private fb: FormBuilder,
    private gradeService: GradeService,
    private router: Router,
    private uploader: DnlFireUploader,
    private caller: FunctionsCaller
  ) {
    super();
  }

  get sizesArray(): FormArray {
    return this.gradeForm.get('sizes') as FormArray;
  }

  addSize(): void {
    this.sizesArray.push(this.fb.control(null));
  }

  deleteSize(index: number): void {
    this.sizesArray.removeAt(index);
  }

  get attachmentsArray(): FormArray {
    return this.gradeForm.get('attachments') as FormArray;
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
    const formValue =  this.gradeForm.value;

    const mailOptions = {
      email: 'sales.us@esgroup.net',
      subject: `[성적서 요청] "${formValue.company}"에서 성적서를 요청하였습니다.`,
      text: `업체명: ${formValue.company}
      사업자 등록번호: ${formValue.businessNumber}
      이메일: ${formValue.email}
      담당자 / 연락처: ${formValue.contact}
      요청사이즈: ${formValue.sizes.join(', ')}
      출고일: ${formValue.shipDate}
      원본대조필 직인 여부: ${formValue.officialSeal ? '예' : '부'}`,
      attachments: formValue.attachments
    };

    this.isLoading = true;

    forkJoin([
      this.gradeService.add({ ...formValue, status: GradeStatus.제출 }).pipe(take(1)),
      this.caller.sendMail(mailOptions)
    ]).pipe(
      finalize(() => this.isLoading = false)
    ).subscribe(() => {
      this.router.navigate(['/data/grade-complete']);
    }, err => {
      console.error(err);
      alert(`오류가 발생하였습니다\nError: ${err.message}`);
    });
  }

  private createForm() {
    return this.fb.group({
      company: [null, Validators.required],
      businessNumber: [null, Validators.required],
      email: [null, Validators.required],
      contact: [null, Validators.required],
      sizes: this.fb.array([this.fb.control(null)], Validators.required),
      shipDate: [null],
      officialSeal: [null],
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
 