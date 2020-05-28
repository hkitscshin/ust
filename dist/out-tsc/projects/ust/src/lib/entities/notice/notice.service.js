import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { DnlFirestoreService } from '@dminine/ng-lib';
let NoticeService = class NoticeService extends DnlFirestoreService {
    constructor(noticeStore, noticeQuery, afs) {
        super(noticeStore, noticeQuery, afs, 'notices');
        this.noticeStore = noticeStore;
        this.noticeQuery = noticeQuery;
        this.afs = afs;
    }
};
NoticeService = __decorate([
    Injectable({ providedIn: 'root' })
], NoticeService);
export { NoticeService };
//# sourceMappingURL=notice.service.js.map