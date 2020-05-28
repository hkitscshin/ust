import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecruitAddPageComponent } from './components/recruit-add-page/recruit-add-page.component';
import { RecruitModifyPageComponent } from './components/recruit-modify-page/recruit-modify-page.component';
import { RecruitPageComponent } from './components/recruit-page/recruit-page.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: RecruitPageComponent },
  { path: 'add', component: RecruitAddPageComponent },
  { path: ':id', component: RecruitModifyPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruitRoutingModule { }
