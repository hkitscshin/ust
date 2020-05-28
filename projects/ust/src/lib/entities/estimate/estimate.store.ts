import { Injectable } from '@angular/core';
import { StoreConfig } from '@datorama/akita';
import { DnlFirestoreStore, DnlFirestoreState } from '@dminine/ng-lib';
import { Estimate } from './types';

export interface EstimateState extends DnlFirestoreState<Estimate> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'estimate' })
export class EstimateStore extends DnlFirestoreStore<EstimateState, Estimate> {
  constructor() {
    super();
  }
}
