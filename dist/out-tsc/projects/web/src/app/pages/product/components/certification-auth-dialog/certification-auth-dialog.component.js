import { __decorate, __param } from "tslib";
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
let CertificationAuthDialogComponent = class CertificationAuthDialogComponent {
    constructor(data) {
        this.data = data;
        this.filePath = this.data.filePath;
    }
    ngOnInit() {
    }
};
CertificationAuthDialogComponent = __decorate([
    Component({
        selector: 'ust-certification-auth-dialog',
        templateUrl: './certification-auth-dialog.component.html',
        styleUrls: ['./certification-auth-dialog.component.scss']
    }),
    __param(0, Inject(MAT_DIALOG_DATA))
], CertificationAuthDialogComponent);
export { CertificationAuthDialogComponent };
//# sourceMappingURL=certification-auth-dialog.component.js.map