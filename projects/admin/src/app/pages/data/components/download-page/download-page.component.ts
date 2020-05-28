import { Component, OnInit } from '@angular/core';
import { DownloadFileService } from '../../../../../../../ust/src/lib/entities/download-file/download-file.service';
import { DownloadFileState } from '../../../../../../../ust/src/lib/entities/download-file/download-file.store';
import { DownloadFile } from '../../../../../../../ust/src/lib/entities/download-file/types';
import { AdminBoardListBaseComponent } from '../../../../modules/admin-board-base/components/admin-board-list-base.component';

@Component({
  selector: 'ust-download-page',
  templateUrl: './download-page.component.html',
  styleUrls: ['./download-page.component.scss']
})
export class DownloadPageComponent extends AdminBoardListBaseComponent<DownloadFileState, DownloadFile> implements OnInit {
  constructor(
    protected downloadFileService: DownloadFileService
  ) {
    super(downloadFileService);
  }
}
