import { Component, OnInit } from '@angular/core';
import { InquiryService } from '../../../../../../../ust/src/lib/entities/inquiry/inquiry.service';
import { InquiryState } from '../../../../../../../ust/src/lib/entities/inquiry/inquiry.store';
import { Inquiry } from '../../../../../../../ust/src/lib/entities/inquiry/types';
import { AdminBoardListBaseComponent } from '../../../../modules/admin-board-base/components/admin-board-list-base.component';

@Component({
  selector: 'ust-inquiry-page',
  templateUrl: './inquiry-page.component.html',
  styleUrls: ['./inquiry-page.component.scss']
})
export class InquiryPageComponent extends AdminBoardListBaseComponent<InquiryState, Inquiry> implements OnInit {
  constructor(
    protected inquiryService: InquiryService
  ) {
    super(inquiryService);
  }
}
