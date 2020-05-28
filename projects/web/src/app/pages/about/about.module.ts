import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule, FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material';
import { DnlSharedModule } from '@dminine/ng-lib';
import { TranslateModule } from '@ngx-translate/core';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AboutRoutingModule } from './about-routing.module';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { StoryPageComponent } from './components/story-page/story-page.component';
import { GroupPageComponent } from './components/group-page/group-page.component';
import { LocationPageComponent } from './components/location-page/location-page.component';
import { StorySlideComponent } from './components/story-slide/story-slide.component';
import { StoryStepComponent } from './components/story-step/story-step.component';
import { LocationContentComponent } from './components/location-content/location-content.component';


@NgModule({
  declarations: [
    AboutPageComponent,
    StoryPageComponent,
    GroupPageComponent,
    LocationPageComponent,
    StorySlideComponent,
    StoryStepComponent,
    LocationContentComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    MatTabsModule,
    NgxHmCarouselModule,
    FormsModule,
    DnlSharedModule,
    CarouselModule,
    FlexModule,
    TranslateModule,
    FlexLayoutModule
  ]
})
export class AboutPageModule { }
