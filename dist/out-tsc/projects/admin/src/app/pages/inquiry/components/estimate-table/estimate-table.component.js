import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let EstimateTableComponent = class EstimateTableComponent {
    constructor() {
        this.displayedColumns = ['createdAt', 'email', 'goods', 'steelType', 'standard', 'status', 'modify'];
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], EstimateTableComponent.prototype, "entities", void 0);
EstimateTableComponent = __decorate([
    Component({
        selector: 'ust-estimate-table',
        templateUrl: './estimate-table.component.html',
        styleUrls: ['./estimate-table.component.scss']
    })
], EstimateTableComponent);
export { EstimateTableComponent };
//# sourceMappingURL=estimate-table.component.js.map