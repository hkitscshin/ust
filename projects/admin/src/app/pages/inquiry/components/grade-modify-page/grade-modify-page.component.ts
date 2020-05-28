import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FunctionsCaller, SendMailRequest } from '../../../../../../../ust/src/lib/core/services/functions-caller.service';
import { GradeService } from '../../../../../../../ust/src/lib/entities/grade/grade.service';
import { GradeState } from '../../../../../../../ust/src/lib/entities/grade/grade.store';
import { Grade } from '../../../../../../../ust/src/lib/entities/grade/types';
import { Notifier } from '../../../../core/services/notifier.service';
import { AdminBoardModifyBaseComponent } from '../../../../modules/admin-board-base/components/admin-board-modify-base.component';

@Component({
  selector: 'ust-grade-modify-page',
  templateUrl: './grade-modify-page.component.html',
  styleUrls: ['./grade-modify-page.component.scss']
})
export class GradeModifyPageComponent extends AdminBoardModifyBaseComponent<GradeState, Grade> implements OnInit {
  boardPath = '/inquiry/grade';

  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    protected gradeService: GradeService,
    protected notifier: Notifier,
    private caller: FunctionsCaller
  ) {
    super(router, route, gradeService, notifier);
  }

  protected modifyCallback(): Promise<void> {
    const request: SendMailRequest = {
      email: this.entity.email,
      subject: '[UST] 성적서요청에 대한 답변입니다',
      text: '성적서',
      attachments: [{ fileName: this.formValue.certification.title, url: this.formValue.certification.url }]
    };

    return this.caller.sendMail(request).toPromise();
  }
}
