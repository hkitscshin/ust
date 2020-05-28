import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { BoardDetailBaseComponent } from '../../../../core/modules/board-base/components/board-detail-base.component';
let BoardPressDetailComponent = class BoardPressDetailComponent extends BoardDetailBaseComponent {
    constructor(route, pressReleaseService) {
        super(route, pressReleaseService);
        this.route = route;
        this.pressReleaseService = pressReleaseService;
    }
    ngOnInit() {
        super.ngOnInit();
        this.increaseViewCount();
    }
    increaseViewCount() {
        if (this.entity) {
            this.pressReleaseService.update(this.entity.id, { viewCount: this.entity.viewCount + 1 });
        }
    }
};
BoardPressDetailComponent = __decorate([
    Component({
        selector: 'ust-board-press-detail',
        templateUrl: './board-press-detail.component.html',
        styleUrls: ['./board-press-detail.component.scss']
    })
], BoardPressDetailComponent);
export { BoardPressDetailComponent };
//# sourceMappingURL=board-press-detail.component.js.map