import { Component, OnInit, Input } from '@angular/core';
import { ScrollTriggerService } from '../../../../core/services/scroll-trigger.service';

@Component({
  selector: 'ust-story-step',
  templateUrl: './story-step.component.html',
  styleUrls: ['./story-step.component.scss']
})
export class StoryStepComponent implements OnInit {
  @Input() tabIndex: number;
  @Input() startPosition = 0;

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
