import { Component, OnInit } from '@angular/core';
import { SubscriptionBaseComponent } from '@dminine/ng-lib';
import { Subscription } from 'rxjs';
import { AppService, Language, AppQuery } from '../../../core/state';

@Component({
  selector: 'ust-mobile-toolbar',
  templateUrl: './mobile-toolbar.component.html',
  styleUrls: ['./mobile-toolbar.component.scss']
})
export class MobileToolbarComponent extends SubscriptionBaseComponent implements OnInit {
  language: Language = 'ko-KR';
  isMobileMenuClosed = true;
  isOpened = new Array(2).fill(false);

  constructor(
    private appQuery: AppQuery,
    private appService: AppService
  ) {
    super();
  }

  ngOnInit() {
    this.addSubscription(this.initLanguage());
  }

  toggleLanguage(): void {
    this.appService.toggleLanguage();
  }

  openMobileMenu() {
    this.isMobileMenuClosed = false;
  }

  closeMobileMenu() {
    this.isMobileMenuClosed = true;
  }

  private initLanguage(): Subscription {
    return this.appQuery.language$.subscribe(language => {
      this.language = language;
    });
  }
}
