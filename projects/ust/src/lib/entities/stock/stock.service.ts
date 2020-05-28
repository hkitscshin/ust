import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DnlFirestoreService } from '@dminine/ng-lib';
import { StockQuery } from './stock.query';
import { StockStore, StockState } from './stock.store';
import { Stock } from './types';


@Injectable({ providedIn: 'root' })
export class StockService extends DnlFirestoreService<StockState, Stock> {

  constructor(
    protected stockStore: StockStore,
    protected stockQuery: StockQuery,
    protected afs: AngularFirestore
  ) {
    super(stockStore, stockQuery, afs, 'stocks');
  }
}
