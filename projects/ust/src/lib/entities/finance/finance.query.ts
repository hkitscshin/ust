import { Injectable } from '@angular/core';
import { DnlFirestoreQuery } from '@dminine/ng-lib';
import { FinanceState, FinanceStore } from './finance.store';
import { Finance } from './types';


@Injectable({ providedIn: 'root' })
export class FinanceQuery extends DnlFirestoreQuery<FinanceState, Finance> {
  constructor(protected store: FinanceStore) {
    super(store);
  }
}
