import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { getOffsetTopFromRoot, SubscriptionBaseComponent } from '@dminine/ng-lib';
import { PipeData } from '../../../../../../../ust/src/lib/entities/product/product.data';
let IntroducePipeBoilerComponent = class IntroducePipeBoilerComponent extends SubscriptionBaseComponent {
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
], IntroducePipeBoilerComponent.prototype, "tableRef", void 0);
IntroducePipeBoilerComponent = __decorate([
    Component({
        selector: 'ust-introduce-pipe-boiler',
        templateUrl: './introduce-pipe-boiler.component.html',
        styleUrls: ['./introduce-pipe-boiler.component.scss']
    })
], IntroducePipeBoilerComponent);
export { IntroducePipeBoilerComponent };
//# sourceMappingURL=introduce-pipe-boiler.component.js.map