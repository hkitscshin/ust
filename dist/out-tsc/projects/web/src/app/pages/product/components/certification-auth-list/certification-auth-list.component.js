import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { CertificationAuthDialogComponent } from '../certification-auth-dialog/certification-auth-dialog.component';
let CertificationAuthListComponent = class CertificationAuthListComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openCertificationAuth(filePath) {
        this.dialog.open(CertificationAuthDialogComponent, {
            width: '800px',
            maxWidth: 'calc(100vw - 24px)',
            data: { filePath }
        });
    }
};
__decorate([
    Input()
], CertificationAuthListComponent.prototype, "tabIndex", void 0);
CertificationAuthListComponent = __decorate([
    Component({
        selector: 'ust-certification-auth-list',
        templateUrl: './certification-auth-list.component.html',
        styleUrls: ['./certification-auth-list.component.scss']
    })
], CertificationAuthListComponent);
export { CertificationAuthListComponent };
//# sourceMappingURL=certification-auth-list.component.js.map