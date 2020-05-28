import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { DnlFirestoreQuery } from '@dminine/ng-lib';
let DownloadFileQuery = class DownloadFileQuery extends DnlFirestoreQuery {
    constructor(store) {
        super(store);
        this.store = store;
    }
};
DownloadFileQuery = __decorate([
    Injectable({ providedIn: 'root' })
], DownloadFileQuery);
export { DownloadFileQuery };
//# sourceMappingURL=download-file.query.js.map