import { Injectable } from '@angular/core';
import { StoreConfig } from '@datorama/akita';
import { DnlFirestoreStore, DnlFirestoreState } from '@dminine/ng-lib';
import { Notice } from './types';

export interface NoticeState extends DnlFirestoreState<Notice> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'notice' })
export class NoticeStore extends DnlFirestoreStore<NoticeState, Notice> {
  constructor() {
    super();
  }
}
