import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'ust-main-slide',
  templateUrl: './main-slide.component.html',
  styleUrls: ['./main-slide.component.scss']
})
export class MainSlideComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="main-slide-left"></i>', '<i class="main-slide-right"></i>'],
    nav: true,
    items: 1,
    responsive: {
      0: {
        items: 1,
      },
    },
  };

  constructor() { }

  ngOnInit() {
  }

}
