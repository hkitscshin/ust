import { Component, OnInit } from '@angular/core';
import { PressReleaseService } from '../../../../../../../ust/src/lib/entities/press-release/press-release.service';
import { PressReleaseState } from '../../../../../../../ust/src/lib/entities/press-release/press-release.store';
import { PressRelease } from '../../../../../../../ust/src/lib/entities/press-release/types';
import { AdminBoardListBaseComponent } from '../../../../modules/admin-board-base/components/admin-board-list-base.component';

@Component({
  selector: 'ust-press-release-page',
  templateUrl: './press-release-page.component.html',
  styleUrls: ['./press-release-page.component.scss']
})
export class PressReleasePageComponent extends AdminBoardListBaseComponent<PressReleaseState, PressRelease> implements OnInit {
  constructor(
    protected pressReleaseService: PressReleaseService
  ) {
    super(pressReleaseService);
  }
}
