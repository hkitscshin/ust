import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { AdminBoardAddBaseComponent } from '../../../../modules/admin-board-base/components/admin-board-add-base.component';
let NewsAddPageComponent = class NewsAddPageComponent extends AdminBoardAddBaseComponent {
    constructor(router, newsService, notifier) {
        super(router, newsService, notifier);
        this.router = router;
        this.newsService = newsService;
        this.notifier = notifier;
        this.boardPath = '/data/news';
    }
};
NewsAddPageComponent = __decorate([
    Component({
        selector: 'ust-news-add-page',
        templateUrl: './news-add-page.component.html',
        styleUrls: ['./news-add-page.component.scss']
    })
], NewsAddPageComponent);
export { NewsAddPageComponent };
//# sourceMappingURL=news-add-page.component.js.map