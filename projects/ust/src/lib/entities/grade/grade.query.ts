import { Injectable } from '@angular/core';
import { DnlFirestoreQuery } from '@dminine/ng-lib';
import { GradeState, GradeStore } from './grade.store';
import { Grade } from './types';


@Injectable({ providedIn: 'root' })
export class GradeQuery extends DnlFirestoreQuery<GradeState, Grade> {
  constructor(protected store: GradeStore) {
    super(store);
  }
}
