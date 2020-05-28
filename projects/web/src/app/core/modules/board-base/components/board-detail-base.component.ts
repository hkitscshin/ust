import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DnlFirestoreEntity, SubscriptionBaseComponent, DnlFirestoreService } from '@dminine/ng-lib';
import { Subscription } from 'rxjs';
import { switchMap, tap, filter } from 'rxjs/operators';
import { getParamsId } from '../../../../../../../ust/src/lib/utils';


export abstract class BoardDetailBaseComponent<S, E extends DnlFirestoreEntity> extends SubscriptionBaseComponent implements OnInit {
  entity: E = {} as E;
  previous: E = {} as E;
  next: E = {} as E;

  protected constructor(
    protected route: ActivatedRoute,
    protected entityService: DnlFirestoreService<S, E>
  ) {
    super();
  }

  ngOnInit() {
    this.addSubscription(this.initEntity());
  }

  private initEntity(): Subscription {
    return getParamsId(this.route).pipe(
      switchMap(id => this.entityService.get(id)),
      tap(entity => this.entity = entity),
      filter(entity => Boolean(entity)),
      switchMap(() => {
        return this.entityService.list({
          sorts: [{ field: 'createdAt', direction: 'desc'}]
        });
      })
    ).subscribe(entities => {
      this.setPreviousAndNext(entities);
    });
  }

  private setPreviousAndNext(entities: E[]): void {
    const index = entities.findIndex((entity) => entity.id === this.entity.id);
    this.previous = entities[index - 1];
    this.next = entities[index + 1];
  }
}
