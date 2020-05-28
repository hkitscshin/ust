import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ust.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UstService = /** @class */ (function () {
    function UstService() {
    }
    UstService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UstService.ctorParameters = function () { return []; };
    /** @nocollapse */ UstService.ngInjectableDef = ɵɵdefineInjectable({ factory: function UstService_Factory() { return new UstService(); }, token: UstService, providedIn: "root" });
    return UstService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ust.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UstComponent = /** @class */ (function () {
    function UstComponent() {
    }
    /**
     * @return {?}
     */
    UstComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    UstComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ust-ust',
                    template: "\n    <p>\n      ust works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    UstComponent.ctorParameters = function () { return []; };
    return UstComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ust.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UstModule = /** @class */ (function () {
    function UstModule() {
    }
    UstModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [UstComponent],
                    imports: [],
                    exports: [UstComponent]
                },] }
    ];
    return UstModule;
}());

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
