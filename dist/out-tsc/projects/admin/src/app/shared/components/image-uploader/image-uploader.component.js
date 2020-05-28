var ImageUploaderComponent_1;
import { __decorate } from "tslib";
import { Component, ViewChild, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormControlBaseComponent } from '@dminine/ng-lib';
let ImageUploaderComponent = ImageUploaderComponent_1 = class ImageUploaderComponent extends FormControlBaseComponent {
    constructor(uploader) {
        super();
        this.uploader = uploader;
        this.width = 100;
        this.height = 100;
    }
    onButtonClick() {
        this.fileInputRef.nativeElement.click();
    }
    uploadFile(file) {
        if (file) {
            const uploadTask = this.uploader.upload(file, 'board-image');
            uploadTask.getDownloadURL().subscribe(url => {
                this.formCtrl.setValue(url);
                this.fileInputRef.nativeElement.value = '';
            });
        }
    }
};
__decorate([
    Input()
], ImageUploaderComponent.prototype, "width", void 0);
__decorate([
    Input()
], ImageUploaderComponent.prototype, "height", void 0);
__decorate([
    ViewChild('fileInputRef', { static: true })
], ImageUploaderComponent.prototype, "fileInputRef", void 0);
ImageUploaderComponent = ImageUploaderComponent_1 = __decorate([
    Component({
        selector: 'ust-image-uploader',
        templateUrl: './image-uploader.component.html',
        styleUrls: ['./image-uploader.component.scss'],
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => ImageUploaderComponent_1),
                multi: true
            }
        ]
    })
], ImageUploaderComponent);
export { ImageUploaderComponent };
//# sourceMappingURL=image-uploader.component.js.map