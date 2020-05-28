import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../../../../../ust/src/lib/entities/news/news.service';
import { NewsState } from '../../../../../../../ust/src/lib/entities/news/news.store';
import { News } from '../../../../../../../ust/src/lib/entities/news/types';
import { AdminBoardListBaseComponent } from '../../../../modules/admin-board-base/components/admin-board-list-base.component';

@Component({
  selector: 'ust-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent extends AdminBoardListBaseComponent<NewsState, News> implements OnInit {
  constructor(
    protected newsService: NewsService
  ) {
    super(newsService);
  }
}
