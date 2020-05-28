import { Component, OnInit, Input } from '@angular/core';
import { Grade } from '../../../../../../../ust/src/lib/entities/grade/types';

@Component({
  selector: 'ust-grade-table',
  templateUrl: './grade-table.component.html',
  styleUrls: ['./grade-table.component.scss']
})
export class GradeTableComponent implements OnInit {
  @Input() entities: Grade[];

  displayedColumns = ['createdAt', 'company', 'goods', 'standard', 'status', 'modify'];

  constructor() { }

  ngOnInit() {
  }

}
