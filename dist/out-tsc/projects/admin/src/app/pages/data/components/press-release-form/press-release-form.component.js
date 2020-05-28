import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroupBaseComponent } from '@dminine/ng-lib';
let PressReleaseFormComponent = class PressReleaseFormComponent extends FormGroupBaseComponent {
    constructor(fb) {
        super();
        this.fb = fb;
        this.formGroup = this.createForm();
    }
    get fileTitle1() {
        return this.formGroup.get('file1').get('title').value;
    }
    get fileTitle2() {
        return this.formGroup.get('file2').get('title').value;
    }
    createForm() {
        return this.fb.group({
            title: [null, Validators.required],
            content: [null, Validators.required],
            sourceUrl: [null],
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
};
PressReleaseFormComponent = __decorate([
    Component({
        selector: 'ust-press-release-form',
        templateUrl: './press-release-form.component.html',
        styleUrls: ['./press-release-form.component.scss']
    })
], PressReleaseFormComponent);
export { PressReleaseFormComponent };
//# sourceMappingURL=press-release-form.component.js.map