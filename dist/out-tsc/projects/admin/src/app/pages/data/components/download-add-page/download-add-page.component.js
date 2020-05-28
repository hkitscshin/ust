import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { AdminBoardAddBaseComponent } from '../../../../modules/admin-board-base/components/admin-board-add-base.component';
let DownloadAddPageComponent = class DownloadAddPageComponent extends AdminBoardAddBaseComponent {
    constructor(router, downloadFileService, notifier) {
        super(router, downloadFileService, notifier);
        this.router = router;
        this.downloadFileService = downloadFileService;
        this.notifier = notifier;
        this.boardPath = '/data/download';
    }
};
DownloadAddPageComponent = __decorate([
    Component({
        selector: 'ust-download-add-page',
        templateUrl: './download-add-page.component.html',
        styleUrls: ['./download-add-page.component.scss']
    })
], DownloadAddPageComponent);
export { DownloadAddPageComponent };
//# sourceMappingURL=download-add-page.component.js.map