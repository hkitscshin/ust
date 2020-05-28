import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap, first } from 'rxjs/operators';
import { AuthQuery } from '../state';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private authQuery: AuthQuery,
    private router: Router
  ) {
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLoggedIn();
  }

  canActivateChild(route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route);
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLoggedIn();
  }

  checkLoggedIn() {
    return this.authQuery.select(state => state).pipe(
      first(state => state.isAuthLoaded),
      map(state => state.isLoggedIn),
      tap(isLoggedIn => {
        if (!isLoggedIn) {
          this.router.navigateByUrl('/login');
          throw new Error('access denied!');
        }
      })
    );
  }
}
