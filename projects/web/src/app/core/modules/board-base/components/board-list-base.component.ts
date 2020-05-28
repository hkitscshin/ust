import { OnInit } from '@angular/core';
import { DnlFirestoreEntity, SubscriptionBaseComponent, DnlFirestoreService, DnlQuery } from '@dminine/ng-lib';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';


export abstract class BoardListBaseComponent<S, E extends DnlFirestoreEntity> extends SubscriptionBaseComponent implements OnInit {
  entities: E[];
  count: number;
  perPage = 10;
  perBlock = 5;

  protected page$ = new BehaviorSubject<number>(1);

  protected constructor(
    protected entityService: DnlFirestoreService<S, E>
  ) {
    super();
  }

  ngOnInit(): void {
    this.addSubscription(this.initEntities());
  }

  onPageChange(page: number) {
    this.page$.next(page);
  }

  private initEntities() {
    return this.page$.asObservable().pipe(
      switchMap((page) => {
        const query: DnlQuery = {
          sorts: [{ field: 'createdAt', direction: 'desc'}],
          perPage: this.perPage,
          page
        };

        return combineLatest([
          this.entityService.list(query),
          this.entityService.count(query)
        ]);
      })
    ).subscribe(([entities, count]) => {
      this.entities = entities;
      this.count = count;
    });
  }
}
