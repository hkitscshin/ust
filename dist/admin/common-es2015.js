(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/modules/admin-board-base/components/admin-board-add-base.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/admin-board-base/components/admin-board-add-base.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AdminBoardAddBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminBoardAddBaseComponent", function() { return AdminBoardAddBaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");


class AdminBoardAddBaseComponent {
    constructor(router, entityService, notifier) {
        this.router = router;
        this.entityService = entityService;
        this.notifier = notifier;
        this.invalid = true;
        this.isLoading = false;
        this.boardPath = '/data/notice';
    }
    add() {
        if (this.invalid) {
            return this.notifier.warning('모든 정보를 입력해 주세요');
        }
        this.isLoading = true;
        this.entityService.add(this.formValue).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => this.isLoading = false)).subscribe(entity => {
            this.notifier.success('추가하였습니다!');
            this.router.navigate([this.boardPath]);
        });
    }
}


/***/ })

}]);