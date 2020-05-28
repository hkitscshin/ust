import { DnlFirestoreEntity } from '@dminine/ng-lib';


export interface Finance extends DnlFirestoreEntity {
  category: FinanceCategory;
  incomeStatementData?: IncomeStatementData[];
  financialStatementData?: FinancialStatementData[];
}

export enum FinanceCategory {
  손익계산서 = '손익 계산서',
  재무상태표 = '재무상태표'
}

export interface IncomeStatementData {
  year: number;
  sales: number;
  netProfit: number;
  operatingProfit: number;
}

export interface FinancialStatementData {
  year: number;
  totalAssets: number;
  totalLiabilities: number;
  totalCapital: number;
}
