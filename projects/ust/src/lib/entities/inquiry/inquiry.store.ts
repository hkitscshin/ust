import { Injectable } from '@angular/core';
import { StoreConfig } from '@datorama/akita';
import { DnlFirestoreStore, DnlFirestoreState } from '@dminine/ng-lib';
import { Inquiry } from './types';

export interface InquiryState extends DnlFirestoreState<Inquiry> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'inquiry' })
export class InquiryStore extends DnlFirestoreStore<InquiryState, Inquiry> {
  constructor() {
    super();
  }
}
