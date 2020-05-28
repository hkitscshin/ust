import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { BoardListBaseComponent } from '../../../../core/modules/board-base/components/board-list-base.component';
let BoardCompanyComponent = class BoardCompanyComponent extends BoardListBaseComponent {
    constructor(newsService) {
        super(newsService);
        this.newsService = newsService;
        this.perPage = 6;
        this.perBlock = 5;
    }
};
BoardCompanyComponent = __decorate([
    Component({
        selector: 'ust-board-company',
        templateUrl: './board-company.component.html',
        styleUrls: ['./board-company.component.scss']
    })
], BoardCompanyComponent);
export { BoardCompanyComponent };
//# sourceMappingURL=board-company.component.js.map