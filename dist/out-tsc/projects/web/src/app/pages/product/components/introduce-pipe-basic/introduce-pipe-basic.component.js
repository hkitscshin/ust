import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { getOffsetTopFromRoot, SubscriptionBaseComponent } from '@dminine/ng-lib';
import { PipeData } from '../../../../../../../ust/src/lib/entities/product/product.data';
let IntroducePipeBasicComponent = class IntroducePipeBasicComponent extends SubscriptionBaseComponent {
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
], IntroducePipeBasicComponent.prototype, "tableRef", void 0);
IntroducePipeBasicComponent = __decorate([
    Component({
        selector: 'ust-introduce-pipe-basic',
        templateUrl: './introduce-pipe-basic.component.html',
        styleUrls: ['./introduce-pipe-basic.component.scss']
    })
], IntroducePipeBasicComponent);
export { IntroducePipeBasicComponent };
//# sourceMappingURL=introduce-pipe-basic.component.js.map