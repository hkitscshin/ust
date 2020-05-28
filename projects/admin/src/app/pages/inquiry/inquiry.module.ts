import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material';
import { DnlReactiveFormsModule } from '@dminine/ng-lib';
import { MaterialModule } from '../../../../../ust/src/lib/modules/material/material.module';
import { UstSharedModule } from '../../../../../ust/src/lib/shared/ust-shared.module';
import { TinymceModule } from '../../modules/tinymce/tinymce.module';
import { SharedModule } from '../../shared/shared.module';
import { EstimateFormComponent } from './components/estimate-form/estimate-form.component';
import { EstimateModifyPageComponent } from './components/estimate-modify-page/estimate-modify-page.component';
import { EstimatePageComponent } from './components/estimate-page/estimate-page.component';
import { EstimateTableComponent } from './components/estimate-table/estimate-table.component';
import { InquiryFormComponent } from './components/inquiry-form/inquiry-form.component';
import { InquiryModifyPageComponent } from './components/inquiry-modify-page/inquiry-modify-page.component';
import { InquiryTableComponent } from './components/inquiry-table/inquiry-table.component';
import { InquiryPageComponent as ProductInquiryPageComponent } from './components/inquiry-page/inquiry-page.component';
import { InquiryPageComponent } from './components/page/inquiry-page.component';
import { GradePageComponent } from './components/grade-page/grade-page.component';
import { GradeTableComponent } from './components/grade-table/grade-table.component';
import { GradeModifyPageComponent } from './components/grade-modify-page/grade-modify-page.component';
import { GradeFormComponent } from './components/grade-form/grade-form.component';
import { InquiryRoutingModule } from './inquiry-routing.module';


@NgModule({
  declarations: [
    InquiryPageComponent,
    GradePageComponent,
    GradeTableComponent,
    GradeModifyPageComponent,
    GradeFormComponent,
    EstimatePageComponent,
    EstimateTableComponent,
    EstimateModifyPageComponent,
    EstimateFormComponent,
    ProductInquiryPageComponent,
    InquiryTableComponent,
    InquiryModifyPageComponent,
    InquiryFormComponent
  ],
  imports: [
    CommonModule,
    InquiryRoutingModule,
    FlexModule,
    MaterialModule,
    DnlReactiveFormsModule,
    ReactiveFormsModule,
    SharedModule,
    TinymceModule,
    UstSharedModule,
    MatRadioModule
  ]
})
export class InquiryPageModule { }
