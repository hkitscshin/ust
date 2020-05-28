import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResearchPageComponent } from './components/research-page/research-page.component';
import { ResearchPlanComponent } from './components/research-plan/research-plan.component';
import { ResearchSeparationComponent } from './components/research-separation/research-separation.component';
const routes = [
    { path: '',
        component: ResearchPageComponent,
        children: [
            { path: 'separation', component: ResearchSeparationComponent },
            { path: 'plan', component: ResearchPlanComponent },
            { path: '', redirectTo: 'separation', pathMatch: 'full' }
        ]
    }
];
let ResearchRoutingModule = class ResearchRoutingModule {
};
ResearchRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], ResearchRoutingModule);
export { ResearchRoutingModule };
//# sourceMappingURL=research-routing.module.js.map