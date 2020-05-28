import { Component, OnInit } from '@angular/core';
import { SubscriptionBaseComponent, DnlQuery, DnlFilter } from '@dminine/ng-lib';
import { BehaviorSubject, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { StockService } from '../../../../../../../ust/src/lib/entities/stock/stock.service';
import { Stock } from '../../../../../../../ust/src/lib/entities/stock/types';
import {
  getDateString,
  firestoreTimestampToDate,
  firestoreTimestampFromDate, getTodayNumber
} from '../../../../../../../ust/src/lib/utils';

@Component({
  selector: 'ust-stock-chart',
  templateUrl: './stock-chart.component.html',
  styleUrls: ['./stock-chart.component.scss']
})
export class StockChartComponent extends SubscriptionBaseComponent implements OnInit {
  candlestickChartConfig = CandlestickChartConfig;
  lineChartConfig = LineChartConfig;
  stocks: Stock[];
  candlestickChartData: Array<Array<string | number>>;
  lineChartData: Array<Array<string | number>>;

  buttonIndex$ = new BehaviorSubject<number>(1);
  baseFilters: DnlFilter<Stock>[] = [];

  constructor(
    private stockService: StockService
  ) {
    super();
  }

  ngOnInit() {
    this.addSubscription(this.initStocks());
  }

  onButtonClick(index: number) {
    this.buttonIndex$.next(index);
  }

  private initStocks(): Subscription {
    return this.buttonIndex$.pipe(
      switchMap((buttonIndex) => {
        const query: DnlQuery = {
          filters: this.baseFilters,
          sorts: [{ field: 'date', direction: 'asc' }]
        };

        query.filters = this.filterByButtonIndex(buttonIndex).concat(query.filters);

        return this.stockService.list(query);
      })
    ).subscribe(stocks => {
      this.stocks = stocks;
      this.setCandlestickChartData();
      this.setLineChartData();
    });
  }

  private filterByButtonIndex(buttonIndex: number): DnlFilter[] {
    const [year, month, day] = getTodayNumber();
    const today = firestoreTimestampFromDate(new Date(year, month - 1, day));
    const aWeekAgo = firestoreTimestampFromDate(new Date(year, month - 1, day - 7));
    const aMonthAgo = firestoreTimestampFromDate(new Date(year, month - 2, day));
    const aYearAgo = firestoreTimestampFromDate(new Date(year - 1, month - 1, day));

    switch (buttonIndex) {
      case 0:
        return [];
      case 1:
        return [
          { field: 'date', comparison: '>=', value: aWeekAgo} as DnlFilter,
          { logical: 'and', field: 'date', comparison: '<', value: today} as DnlFilter
        ];
      case 2:
        return [
          { field: 'date', comparison: '>=', value: aMonthAgo} as DnlFilter,
          { logical: 'and', field: 'date', comparison: '<', value: today} as DnlFilter
        ];
      case 3:
        return [
          { field: 'date', comparison: '>=', value: aYearAgo} as DnlFilter,
          { logical: 'and', field: 'date', comparison: '<', value: today} as DnlFilter
        ];
    }
  }

  private setCandlestickChartData(): void {
    this.candlestickChartData = this.stocks.map(stock => {
      const [year, month, day] = getDateString(firestoreTimestampToDate(stock.date));
      return [`${year}.${month}.${day}`, stock.lowPrice, stock.openingPrice, stock.closingPrice, stock.highPrice];
    });
  }

  private setLineChartData(): void {
    this.lineChartData = this.stocks.map(stock => {
      const [year, month, day] = getDateString(firestoreTimestampToDate(stock.date));
      return [`${year}.${month}.${day}`, stock.closingPrice];
    });
  }
}

const CandlestickChartConfig = {
  type: 'CandlestickChart',
  columnNames: null,
  options: {
    legend: {
      position: 'none'
    },
    vAxis: {
      gridlines: {
        color: 'transparent'
      }
    },
    hAxis: {
      color: '#ea532c'
    },
    series: {
      0: { color: '#ea532c' },
    }
  },
  width: 956,
  height: 307
};

const LineChartConfig = {
  type: 'LineChart',
  columnNames: ['날짜', '종가'],
  options: {
    legend: {
      position: 'none'
    },
    vAxis: {
      gridlines: {
        color: 'transparent'
      }
    },
    hAxis: {
      color: '#ea532c'
    },
    series: {
      0: { color: '#ea532c' },
    }
  },
  width: 956,
  height: 307
};
