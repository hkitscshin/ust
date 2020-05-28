import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RecruitDetailComponent } from './components/recruit-detail/recruit-detail.component';
import { RecruitPageComponent } from './components/recruit-page/recruit-page.component';
const routes = [
    { path: '', pathMatch: 'full', component: RecruitPageComponent },
    { path: ':id', pathMatch: 'full', component: RecruitDetailComponent },
];
let RecruitRoutingModule = class RecruitRoutingModule {
};
RecruitRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], RecruitRoutingModule);
export { RecruitRoutingModule };
//# sourceMappingURL=recruit-routing.module.js.map