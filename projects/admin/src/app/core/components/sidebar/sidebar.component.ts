import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivationEnd } from '@angular/router';
import { SubscriptionBaseComponent } from '@dminine/ng-lib';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ust-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent extends SubscriptionBaseComponent implements OnInit {
  title: string

  constructor(
    private router: Router
  ) {
    super();
  }

  ngOnInit() {
    this.addSubscription(this.initRouterEvents());
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
