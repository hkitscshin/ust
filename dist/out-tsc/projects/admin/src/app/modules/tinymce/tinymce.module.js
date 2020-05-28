import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TinymceComponent } from './components/tinymce/tinymce.component';
import { EditorModule } from '@tinymce/tinymce-angular';
let TinymceModule = class TinymceModule {
};
TinymceModule = __decorate([
    NgModule({
        declarations: [TinymceComponent],
        imports: [
            CommonModule,
            EditorModule,
            ReactiveFormsModule
        ],
        exports: [TinymceComponent]
    })
], TinymceModule);
export { TinymceModule };
//# sourceMappingURL=tinymce.module.js.map