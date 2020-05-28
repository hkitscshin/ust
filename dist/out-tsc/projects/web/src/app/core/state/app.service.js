import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AppService = class AppService {
    constructor(appStore, appQuery, translate) {
        this.appStore = appStore;
        this.appQuery = appQuery;
        this.translate = translate;
    }
    toggleLanguage() {
        if (this.appQuery.getValue().language === 'ko-KR') {
            this.appStore.update({ language: 'en-US' });
            this.translate.use('en');
            window.localStorage.setItem('language', 'en-US');
        }
        else {
            this.appStore.update({ language: 'ko-KR' });
            this.translate.use('ko');
            window.localStorage.setItem('language', 'ko-KR');
        }
    }
    changeLanguageTo(language) {
        const lang = language === 'ko-KR' ? 'ko' : 'en';
        this.appStore.update({ language });
        this.translate.use(lang);
        window.localStorage.setItem('language', language);
    }
    setLanguage(language) {
        if (language === 'en-US') {
            this.appStore.update({ language: 'en-US' });
            this.translate.use('en');
            window.localStorage.setItem('language', 'en-US');
        }
        else {
            this.appStore.update({ language: 'ko-KR' });
            this.translate.use('ko');
            window.localStorage.setItem('language', 'ko-KR');
        }
    }
};
AppService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AppService);
export { AppService };
//# sourceMappingURL=app.service.js.map