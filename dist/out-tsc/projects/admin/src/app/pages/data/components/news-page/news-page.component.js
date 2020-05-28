import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { AdminBoardListBaseComponent } from '../../../../modules/admin-board-base/components/admin-board-list-base.component';
let NewsPageComponent = class NewsPageComponent extends AdminBoardListBaseComponent {
    constructor(newsService) {
        super(newsService);
        this.newsService = newsService;
    }
};
NewsPageComponent = __decorate([
    Component({
        selector: 'ust-news-page',
        templateUrl: './news-page.component.html',
        styleUrls: ['./news-page.component.scss']
    })
], NewsPageComponent);
export { NewsPageComponent };
//# sourceMappingURL=news-page.component.js.map