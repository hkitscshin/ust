import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ust-introduce-page',
  templateUrl: './introduce-page.component.html',
  styleUrls: ['./introduce-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IntroducePageComponent implements OnInit {
  activeIndex: number;

  constructor() {
    this.activeIndex = 0;
  }

  ngOnInit() {
  }

  changeIndex(idx: number) {
    this.activeIndex = idx;
  }

}
