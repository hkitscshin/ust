import { Component, OnInit } from '@angular/core';
import { SubscriptionBaseComponent } from '@dminine/ng-lib';
import { Subscription } from 'rxjs';
import * as FileSaver from 'file-saver';
import { DownloadFileService } from '../../../../../../../ust/src/lib/entities/download-file/download-file.service';
import { DownloadFileCategory, DownloadFile } from '../../../../../../../ust/src/lib/entities/download-file/types';
import { BoardFile } from '../../../../../../../ust/src/lib/types';


@Component({
  selector: 'ust-download-page',
  templateUrl: './download-page.component.html',
  styleUrls: ['./download-page.component.scss']
})
export class DownloadPageComponent extends SubscriptionBaseComponent implements OnInit {
  brochure: DownloadFile;
  application: DownloadFile;

  constructor(
    private downloadFileService: DownloadFileService
  ) {
    super();
  }

  ngOnInit() {
    this.addSubscription(this.initDownloadFiles());
  }

  download(file: BoardFile) {
    const request = new XMLHttpRequest();
    const url = file.url;

    request.open('GET', url, true);

    request.responseType = 'blob';
    request.onload = () => {
      const data = new Blob([request.response], {
        type: 'application/pdf'
      });
      FileSaver.saveAs(data, file.title);
    };

    request.send();
  }

  private initDownloadFiles(): Subscription {
    return this.downloadFileService.list().subscribe(files => {
      this.brochure = files.find(file => file.category === DownloadFileCategory.브로슈어);
      this.application = files.find(file => file.category === DownloadFileCategory.자재승인신청서);
    });
  }
}
