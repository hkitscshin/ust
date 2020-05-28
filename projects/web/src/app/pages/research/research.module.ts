import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule, ExtendedModule } from '@angular/flex-layout';
import { DnlSharedModule } from '@dminine/ng-lib';
import { TranslateModule } from '@ngx-translate/core';

import { ResearchRoutingModule } from './research-routing.module';
import { ResearchPageComponent } from './components/research-page/research-page.component';
import { ResearchSeparationComponent } from './components/research-separation/research-separation.component';
import { ResearchPlanComponent } from './components/research-plan/research-plan.component';


@NgModule({
  declarations: [ResearchPageComponent, ResearchSeparationComponent, ResearchPlanComponent],
  imports: [
    CommonModule,
    ResearchRoutingModule,
    FlexModule,
    DnlSharedModule,
    TranslateModule,
    ExtendedModule
  ]
})
export class ResearchPageModule { }
