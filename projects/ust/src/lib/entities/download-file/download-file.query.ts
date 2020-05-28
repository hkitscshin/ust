import { Injectable } from '@angular/core';
import { DnlFirestoreQuery } from '@dminine/ng-lib';
import { DownloadFileState, DownloadFileStore } from './download-file.store';
import { DownloadFile } from './types';


@Injectable({ providedIn: 'root' })
export class DownloadFileQuery extends DnlFirestoreQuery<DownloadFileState, DownloadFile> {
  constructor(protected store: DownloadFileStore) {
    super(store);
  }
}
