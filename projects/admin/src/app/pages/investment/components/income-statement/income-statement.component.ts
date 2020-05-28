import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubscriptionBaseComponent } from '@dminine/ng-lib';
import { Subscription } from 'rxjs';
import { take, finalize } from 'rxjs/operators';
import { FinanceService } from '../../../../../../../ust/src/lib/entities/finance/finance.service';
import { Finance, FinanceCategory } from '../../../../../../../ust/src/lib/entities/finance/types';
import { Notifier } from '../../../../core/services/notifier.service';

@Component({
  selector: 'ust-income-statement',
  templateUrl: './income-statement.component.html',
  styleUrls: ['./income-statement.component.scss']
})
export class IncomeStatementComponent extends SubscriptionBaseComponent implements OnInit {
  formValue: Partial<Finance>;
  incomeStatement: Finance;

  invalid = true;
  isLoading = false;

  constructor(
    private router: Router,
    private notifier: Notifier,
    private financeService: FinanceService
  ) {
    super();
  }

  ngOnInit(): void {
    this.addSubscription(this.initIncomeStatement());
  }

  add(): void {
    if (this.invalid) {
      return this.notifier.warning('모든 정보를 입력해 주세요');
    }

    this.isLoading = true;

    this.financeService.add(this.formValue).pipe(take(1)).pipe(
      finalize(() => this.isLoading = false)
    ).subscribe(() => {
      this.notifier.success('저장하였습니다!');
    });
  }

  async modify() {
    if (this.invalid) {
      return this.notifier.warning('모든 정보를 입력해 주세요');
    }

    this.isLoading = true;

    try {
      await this.financeService.update(this.incomeStatement.id, this.formValue);
      this.notifier.success('수정하였습니다!');
    } catch (err) {
      this.notifier.error(`오류가 발생하였습니다.\nError: ${err.message}`);
    }

    this.isLoading = false;
  }

  private initIncomeStatement(): Subscription {
    return this.financeService.list({
      filters: [{ field: 'category', comparison: '==', value: FinanceCategory.손익계산서 }]
    }).subscribe(finance => {
      this.incomeStatement = finance[0];
    });
  }
}
