import { Injectable } from '@angular/core';
import { DnlFirestoreQuery } from '@dminine/ng-lib';
import { NewsState, NewsStore } from './news.store';
import { News } from './types';


@Injectable({ providedIn: 'root' })
export class NewsQuery extends DnlFirestoreQuery<NewsState, News> {
  constructor(protected store: NewsStore) {
    super(store);
  }
}
