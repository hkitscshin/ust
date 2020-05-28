import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { AdminBoardModifyBaseComponent } from '../../../../modules/admin-board-base/components/admin-board-modify-base.component';
let DownloadModifyPageComponent = class DownloadModifyPageComponent extends AdminBoardModifyBaseComponent {
    constructor(router, route, downloadFileService, notifier) {
        super(router, route, downloadFileService, notifier);
        this.router = router;
        this.route = route;
        this.downloadFileService = downloadFileService;
        this.notifier = notifier;
        this.boardPath = '/data/download';
    }
};
DownloadModifyPageComponent = __decorate([
    Component({
        selector: 'ust-download-modify-page',
        templateUrl: './download-modify-page.component.html',
        styleUrls: ['./download-modify-page.component.scss']
    })
], DownloadModifyPageComponent);
export { DownloadModifyPageComponent };
//# sourceMappingURL=download-modify-page.component.js.map