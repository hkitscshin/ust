import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'ust-certification-auth',
  templateUrl: './certification-auth.component.html',
  styleUrls: ['./certification-auth.component.scss']
})
export class CertificationAuthComponent implements OnInit {
  activeIndex: number;
  navFixed = false;
  private scrollOffset = 120;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.navFixed = (window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop || 120
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
