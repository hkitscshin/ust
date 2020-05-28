import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SubscriptionBaseComponent } from '@dminine/ng-lib';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ust-board-page',
  templateUrl: './board-page.component.html',
  styleUrls: ['./board-page.component.scss']
})
export class BoardPageComponent extends SubscriptionBaseComponent implements OnInit {
  activeIndex = 0;
  Opened = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    super();
    this.activeIndex = 0;
  }

  ngOnInit() {
    this.addSubscription(this.initActiveIndex());
  }

  private initActiveIndex(): Subscription {
    return this.route.url.subscribe(url => {
      const path = url[1].path;

      switch (path) {
        case 'notice':
          this.activeIndex = 0;
          break;
        case 'press-release':
          this.activeIndex = 1;
          break;
        case 'news':
          this.activeIndex = 2;
          break;
      }
    });
  }

  changeIndex(idx: number) {
    this.activeIndex = idx;
  }

  onClick() {
    this.Opened = !this.Opened;
  }
}
