import { take, finalize } from 'rxjs/operators';
export class AdminBoardAddBaseComponent {
    constructor(router, entityService, notifier) {
        this.router = router;
        this.entityService = entityService;
        this.notifier = notifier;
        this.invalid = true;
        this.isLoading = false;
        this.boardPath = '/data/notice';
    }
    add() {
        if (this.invalid) {
            return this.notifier.warning('모든 정보를 입력해 주세요');
        }
        this.isLoading = true;
        this.entityService.add(this.formValue).pipe(take(1)).pipe(finalize(() => this.isLoading = false)).subscribe(entity => {
            this.notifier.success('추가하였습니다!');
            this.router.navigate([this.boardPath]);
        });
    }
}
//# sourceMappingURL=admin-board-add-base.component.js.map