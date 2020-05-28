import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecruitmentService } from '../../../../../../../ust/src/lib/entities/recruitment/recruitment.service';
import { RecruitmentState } from '../../../../../../../ust/src/lib/entities/recruitment/recruitment.store';
import { Recruitment } from '../../../../../../../ust/src/lib/entities/recruitment/types';
import { Notifier } from '../../../../core/services/notifier.service';
import { AdminBoardAddBaseComponent } from '../../../../modules/admin-board-base/components/admin-board-add-base.component';

@Component({
  selector: 'ust-recruit-add-page',
  templateUrl: './recruit-add-page.component.html',
  styleUrls: ['./recruit-add-page.component.scss']
})
export class RecruitAddPageComponent extends AdminBoardAddBaseComponent<RecruitmentState, Recruitment> {
  boardPath = '/recruit';

  constructor(
    protected router: Router,
    protected recruitmentService: RecruitmentService,
    protected notifier: Notifier
  ) {
    super(router, recruitmentService, notifier);
  }
}
