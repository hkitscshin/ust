import { Component, OnInit, Input } from '@angular/core';
import { DownloadFile } from '../../../../../../../ust/src/lib/entities/download-file/types';

@Component({
  selector: 'ust-download-table',
  templateUrl: './download-table.component.html',
  styleUrls: ['./download-table.component.scss']
})
export class DownloadTableComponent implements OnInit {
  @Input() files: DownloadFile[];

  displayedColumns = ['no', 'category', 'createdAt', 'modify'];

  constructor() { }

  ngOnInit() {
  }

}
