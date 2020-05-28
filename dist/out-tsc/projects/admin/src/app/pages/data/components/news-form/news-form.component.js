import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroupBaseComponent } from '@dminine/ng-lib';
let NewsFormComponent = class NewsFormComponent extends FormGroupBaseComponent {
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
            imageUrl: [null],
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
NewsFormComponent = __decorate([
    Component({
        selector: 'ust-news-form',
        templateUrl: './news-form.component.html',
        styleUrls: ['./news-form.component.scss']
    })
], NewsFormComponent);
export { NewsFormComponent };
//# sourceMappingURL=news-form.component.js.map