import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CertificationAuthDialogComponent } from '../certification-auth-dialog/certification-auth-dialog.component';
let CertificationGradeListComponent = class CertificationGradeListComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    ngOnInit() {
    }
    openCertificationAuth(filePath) {
        this.dialog.open(CertificationAuthDialogComponent, {
            width: '800px',
            maxWidth: 'calc(100vw - 24px)',
            data: { filePath }
        });
    }
};
CertificationGradeListComponent = __decorate([
    Component({
        selector: 'ust-certification-grade-list',
        templateUrl: './certification-grade-list.component.html',
        styleUrls: ['./certification-grade-list.component.scss']
    })
], CertificationGradeListComponent);
export { CertificationGradeListComponent };
//# sourceMappingURL=certification-grade-list.component.js.map