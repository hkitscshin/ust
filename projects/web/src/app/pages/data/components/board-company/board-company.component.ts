import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../../../../../ust/src/lib/entities/news/news.service';
import { NewsState } from '../../../../../../../ust/src/lib/entities/news/news.store';
import { News } from '../../../../../../../ust/src/lib/entities/news/types';
import { BoardListBaseComponent } from '../../../../core/modules/board-base/components/board-list-base.component';

@Component({
  selector: 'ust-board-company',
  templateUrl: './board-company.component.html',
  styleUrls: ['./board-company.component.scss']
})
export class BoardCompanyComponent extends BoardListBaseComponent<NewsState, News> implements OnInit {
  perPage = 6;
  perBlock = 5;

  constructor(
    protected newsService: NewsService
  ) {
    super(newsService);
  }
}
