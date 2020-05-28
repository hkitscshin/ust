import { Component, OnInit } from '@angular/core';
import { ScrollTriggerService } from '../../../../core/services/scroll-trigger.service';

@Component({
  selector: 'ust-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.scss']
})
export class SummaryPageComponent implements OnInit {

  constructor(
    private scrollTriggerService: ScrollTriggerService
  ) { }

  ngOnInit(): void {
    this.initScrollTrigger();
  }

  private initScrollTrigger(): void {
    const trigger = this.scrollTriggerService.createScrollTrigger();
  }

}
