import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';
import { DnlSharedModule } from '@dminine/ng-lib';
import { TranslateModule } from '@ngx-translate/core';
import { UstSharedModule } from '../../../../../ust/src/lib/shared/ust-shared.module';
import { SharedModule } from '../../shared/shared.module';
import { RecruitRoutingModule } from './recruit-routing.module';
import { RecruitPageComponent } from './components/recruit-page/recruit-page.component';
import { RecruitDetailComponent } from './components/recruit-detail/recruit-detail.component';
let RecruitPageModule = class RecruitPageModule {
};
RecruitPageModule = __decorate([
    NgModule({
        declarations: [RecruitPageComponent, RecruitDetailComponent],
        imports: [
            CommonModule,
            RecruitRoutingModule,
            DnlSharedModule,
            FlexModule,
            SharedModule,
            TranslateModule,
            UstSharedModule
        ]
    })
], RecruitPageModule);
export { RecruitPageModule };
//# sourceMappingURL=recruit.module.js.map