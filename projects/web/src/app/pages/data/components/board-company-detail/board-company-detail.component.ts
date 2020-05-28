import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../../../../../../ust/src/lib/entities/news/news.service';
import { NewsState } from '../../../../../../../ust/src/lib/entities/news/news.store';
import { News } from '../../../../../../../ust/src/lib/entities/news/types';
import { BoardDetailBaseComponent } from '../../../../core/modules/board-base/components/board-detail-base.component';

@Component({
  selector: 'ust-board-company-detail',
  templateUrl: './board-company-detail.component.html',
  styleUrls: ['./board-company-detail.component.scss']
})
export class BoardCompanyDetailComponent extends BoardDetailBaseComponent<NewsState, News> implements OnInit {

  constructor(
    protected route: ActivatedRoute,
    protected newsService: NewsService
  ) {
    super(route, newsService);
  }

  ngOnInit() {
    super.ngOnInit();
    this.increaseViewCount();
  }

  private increaseViewCount(): void {
    if (this.entity) {
      this.newsService.update(this.entity.id, { viewCount: this.entity.viewCount + 1 });
    }
  }
}
