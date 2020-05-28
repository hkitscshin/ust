import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DnlFirestoreService } from '@dminine/ng-lib';
import { PressReleaseQuery } from './press-release.query';
import { PressReleaseStore, PressReleaseState } from './press-release.store';
import { PressRelease } from './types';


@Injectable({ providedIn: 'root' })
export class PressReleaseService extends DnlFirestoreService<PressReleaseState, PressRelease> {

  constructor(
    protected pressReleaseStore: PressReleaseStore,
    protected pressReleaseQuery: PressReleaseQuery,
    protected afs: AngularFirestore
  ) {
    super(pressReleaseStore, pressReleaseQuery, afs, 'pressReleases');
  }
}
