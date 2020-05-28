import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DnlFirestoreService } from '@dminine/ng-lib';
import { User } from './types';
import { UserQuery } from './user.query';
import { UserState, UserStore } from './user.store';


@Injectable({ providedIn: 'root' })
export class UserService extends DnlFirestoreService<UserState, User> {
  constructor(
    protected userStore: UserStore,
    protected userQuery: UserQuery,
    protected afs: AngularFirestore
  ) {
    super(userStore, userQuery, afs, 'users');
  }
}
