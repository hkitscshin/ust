import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SubscriptionBaseComponent } from '@dminine/ng-lib';
import { Subscription } from 'rxjs';
import { Language, AppService, AppQuery } from '../../state';

@Component({
  selector: 'ust-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent extends SubscriptionBaseComponent implements OnInit {
  language: Language = 'ko-KR';
  pages = [
    { url: '/about', translate: 'TOOLBAR.MENU.NAV1' },
    { url: '/product', translate: 'TOOLBAR.MENU.NAV2' },
    { url: '/research', translate: 'TOOLBAR.MENU.NAV3' },
    { url: '/investment', translate: 'TOOLBAR.MENU.NAV4' },
    { url: '/data', translate: 'TOOLBAR.MENU.NAV5' },
    { url: '/recruit', translate: 'TOOLBAR.MENU.NAV6' }
  ];

  currentPage: { url: string, translate: string };

  navFixed = false;
  private scrollOffset = 70;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.navFixed = (window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop || 0
    ) > this.scrollOffset;
  }

  constructor(
    private router: Router,
    private appQuery: AppQuery,
    private appService: AppService
  ) {
    super();
  }

  ngOnInit() {
    this.filterCurrentPage();
    this.addSubscription(this.initLanguage());
    this.addSubscription(this.initRouterEvent());
  }

  toggleLanguage(): void {
    this.appService.toggleLanguage();
  }

  private filterCurrentPage() {
    this.currentPage = this.pages.find(
      page => this.router.url.startsWith(page.url)
    );
  }

  private initLanguage(): Subscription {
    return this.appQuery.language$.subscribe(language => {
      this.language = language;
    });
  }

  private initRouterEvent(): Subscription {
    return this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.filterCurrentPage();
      }
    });
  }
}
