import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DnlSharedModule } from '@dminine/ng-lib';
import { MaterialModule } from '../../../../../ust/src/lib/modules/material/material.module';

import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './components/login-page/login-page.component';


@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    DnlSharedModule
  ]
})
export class LoginPageModule { }
