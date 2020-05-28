(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ust', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global.ust = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ust.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UstService = /** @class */ (function () {
        function UstService() {
        }
        UstService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        UstService.ctorParameters = function () { return []; };
        /** @nocollapse */ UstService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function UstService_Factory() { return new UstService(); }, token: UstService, providedIn: "root" });
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
            { type: core.Component, args: [{
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
            { type: core.NgModule, args: [{
                        declarations: [UstComponent],
                        imports: [],
                        exports: [UstComponent]
                    },] }
        ];
        return UstModule;
    }());

    exports.UstComponent = UstComponent;
    exports.UstModule = UstModule;
    exports.UstService = UstService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ust.umd.js.map
