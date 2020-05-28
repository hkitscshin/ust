import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
const routes = [
    { path: '', pathMatch: 'full', component: MainPageComponent }
];
let MainRoutingModule = class MainRoutingModule {
};
MainRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], MainRoutingModule);
export { MainRoutingModule };
//# sourceMappingURL=main-routing.module.js.map