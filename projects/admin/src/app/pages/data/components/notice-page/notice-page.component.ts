import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { SubscriptionBaseComponent, DnlQuery } from '@dminine/ng-lib';
import { Subscription } from 'rxjs';
import { NoticeService } from '../../../../../../../ust/src/lib/entities/notice/notice.service';
import { NoticeState } from '../../../../../../../ust/src/lib/entities/notice/notice.store';
import { Notice } from '../../../../../../../ust/src/lib/entities/notice/types';
import { AdminBoardListBaseComponent } from '../../../../modules/admin-board-base/components/admin-board-list-base.component';

@Component({
  selector: 'ust-notice-page',
  templateUrl: './notice-page.component.html',
  styleUrls: ['./notice-page.component.scss']
})
export class NoticePageComponent extends AdminBoardListBaseComponent<NoticeState, Notice> implements OnInit {
  constructor(
    protected noticeService: NoticeService
  ) {
    super(noticeService);
  }
}
