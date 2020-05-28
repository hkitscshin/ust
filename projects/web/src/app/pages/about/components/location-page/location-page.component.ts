import { Component, OnInit } from '@angular/core';
import { ScrollTriggerService } from '../../../../core/services/scroll-trigger.service';

@Component({
  selector: 'ust-location-page',
  templateUrl: './location-page.component.html',
  styleUrls: ['./location-page.component.scss']
})
export class LocationPageComponent implements OnInit {
  activeIndex: number;
  Opened = false;

  constructor(
    private scrollTriggerService: ScrollTriggerService
  ) {
    this.activeIndex = 0;
  }

  ngOnInit(): void {
    this.initScrollTrigger();
  }

  changeIndex(idx: number) {
    this.activeIndex = idx;
  }

  onClick() {
    this.Opened = !this.Opened;
  }

  private initScrollTrigger(): void {
    const trigger = this.scrollTriggerService.createScrollTrigger();
  }

}
