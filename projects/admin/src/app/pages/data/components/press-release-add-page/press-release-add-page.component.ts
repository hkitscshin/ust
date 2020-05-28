import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PressReleaseService } from '../../../../../../../ust/src/lib/entities/press-release/press-release.service';
import { PressReleaseState } from '../../../../../../../ust/src/lib/entities/press-release/press-release.store';
import { PressRelease } from '../../../../../../../ust/src/lib/entities/press-release/types';
import { Notifier } from '../../../../core/services/notifier.service';
import { AdminBoardAddBaseComponent } from '../../../../modules/admin-board-base/components/admin-board-add-base.component';

@Component({
  selector: 'ust-press-release-add-page',
  templateUrl: './press-release-add-page.component.html',
  styleUrls: ['./press-release-add-page.component.scss']
})
export class PressReleaseAddPageComponent extends AdminBoardAddBaseComponent<PressReleaseState, PressRelease> {
  boardPath = '/data/press-release';

  constructor(
    protected router: Router,
    protected pressReleaseService: PressReleaseService,
    protected notifier: Notifier
  ) {
    super(router, pressReleaseService, notifier);
  }
}
