import { Injectable } from '@angular/core';
import { DnlFirestoreQuery } from '@dminine/ng-lib';
import { StockState, StockStore } from './stock.store';
import { Stock } from './types';


@Injectable({ providedIn: 'root' })
export class StockQuery extends DnlFirestoreQuery<StockState, Stock> {
  constructor(protected store: StockStore) {
    super(store);
  }
}
