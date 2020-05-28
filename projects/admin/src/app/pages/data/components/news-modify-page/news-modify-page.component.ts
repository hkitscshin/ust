import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NewsService } from '../../../../../../../ust/src/lib/entities/news/news.service';
import { NewsState } from '../../../../../../../ust/src/lib/entities/news/news.store';
import { News } from '../../../../../../../ust/src/lib/entities/news/types';
import { Notifier } from '../../../../core/services/notifier.service';
import { AdminBoardModifyBaseComponent } from '../../../../modules/admin-board-base/components/admin-board-modify-base.component';

@Component({
  selector: 'ust-news-modify-page',
  templateUrl: './news-modify-page.component.html',
  styleUrls: ['./news-modify-page.component.scss']
})
export class NewsModifyPageComponent extends AdminBoardModifyBaseComponent<NewsState, News> implements OnInit {
  boardPath = '/data/news';

  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    protected newsService: NewsService,
    protected notifier: Notifier
  ) {
    super(router, route, newsService, notifier);
  }
}
