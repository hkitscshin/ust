import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { PaginatorBlockBaseComponent } from '@dminine/ng-lib';
let PaginationComponent = class PaginationComponent extends PaginatorBlockBaseComponent {
    constructor() {
        super();
    }
    get perPage() { return this._perPage; }
    set perPage(perPage) {
        this._perPage = perPage;
        this.totalPage = Math.ceil(this.totalCount / this.perPage);
    }
    get perBlock() { return this._perBlock; }
    set perBlock(perBlock) {
        this._perBlock = perBlock;
        if (this.currentPage > this.totalPage) {
            this.changePage(this.totalPage);
        }
        else {
            this.makeBlock();
        }
    }
};
__decorate([
    Input()
], PaginationComponent.prototype, "perPage", null);
__decorate([
    Input()
], PaginationComponent.prototype, "perBlock", null);
PaginationComponent = __decorate([
    Component({
        selector: 'ust-pagination',
        templateUrl: './pagination.component.html',
        styleUrls: ['./pagination.component.scss']
    })
], PaginationComponent);
export { PaginationComponent };
//# sourceMappingURL=pagination.component.js.map