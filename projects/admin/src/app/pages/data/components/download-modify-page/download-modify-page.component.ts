import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DownloadFileService } from '../../../../../../../ust/src/lib/entities/download-file/download-file.service';
import { DownloadFileState } from '../../../../../../../ust/src/lib/entities/download-file/download-file.store';
import { DownloadFile } from '../../../../../../../ust/src/lib/entities/download-file/types';
import { Notifier } from '../../../../core/services/notifier.service';
import { AdminBoardModifyBaseComponent } from '../../../../modules/admin-board-base/components/admin-board-modify-base.component';

@Component({
  selector: 'ust-download-modify-page',
  templateUrl: './download-modify-page.component.html',
  styleUrls: ['./download-modify-page.component.scss']
})
export class DownloadModifyPageComponent extends AdminBoardModifyBaseComponent<DownloadFileState, DownloadFile> implements OnInit {
  boardPath = '/data/download';

  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    protected downloadFileService: DownloadFileService,
    protected notifier: Notifier
  ) {
    super(router, route, downloadFileService, notifier);
  }
}
