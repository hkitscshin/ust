import { Injectable } from '@angular/core';
import { DnlFirestoreQuery } from '@dminine/ng-lib';
import { NoticeState, NoticeStore } from './notice.store';
import { Notice } from './types';


@Injectable({ providedIn: 'root' })
export class NoticeQuery extends DnlFirestoreQuery<NoticeState, Notice> {
  constructor(protected store: NoticeStore) {
    super(store);
  }
}
