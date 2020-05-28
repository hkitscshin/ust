import { firestore } from 'firebase/app';

export interface BoardFile {
  title: string;
  url: string;
}

export type Timestamp = firestore.Timestamp;

export interface Attachment {
  fileName: string;
  url: string;
}
