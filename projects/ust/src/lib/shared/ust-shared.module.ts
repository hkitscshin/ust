import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../modules/material/material.module';
import { TimestampPipe } from './pipes/timestamp.pipe';
import { DatepickerComponent } from './components/datepicker/datepicker.component';



@NgModule({
  declarations: [
    TimestampPipe,
    DatepickerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    TimestampPipe,
    DatepickerComponent
  ]
})
export class UstSharedModule { }
