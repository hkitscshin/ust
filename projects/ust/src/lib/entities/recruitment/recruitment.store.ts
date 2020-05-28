import { Injectable } from '@angular/core';
import { StoreConfig } from '@datorama/akita';
import { DnlFirestoreStore, DnlFirestoreState } from '@dminine/ng-lib';
import { Recruitment } from './types';

export interface RecruitmentState extends DnlFirestoreState<Recruitment> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'recruitment' })
export class RecruitmentStore extends DnlFirestoreStore<RecruitmentState, Recruitment> {
  constructor() {
    super();
  }
}
