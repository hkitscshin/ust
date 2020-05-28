import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { GroupPageComponent } from './components/group-page/group-page.component';
import { LocationPageComponent } from './components/location-page/location-page.component';
import { StoryPageComponent } from './components/story-page/story-page.component';


const routes: Routes = [
  { path: '',
    component: AboutPageComponent,
    children: [
      { path: 'story', component: StoryPageComponent} ,
      { path: 'group', component: GroupPageComponent },
      { path: 'location', component: LocationPageComponent },
      { path: '', redirectTo: 'story', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
