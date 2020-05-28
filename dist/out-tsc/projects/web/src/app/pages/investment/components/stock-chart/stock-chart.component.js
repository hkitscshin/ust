import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { SubscriptionBaseComponent } from '@dminine/ng-lib';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { getDateString, firestoreTimestampToDate, firestoreTimestampFromDate, getTodayNumber } from '../../../../../../../ust/src/lib/utils';
let StockChartComponent = class StockChartComponent extends SubscriptionBaseComponent {
    constructor(stockService) {
        super();
        this.stockService = stockService;
        this.candlestickChartConfig = CandlestickChartConfig;
        this.lineChartConfig = LineChartConfig;
        this.buttonIndex$ = new BehaviorSubject(1);
        this.baseFilters = [];
    }
    ngOnInit() {
        this.addSubscription(this.initStocks());
    }
    onButtonClick(index) {
        this.buttonIndex$.next(index);
    }
    initStocks() {
        return this.buttonIndex$.pipe(switchMap((buttonIndex) => {
            const query = {
                filters: this.baseFilters,
                sorts: [{ field: 'date', direction: 'asc' }]
            };
            query.filters = this.filterByButtonIndex(buttonIndex).concat(query.filters);
            return this.stockService.list(query);
        })).subscribe(stocks => {
            this.stocks = stocks;
            this.setCandlestickChartData();
            this.setLineChartData();
        });
    }
    filterByButtonIndex(buttonIndex) {
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
                    { field: 'date', comparison: '>=', value: aWeekAgo },
                    { logical: 'and', field: 'date', comparison: '<', value: today }
                ];
            case 2:
                return [
                    { field: 'date', comparison: '>=', value: aMonthAgo },
                    { logical: 'and', field: 'date', comparison: '<', value: today }
                ];
            case 3:
                return [
                    { field: 'date', comparison: '>=', value: aYearAgo },
                    { logical: 'and', field: 'date', comparison: '<', value: today }
                ];
        }
    }
    setCandlestickChartData() {
        this.candlestickChartData = this.stocks.map(stock => {
            const [year, month, day] = getDateString(firestoreTimestampToDate(stock.date));
            return [`${year}.${month}.${day}`, stock.lowPrice, stock.openingPrice, stock.closingPrice, stock.highPrice];
        });
    }
    setLineChartData() {
        this.lineChartData = this.stocks.map(stock => {
            const [year, month, day] = getDateString(firestoreTimestampToDate(stock.date));
            return [`${year}.${month}.${day}`, stock.closingPrice];
        });
    }
};
StockChartComponent = __decorate([
    Component({
        selector: 'ust-stock-chart',
        templateUrl: './stock-chart.component.html',
        styleUrls: ['./stock-chart.component.scss']
    })
], StockChartComponent);
export { StockChartComponent };
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
//# sourceMappingURL=stock-chart.component.js.map