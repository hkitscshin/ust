import { Injectable } from '@angular/core';
import { DnlFirestoreQuery } from '@dminine/ng-lib';
import { User } from './types';
import { UserState, UserStore } from './user.store';


@Injectable({ providedIn: 'root' })
export class UserQuery extends DnlFirestoreQuery<UserState, User> {
  constructor(protected store: UserStore) {
    super(store);
  }
}
