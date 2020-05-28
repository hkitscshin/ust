import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule, FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { DnlSharedModule } from '@dminine/ng-lib';
import { TranslateModule } from '@ngx-translate/core';
import { PaginationComponent } from './components/pagination/pagination.component';
import { MobileToolbarComponent } from './components/mobile-toolbar/mobile-toolbar.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    NgModule({
        declarations: [PaginationComponent, MobileToolbarComponent, SafeHtmlPipe],
        imports: [
            CommonModule,
            FlexModule,
            DnlSharedModule,
            FlexLayoutModule,
            RouterModule,
            TranslateModule
        ],
        exports: [
            PaginationComponent,
            MobileToolbarComponent,
            SafeHtmlPipe
        ]
    })
], SharedModule);
export { SharedModule };
//# sourceMappingURL=shared.module.js.map