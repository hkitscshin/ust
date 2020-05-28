import { Injectable } from '@angular/core';
import { StoreConfig } from '@datorama/akita';
import { DnlFirestoreStore, DnlFirestoreState } from '@dminine/ng-lib';
import { DownloadFile } from './types';

export interface DownloadFileState extends DnlFirestoreState<DownloadFile> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'downloadFile' })
export class DownloadFileStore extends DnlFirestoreStore<DownloadFileState, DownloadFile> {
  constructor() {
    super();
  }
}
