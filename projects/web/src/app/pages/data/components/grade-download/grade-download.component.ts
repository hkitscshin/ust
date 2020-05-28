import { DownloadFile } from './../../../../../../../ust/src/lib/entities/download-file/types';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { SubscriptionBaseComponent } from '@dminine/ng-lib';
import { GradeDownService } from '../../../../../../../ust/src/lib/entities/grade-down/grade-down.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { CookieService } from 'ngx-cookie-service';

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment, Moment } from 'moment';

const moment = _rollupMoment || _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY년 MM월',
  },
  display: {
    dateInput: 'YYYY년 MM월',
    monthYearLabel: 'YYYY년 MM월',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY년 MM월',
  },
};

export interface CompnayInfo {
  RESULT_CODE: string;
  RESULT_MESSAGE: string;
  CPY_ID: string;
  CPY_NAME: string;
  CPY_CEO: string;
  CPY_TE: string;
  CPY_IM: string;
  CPY_IDENTIFIER: string;
}

export interface UstResult {
  RESULT_CODE: string;
  RESULT_MESSAGE: string;
}

@Component({
  selector: 'ust-grade-download',
  templateUrl: './grade-download.component.html',
  styleUrls: ['./grade-download.component.scss'],
  providers : [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})

export class GradeDownloadComponent extends SubscriptionBaseComponent {
  
  gradeDownloadForm = this.createForm();
  joinForm = this.createJoinForm();
  isLoading = false;
  activeFormIndex = 0;
  gradeList = [];
  cInfo: CompnayInfo;
  date = new FormControl(moment());
  
  constructor(private fb: FormBuilder, private http: HttpClient, private cookie: CookieService) {     
    super();
    this.pageLoad();
  }

  pageLoad() {
    
    if (this.cookie.get('cInfoCPY_ID')) {
      this.activeFormIndex = 2;

      
      this.cInfo = { RESULT_CODE: '1',
                     RESULT_MESSAGE: '',
                     CPY_ID: this.cookie.get('cInfoCPY_ID'),
                     CPY_NAME: this.cookie.get('cInfoCPY_NAME'),
                     CPY_CEO: this.cookie.get('cInfoCPY_CEO'),
                     CPY_TE: this.cookie.get('cInfoCPY_TE'),
                     CPY_IM: this.cookie.get('cInfoCPY_IM'),
                     CPY_IDENTIFIER: this.cookie.get('cInfoCPY_IDENTIFIER')
                   };
      this.getList('');

    } else {
      this.activeFormIndex = 0;
    }
  }

  chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.date.value;
    ctrlValue.year(normalizedMonth.year());
    ctrlValue.month(normalizedMonth.month());
    this.date.setValue(ctrlValue);
    datepicker.close();

    this.getList(this.makeYYYYMM(normalizedMonth.year().toString(), (normalizedMonth.month() + 1).toString()));
  }

  getList(yyyymm: string) {

    if (yyyymm === '') {
      const yyyy: string = new Date().getFullYear().toString();
      const mm: string = (new Date().getMonth() + 1).toString();
      yyyymm = this.makeYYYYMM(yyyy, mm);
    }

    const params = new HttpParams()
      .set('id', this.cInfo.CPY_ID)
      .set('yyyymm', yyyymm);
    return this.http.get<UstResult>('http://ic.u-st.co.kr/home/USTWebICList', { params })
      .subscribe(data => this.loadList(data));
    
  }

  loadList(data: any) {
    this.gradeList = data;
  }

  makeYYYYMM(yyyy: string, mm: string): string {
    mm = (mm.length > 1 ? mm : '0' + mm);
    return yyyy + mm;
  }

  downloadFile(iCd: string) {
    window.location.href = 'http://ic.u-st.co.kr/home/USTWebICDownload?cId=' + this.cInfo.CPY_ID + '&iCd=' + iCd;
  }

  login() {

    const formValue = this.gradeDownloadForm.value;
    const params = new HttpParams()
        .set('sId', formValue.businessNumber)
        .set('sPw', formValue.password );

    return this.http.get<CompnayInfo>('http://ic.u-st.co.kr/home/USTWebICLogin', { params })
    .subscribe(data => this.loginResult(data));

  }

   loginResult(data: CompnayInfo) {
    if (data.RESULT_CODE.toString() === '0') {
      alert(data.RESULT_MESSAGE);
      return;
    }

    this.cInfo = data;
    this.getList('');
    this.activeFormIndex = 2;
    
    this.cookie.set('cInfoCPY_ID', this.cInfo.CPY_ID, 0.1);
    this.cookie.set('cInfoCPY_NAME', this.cInfo.CPY_NAME, 0.1);
    this.cookie.set('cInfoCPY_CEO', this.cInfo.CPY_CEO, 0.1);
    this.cookie.set('cInfoCPY_IDENTIFIER', this.cInfo.CPY_IDENTIFIER, 0.1);
    this.cookie.set('cInfoCPY_IM', this.cInfo.CPY_IM, 0.1);
    this.cookie.set('cInfoCPY_TE', this.cInfo.CPY_TE, 0.1);
    
  }

  logout() {

    this.cookie.delete('cInfoCPY_ID');
    this.cookie.delete('cInfoCPY_NAME');
    this.cookie.delete('cInfoCPY_CEO');
    this.cookie.delete('cInfoCPY_IDENTIFIER');
    this.cookie.delete('cInfoCPY_IM');
    this.cookie.delete('cInfoCPY_TE');

    this.activeFormIndex = 0;
  }


  join() {
    const joinForm = this.joinForm.value;
    const params = new HttpParams()
        .set('sId', joinForm.regBusinessNumber)
        .set('sCd', joinForm.regCertiCode)
        .set('sPw', joinForm.regPassword );
      // tslint:disable-next-line: align
      return this.http.get<UstResult>('http://ic.u-st.co.kr/home/USTWebICJoin', { params })
                      .subscribe(data => this.joinResult(data));
   }

   joinResult(data: UstResult) {
    if (data.RESULT_CODE.toString() === '0') {
      alert(data.RESULT_MESSAGE);
      return;
    }

    alert('성적서관리 가입을 완료하였습니다.');
    this.activeFormIndex = 0;
   }

  clear() {
    this.joinForm.get('regBusinessNumber').reset();
    this.joinForm.get('regCertiCode').reset();
    this.joinForm.get('regPassword').reset();
    this.joinForm.get('regConfirm').reset();
  }

  moveTabs(idx: number) {

    const loginForm = this.gradeDownloadForm.value;
    const joinForm = this.joinForm.value;

    if (idx === 1 && this.activeFormIndex === 0 && joinForm.regBusinessNumber === null && loginForm.businessNumber !== '' ) {
      this.joinForm.get('regBusinessNumber').setValue(loginForm.businessNumber);
    }
    this.activeFormIndex = idx;
  }

  private createForm() { 
    return this.fb.group({
      businessNumber : [null, [Validators.required, Validators.minLength(10), Validators.maxLength(12), Validators.pattern('^[0-9-]+$')]],
      password: [null, [Validators.required, Validators.minLength(4)]]
    });
  }

  private createJoinForm() { 
    return this.fb.group({
      regBusinessNumber: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(12), Validators.pattern('^[0-9-]+$')]],
      regCertiCode: [null, Validators.required],
      regPassword: [null, [Validators.required, Validators.minLength(4)]],
      regConfirm: [null, [Validators.required, Validators.minLength(4)]]
    },
    {
      validators: GradeDownService.passwordMatchValidator
    }
    );

  }
  

}


