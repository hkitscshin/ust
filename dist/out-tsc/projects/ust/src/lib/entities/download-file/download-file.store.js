import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { StoreConfig } from '@datorama/akita';
import { DnlFirestoreStore } from '@dminine/ng-lib';
let DownloadFileStore = class DownloadFileStore extends DnlFirestoreStore {
    constructor() {
        super();
    }
};
DownloadFileStore = __decorate([
    Injectable({ providedIn: 'root' }),
    StoreConfig({ name: 'downloadFile' })
], DownloadFileStore);
export { DownloadFileStore };
//# sourceMappingURL=download-file.store.js.map