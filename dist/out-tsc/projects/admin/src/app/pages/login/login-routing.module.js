import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
const routes = [
    { path: '', pathMatch: 'full', component: LoginPageComponent }
];
let LoginRoutingModule = class LoginRoutingModule {
};
LoginRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], LoginRoutingModule);
export { LoginRoutingModule };
//# sourceMappingURL=login-routing.module.js.map