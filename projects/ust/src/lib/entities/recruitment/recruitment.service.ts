import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DnlFirestoreService } from '@dminine/ng-lib';
import { RecruitmentQuery } from './recruitment.query';
import { RecruitmentStore, RecruitmentState } from './recruitment.store';
import { Recruitment } from './types';


@Injectable({ providedIn: 'root' })
export class RecruitmentService extends DnlFirestoreService<RecruitmentState, Recruitment> {

  constructor(
    protected recruitmentStore: RecruitmentStore,
    protected recruitmentQuery: RecruitmentQuery,
    protected afs: AngularFirestore
  ) {
    super(recruitmentStore, recruitmentQuery, afs, 'recruitment');
  }
}
