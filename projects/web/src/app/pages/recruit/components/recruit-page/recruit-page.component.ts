import { Component, OnInit } from '@angular/core';
import { RecruitmentService } from '../../../../../../../ust/src/lib/entities/recruitment/recruitment.service';
import { RecruitmentState } from '../../../../../../../ust/src/lib/entities/recruitment/recruitment.store';
import { Recruitment } from '../../../../../../../ust/src/lib/entities/recruitment/types';
import { BoardListBaseComponent } from '../../../../core/modules/board-base/components/board-list-base.component';

@Component({
  selector: 'ust-recruit-page',
  templateUrl: './recruit-page.component.html',
  styleUrls: ['./recruit-page.component.scss']
})
export class RecruitPageComponent extends BoardListBaseComponent<RecruitmentState, Recruitment> implements OnInit {
  constructor(
    protected recruitmentService: RecruitmentService
  ) {
    super(recruitmentService);
  }
}
