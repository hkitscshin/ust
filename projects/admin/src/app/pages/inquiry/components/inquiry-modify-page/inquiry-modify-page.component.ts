import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FunctionsCaller, SendMailRequest } from '../../../../../../../ust/src/lib/core/services/functions-caller.service';
import { InquiryService } from '../../../../../../../ust/src/lib/entities/inquiry/inquiry.service';
import { InquiryState } from '../../../../../../../ust/src/lib/entities/inquiry/inquiry.store';
import { Inquiry } from '../../../../../../../ust/src/lib/entities/inquiry/types';
import { stripTag } from '../../../../../../../ust/src/lib/utils';
import { Notifier } from '../../../../core/services/notifier.service';
import { AdminBoardModifyBaseComponent } from '../../../../modules/admin-board-base/components/admin-board-modify-base.component';

@Component({
  selector: 'ust-inquiry-modify-page',
  templateUrl: './inquiry-modify-page.component.html',
  styleUrls: ['./inquiry-modify-page.component.scss']
})
export class InquiryModifyPageComponent extends AdminBoardModifyBaseComponent<InquiryState, Inquiry> implements OnInit {
  boardPath = '/inquiry/inquiry';

  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    protected inquiryService: InquiryService,
    protected notifier: Notifier,
    private caller: FunctionsCaller
  ) {
    super(router, route, inquiryService, notifier);
  }

  protected modifyCallback(): Promise<void> {
    const request: SendMailRequest = {
      email: this.entity.email,
      subject: '[UST] 제품문의에 대한 답변입니다',
      text: stripTag(this.formValue.answer),
      html: this.formValue.answer
    };

    return this.caller.sendMail(request).toPromise();
  }
}
