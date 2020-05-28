import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { AdminBoardModifyBaseComponent } from '../../../../modules/admin-board-base/components/admin-board-modify-base.component';
let NewsModifyPageComponent = class NewsModifyPageComponent extends AdminBoardModifyBaseComponent {
    constructor(router, route, newsService, notifier) {
        super(router, route, newsService, notifier);
        this.router = router;
        this.route = route;
        this.newsService = newsService;
        this.notifier = notifier;
        this.boardPath = '/data/news';
    }
};
NewsModifyPageComponent = __decorate([
    Component({
        selector: 'ust-news-modify-page',
        templateUrl: './news-modify-page.component.html',
        styleUrls: ['./news-modify-page.component.scss']
    })
], NewsModifyPageComponent);
export { NewsModifyPageComponent };
//# sourceMappingURL=news-modify-page.component.js.map