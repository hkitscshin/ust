import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { DnlFirestoreService } from '@dminine/ng-lib';
let NewsService = class NewsService extends DnlFirestoreService {
    constructor(newsStore, newsQuery, afs) {
        super(newsStore, newsQuery, afs, 'news');
        this.newsStore = newsStore;
        this.newsQuery = newsQuery;
        this.afs = afs;
    }
};
NewsService = __decorate([
    Injectable({ providedIn: 'root' })
], NewsService);
export { NewsService };
//# sourceMappingURL=news.service.js.map