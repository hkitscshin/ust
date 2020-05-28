import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { DnlScrollService, getOffsetTopFromRoot, SubscriptionBaseComponent } from '@dminine/ng-lib';
import { Subscription } from 'rxjs';
import { PipeData } from '../../../../../../../ust/src/lib/entities/product/product.data';

@Component({
  selector: 'ust-introduce-pipe-boiler',
  templateUrl: './introduce-pipe-boiler.component.html',
  styleUrls: ['./introduce-pipe-boiler.component.scss']
})
export class IntroducePipeBoilerComponent extends SubscriptionBaseComponent implements OnInit {
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
