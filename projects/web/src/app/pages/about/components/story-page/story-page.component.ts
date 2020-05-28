import { Component, OnInit } from '@angular/core';
import { ScrollTriggerService } from '../../../../core/services/scroll-trigger.service';

@Component({
  selector: 'ust-story-page',
  templateUrl: './story-page.component.html',
  styleUrls: ['./story-page.component.scss']
})
export class StoryPageComponent implements OnInit {
  activeIndex: number;
  Opened = false;
  startPosition: number;

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

  onSlideChange(startPosition: number): void {
    this.startPosition = startPosition;
  }

  private initScrollTrigger(): void {
    const trigger = this.scrollTriggerService.createScrollTrigger();
  }
}
