import { Component, OnInit } from '@angular/core';
import { EstimateService } from '../../../../../../../ust/src/lib/entities/estimate/estimate.service';
import { EstimateState } from '../../../../../../../ust/src/lib/entities/estimate/estimate.store';
import { Estimate } from '../../../../../../../ust/src/lib/entities/estimate/types';
import { AdminBoardListBaseComponent } from '../../../../modules/admin-board-base/components/admin-board-list-base.component';

@Component({
  selector: 'ust-estimate-page',
  templateUrl: './estimate-page.component.html',
  styleUrls: ['./estimate-page.component.scss']
})
export class EstimatePageComponent extends AdminBoardListBaseComponent<EstimateState, Estimate> implements OnInit {
  constructor(
    protected estimateService: EstimateService
  ) {
    super(estimateService);
  }
}
