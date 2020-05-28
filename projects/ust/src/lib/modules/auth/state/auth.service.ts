import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User as FirebaseUser } from 'firebase/app';
import { Observable, partition } from 'rxjs';
import { tap, switchMap, filter, take } from 'rxjs/operators';
import { UserService, User } from '../../../entities/user';
import { AuthQuery } from './auth.query';
import { AuthStore } from './auth.store';


@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    protected authStore: AuthStore,
    protected authQuery: AuthQuery,
    protected afAuth: AngularFireAuth,
    protected userService: UserService
  ) {}

  init() {
    const [loggedIn$, notLoggedIn$] = this.partCheckedHavingFirebaseUser(this.afAuth.authState);

    loggedIn$.pipe(
      tap(() => this.updateLoggedInStateInAkita()),
      switchMap(firebaseUser => this.userService.get(firebaseUser.uid)),
      filter(user => Boolean(user))
    ).subscribe(user => {
      this.updateJoinedStateInAkita(user);
    });

    notLoggedIn$.subscribe(() => this.updateNotLoggedInStateInAkita());
  }

  async loginWithEmail(email: string, password: string): Promise<any> {
    if (this.afAuth.auth.currentUser) {
      await this.afAuth.auth.signOut();
    }

    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout(): Promise<void> {
    return this.afAuth.auth.signOut().then(() => this.updateNotLoggedInStateInAkita()).then();
  }

  private partCheckedHavingFirebaseUser(state: Observable<FirebaseUser>) {
    return partition<FirebaseUser>(
      state,
      firebaseUser => Boolean(firebaseUser)
    );
  }

  private updateLoggedInStateInAkita() {
    this.authStore.update({
      isAuthLoaded: true,
      isLoggedIn: true
    });
  }

  private updateNotLoggedInStateInAkita() {
    this.authStore.update({
      isAuthLoaded: true,
      isLoggedIn: false,
      isDbLoaded: true,
      user: null
    });
  }

  private updateJoinedStateInAkita(user: User) {
    this.authStore.update({
      isLoggedIn: true,
      isDbLoaded: true,
      user
    });
  }

  private putUserToDb(id: string, userInfo: Partial<User>) {
    const user: Partial<User> = {
      isAdmin: true
    };

    return this.userService.upsert(id, user).pipe(take(1));
  }
}
