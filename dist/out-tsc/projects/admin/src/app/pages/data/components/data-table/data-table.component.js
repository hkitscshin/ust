import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let DataTableComponent = class DataTableComponent {
    constructor() {
        this.displayedColumns = ['no', 'title', 'createdAt', 'modify'];
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], DataTableComponent.prototype, "entities", void 0);
DataTableComponent = __decorate([
    Component({
        selector: 'ust-data-table',
        templateUrl: './data-table.component.html',
        styleUrls: ['./data-table.component.scss']
    })
], DataTableComponent);
export { DataTableComponent };
//# sourceMappingURL=data-table.component.js.map