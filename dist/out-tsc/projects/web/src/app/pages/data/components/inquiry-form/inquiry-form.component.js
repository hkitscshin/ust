import { __decorate } from "tslib";
import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
let InquiryFormComponent = class InquiryFormComponent {
    constructor(fb, inquiryService, router, uploader) {
        this.fb = fb;
        this.inquiryService = inquiryService;
        this.router = router;
        this.uploader = uploader;
        this.isLoading = false;
        this.submitted = new EventEmitter();
        this.inquiryForm = this.createForm();
        this.isUploading = false;
    }
    ngOnInit() {
    }
    get attachmentsArray() {
        return this.inquiryForm.get('attachments');
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
        const formValue = this.inquiryForm.value;
        this.submitted.emit(formValue);
    }
    createForm() {
        return this.fb.group({
            name: [null, Validators.required],
            email: [null, Validators.required],
            title: [null],
            content: [null],
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
], InquiryFormComponent.prototype, "fileInputRef", void 0);
__decorate([
    Input()
], InquiryFormComponent.prototype, "isLoading", void 0);
__decorate([
    Output()
], InquiryFormComponent.prototype, "submitted", void 0);
InquiryFormComponent = __decorate([
    Component({
        selector: 'ust-inquiry-form',
        templateUrl: './inquiry-form.component.html',
        styleUrls: ['./inquiry-form.component.scss']
    })
], InquiryFormComponent);
export { InquiryFormComponent };
//# sourceMappingURL=inquiry-form.component.js.map