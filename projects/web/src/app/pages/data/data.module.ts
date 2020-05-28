import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule, FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material';
import { DnlSharedModule } from '@dminine/ng-lib';
import { TranslateModule } from '@ngx-translate/core';
import { UstSharedModule } from '../../../../../ust/src/lib/shared/ust-shared.module';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../../../../ust/src/lib/modules/material/material.module';

import { DataRoutingModule } from './data-routing.module';
import { DataPageComponent } from './components/data-page/data-page.component';
import { BoardPageComponent } from './components/board-page/board-page.component';
import { DownloadPageComponent } from './components/download-page/download-page.component';
import { BoardNoticeComponent } from './components/board-notice/board-notice.component';
import { BoardPressComponent } from './components/board-press/board-press.component';
import { BoardCompanyComponent } from './components/board-company/board-company.component';
import { BoardNoticeDetailComponent } from './components/board-notice-detail/board-notice-detail.component';
import { BoardPressDetailComponent } from './components/board-press-detail/board-press-detail.component';
import { BoardCompanyDetailComponent } from './components/board-company-detail/board-company-detail.component';
import { GradePageComponent } from './components/grade-page/grade-page.component';
import { EstimatePageComponent } from './components/estimate-page/estimate-page.component';
import { EstimateInquiryComponent } from './components/estimate-inquiry/estimate-inquiry.component';
import { ProductInquiryComponent } from './components/product-inquiry/product-inquiry.component';
import { GradeCompleteComponent } from './components/grade-complete/grade-complete.component';
import { InquiryFormComponent } from './components/inquiry-form/inquiry-form.component';
import { GradeRequestComponent } from './components/grade-request/grade-request.component';
import { GradeDownloadComponent } from './components/grade-download/grade-download.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DataPageComponent,
    BoardPageComponent,
    DownloadPageComponent,
    BoardNoticeComponent,
    BoardPressComponent,
    BoardCompanyComponent,
    BoardNoticeDetailComponent,
    BoardPressDetailComponent,
    BoardCompanyDetailComponent,
    GradePageComponent,
    EstimatePageComponent,
    EstimateInquiryComponent,
    ProductInquiryComponent,
    GradeCompleteComponent,
    InquiryFormComponent,
    GradeRequestComponent,
    GradeDownloadComponent
  ],
  imports: [
    CommonModule,
    DataRoutingModule,
    DnlSharedModule,
    FlexModule,
    SharedModule,
    TranslateModule,
    UstSharedModule,
    FlexLayoutModule,
    MatRadioModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class DataPageModule { }
