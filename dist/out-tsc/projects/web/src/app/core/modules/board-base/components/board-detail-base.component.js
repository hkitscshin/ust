import { SubscriptionBaseComponent } from '@dminine/ng-lib';
import { switchMap, tap, filter } from 'rxjs/operators';
import { getParamsId } from '../../../../../../../ust/src/lib/utils';
export class BoardDetailBaseComponent extends SubscriptionBaseComponent {
    constructor(route, entityService) {
        super();
        this.route = route;
        this.entityService = entityService;
        this.entity = {};
        this.previous = {};
        this.next = {};
    }
    ngOnInit() {
        this.addSubscription(this.initEntity());
    }
    initEntity() {
        return getParamsId(this.route).pipe(switchMap(id => this.entityService.get(id)), tap(entity => this.entity = entity), filter(entity => Boolean(entity)), switchMap(() => {
            return this.entityService.list({
                sorts: [{ field: 'createdAt', direction: 'desc' }]
            });
        })).subscribe(entities => {
            this.setPreviousAndNext(entities);
        });
    }
    setPreviousAndNext(entities) {
        const index = entities.findIndex((entity) => entity.id === this.entity.id);
        this.previous = entities[index - 1];
        this.next = entities[index + 1];
    }
}
//# sourceMappingURL=board-detail-base.component.js.map