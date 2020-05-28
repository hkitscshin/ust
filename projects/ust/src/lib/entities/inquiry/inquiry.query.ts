import { Injectable } from '@angular/core';
import { DnlFirestoreQuery } from '@dminine/ng-lib';
import { InquiryState, InquiryStore } from './inquiry.store';
import { Inquiry } from './types';


@Injectable({ providedIn: 'root' })
export class InquiryQuery extends DnlFirestoreQuery<InquiryState, Inquiry> {
  constructor(protected store: InquiryStore) {
    super(store);
  }
}
