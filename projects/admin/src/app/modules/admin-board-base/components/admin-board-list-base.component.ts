import { OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { DnlFirestoreEntity, SubscriptionBaseComponent, DnlFirestoreService, DnlQuery } from '@dminine/ng-lib';
import { Subscription } from 'rxjs';


export abstract class AdminBoardListBaseComponent<S, E extends DnlFirestoreEntity> extends SubscriptionBaseComponent implements OnInit {
  entities: E[];
  totalCount: number;

  pageSize = 10;

  protected constructor(
    protected entityService: DnlFirestoreService<S, E>
  ) {
    super();
  }

  ngOnInit() {
    this.addSubscription(this.initTotalCount());
    this.setSubscription('init-entities', this.initEntities());
  }

  onPageChange(pageEvent: PageEvent): void {
    this.setSubscription('init-entities', this.initEntities(pageEvent.pageIndex));
  }

  private initTotalCount(): Subscription {
    return this.entityService.count().subscribe(count => {
      this.totalCount = count;
    });
  }

  private initEntities(page?: number): Subscription {
    const query: DnlQuery = {
      sorts: [{ field: 'createdAt', direction: 'desc' }],
      perPage: 10,
      page: 1
    };

    if (page >= 0) {
      query.page = page + 1;
    }

    return this.entityService.list(query).subscribe(entities => {
      this.entities = entities;
    });
  }
}
