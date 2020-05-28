import { Injectable } from '@angular/core';
import { DnlFirestoreQuery } from '@dminine/ng-lib';
import { RecruitmentState, RecruitmentStore } from './recruitment.store';
import { Recruitment } from './types';


@Injectable({ providedIn: 'root' })
export class RecruitmentQuery extends DnlFirestoreQuery<RecruitmentState, Recruitment> {
  constructor(protected store: RecruitmentStore) {
    super(store);
  }
}
