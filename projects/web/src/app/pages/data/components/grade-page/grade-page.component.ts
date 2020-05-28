import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//import { SubscriptionBaseComponent } from '@dminine/ng-lib';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ust-grade-page',
  templateUrl: './grade-page.component.html',
  styleUrls: ['./grade-page.component.scss']
})
export class GradePageComponent /*extends SubscriptionBaseComponent*/ implements OnInit {
  activeIndex = 0;
  Opened = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    //super();
    this.activeIndex = 1;
  }

  ngOnInit() {
    //this.addSubscription(this.initActiveIndex());
  }
/*
  private initActiveIndex(): Subscription {
    return this.route.url.subscribe(url => {
      const path = (url.length > 1 ? url[1].path : '');

      switch (path) {
        case 'request':
          this.activeIndex = 0;
          break;
        case 'download':
          this.activeIndex = 1;
          break;
        default:
          this.activeIndex = 0;
          break;
      }
    });
  }*/

  changeIndex(idx: number) {
    this.activeIndex = idx;
  }

  onClick() {
    this.Opened = !this.Opened;
  }

}
