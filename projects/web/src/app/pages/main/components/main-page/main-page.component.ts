import { Component, OnInit } from '@angular/core';
import { ScrollTriggerService } from '../../../../core/services/scroll-trigger.service';

@Component({
  selector: 'ust-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})



export class MainPageComponent implements OnInit {
  config: any;
  fullPageApi: any;

  constructor(
    private scrollTriggerService: ScrollTriggerService
  ) {
    this.initFullPageConfig();
  }

  ngOnInit(): void {
    this.initScrollTrigger();
  }

  getRef(fullPageRef): void {
    this.fullPageApi = fullPageRef;
  }

  private initFullPageConfig(): void {
    this.config = {
      licenseKey: '9378C9D3-EAC443EF-AADF0223-61496A00',
      navigation: true,
      scrollBar: true,
      responsiveWidth: 599,
      responsiveSlides: false,
    };
  }

  private initScrollTrigger(): void {
    const trigger = this.scrollTriggerService.createScrollTrigger();
  }
}
