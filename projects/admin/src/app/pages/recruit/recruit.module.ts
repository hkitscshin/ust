import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../../ust/src/lib/modules/material/material.module';
import { UstSharedModule } from '../../../../../ust/src/lib/shared/ust-shared.module';
import { TinymceModule } from '../../modules/tinymce/tinymce.module';
import { RecruitModifyPageComponent } from './components/recruit-modify-page/recruit-modify-page.component';

import { RecruitRoutingModule } from './recruit-routing.module';
import { RecruitPageComponent } from './components/recruit-page/recruit-page.component';
import { RecruitTableComponent } from './components/recruit-table/recruit-table.component';
import { RecruitAddPageComponent } from './components/recruit-add-page/recruit-add-page.component';
import { RecruitFormComponent } from './components/recruit-form/recruit-form.component';


@NgModule({
  declarations: [
    RecruitPageComponent,
    RecruitTableComponent,
    RecruitAddPageComponent,
    RecruitModifyPageComponent,
    RecruitFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    UstSharedModule,
    FlexModule,
    ReactiveFormsModule,
    RecruitRoutingModule,
    TinymceModule
  ]
})
export class RecruitPageModule { }
