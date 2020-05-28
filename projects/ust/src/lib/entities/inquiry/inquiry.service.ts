import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DnlFirestoreService } from '@dminine/ng-lib';
import { InquiryQuery } from './inquiry.query';
import { InquiryStore, InquiryState } from './inquiry.store';
import { Inquiry } from './types';


@Injectable({ providedIn: 'root' })
export class InquiryService extends DnlFirestoreService<InquiryState, Inquiry> {

  constructor(
    protected inquiryStore: InquiryStore,
    protected inquiryQuery: InquiryQuery,
    protected afs: AngularFirestore
  ) {
    super(inquiryStore, inquiryQuery, afs, 'inquiries');
  }
}
