var TinymceComponent_1;
import { __decorate } from "tslib";
import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormControlBaseComponent } from '@dminine/ng-lib';
let TinymceComponent = TinymceComponent_1 = class TinymceComponent extends FormControlBaseComponent {
    // tslint:enable:max-line-length
    constructor(uploader) {
        super(null);
        this.uploader = uploader;
        // tslint:disable:max-line-length
        this.config = {
            base_url: '/tinymce',
            suffix: '.min',
            plugins: 'print preview fullpage paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
            menubar: 'file edit view insert format tools table help',
            toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
            images_upload_handler: this.imagesUploadHandler.bind(this),
            height: 600,
            language_url: '/assets/tinymce/langs/ko_KR.js',
            language: 'ko_KR'
        };
    }
    imagesUploadHandler(blobInfo, success, failure) {
        const uploadTask = this.uploader.upload(blobInfo.blob(), this.name, blobInfo.filename());
        uploadTask.getDownloadURL().subscribe(success);
        uploadTask.catch(failure);
    }
    convertToEmitValue(value) {
        if (value === '<!DOCTYPE html>\n' +
            '<html>\n' +
            '<head>\n' +
            '</head>\n' +
            '<body>\n' +
            '\n' +
            '</body>\n' +
            '</html>') {
            return null;
        }
        return value;
    }
};
__decorate([
    Input()
], TinymceComponent.prototype, "name", void 0);
TinymceComponent = TinymceComponent_1 = __decorate([
    Component({
        selector: 'ust-tinymce',
        templateUrl: './tinymce.component.html',
        styleUrls: ['./tinymce.component.scss'],
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => TinymceComponent_1),
                multi: true
            }
        ]
    })
], TinymceComponent);
export { TinymceComponent };
//# sourceMappingURL=tinymce.component.js.map