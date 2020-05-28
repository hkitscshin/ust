import { Component, NgZone, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SubscriptionBaseComponent, DnlScrollService, getOffsetTopFromRoot } from '@dminine/ng-lib';
import { Subscription } from 'rxjs';
import { PipeData } from '../../../../../../../ust/src/lib/entities/product/product.data';

@Component({
  selector: 'ust-introduce-pipe',
  templateUrl: './introduce-pipe.component.html',
  styleUrls: ['./introduce-pipe.component.scss']
})
export class IntroducePipeComponent extends SubscriptionBaseComponent implements OnInit {
  @ViewChild('tableRef', { static: true }) tableRef: ElementRef;

  pipeData = PipeData;
  headerFixed = false;

  constructor(
    private ngZone: NgZone,
    private elementRef: ElementRef,
    private scrollService: DnlScrollService
  ) {
    super();
  }

  ngOnInit() {
    this.addSubscription(this.initScroll());
  }

  private initScroll(): Subscription {
    return this.ngZone.runOutsideAngular(() => {
      return this.scrollService.scrollTop$.subscribe(scrollTop => {
        const offsetTop = getOffsetTopFromRoot(this.tableRef.nativeElement);

        if (scrollTop > offsetTop) {
          this.headerFixed = true;
        } else {
          this.headerFixed = false;
        }
      });
    });
  }
}


