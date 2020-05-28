import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let DownloadTableComponent = class DownloadTableComponent {
    constructor() {
        this.displayedColumns = ['no', 'category', 'createdAt', 'modify'];
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], DownloadTableComponent.prototype, "files", void 0);
DownloadTableComponent = __decorate([
    Component({
        selector: 'ust-download-table',
        templateUrl: './download-table.component.html',
        styleUrls: ['./download-table.component.scss']
    })
], DownloadTableComponent);
export { DownloadTableComponent };
//# sourceMappingURL=download-table.component.js.map