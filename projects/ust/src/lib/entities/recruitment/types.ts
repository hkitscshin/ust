import { DnlFirestoreEntity } from '@dminine/ng-lib';
import { Timestamp } from '../../types';


export interface Recruitment extends DnlFirestoreEntity {
  writer: string;
  title: string;
  content: string;
  startAt: Timestamp;
  endAt: Timestamp;
  status: RecruitmentStatus;
  jobkoreaUrl: string;
  saraminUrl: string;
  worknetUrl: string;
}

export enum RecruitmentStatus {
  진행중 = '진행중',
  모집마감 = '모집마감'
}
