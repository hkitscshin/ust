import { Component, OnInit, Input } from '@angular/core';
import { DnlFirestoreEntity } from '@dminine/ng-lib';
import { Notice } from '../../../../../../../ust/src/lib/entities/notice/types';

@Component({
  selector: 'ust-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent<E extends DnlFirestoreEntity> implements OnInit {
  @Input() entities: E[];

  displayedColumns = ['no', 'title', 'createdAt', 'modify'];

  constructor() { }

  ngOnInit() {
  }

}
