import { Component, OnInit, HostListener, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ust-certification-page',
  templateUrl: './certification-page.component.html',
  styleUrls: ['./certification-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CertificationPageComponent implements OnInit {
  activeIndex: number;

  navFixed = false;
  private scrollOffset = 70;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.navFixed = (window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop || 0
    ) > this.scrollOffset;
  }

  constructor() {
    this.activeIndex = 0;
  }

  ngOnInit() {
  }

  changeIndex(idx: number) {
    this.activeIndex = idx;
  }
}
