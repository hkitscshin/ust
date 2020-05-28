import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ust.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UstService {
    constructor() { }
}
UstService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
UstService.ctorParameters = () => [];
/** @nocollapse */ UstService.ngInjectableDef = ɵɵdefineInjectable({ factory: function UstService_Factory() { return new UstService(); }, token: UstService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ust.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UstComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
UstComponent.decorators = [
    { type: Component, args: [{
                selector: 'ust-ust',
                template: `
    <p>
      ust works!
    </p>
  `
            }] }
];
/** @nocollapse */
UstComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ust.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UstModule {
}
UstModule.decorators = [
    { type: NgModule, args: [{
                declarations: [UstComponent],
                imports: [],
                exports: [UstComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ust.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { UstComponent, UstModule, UstService };
//# sourceMappingURL=ust.js.map
