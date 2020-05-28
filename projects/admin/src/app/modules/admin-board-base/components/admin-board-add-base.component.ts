import { Router } from '@angular/router';
import { DnlFirestoreEntity, SubscriptionBaseComponent, DnlFirestoreService, DnlQuery } from '@dminine/ng-lib';
import { Subscription } from 'rxjs';
import { take, finalize } from 'rxjs/operators';
import { Notifier } from '../../../core/services/notifier.service';


export abstract class AdminBoardAddBaseComponent<S, E extends DnlFirestoreEntity> {
  formValue: Partial<E>;

  invalid = true;
  isLoading = false;

  boardPath = '/data/notice';

  protected constructor(
    protected router: Router,
    protected entityService: DnlFirestoreService<S, E>,
    protected notifier: Notifier
  ) { }

  add() {
    if (this.invalid) {
      return this.notifier.warning('모든 정보를 입력해 주세요');
    }

    this.isLoading = true;

    this.entityService.add(this.formValue).pipe(take(1)).pipe(
      finalize(() => this.isLoading = false)
    ).subscribe(entity => {
      this.notifier.success('추가하였습니다!');
      this.router.navigate([this.boardPath]);
    });
  }
}
