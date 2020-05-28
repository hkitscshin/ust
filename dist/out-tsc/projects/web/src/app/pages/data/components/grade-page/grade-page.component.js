import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { take, finalize } from 'rxjs/operators';
import { GradeStatus } from '../../../../../../../ust/src/lib/entities/grade/types';
let GradePageComponent = class GradePageComponent {
    constructor(fb, gradeService, router, uploader, caller) {
        this.fb = fb;
        this.gradeService = gradeService;
        this.router = router;
        this.uploader = uploader;
        this.caller = caller;
        this.gradeForm = this.createForm();
        this.isLoading = false;
        this.isUploading = false;
    }
    get sizesArray() {
        return this.gradeForm.get('sizes');
    }
    addSize() {
        this.sizesArray.push(this.fb.control(null));
    }
    deleteSize(index) {
        this.sizesArray.removeAt(index);
    }
    get attachmentsArray() {
        return this.gradeForm.get('attachments');
    }
    addAttachment(file) {
        if (file) {
            const fileName = file.name;
            this.isUploading = true;
            this.uploader.upload(file, 'attachments').getDownloadURL().pipe(finalize(() => this.isUploading = false)).subscribe(url => {
                this.attachmentsArray.push(this.makeAttachmentFormGroup(fileName, url));
                this.fileInputRef.nativeElement.value = null;
            });
        }
    }
    deleteAttachment(index) {
        this.attachmentsArray.removeAt(index);
    }
    submit() {
        const formValue = this.gradeForm.value;
        const mailOptions = {
            email: 'sales.us@esgroup.net',
            subject: `[성적서 요청] "${formValue.company}"에서 성적서를 요청하였습니다`,
            text: `업체명: ${formValue.company}
사업자 등록번호: ${formValue.businessNumber}
이메일: ${formValue.email}
담당자 / 연락처: ${formValue.contact}
요청사이즈: ${formValue.sizes.join(', ')}
출고일: ${formValue.shipDate}
원본대조필 직인 여부: ${formValue.officialSeal ? '여' : '부'}`,
            attachments: formValue.attachments
        };
        this.isLoading = true;
        forkJoin([
            this.gradeService.add(Object.assign(Object.assign({}, formValue), { status: GradeStatus.제출 })).pipe(take(1)),
            this.caller.sendMail(mailOptions)
        ]).pipe(finalize(() => this.isLoading = false)).subscribe(() => {
            this.router.navigate(['/data/grade-complete']);
        }, err => {
            console.error(err);
            alert(`오류가 발생하였습니다\nError: ${err.message}`);
        });
    }
    createForm() {
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
    makeAttachmentFormGroup(fileName, url) {
        return this.fb.group({
            fileName: [fileName],
            url: [url]
        });
    }
};
__decorate([
    ViewChild('fileInputRef', { static: true })
], GradePageComponent.prototype, "fileInputRef", void 0);
GradePageComponent = __decorate([
    Component({
        selector: 'ust-grade-page',
        templateUrl: './grade-page.component.html',
        styleUrls: ['./grade-page.component.scss']
    })
], GradePageComponent);
export { GradePageComponent };
//# sourceMappingURL=grade-page.component.js.map