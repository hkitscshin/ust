import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DnlFirestoreService } from '@dminine/ng-lib';
import { DownloadFileQuery } from './download-file.query';
import { DownloadFileStore, DownloadFileState } from './download-file.store';
import { DownloadFile } from './types';


@Injectable({ providedIn: 'root' })
export class DownloadFileService extends DnlFirestoreService<DownloadFileState, DownloadFile> {

  constructor(
    protected downloadFileStore: DownloadFileStore,
    protected downloadFileQuery: DownloadFileQuery,
    protected afs: AngularFirestore
  ) {
    super(downloadFileStore, downloadFileQuery, afs, 'downloadFiles');
  }
}
