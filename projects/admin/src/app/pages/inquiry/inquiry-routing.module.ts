import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstimateModifyPageComponent } from './components/estimate-modify-page/estimate-modify-page.component';
import { EstimatePageComponent } from './components/estimate-page/estimate-page.component';
import { InquiryModifyPageComponent } from './components/inquiry-modify-page/inquiry-modify-page.component';
import { InquiryPageComponent } from './components/page/inquiry-page.component';
import { GradeModifyPageComponent } from './components/grade-modify-page/grade-modify-page.component';
import { GradePageComponent } from './components/grade-page/grade-page.component';
import { InquiryPageComponent as ProductInquiryPageComponent } from './components/inquiry-page/inquiry-page.component';

const routes: Routes = [
  {
    path: '',
    component: InquiryPageComponent,
    children: [
      { path: 'grade', component: GradePageComponent },
      { path: 'grade/:id', component: GradeModifyPageComponent },
      { path: 'estimate', component: EstimatePageComponent },
      { path: 'estimate/:id', component: EstimateModifyPageComponent },
      { path: 'inquiry', component: ProductInquiryPageComponent },
      { path: 'inquiry/:id', component: InquiryModifyPageComponent },
      { path: '', redirectTo: 'grade', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InquiryRoutingModule { }
