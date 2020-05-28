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


@NgModule({
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
export class RecruitPageModule { }
