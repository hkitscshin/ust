import { Component, OnInit } from '@angular/core';
import { PressReleaseService } from '../../../../../../../ust/src/lib/entities/press-release/press-release.service';
import { PressReleaseState } from '../../../../../../../ust/src/lib/entities/press-release/press-release.store';
import { PressRelease } from '../../../../../../../ust/src/lib/entities/press-release/types';
import { BoardListBaseComponent } from '../../../../core/modules/board-base/components/board-list-base.component';

@Component({
  selector: 'ust-board-press',
  templateUrl: './board-press.component.html',
  styleUrls: ['./board-press.component.scss']
})
export class BoardPressComponent extends BoardListBaseComponent<PressReleaseState, PressRelease> implements OnInit {
  constructor(
    protected pressReleaseService: PressReleaseService
  ) {
    super(pressReleaseService);
  }

  stripTag(html: string) {
    if (!html || typeof html !== 'string') {
      return html;
    }

    return html.replace(/(<(.|\n)*?>)|(&[#a-z0-9]+;)|(\n)/g, '');
  }
}
