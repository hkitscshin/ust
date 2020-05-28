import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { SubscriptionBaseComponent } from '@dminine/ng-lib';
let StockPageComponent = class StockPageComponent extends SubscriptionBaseComponent {
    constructor(stockService) {
        super();
        this.stockService = stockService;
        this.perPage = 5;
        this.pageSize = 5;
    }
    ngOnInit() {
        this.addSubscription(this.initTotalCount());
        this.setSubscription('init-stocks', this.initStocks());
    }
    onPageChange(pageEvent) {
        this.setSubscription('init-stocks', this.initStocks(pageEvent.pageIndex));
    }
    initTotalCount() {
        return this.stockService.count().subscribe(count => {
            this.totalCount = count;
        });
    }
    initStocks(page) {
        const query = {
            sorts: [{ field: 'date', direction: 'desc' }],
            perPage: this.perPage,
            page: 1
        };
        if (page >= 0) {
            query.page = page + 1;
        }
        return this.stockService.list(query).subscribe(stocks => {
            this.stocks = stocks;
        });
    }
};
StockPageComponent = __decorate([
    Component({
        selector: 'ust-stock-page',
        templateUrl: './stock-page.component.html',
        styleUrls: ['./stock-page.component.scss']
    })
], StockPageComponent);
export { StockPageComponent };
//# sourceMappingURL=stock-page.component.js.map