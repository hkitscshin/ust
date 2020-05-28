import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RecruitmentService } from '../../../../../../../ust/src/lib/entities/recruitment/recruitment.service';
import { RecruitmentState } from '../../../../../../../ust/src/lib/entities/recruitment/recruitment.store';
import { Recruitment } from '../../../../../../../ust/src/lib/entities/recruitment/types';
import { Notifier } from '../../../../core/services/notifier.service';
import { AdminBoardModifyBaseComponent } from '../../../../modules/admin-board-base/components/admin-board-modify-base.component';

@Component({
  selector: 'ust-recruit-modify-page',
  templateUrl: './recruit-modify-page.component.html',
  styleUrls: ['./recruit-modify-page.component.scss']
})
export class RecruitModifyPageComponent extends AdminBoardModifyBaseComponent<RecruitmentState, Recruitment> implements OnInit {
  boardPath = '/recruit';

  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    protected recruitmentService: RecruitmentService,
    protected notifier: Notifier
  ) {
    super(router, route, recruitmentService, notifier);
  }
}
