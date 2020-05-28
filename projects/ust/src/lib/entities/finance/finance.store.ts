import { Injectable } from '@angular/core';
import { StoreConfig } from '@datorama/akita';
import { DnlFirestoreStore, DnlFirestoreState } from '@dminine/ng-lib';
import { Finance } from './types';

export interface FinanceState extends DnlFirestoreState<Finance> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'finance' })
export class FinanceStore extends DnlFirestoreStore<FinanceState, Finance> {
  constructor() {
    super();
  }
}
