import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { SubscriptionBaseComponent } from '@dminine/ng-lib';
import { take, finalize } from 'rxjs/operators';
import { FinanceCategory } from '../../../../../../../ust/src/lib/entities/finance/types';
let IncomeStatementComponent = class IncomeStatementComponent extends SubscriptionBaseComponent {
    constructor(router, notifier, financeService) {
        super();
        this.router = router;
        this.notifier = notifier;
        this.financeService = financeService;
        this.invalid = true;
        this.isLoading = false;
    }
    ngOnInit() {
        this.addSubscription(this.initIncomeStatement());
    }
    add() {
        if (this.invalid) {
            return this.notifier.warning('모든 정보를 입력해 주세요');
        }
        this.isLoading = true;
        this.financeService.add(this.formValue).pipe(take(1)).pipe(finalize(() => this.isLoading = false)).subscribe(() => {
            this.notifier.success('저장하였습니다!');
        });
    }
    modify() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.invalid) {
                return this.notifier.warning('모든 정보를 입력해 주세요');
            }
            this.isLoading = true;
            try {
                yield this.financeService.update(this.incomeStatement.id, this.formValue);
                this.notifier.success('수정하였습니다!');
            }
            catch (err) {
                this.notifier.error(`오류가 발생하였습니다.\nError: ${err.message}`);
            }
            this.isLoading = false;
        });
    }
    initIncomeStatement() {
        return this.financeService.list({
            filters: [{ field: 'category', comparison: '==', value: FinanceCategory.손익계산서 }]
        }).subscribe(finance => {
            this.incomeStatement = finance[0];
        });
    }
};
IncomeStatementComponent = __decorate([
    Component({
        selector: 'ust-income-statement',
        templateUrl: './income-statement.component.html',
        styleUrls: ['./income-statement.component.scss']
    })
], IncomeStatementComponent);
export { IncomeStatementComponent };
//# sourceMappingURL=income-statement.component.js.map