import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let SafeHtmlPipe = class SafeHtmlPipe {
    constructor(sr) {
        this.sr = sr;
    }
    transform(html) {
        return this.sr.bypassSecurityTrustHtml(html);
    }
};
SafeHtmlPipe = __decorate([
    Pipe({
        name: 'safeHtml'
    })
], SafeHtmlPipe);
export { SafeHtmlPipe };
//# sourceMappingURL=safe-html.pipe.js.map