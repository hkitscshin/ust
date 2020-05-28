import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { DnlSharedModule } from '@dminine/ng-lib';
import { MaterialModule } from '../../../../ust/src/lib/modules/material/material.module';
import { LayoutPageComponent } from './components/layout-page/layout-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
let CoreModule = class CoreModule {
};
CoreModule = __decorate([
    NgModule({
        declarations: [
            LayoutPageComponent,
            SidebarComponent,
            ToolbarComponent
        ],
        imports: [
            CommonModule,
            RouterModule,
            MaterialModule,
            DnlSharedModule,
            FlexModule
        ],
        exports: [LayoutPageComponent]
    })
], CoreModule);
export { CoreModule };
//# sourceMappingURL=core.module.js.map