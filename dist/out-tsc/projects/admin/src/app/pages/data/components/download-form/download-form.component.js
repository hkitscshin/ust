import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroupBaseComponent } from '@dminine/ng-lib';
import { DownloadFileCategory } from '../../../../../../../ust/src/lib/entities/download-file/types';
let DownloadFormComponent = class DownloadFormComponent extends FormGroupBaseComponent {
    constructor(fb) {
        super();
        this.fb = fb;
        this.formGroup = this.createForm();
        this.categories = Object.keys(DownloadFileCategory).map(key => DownloadFileCategory[key]);
    }
    get fileTitle() {
        return this.formGroup.get('file').get('title').value;
    }
    createForm() {
        return this.fb.group({
            category: [null, Validators.required],
            file: this.fb.group({
                title: [null, Validators.required],
                url: [null, Validators.required]
            })
        });
    }
};
DownloadFormComponent = __decorate([
    Component({
        selector: 'ust-download-form',
        templateUrl: './download-form.component.html',
        styleUrls: ['./download-form.component.scss']
    })
], DownloadFormComponent);
export { DownloadFormComponent };
//# sourceMappingURL=download-form.component.js.map