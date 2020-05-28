import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NoticeService } from '../../../../../../../ust/src/lib/entities/notice/notice.service';
import { NoticeState } from '../../../../../../../ust/src/lib/entities/notice/notice.store';
import { Notice } from '../../../../../../../ust/src/lib/entities/notice/types';
import { Notifier } from '../../../../core/services/notifier.service';
import { AdminBoardAddBaseComponent } from '../../../../modules/admin-board-base/components/admin-board-add-base.component';

@Component({
  selector: 'ust-notice-add-page',
  templateUrl: './notice-add-page.component.html',
  styleUrls: ['./notice-add-page.component.scss']
})
export class NoticeAddPageComponent extends AdminBoardAddBaseComponent<NoticeState, Notice> {
  boardPath = '/data/notice';

  constructor(
    protected router: Router,
    protected noticeService: NoticeService,
    protected notifier: Notifier,
  ) {
    super(router, noticeService, notifier);
  }
}
