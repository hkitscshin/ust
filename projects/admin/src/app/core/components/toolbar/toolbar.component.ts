import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { SubscriptionBaseComponent } from '@dminine/ng-lib';
import { AuthService } from '../../../../../../ust/src/lib/modules/auth/state';

@Component({
  selector: 'ust-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent extends SubscriptionBaseComponent {
  title: string;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    super();
    this.addSubscription(this.initRouterEvents());
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  private initRouterEvents() {
    return this.router.events.subscribe(event => {
      if (event instanceof ActivationEnd) {
        if (event.snapshot.data.title) {
          this.title = event.snapshot.data.title;
        }
      }
    });
  }
}
