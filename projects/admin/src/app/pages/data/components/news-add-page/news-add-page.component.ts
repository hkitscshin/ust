import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../../../../../../../ust/src/lib/entities/news/news.service';
import { NewsState } from '../../../../../../../ust/src/lib/entities/news/news.store';
import { News } from '../../../../../../../ust/src/lib/entities/news/types';
import { Notifier } from '../../../../core/services/notifier.service';
import { AdminBoardAddBaseComponent } from '../../../../modules/admin-board-base/components/admin-board-add-base.component';

@Component({
  selector: 'ust-news-add-page',
  templateUrl: './news-add-page.component.html',
  styleUrls: ['./news-add-page.component.scss']
})
export class NewsAddPageComponent extends AdminBoardAddBaseComponent<NewsState, News> {
  boardPath = '/data/news';

  constructor(
    protected router: Router,
    protected newsService: NewsService,
    protected notifier: Notifier
  ) {
    super(router, newsService, notifier);
  }
}
