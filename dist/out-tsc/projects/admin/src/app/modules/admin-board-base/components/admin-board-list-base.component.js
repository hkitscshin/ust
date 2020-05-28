import { SubscriptionBaseComponent } from '@dminine/ng-lib';
export class AdminBoardListBaseComponent extends SubscriptionBaseComponent {
    constructor(entityService) {
        super();
        this.entityService = entityService;
        this.pageSize = 10;
    }
    ngOnInit() {
        this.addSubscription(this.initTotalCount());
        this.setSubscription('init-entities', this.initEntities());
    }
    onPageChange(pageEvent) {
        this.setSubscription('init-entities', this.initEntities(pageEvent.pageIndex));
    }
    initTotalCount() {
        return this.entityService.count().subscribe(count => {
            this.totalCount = count;
        });
    }
    initEntities(page) {
        const query = {
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
//# sourceMappingURL=admin-board-list-base.component.js.map