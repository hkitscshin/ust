import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataPageComponent } from './components/data-page/data-page.component';
import { DownloadAddPageComponent } from './components/download-add-page/download-add-page.component';
import { DownloadModifyPageComponent } from './components/download-modify-page/download-modify-page.component';
import { DownloadPageComponent } from './components/download-page/download-page.component';
import { NewsAddPageComponent } from './components/news-add-page/news-add-page.component';
import { NewsModifyPageComponent } from './components/news-modify-page/news-modify-page.component';
import { NewsPageComponent } from './components/news-page/news-page.component';
import { NoticeAddPageComponent } from './components/notice-add-page/notice-add-page.component';
import { NoticeModifyPageComponent } from './components/notice-modify-page/notice-modify-page.component';
import { NoticePageComponent } from './components/notice-page/notice-page.component';
import { PressReleaseAddPageComponent } from './components/press-release-add-page/press-release-add-page.component';
import { PressReleaseModifyPageComponent } from './components/press-release-modify-page/press-release-modify-page.component';
import { PressReleasePageComponent } from './components/press-release-page/press-release-page.component';
const routes = [
    {
        path: '',
        component: DataPageComponent,
        children: [
            { path: 'notice', component: NoticePageComponent },
            { path: 'notice/add', component: NoticeAddPageComponent },
            { path: 'notice/:id', component: NoticeModifyPageComponent },
            { path: 'press-release', component: PressReleasePageComponent },
            { path: 'press-release/add', component: PressReleaseAddPageComponent },
            { path: 'press-release/:id', component: PressReleaseModifyPageComponent },
            { path: 'news', component: NewsPageComponent },
            { path: 'news/add', component: NewsAddPageComponent },
            { path: 'news/:id', component: NewsModifyPageComponent },
            { path: 'download', component: DownloadPageComponent },
            { path: 'download/add', component: DownloadAddPageComponent },
            { path: 'download/:id', component: DownloadModifyPageComponent },
            { path: '', redirectTo: 'notice', pathMatch: 'full' }
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