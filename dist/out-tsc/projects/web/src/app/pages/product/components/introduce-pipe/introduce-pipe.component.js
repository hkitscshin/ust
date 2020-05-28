import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { SubscriptionBaseComponent, getOffsetTopFromRoot } from '@dminine/ng-lib';
import { PipeData } from '../../../../../../../ust/src/lib/entities/product/product.data';
let IntroducePipeComponent = class IntroducePipeComponent extends SubscriptionBaseComponent {
    constructor(ngZone, elementRef, scrollService) {
        super();
        this.ngZone = ngZone;
        this.elementRef = elementRef;
        this.scrollService = scrollService;
        this.pipeData = PipeData;
        this.headerFixed = false;
    }
    ngOnInit() {
        this.addSubscription(this.initScroll());
    }
    initScroll() {
        return this.ngZone.runOutsideAngular(() => {
            return this.scrollService.scrollTop$.subscribe(scrollTop => {
                const offsetTop = getOffsetTopFromRoot(this.tableRef.nativeElement);
                if (scrollTop > offsetTop) {
                    this.headerFixed = true;
                }
                else {
                    this.headerFixed = false;
                }
            });
        });
    }
};
__decorate([
    ViewChild('tableRef', { static: true })
], IntroducePipeComponent.prototype, "tableRef", void 0);
IntroducePipeComponent = __decorate([
    Component({
        selector: 'ust-introduce-pipe',
        templateUrl: './introduce-pipe.component.html',
        styleUrls: ['./introduce-pipe.component.scss']
    })
], IntroducePipeComponent);
export { IntroducePipeComponent };
//# sourceMappingURL=introduce-pipe.component.js.map