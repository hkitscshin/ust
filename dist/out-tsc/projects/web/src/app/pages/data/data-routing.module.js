import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BoardCompanyDetailComponent } from './components/board-company-detail/board-company-detail.component';
import { BoardNoticeDetailComponent } from './components/board-notice-detail/board-notice-detail.component';
import { BoardPageComponent } from './components/board-page/board-page.component';
import { BoardPressDetailComponent } from './components/board-press-detail/board-press-detail.component';
import { DataPageComponent } from './components/data-page/data-page.component';
import { DownloadPageComponent } from './components/download-page/download-page.component';
import { EstimatePageComponent } from './components/estimate-page/estimate-page.component';
import { GradeCompleteComponent } from './components/grade-complete/grade-complete.component';
import { GradePageComponent } from './components/grade-page/grade-page.component';
const routes = [
    { path: '',
        component: DataPageComponent,
        children: [
            { path: 'board', pathMatch: 'full', redirectTo: 'board/notice' },
            { path: 'board/notice', component: BoardPageComponent },
            { path: 'board/notice/:id', component: BoardNoticeDetailComponent },
            { path: 'board/press-release', component: BoardPageComponent },
            { path: 'board/press-release/:id', component: BoardPressDetailComponent },
            { path: 'board/news', component: BoardPageComponent },
            { path: 'board/news/:id', component: BoardCompanyDetailComponent },
            { path: 'download', component: DownloadPageComponent },
            { path: 'grade', component: GradePageComponent },
            { path: 'grade-complete', component: GradeCompleteComponent },
            { path: 'estimate', component: EstimatePageComponent },
            { path: '', redirectTo: 'board/notice', pathMatch: 'full' }
        ]
    }
];
let DataRoutingModule = class DataRoutingModule {
};
DataRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], DataRoutingModule);
export { DataRoutingModule };
//# sourceMappingURL=data-routing.module.js.map