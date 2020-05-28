import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DnlFirestoreService } from '@dminine/ng-lib';
import { NewsQuery } from './news.query';
import { NewsStore, NewsState } from './news.store';
import { News } from './types';


@Injectable({ providedIn: 'root' })
export class NewsService extends DnlFirestoreService<NewsState, News> {

  constructor(
    protected newsStore: NewsStore,
    protected newsQuery: NewsQuery,
    protected afs: AngularFirestore
  ) {
    super(newsStore, newsQuery, afs, 'news');
  }
}
