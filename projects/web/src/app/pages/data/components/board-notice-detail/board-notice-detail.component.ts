import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticeService } from '../../../../../../../ust/src/lib/entities/notice/notice.service';
import { NoticeState } from '../../../../../../../ust/src/lib/entities/notice/notice.store';
import { Notice } from '../../../../../../../ust/src/lib/entities/notice/types';
import { BoardDetailBaseComponent } from '../../../../core/modules/board-base/components/board-detail-base.component';

@Component({
  selector: 'ust-board-notice-detail',
  templateUrl: './board-notice-detail.component.html',
  styleUrls: ['./board-notice-detail.component.scss']
})
export class BoardNoticeDetailComponent extends BoardDetailBaseComponent<NoticeState, Notice> implements OnInit {
  constructor(
    protected route: ActivatedRoute,
    protected noticeService: NoticeService
  ) {
    super(route, noticeService);
  }

  ngOnInit() {
    super.ngOnInit();
    this.increaseViewCount();
  }

  private increaseViewCount(): void {
    if (this.entity) {
      this.noticeService.update(this.entity.id, { viewCount: this.entity.viewCount + 1 });
    }
  }
}
