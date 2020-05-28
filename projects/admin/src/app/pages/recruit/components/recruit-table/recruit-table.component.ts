import { Component, Input } from '@angular/core';
import { Recruitment } from '../../../../../../../ust/src/lib/entities/recruitment/types';

@Component({
  selector: 'ust-recruit-table',
  templateUrl: './recruit-table.component.html',
  styleUrls: ['./recruit-table.component.scss']
})
export class RecruitTableComponent {
  @Input() recruitment: Recruitment[];

  displayedColumns = ['no', 'title', 'date', 'status', 'createdAt', 'modify'];

  constructor() { }
}
