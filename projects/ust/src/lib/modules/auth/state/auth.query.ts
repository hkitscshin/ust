import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';
import { User } from '../../../entities/user';
import { AuthState, AuthStore } from './auth.store';


@Injectable({ providedIn: 'root' })
export class AuthQuery extends Query<AuthState> {
  user$: Observable<User>;
  isLoggedIn$: Observable<boolean>;

  constructor(protected store: AuthStore) {
    super(store);
    this.user$ = this.select(state => state.user);
    this.isLoggedIn$ = this.select(state => state.isLoggedIn);
  }

  get user(): User {
    return this.getValue().user;
  }

  get isLoggedIn(): boolean {
    return this.getValue().isLoggedIn;
  }
}
