import { Component, OnInit, Input } from '@angular/core';
import { ScrollTriggerService } from '../../../../core/services/scroll-trigger.service';

@Component({
  selector: 'ust-location-content',
  templateUrl: './location-content.component.html',
  styleUrls: ['./location-content.component.scss']
})
export class LocationContentComponent implements OnInit {
  @Input() tabIndex: number;

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
