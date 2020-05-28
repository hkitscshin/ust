import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecruitmentService } from '../../../../../../../ust/src/lib/entities/recruitment/recruitment.service';
import { RecruitmentState } from '../../../../../../../ust/src/lib/entities/recruitment/recruitment.store';
import { Recruitment } from '../../../../../../../ust/src/lib/entities/recruitment/types';
import { BoardDetailBaseComponent } from '../../../../core/modules/board-base/components/board-detail-base.component';

@Component({
  selector: 'ust-recruit-detail',
  templateUrl: './recruit-detail.component.html',
  styleUrls: ['./recruit-detail.component.scss']
})
export class RecruitDetailComponent extends BoardDetailBaseComponent<RecruitmentState, Recruitment> implements OnInit {

  constructor(
    protected route: ActivatedRoute,
    protected recruitmentService: RecruitmentService
  ) {
    super(route, recruitmentService);
  }
}
