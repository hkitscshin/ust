import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'ust-story-slide',
  templateUrl: './story-slide.component.html',
  styleUrls: ['./story-slide.component.scss']
})
export class StorySlideComponent implements OnInit {
  @Input() tabIndex: number;
  @Output() changeSlide = new EventEmitter<number>();

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
    },

    nav: true,
  };

  constructor() { }

  ngOnInit() {
  }

  slideChange(slidesOutputData: SlidesOutputData): void {
    this.changeSlide.emit(slidesOutputData.startPosition);
  }
}
