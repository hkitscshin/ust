import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule, FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { DnlSharedModule } from '@dminine/ng-lib';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutPageComponent } from './components/layout-page/layout-page.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SubLayoutPageComponent } from './components/sub-layout-page/sub-layout-page.component';
import { SubPageStepComponent } from './components/sub-page-step/sub-page-step.component';



@NgModule({
  declarations: [
    LayoutPageComponent,
    ToolbarComponent,
    SubLayoutPageComponent,
    FooterComponent,
    SubPageStepComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexModule,
    DnlSharedModule,
    TranslateModule,
    FlexLayoutModule,
    SharedModule
  ],
  exports: [
    LayoutPageComponent,
    SubLayoutPageComponent,
    ToolbarComponent
  ]
})
export class CoreModule { }
