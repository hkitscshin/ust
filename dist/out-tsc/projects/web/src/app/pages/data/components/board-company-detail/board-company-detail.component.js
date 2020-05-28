import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { BoardDetailBaseComponent } from '../../../../core/modules/board-base/components/board-detail-base.component';
let BoardCompanyDetailComponent = class BoardCompanyDetailComponent extends BoardDetailBaseComponent {
    constructor(route, newsService) {
        super(route, newsService);
        this.route = route;
        this.newsService = newsService;
    }
    ngOnInit() {
        super.ngOnInit();
        this.increaseViewCount();
    }
    increaseViewCount() {
        if (this.entity) {
            this.newsService.update(this.entity.id, { viewCount: this.entity.viewCount + 1 });
        }
    }
};
BoardCompanyDetailComponent = __decorate([
    Component({
        selector: 'ust-board-company-detail',
        templateUrl: './board-company-detail.component.html',
        styleUrls: ['./board-company-detail.component.scss']
    })
], BoardCompanyDetailComponent);
export { BoardCompanyDetailComponent };
//# sourceMappingURL=board-company-detail.component.js.map