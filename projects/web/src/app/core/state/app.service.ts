import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppQuery } from './app.query';
import { AppStore, Language } from './app.store';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private appStore: AppStore,
    private appQuery: AppQuery,
    private translate: TranslateService,
  ) { }

  toggleLanguage() {
    if (this.appQuery.getValue().language === 'ko-KR') {
      this.appStore.update({ language: 'en-US' });
      this.translate.use('en');
      window.localStorage.setItem('language', 'en-US');
    } else {
      this.appStore.update({ language: 'ko-KR' });
      this.translate.use('ko');
      window.localStorage.setItem('language', 'ko-KR');
    }
  }

  changeLanguageTo(language: Language) {
    const lang = language === 'ko-KR' ? 'ko' : 'en';

    this.appStore.update({ language });
    this.translate.use(lang);
    window.localStorage.setItem('language', language);
  }

  setLanguage(language: string) {
    if (language === 'en-US') {
      this.appStore.update({ language: 'en-US' });
      this.translate.use('en');
      window.localStorage.setItem('language', 'en-US');
    } else {
      this.appStore.update({ language: 'ko-KR' });
      this.translate.use('ko');
      window.localStorage.setItem('language', 'ko-KR');
    }
  }
}
