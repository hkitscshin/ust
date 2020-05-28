import { __awaiter } from "tslib";
import { SubscriptionBaseComponent } from '@dminine/ng-lib';
import { filter, switchMap } from 'rxjs/operators';
export class AdminBoardModifyBaseComponent extends SubscriptionBaseComponent {
    constructor(router, route, entityService, notifier) {
        super();
        this.router = router;
        this.route = route;
        this.entityService = entityService;
        this.notifier = notifier;
        this.invalid = true;
        this.isLoading = false;
        this.boardPath = '/data/notice';
    }
    ngOnInit() {
        this.addSubscription(this.initEntity());
    }
    modify() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.invalid) {
                return this.notifier.warning('모든 정보를 입력해 주세요');
            }
            this.isLoading = true;
            try {
                yield this.entityService.update(this.entity.id, this.formValue);
                if (this.modifyCallback) {
                    yield this.modifyCallback();
                }
                this.notifier.success('수정하였습니다!');
                yield this.router.navigate([this.boardPath]);
            }
            catch (err) {
                this.notifier.error(`오류가 발생하였습니다.\nError: ${err.message}`, err);
            }
            this.isLoading = false;
        });
    }
    delete() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!confirm('정말 삭제하시겠습니까?')) {
                return;
            }
            this.isLoading = true;
            try {
                yield this.entityService.delete(this.entity.id);
                this.notifier.success('삭제하였습니다!');
                yield this.router.navigate([this.boardPath]);
            }
            catch (err) {
                this.notifier.error(`오류가 발생하였습니다.\nError: ${err.message}`, err);
            }
            this.isLoading = false;
        });
    }
    initEntity() {
        return this.route.params.pipe(filter(params => Boolean(params.id)), switchMap(params => this.entityService.get(params.id))).subscribe(entity => {
            this.entity = entity;
        });
    }
}
//# sourceMappingURL=admin-board-modify-base.component.js.map