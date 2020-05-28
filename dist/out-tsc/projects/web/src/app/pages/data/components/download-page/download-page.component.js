import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { SubscriptionBaseComponent } from '@dminine/ng-lib';
import * as FileSaver from 'file-saver';
import { DownloadFileCategory } from '../../../../../../../ust/src/lib/entities/download-file/types';
let DownloadPageComponent = class DownloadPageComponent extends SubscriptionBaseComponent {
    constructor(downloadFileService) {
        super();
        this.downloadFileService = downloadFileService;
    }
    ngOnInit() {
        this.addSubscription(this.initDownloadFiles());
    }
    download(file) {
        const request = new XMLHttpRequest();
        const url = file.url;
        request.open('GET', url, true);
        request.responseType = 'blob';
        request.onload = () => {
            const data = new Blob([request.response], {
                type: 'application/pdf'
            });
            FileSaver.saveAs(data, file.title);
        };
        request.send();
    }
    initDownloadFiles() {
        return this.downloadFileService.list().subscribe(files => {
            this.brochure = files.find(file => file.category === DownloadFileCategory.브로슈어);
            this.application = files.find(file => file.category === DownloadFileCategory.자재승인신청서);
        });
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