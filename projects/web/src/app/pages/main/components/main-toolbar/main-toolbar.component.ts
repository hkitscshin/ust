import { Component, OnInit, HostListener } from '@angular/core';
import { SubscriptionBaseComponent } from '@dminine/ng-lib';
import { Subscription } from 'rxjs';
import { AppService, Language, AppQuery } from '../../../../core/state';

@Component({
  selector: 'ust-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.scss']
})
export class MainToolbarComponent extends SubscriptionBaseComponent implements OnInit {
  language: Language = 'ko-KR';
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

  private initLanguage(): Subscription {
    return this.appQuery.language$.subscribe(language => {
      this.language = language;
    });
  }
}
