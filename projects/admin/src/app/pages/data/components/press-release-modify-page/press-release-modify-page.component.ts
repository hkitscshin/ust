import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PressReleaseService } from '../../../../../../../ust/src/lib/entities/press-release/press-release.service';
import { PressReleaseState } from '../../../../../../../ust/src/lib/entities/press-release/press-release.store';
import { PressRelease } from '../../../../../../../ust/src/lib/entities/press-release/types';
import { Notifier } from '../../../../core/services/notifier.service';
import { AdminBoardModifyBaseComponent } from '../../../../modules/admin-board-base/components/admin-board-modify-base.component';

@Component({
  selector: 'ust-press-release-modify-page',
  templateUrl: './press-release-modify-page.component.html',
  styleUrls: ['./press-release-modify-page.component.scss']
})
export class PressReleaseModifyPageComponent extends AdminBoardModifyBaseComponent<PressReleaseState, PressRelease> implements OnInit {
  boardPath = '/data/press-release';

  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    protected pressReleaseService: PressReleaseService,
    protected notifier: Notifier
  ) {
    super(router, route, pressReleaseService, notifier);
  }
}
