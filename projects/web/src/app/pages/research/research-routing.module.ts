import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResearchPageComponent } from './components/research-page/research-page.component';
import { ResearchPlanComponent } from './components/research-plan/research-plan.component';
import { ResearchSeparationComponent } from './components/research-separation/research-separation.component';


const routes: Routes = [
  { path: '',
    component: ResearchPageComponent,
    children: [
      { path: 'separation', component: ResearchSeparationComponent },
      { path: 'plan', component: ResearchPlanComponent },
      { path: '', redirectTo: 'separation', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResearchRoutingModule { }
