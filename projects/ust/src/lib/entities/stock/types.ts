import { DnlFirestoreEntity } from '@dminine/ng-lib';
import { Timestamp } from '../../types';


export interface Stock extends DnlFirestoreEntity {
  date: Timestamp;
  openingPrice: number;
  closingPrice: number;
  highPrice: number;
  lowPrice: number;
  tradingVolume: number;
}
