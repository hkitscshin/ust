import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DnlFirestoreService } from '@dminine/ng-lib';
import { EstimateQuery } from './estimate.query';
import { EstimateStore, EstimateState } from './estimate.store';
import { Estimate } from './types';


@Injectable({ providedIn: 'root' })
export class EstimateService extends DnlFirestoreService<EstimateState, Estimate> {

  constructor(
    protected estimateStore: EstimateStore,
    protected estimateQuery: EstimateQuery,
    protected afs: AngularFirestore
  ) {
    super(estimateStore, estimateQuery, afs, 'estimates');
  }
}
