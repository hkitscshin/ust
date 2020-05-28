import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { DnlSharedModule } from '@dminine/ng-lib';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { TranslateModule } from '@ngx-translate/core';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from '../../shared/shared.module';

import { MainRoutingModule } from './main-routing.module';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MainToolbarComponent } from './components/main-toolbar/main-toolbar.component';
import { MainSlideComponent } from './components/main-slide/main-slide.component';
import { MainSection2SlideComponent } from './components/main-section2-slide/main-section2-slide.component';


@NgModule({
  declarations: [
    MainPageComponent,
    MainToolbarComponent,
    MainSlideComponent,
    MainSection2SlideComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    AngularFullpageModule,
    FlexLayoutModule,
    DnlSharedModule,
    NgxHmCarouselModule,
    FormsModule,
    TranslateModule,
    SharedModule,
    CarouselModule
  ]
})
export class MainPageModule { }
