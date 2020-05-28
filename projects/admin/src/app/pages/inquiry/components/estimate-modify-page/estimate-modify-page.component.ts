import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SendMailRequest, FunctionsCaller } from '../../../../../../../ust/src/lib/core/services/functions-caller.service';
import { EstimateService } from '../../../../../../../ust/src/lib/entities/estimate/estimate.service';
import { EstimateState } from '../../../../../../../ust/src/lib/entities/estimate/estimate.store';
import { Estimate } from '../../../../../../../ust/src/lib/entities/estimate/types';
import { stripTag } from '../../../../../../../ust/src/lib/utils';
import { Notifier } from '../../../../core/services/notifier.service';
import { AdminBoardModifyBaseComponent } from '../../../../modules/admin-board-base/components/admin-board-modify-base.component';

@Component({
  selector: 'ust-estimate-modify-page',
  templateUrl: './estimate-modify-page.component.html',
  styleUrls: ['./estimate-modify-page.component.scss']
})
export class EstimateModifyPageComponent extends AdminBoardModifyBaseComponent<EstimateState, Estimate> implements OnInit {
  boardPath = '/inquiry/estimate';

  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    protected estimateService: EstimateService,
    protected notifier: Notifier,
    private caller: FunctionsCaller
  ) {
    super(router, route, estimateService, notifier);
  }

  protected modifyCallback(): Promise<void> {
    const request: SendMailRequest = {
      email: this.entity.email,
      subject: '[UST] 견적문의에 대한 답변입니다',
      text: stripTag(this.formValue.answer),
      html: this.formValue.answer
    };

    return this.caller.sendMail(request).toPromise();
  }
}
