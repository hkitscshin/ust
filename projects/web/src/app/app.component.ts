import { Component, OnInit } from '@angular/core';
import 'hammerjs';
import { Router, NavigationEnd } from '@angular/router';
import { SubscriptionBaseComponent } from '@dminine/ng-lib';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { AppService } from './core/state';

declare var gtag;

@Component({
  selector: 'ust-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends SubscriptionBaseComponent implements OnInit {
  constructor(
    private router: Router,
    private appService: AppService,
    private translate: TranslateService
  ) {
    super();
  }

  ngOnInit(): void {
    this.initLanguage();
    this.addSubscription(this.initRouterEvent());
  }

  private initLanguage(): void {
    this.translate.setDefaultLang('en');
    const localLanguage = window.localStorage.getItem('language');

    if (localLanguage) {
      this.appService.setLanguage(localLanguage);
    } else {
      const browserLang = navigator.language || (navigator as any).userLanguage;
      this.appService.setLanguage(browserLang);
    }
  }

  private initRouterEvent(): Subscription {
    return this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.moveToTop();
        this.initGtag(event);
      }
    });
  }

  private moveToTop(): void {
    window.scrollTo(0, 0);
  }

  private initGtag(event: NavigationEnd): void {
    gtag('config', 'UA-154681557-1', {
      page_path: event.urlAfterRedirects
    });
  }
}
