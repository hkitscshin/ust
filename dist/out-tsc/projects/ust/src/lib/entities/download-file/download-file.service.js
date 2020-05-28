import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { DnlFirestoreService } from '@dminine/ng-lib';
let DownloadFileService = class DownloadFileService extends DnlFirestoreService {
    constructor(downloadFileStore, downloadFileQuery, afs) {
        super(downloadFileStore, downloadFileQuery, afs, 'downloadFiles');
        this.downloadFileStore = downloadFileStore;
        this.downloadFileQuery = downloadFileQuery;
        this.afs = afs;
    }
};
DownloadFileService = __decorate([
    Injectable({ providedIn: 'root' })
], DownloadFileService);
export { DownloadFileService };
//# sourceMappingURL=download-file.service.js.map