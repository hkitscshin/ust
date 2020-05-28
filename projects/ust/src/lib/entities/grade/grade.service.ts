import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DnlFirestoreService } from '@dminine/ng-lib';
import { GradeQuery } from './grade.query';
import { GradeStore, GradeState } from './grade.store';
import { Grade } from './types';


@Injectable({ providedIn: 'root' })
export class GradeService extends DnlFirestoreService<GradeState, Grade> {

  constructor(
    protected gradeStore: GradeStore,
    protected gradeQuery: GradeQuery,
    protected afs: AngularFirestore
  ) {
    super(gradeStore, gradeQuery, afs, 'grades');
  }
}
