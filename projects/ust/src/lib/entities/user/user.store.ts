import { Injectable } from '@angular/core';
import { StoreConfig } from '@datorama/akita';
import { DnlFirestoreState, DnlFirestoreStore } from '@dminine/ng-lib';
import { User } from './types';


export interface UserState extends DnlFirestoreState<User> {
  ui: {
    filter: string;
  };
}

const initialState = {
  ui: { filter: '' }
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'user' })
export class UserStore extends DnlFirestoreStore<UserState, User> {
  constructor() {
    super(initialState);
  }
}
