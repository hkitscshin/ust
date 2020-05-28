import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DnlFirestoreService } from '@dminine/ng-lib';
import { NoticeQuery } from './notice.query';
import { NoticeStore, NoticeState } from './notice.store';
import { Notice } from './types';


@Injectable({ providedIn: 'root' })
export class NoticeService extends DnlFirestoreService<NoticeState, Notice> {

  constructor(
    protected noticeStore: NoticeStore,
    protected noticeQuery: NoticeQuery,
    protected afs: AngularFirestore
  ) {
    super(noticeStore, noticeQuery, afs, 'notices');
  }
}
