import { SubscriptionBaseComponent } from '@dminine/ng-lib';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';
export class BoardListBaseComponent extends SubscriptionBaseComponent {
    constructor(entityService) {
        super();
        this.entityService = entityService;
        this.perPage = 10;
        this.perBlock = 5;
        this.page$ = new BehaviorSubject(1);
    }
    ngOnInit() {
        this.addSubscription(this.initEntities());
    }
    onPageChange(page) {
        this.page$.next(page);
    }
    initEntities() {
        return this.page$.asObservable().pipe(switchMap((page) => {
            const query = {
                sorts: [{ field: 'createdAt', direction: 'desc' }],
                perPage: this.perPage,
                page
            };
            return combineLatest([
                this.entityService.list(query),
                this.entityService.count(query)
            ]);
        })).subscribe(([entities, count]) => {
            this.entities = entities;
            this.count = count;
        });
    }
}
//# sourceMappingURL=board-list-base.component.js.map