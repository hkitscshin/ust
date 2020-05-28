import { Injectable } from '@angular/core';
import { StoreConfig } from '@datorama/akita';
import { DnlFirestoreStore, DnlFirestoreState } from '@dminine/ng-lib';
import { PressRelease } from './types';

export interface PressReleaseState extends DnlFirestoreState<PressRelease> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'pressRelease' })
export class PressReleaseStore extends DnlFirestoreStore<PressReleaseState, PressRelease> {
  constructor() {
    super();
  }
}
