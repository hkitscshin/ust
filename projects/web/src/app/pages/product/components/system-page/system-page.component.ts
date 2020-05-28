import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ScrollTriggerService } from '../../../../core/services/scroll-trigger.service';

@Component({
  selector: 'ust-system-page',
  templateUrl: './system-page.component.html',
  styleUrls: ['./system-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SystemPageComponent implements OnInit {

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

  private initScrollTrigger(): void {
    const trigger = this.scrollTriggerService.createScrollTrigger();
  }

  changeIndex(idx: number) {
    this.activeIndex = idx;
  }

  onClick() {
    this.Opened = !this.Opened;
  }

}
