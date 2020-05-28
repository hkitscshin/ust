import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SubscriptionBaseComponent } from '@dminine/ng-lib';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ust-sub-page-step',
  templateUrl: './sub-page-step.component.html',
  styleUrls: ['./sub-page-step.component.scss']
})
export class SubPageStepComponent extends SubscriptionBaseComponent implements OnInit {
  opened = false;
  pages = [
    { url: '/about/story', titleTranslate: 'TOOLBAR.MENU.NAV1', subTitleTranslate: 'TOOLBAR.NAV1.SUB1' },
    { url: '/about/group', titleTranslate: 'TOOLBAR.MENU.NAV1', subTitleTranslate: 'TOOLBAR.NAV1.SUB2' },
    { url: '/about/location', titleTranslate: 'TOOLBAR.MENU.NAV1', subTitleTranslate: 'TOOLBAR.NAV1.SUB3' },

    { url: '/product/summary', titleTranslate: 'TOOLBAR.MENU.NAV2', subTitleTranslate: 'TOOLBAR.NAV2.SUB1' },
    { url: '/product/introduce', titleTranslate: 'TOOLBAR.MENU.NAV2', subTitleTranslate: 'TOOLBAR.NAV2.SUB2' },
    { url: '/product/certification', titleTranslate: 'TOOLBAR.MENU.NAV2', subTitleTranslate: 'TOOLBAR.NAV2.SUB3' },
    { url: '/product/system', titleTranslate: 'TOOLBAR.MENU.NAV2', subTitleTranslate: 'TOOLBAR.NAV2.SUB4' },

    { url: '/research', titleTranslate: 'TOOLBAR.MENU.NAV3', subTitleTranslate: 'TOOLBAR.NAV3.SUB1' },

    { url: '/investment/finance', titleTranslate: 'TOOLBAR.MENU.NAV4', subTitleTranslate: 'TOOLBAR.NAV4.SUB1' },
    { url: '/investment/stock', titleTranslate: 'TOOLBAR.MENU.NAV4', subTitleTranslate: 'TOOLBAR.NAV4.SUB2' },

    { url: '/data/board', titleTranslate: 'TOOLBAR.MENU.NAV5', subTitleTranslate: 'TOOLBAR.NAV5.SUB1' },
    { url: '/data/download', titleTranslate: 'TOOLBAR.MENU.NAV5', subTitleTranslate: 'TOOLBAR.NAV5.SUB2' },
    { url: '/data/grade', titleTranslate: 'TOOLBAR.MENU.NAV5', subTitleTranslate: 'TOOLBAR.NAV5.SUB3' },
    { url: '/data/estimate', titleTranslate: 'TOOLBAR.MENU.NAV5', subTitleTranslate: 'TOOLBAR.NAV5.SUB4' },
    // { url: '/data/inspect', titleTranslate: 'TOOLBAR.MENU.NAV5', subTitleTranslate: 'TOOLBAR.NAV5.SUB5' },
    { url: '/recruit', titleTranslate: 'TOOLBAR.MENU.NAV6', subTitleTranslate: 'TOOLBAR.NAV6.SUB1' },
  ];

  currentPage: { url: string, titleTranslate: string, subTitleTranslate: string };
  relatedPages: { url: string, titleTranslate: string, subTitleTranslate: string }[];

  constructor(
    private router: Router,
  ) {
    super();
  }

  ngOnInit(): void {
    this.filterCurrentPage();
    this.filterRelatedPages();
    this.addSubscription(this.initRouterEvent());
  }

  onClick() {
    this.opened = !this.opened;
  }

  private filterCurrentPage(): void {
    this.currentPage = this.pages.find(
      page => this.router.url.startsWith(page.url)
    );
  }

  private filterRelatedPages(): void {
    this.relatedPages = this.pages.filter(
      page => this.currentPage.titleTranslate === page.titleTranslate
    );
  }

  private initRouterEvent(): Subscription {
    return this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.filterCurrentPage();
        this.filterRelatedPages();
      }
    });
  }
}
