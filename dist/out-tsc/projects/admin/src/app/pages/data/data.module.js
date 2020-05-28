import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { DnlReactiveFormsModule } from '@dminine/ng-lib';
import { MaterialModule } from '../../../../../ust/src/lib/modules/material/material.module';
import { UstSharedModule } from '../../../../../ust/src/lib/shared/ust-shared.module';
import { TinymceModule } from '../../modules/tinymce/tinymce.module';
import { SharedModule } from '../../shared/shared.module';
import { DataRoutingModule } from './data-routing.module';
import { DataPageComponent } from './components/data-page/data-page.component';
import { NoticePageComponent } from './components/notice-page/notice-page.component';
import { PressReleasePageComponent } from './components/press-release-page/press-release-page.component';
import { NewsPageComponent } from './components/news-page/news-page.component';
import { DownloadPageComponent } from './components/download-page/download-page.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { DownloadTableComponent } from './components/download-table/download-table.component';
import { NoticeAddPageComponent } from './components/notice-add-page/notice-add-page.component';
import { NoticeModifyPageComponent } from './components/notice-modify-page/notice-modify-page.component';
import { NoticeFormComponent } from './components/notice-form/notice-form.component';
import { PressReleaseAddPageComponent } from './components/press-release-add-page/press-release-add-page.component';
import { NewsAddPageComponent } from './components/news-add-page/news-add-page.component';
import { DownloadAddPageComponent } from './components/download-add-page/download-add-page.component';
import { PressReleaseModifyPageComponent } from './components/press-release-modify-page/press-release-modify-page.component';
import { PressReleaseFormComponent } from './components/press-release-form/press-release-form.component';
import { NewsModifyPageComponent } from './components/news-modify-page/news-modify-page.component';
import { NewsFormComponent } from './components/news-form/news-form.component';
import { DownloadModifyPageComponent } from './components/download-modify-page/download-modify-page.component';
import { DownloadFormComponent } from './components/download-form/download-form.component';
let DataPageModule = class DataPageModule {
};
DataPageModule = __decorate([
    NgModule({
        declarations: [
            DataPageComponent,
            NoticePageComponent,
            PressReleasePageComponent,
            NewsPageComponent,
            DownloadPageComponent,
            DataTableComponent,
            DownloadTableComponent,
            NoticeAddPageComponent,
            NoticeModifyPageComponent,
            NoticeFormComponent,
            PressReleaseAddPageComponent,
            NewsAddPageComponent,
            DownloadAddPageComponent,
            PressReleaseModifyPageComponent,
            PressReleaseFormComponent,
            NewsModifyPageComponent,
            NewsFormComponent,
            DownloadModifyPageComponent,
            DownloadFormComponent
        ],
        imports: [
            CommonModule,
            MaterialModule,
            DataRoutingModule,
            FlexModule,
            ReactiveFormsModule,
            UstSharedModule,
            SharedModule,
            DnlReactiveFormsModule,
            TinymceModule
        ]
    })
], DataPageModule);
export { DataPageModule };
//# sourceMappingURL=data.module.js.map