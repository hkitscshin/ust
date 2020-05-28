import { DnlFirestoreEntity } from '@dminine/ng-lib';
import { Attachment } from '../../types';


export interface Inquiry extends DnlFirestoreEntity {
  name: string;
  email: string;
  title: string;
  content: string;
  attachments: Attachment[];
  answer?: string;
  status: InquiryStatus;
}

export enum InquiryStatus {
  제출 = '제출',
  완료 = '완료'
}
