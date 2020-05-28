import { Injectable } from '@angular/core';
import { StoreConfig } from '@datorama/akita';
import { DnlFirestoreStore, DnlFirestoreState } from '@dminine/ng-lib';
import { Stock } from './types';

export interface StockState extends DnlFirestoreState<Stock> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'stock' })
export class StockStore extends DnlFirestoreStore<StockState, Stock> {
  constructor() {
    super();
  }
}
