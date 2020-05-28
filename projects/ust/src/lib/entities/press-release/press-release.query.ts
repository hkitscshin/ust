import { Injectable } from '@angular/core';
import { DnlFirestoreQuery } from '@dminine/ng-lib';
import { PressReleaseState, PressReleaseStore } from './press-release.store';
import { PressRelease } from './types';


@Injectable({ providedIn: 'root' })
export class PressReleaseQuery extends DnlFirestoreQuery<PressReleaseState, PressRelease> {
  constructor(protected store: PressReleaseStore) {
    super(store);
  }
}
