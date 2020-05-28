import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoticeService } from '../../../../../../../ust/src/lib/entities/notice/notice.service';
import { NoticeState } from '../../../../../../../ust/src/lib/entities/notice/notice.store';
import { Notice } from '../../../../../../../ust/src/lib/entities/notice/types';
import { Notifier } from '../../../../core/services/notifier.service';
import { AdminBoardModifyBaseComponent } from '../../../../modules/admin-board-base/components/admin-board-modify-base.component';

@Component({
  selector: 'ust-notice-modify-page',
  templateUrl: './notice-modify-page.component.html',
  styleUrls: ['./notice-modify-page.component.scss']
})
export class NoticeModifyPageComponent extends AdminBoardModifyBaseComponent<NoticeState, Notice> implements OnInit {
  boardPath = '/data/notice';

  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    protected noticeService: NoticeService,
    protected notifier: Notifier
  ) {
    super(router, route, noticeService, notifier);
  }
}
