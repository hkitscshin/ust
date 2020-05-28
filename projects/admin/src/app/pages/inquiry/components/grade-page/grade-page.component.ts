import { Component, OnInit } from '@angular/core';
import { GradeService } from '../../../../../../../ust/src/lib/entities/grade/grade.service';
import { GradeState } from '../../../../../../../ust/src/lib/entities/grade/grade.store';
import { Grade } from '../../../../../../../ust/src/lib/entities/grade/types';
import { AdminBoardListBaseComponent } from '../../../../modules/admin-board-base/components/admin-board-list-base.component';

@Component({
  selector: 'ust-grade-page',
  templateUrl: './grade-page.component.html',
  styleUrls: ['./grade-page.component.scss']
})
export class GradePageComponent extends AdminBoardListBaseComponent<GradeState, Grade> implements OnInit {
  constructor(
    protected gradeService: GradeService
  ) {
    super(gradeService);
  }
}
