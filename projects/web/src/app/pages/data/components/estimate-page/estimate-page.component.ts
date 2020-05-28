import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ust-estimate-page',
  templateUrl: './estimate-page.component.html',
  styleUrls: ['./estimate-page.component.scss']
})
export class EstimatePageComponent implements OnInit {
  activeIndex: number;
  Opened = false;

  constructor() {
    this.activeIndex = 0;
  }

  ngOnInit() {
  }

  changeIndex(idx: number) {
    this.activeIndex = idx;
  }

  onClick() {
    this.Opened = !this.Opened;
  }
}
