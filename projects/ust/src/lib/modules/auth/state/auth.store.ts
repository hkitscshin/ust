import { Injectable } from '@angular/core';
import { StoreConfig, Store } from '@datorama/akita';
import { User } from '../../../entities/user';


export interface AuthState {
  isAuthLoaded: boolean;
  isDbLoaded: boolean;
  isLoggedIn: boolean;
  user: User;
  redirectUrl: string;
}

export function createInitialState(): AuthState {
  return {
    isAuthLoaded: false,
    isDbLoaded: false,
    isLoggedIn: false,
    user: null,
    redirectUrl: '/'
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'auth' })
export class AuthStore extends Store<AuthState> {
  constructor() {
    super(createInitialState());
  }
}
