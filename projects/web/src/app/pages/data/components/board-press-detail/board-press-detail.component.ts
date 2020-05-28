import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PressReleaseService } from '../../../../../../../ust/src/lib/entities/press-release/press-release.service';
import { PressReleaseState } from '../../../../../../../ust/src/lib/entities/press-release/press-release.store';
import { PressRelease } from '../../../../../../../ust/src/lib/entities/press-release/types';
import { BoardDetailBaseComponent } from '../../../../core/modules/board-base/components/board-detail-base.component';

@Component({
  selector: 'ust-board-press-detail',
  templateUrl: './board-press-detail.component.html',
  styleUrls: ['./board-press-detail.component.scss']
})
export class BoardPressDetailComponent extends BoardDetailBaseComponent<PressReleaseState, PressRelease> implements OnInit {

  constructor(
    protected route: ActivatedRoute,
    protected pressReleaseService: PressReleaseService
  ) {
    super(route, pressReleaseService);
  }

  ngOnInit() {
    super.ngOnInit();
    this.increaseViewCount();
  }

  private increaseViewCount(): void {
    if (this.entity) {
      this.pressReleaseService.update(this.entity.id, { viewCount: this.entity.viewCount + 1 });
    }
  }
}
