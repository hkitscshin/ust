import { Injectable } from '@angular/core';
import { StoreConfig, Store } from '@datorama/akita';

export type Language = 'ko-KR' | 'en-US';

export interface AppState {
  language: Language;
}

export function createInitialState(): AppState {
  return {
    language: 'ko-KR'
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'app' })
export class AppStore extends Store<AppState> {
  constructor() {
    super(createInitialState());
  }
}
