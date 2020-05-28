import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../ust/src/lib/modules/material/material.module';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';



@NgModule({
  declarations: [
    FileUploaderComponent,
    ImageUploaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexModule,
    ReactiveFormsModule
  ],
  exports: [
    FileUploaderComponent,
    ImageUploaderComponent
  ]
})
export class SharedModule { }
