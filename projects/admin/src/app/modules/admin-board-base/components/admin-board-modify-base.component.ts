import { OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DnlFirestoreEntity, DnlFirestoreService, SubscriptionBaseComponent } from '@dminine/ng-lib';
import { filter, switchMap } from 'rxjs/operators';
import { Notifier } from '../../../core/services/notifier.service';


export abstract class AdminBoardModifyBaseComponent<S, E extends DnlFirestoreEntity> extends SubscriptionBaseComponent implements OnInit {
  entity: E;
  formValue: Partial<E>;

  invalid = true;
  isLoading = false;

  boardPath = '/data/notice';

  protected constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    protected entityService: DnlFirestoreService<S, E>,
    protected notifier: Notifier
  ) {
    super();
  }

  ngOnInit(): void {
    this.addSubscription(this.initEntity());
  }

  async modify() {
    if (this.invalid) {
      return this.notifier.warning('모든 정보를 입력해 주세요');
    }

    this.isLoading = true;

    try {
      await this.entityService.update(this.entity.id, this.formValue);

      if (this.modifyCallback) {
        await this.modifyCallback();
      }

      this.notifier.success('수정하였습니다!');
      await this.router.navigate([this.boardPath]);
    } catch (err) {
      this.notifier.error(`오류가 발생하였습니다.\nError: ${err.message}`, err);
    }

    this.isLoading = false;
  }

  async delete() {
    if (!confirm('정말 삭제하시겠습니까?')) {
      return;
    }

    this.isLoading = true;

    try {
      await this.entityService.delete(this.entity.id);
      this.notifier.success('삭제하였습니다!');
      await this.router.navigate([this.boardPath]);
    } catch (err) {
      this.notifier.error(`오류가 발생하였습니다.\nError: ${err.message}`, err);
    }

    this.isLoading = false;
  }

  protected modifyCallback?(): Promise<void>;

  private initEntity() {
    return this.route.params.pipe(
      filter(params => Boolean(params.id)),
      switchMap(params => this.entityService.get(params.id))
    ).subscribe(entity => {
      this.entity = entity;
    });
  }
}
