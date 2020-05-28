import { Injectable } from '@angular/core';
import { StoreConfig } from '@datorama/akita';
import { DnlFirestoreStore, DnlFirestoreState } from '@dminine/ng-lib';
import { News } from './types';

export interface NewsState extends DnlFirestoreState<News> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'news' })
export class NewsStore extends DnlFirestoreStore<NewsState, News> {
  constructor() {
    super();
  }
}
