import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { StoreConfig } from '@datorama/akita';
import { DnlFirestoreStore } from '@dminine/ng-lib';
let NewsStore = class NewsStore extends DnlFirestoreStore {
    constructor() {
        super();
    }
};
NewsStore = __decorate([
    Injectable({ providedIn: 'root' }),
    StoreConfig({ name: 'news' })
], NewsStore);
export { NewsStore };
//# sourceMappingURL=news.store.js.map