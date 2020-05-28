import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { BoardListBaseComponent } from '../../../../core/modules/board-base/components/board-list-base.component';
let BoardPressComponent = class BoardPressComponent extends BoardListBaseComponent {
    constructor(pressReleaseService) {
        super(pressReleaseService);
        this.pressReleaseService = pressReleaseService;
    }
    stripTag(html) {
        if (!html || typeof html !== 'string') {
            return html;
        }
        return html.replace(/(<(.|\n)*?>)|(&[#a-z0-9]+;)|(\n)/g, '');
    }
};
BoardPressComponent = __decorate([
    Component({
        selector: 'ust-board-press',
        templateUrl: './board-press.component.html',
        styleUrls: ['./board-press.component.scss']
    })
], BoardPressComponent);
export { BoardPressComponent };
//# sourceMappingURL=board-press.component.js.map