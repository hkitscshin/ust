import { DnlFirestoreEntity } from '@dminine/ng-lib';


export interface User extends DnlFirestoreEntity {
  isAdmin: boolean;
}
