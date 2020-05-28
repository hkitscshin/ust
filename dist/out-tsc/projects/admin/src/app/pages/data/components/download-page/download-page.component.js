import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { AdminBoardListBaseComponent } from '../../../../modules/admin-board-base/components/admin-board-list-base.component';
let DownloadPageComponent = class DownloadPageComponent extends AdminBoardListBaseComponent {
    constructor(downloadFileService) {
        super(downloadFileService);
        this.downloadFileService = downloadFileService;
    }
};
DownloadPageComponent = __decorate([
    Component({
        selector: 'ust-download-page',
        templateUrl: './download-page.component.html',
        styleUrls: ['./download-page.component.scss']
    })
], DownloadPageComponent);
export { DownloadPageComponent };
//# sourceMappingURL=download-page.component.js.map