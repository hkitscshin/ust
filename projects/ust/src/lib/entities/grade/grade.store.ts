import { Injectable } from '@angular/core';
import { StoreConfig } from '@datorama/akita';
import { DnlFirestoreStore, DnlFirestoreState } from '@dminine/ng-lib';
import { Grade } from './types';

export interface GradeState extends DnlFirestoreState<Grade> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'grade' })
export class GradeStore extends DnlFirestoreStore<GradeState, Grade> {
  constructor() {
    super();
  }
}
