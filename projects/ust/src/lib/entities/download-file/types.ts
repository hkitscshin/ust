import { DnlFirestoreEntity } from '@dminine/ng-lib';
import { BoardFile } from '../../types';


export interface DownloadFile extends DnlFirestoreEntity {
  category: DownloadFileCategory;
  file: BoardFile;
}

export enum DownloadFileCategory {
  브로슈어 = '브로슈어',
  자재승인신청서 = '자재승인신청서'
}
