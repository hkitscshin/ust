import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule, ExtendedModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material';
import { DnlSharedModule } from '@dminine/ng-lib';
import { TranslateModule } from '@ngx-translate/core';
import { GoogleChartsModule } from 'angular-google-charts';
import { ProductRoutingModule } from './product-routing.module';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { SummaryPageComponent } from './components/summary-page/summary-page.component';
import { IntroducePageComponent } from './components/introduce-page/introduce-page.component';
import { CertificationPageComponent } from './components/certification-page/certification-page.component';
import { SystemPageComponent } from './components/system-page/system-page.component';
import { IntroducePipeComponent } from './components/introduce-pipe/introduce-pipe.component';
import { IntroducePipeBigComponent } from './components/introduce-pipe-big/introduce-pipe-big.component';
import { IntroducePipeBasicComponent } from './components/introduce-pipe-basic/introduce-pipe-basic.component';
import { IntroducePipeBoilerComponent } from './components/introduce-pipe-boiler/introduce-pipe-boiler.component';
import { CertificationAuthComponent } from './components/certification-auth/certification-auth.component';
import { SystemTab1Component } from './components/system-tab1/system-tab1.component';
import { SystemTab2Component } from './components/system-tab2/system-tab2.component';
import { SystemTab3Component } from './components/system-tab3/system-tab3.component';
import { SystemTab4Component } from './components/system-tab4/system-tab4.component';
import { SystemTab5Component } from './components/system-tab5/system-tab5.component';
import { CertificationAuthListComponent } from './components/certification-auth-list/certification-auth-list.component';
import { CertificationAuthDialogComponent } from './components/certification-auth-dialog/certification-auth-dialog.component';
import { CertificationGradeListComponent } from './components/certification-grade-list/certification-grade-list.component';


@NgModule({
  declarations: [
    ProductPageComponent,
    SummaryPageComponent,
    IntroducePageComponent,
    CertificationPageComponent,
    SystemPageComponent,
    IntroducePipeComponent,
    IntroducePipeBigComponent,
    IntroducePipeBasicComponent,
    IntroducePipeBoilerComponent,
    CertificationAuthComponent,
    SystemTab1Component,
    SystemTab2Component,
    SystemTab3Component,
    SystemTab4Component,
    SystemTab5Component,
    CertificationAuthListComponent,
    CertificationAuthDialogComponent,
    CertificationGradeListComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FlexModule,
    DnlSharedModule,
    TranslateModule,
    GoogleChartsModule,
    ExtendedModule,
    MatDialogModule
  ],

  entryComponents: [
    CertificationAuthDialogComponent
  ]
})
export class ProductPageModule { }
