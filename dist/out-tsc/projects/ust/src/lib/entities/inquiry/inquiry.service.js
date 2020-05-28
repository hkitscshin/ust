import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { DnlFirestoreService } from '@dminine/ng-lib';
let InquiryService = class InquiryService extends DnlFirestoreService {
    constructor(inquiryStore, inquiryQuery, afs) {
        super(inquiryStore, inquiryQuery, afs, 'inquiries');
        this.inquiryStore = inquiryStore;
        this.inquiryQuery = inquiryQuery;
        this.afs = afs;
    }
};
InquiryService = __decorate([
    Injectable({ providedIn: 'root' })
], InquiryService);
export { InquiryService };
//# sourceMappingURL=inquiry.service.js.map