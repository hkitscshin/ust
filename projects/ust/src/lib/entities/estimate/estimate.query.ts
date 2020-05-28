import { Injectable } from '@angular/core';
import { DnlFirestoreQuery } from '@dminine/ng-lib';
import { EstimateState, EstimateStore } from './estimate.store';
import { Estimate } from './types';


@Injectable({ providedIn: 'root' })
export class EstimateQuery extends DnlFirestoreQuery<EstimateState, Estimate> {
  constructor(protected store: EstimateStore) {
    super(store);
  }
}
