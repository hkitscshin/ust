import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DnlFirestoreService } from '@dminine/ng-lib';
import { FinanceQuery } from './finance.query';
import { FinanceStore, FinanceState } from './finance.store';
import { Finance } from './types';


@Injectable({ providedIn: 'root' })
export class FinanceService extends DnlFirestoreService<FinanceState, Finance> {

  constructor(
    protected financeStore: FinanceStore,
    protected financeQuery: FinanceQuery,
    protected afs: AngularFirestore
  ) {
    super(financeStore, financeQuery, afs, 'finances');
  }
}
