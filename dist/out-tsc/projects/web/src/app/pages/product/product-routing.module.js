import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CertificationPageComponent } from './components/certification-page/certification-page.component';
import { IntroducePageComponent } from './components/introduce-page/introduce-page.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { SummaryPageComponent } from './components/summary-page/summary-page.component';
import { SystemPageComponent } from './components/system-page/system-page.component';
const routes = [
    { path: '',
        component: ProductPageComponent,
        children: [
            { path: 'summary', component: SummaryPageComponent },
            { path: 'introduce', component: IntroducePageComponent },
            { path: 'certification', component: CertificationPageComponent },
            { path: 'system', component: SystemPageComponent },
            { path: '', redirectTo: 'summary', pathMatch: 'full' }
        ]
    }
];
let ProductRoutingModule = class ProductRoutingModule {
};
ProductRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], ProductRoutingModule);
export { ProductRoutingModule };
//# sourceMappingURL=product-routing.module.js.map