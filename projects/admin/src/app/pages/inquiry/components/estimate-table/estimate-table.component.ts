import { Component, OnInit, Input } from '@angular/core';
import { Estimate } from '../../../../../../../ust/src/lib/entities/estimate/types';

@Component({
  selector: 'ust-estimate-table',
  templateUrl: './estimate-table.component.html',
  styleUrls: ['./estimate-table.component.scss']
})
export class EstimateTableComponent implements OnInit {
  @Input() entities: Estimate[];

  displayedColumns = ['createdAt', 'email', 'goods', 'steelType', 'standard', 'status', 'modify'];

  constructor() { }

  ngOnInit() {
  }

}
