import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { SubscriptionBaseComponent, DnlQuery } from '@dminine/ng-lib';
import { Subscription } from 'rxjs';
import { StockService } from '../../../../../../../ust/src/lib/entities/stock/stock.service';
import { Stock } from '../../../../../../../ust/src/lib/entities/stock/types';

@Component({
  selector: 'ust-stock-page',
  templateUrl: './stock-page.component.html',
  styleUrls: ['./stock-page.component.scss']
})
export class StockPageComponent extends SubscriptionBaseComponent implements OnInit {
  stocks: Stock[];
  totalCount: number;

  perPage = 5;
  pageSize = 5;

  constructor(
    private stockService: StockService
  ) {
    super();
  }

  ngOnInit() {
    this.addSubscription(this.initTotalCount());
    this.setSubscription('init-stocks', this.initStocks());
  }

  onPageChange(pageEvent: PageEvent): void {
    this.setSubscription('init-stocks', this.initStocks(pageEvent.pageIndex));
  }

  private initTotalCount(): Subscription {
    return this.stockService.count().subscribe(count => {
      this.totalCount = count;
    });
  }

  private initStocks(page?: number): Subscription {
    const query: DnlQuery = {
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
}
