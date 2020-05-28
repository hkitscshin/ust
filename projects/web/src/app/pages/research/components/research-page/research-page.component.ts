import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ust-research-page',
  templateUrl: './research-page.component.html',
  styleUrls: ['./research-page.component.scss']
})
export class ResearchPageComponent implements OnInit {
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
