import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecruitDetailComponent } from './components/recruit-detail/recruit-detail.component';
import { RecruitPageComponent } from './components/recruit-page/recruit-page.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: RecruitPageComponent},
  { path: ':id', pathMatch: 'full', component: RecruitDetailComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruitRoutingModule { }
