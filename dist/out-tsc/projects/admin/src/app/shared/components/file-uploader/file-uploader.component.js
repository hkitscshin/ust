var FileUploaderComponent_1;
import { __decorate } from "tslib";
import { Component, ViewChild, forwardRef } from '@angular/core';
import { Validators } from '@angular/forms';
import { DNL_GROUP_VALUE_ACCESSOR } from '@dminine/ng-lib';
let FileUploaderComponent = FileUploaderComponent_1 = class FileUploaderComponent {
    constructor(fb, uploader) {
        this.fb = fb;
        this.uploader = uploader;
        this.formGroup = this.createForm();
        this.controlTypeMap = {
            title: 'formControl',
            url: 'formControl',
        };
    }
    onButtonClick() {
        this.fileInputRef.nativeElement.click();
    }
    uploadFile(file) {
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
    createForm() {
        return this.fb.group({
            title: [null, Validators.required],
            url: [null, Validators.required]
        });
    }
};
__decorate([
    ViewChild('fileInputRef', { static: true })
], FileUploaderComponent.prototype, "fileInputRef", void 0);
FileUploaderComponent = FileUploaderComponent_1 = __decorate([
    Component({
        selector: 'ust-file-uploader',
        templateUrl: './file-uploader.component.html',
        styleUrls: ['./file-uploader.component.scss'],
        providers: [
            {
                provide: DNL_GROUP_VALUE_ACCESSOR,
                useExisting: forwardRef(() => FileUploaderComponent_1),
            }
        ]
    })
], FileUploaderComponent);
export { FileUploaderComponent };
//# sourceMappingURL=file-uploader.component.js.map