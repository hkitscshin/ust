import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutPageComponent } from './core/components/layout-page/layout-page.component';
import { SubLayoutPageComponent } from './core/components/sub-layout-page/sub-layout-page.component';



const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: '', pathMatch: 'full', loadChildren: () => import('./pages/main/main.module').then(m => m.MainPageModule) },
    ]
  },

  {
    path: '',
    component: SubLayoutPageComponent,
    children: [
      { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutPageModule) },
      { path: 'product', loadChildren: () => import('./pages/product/product.module').then(m => m.ProductPageModule) },
      { path: 'research', loadChildren: () => import('./pages/research/research.module').then(m => m.ResearchPageModule) },
      { path: 'investment', loadChildren: () => import('./pages/investment/investment.module').then(m => m.InvestmentPageModule) },
      { path: 'data', loadChildren: () => import('./pages/data/data.module').then(m => m.DataPageModule) },
      { path: 'recruit', loadChildren: () => import('./pages/recruit/recruit.module').then(m => m.RecruitPageModule) }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
