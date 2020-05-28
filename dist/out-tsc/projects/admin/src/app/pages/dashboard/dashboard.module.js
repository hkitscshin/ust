import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = __decorate([
    NgModule({
        declarations: [DashboardPageComponent],
        imports: [
            CommonModule,
            DashboardRoutingModule
        ]
    })
], DashboardPageModule);
export { DashboardPageModule };
//# sourceMappingURL=dashboard.module.js.map