import { DnlFirestoreEntity } from '@dminine/ng-lib';
import { BoardFile } from '../../types';


export interface PressRelease extends DnlFirestoreEntity {
  writer: string;
  title: string;
  content: string;
  sourceUrl: string;
  file1: BoardFile;
  file2: BoardFile;
  viewCount: number;
}
