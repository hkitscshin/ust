import { DnlFirestoreEntity } from '@dminine/ng-lib';
import { BoardFile } from '../../types';


export interface News extends DnlFirestoreEntity {
  writer: string;
  title: string;
  content: string;
  imageUrl: string;
  file1: BoardFile;
  file2: BoardFile;
  viewCount: number;
}
