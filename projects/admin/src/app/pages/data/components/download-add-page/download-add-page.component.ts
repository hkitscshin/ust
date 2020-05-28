import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DownloadFileService } from '../../../../../../../ust/src/lib/entities/download-file/download-file.service';
import { DownloadFileState } from '../../../../../../../ust/src/lib/entities/download-file/download-file.store';
import { DownloadFile } from '../../../../../../../ust/src/lib/entities/download-file/types';
import { Notifier } from '../../../../core/services/notifier.service';
import { AdminBoardAddBaseComponent } from '../../../../modules/admin-board-base/components/admin-board-add-base.component';

@Component({
  selector: 'ust-download-add-page',
  templateUrl: './download-add-page.component.html',
  styleUrls: ['./download-add-page.component.scss']
})
export class DownloadAddPageComponent extends AdminBoardAddBaseComponent<DownloadFileState, DownloadFile> {
  boardPath = '/data/download';

  constructor(
    protected router: Router,
    protected downloadFileService: DownloadFileService,
    protected notifier: Notifier
  ) {
    super(router, downloadFileService, notifier);
  }
}
