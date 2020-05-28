import { DnlFirestoreEntity } from '@dminine/ng-lib';
import { BoardFile, Attachment } from '../../types';


export interface Grade extends DnlFirestoreEntity {
  company: string;
  businessNumber: string;
  email: string;
  contact: string;
  sizes: string[];
  shipDate: string;
  officialSeal: boolean;
  attachments: Attachment[];
  certification?: BoardFile;
  status: GradeStatus;
}

export enum GradeStatus {
  제출 = '제출',
  완료 = '완료'
}
