import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../ust/src/lib/modules/auth/guard/auth.guard';
import { LayoutPageComponent } from './core/components/layout-page/layout-page.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardPageModule),
        data: { title: '대시보드' }
      },
      {
        path: 'investment',
        loadChildren: () => import('./pages/investment/investment.module').then(m => m.InvestmentPageModule),
        data: { title: '투자 관리' }
      },
      {
        path: 'data',
        loadChildren: () => import('./pages/data/data.module').then(m => m.DataPageModule),
        data: { title: '자료실' }
      },
      {
        path: 'inquiry',
        loadChildren: () => import('./pages/inquiry/inquiry.module').then(m => m.InquiryPageModule),
        data: { title: '문의 관리' }
      },
      {
        path: 'recruit',
        loadChildren: () => import('./pages/recruit/recruit.module').then(m => m.RecruitPageModule),
        data: { title: '채용 관리' }
      }
    ]
  },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
