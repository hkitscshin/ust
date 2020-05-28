import { Component, OnInit } from '@angular/core';
import { NoticeService } from '../../../../../../../ust/src/lib/entities/notice/notice.service';
import { NoticeState } from '../../../../../../../ust/src/lib/entities/notice/notice.store';
import { Notice } from '../../../../../../../ust/src/lib/entities/notice/types';
import { BoardListBaseComponent } from '../../../../core/modules/board-base/components/board-list-base.component';

@Component({
  selector: 'ust-board-notice',
  templateUrl: './board-notice.component.html',
  styleUrls: ['./board-notice.component.scss']
})
export class BoardNoticeComponent extends BoardListBaseComponent<NoticeState, Notice> implements OnInit {
  constructor(
    protected noticeService: NoticeService
  ) {
    super(noticeService);
  }
}
