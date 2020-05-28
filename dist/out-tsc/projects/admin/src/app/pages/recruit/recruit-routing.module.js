import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RecruitAddPageComponent } from './components/recruit-add-page/recruit-add-page.component';
import { RecruitModifyPageComponent } from './components/recruit-modify-page/recruit-modify-page.component';
import { RecruitPageComponent } from './components/recruit-page/recruit-page.component';
const routes = [
    { path: '', pathMatch: 'full', component: RecruitPageComponent },
    { path: 'add', component: RecruitAddPageComponent },
    { path: ':id', component: RecruitModifyPageComponent }
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