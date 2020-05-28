function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/modules/admin-board-base/components/admin-board-add-base.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/modules/admin-board-base/components/admin-board-add-base.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: AdminBoardAddBaseComponent */

  /***/
  function srcAppModulesAdminBoardBaseComponentsAdminBoardAddBaseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminBoardAddBaseComponent", function () {
      return AdminBoardAddBaseComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");

    var AdminBoardAddBaseComponent =
    /*#__PURE__*/
    function () {
      function AdminBoardAddBaseComponent(router, entityService, notifier) {
        _classCallCheck(this, AdminBoardAddBaseComponent);

        this.router = router;
        this.entityService = entityService;
        this.notifier = notifier;
        this.invalid = true;
        this.isLoading = false;
        this.boardPath = '/data/notice';
      }

      _createClass(AdminBoardAddBaseComponent, [{
        key: "add",
        value: function add() {
          var _this = this;

          if (this.invalid) {
            return this.notifier.warning('모든 정보를 입력해 주세요');
          }

          this.isLoading = true;
          this.entityService.add(this.formValue).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
            return _this.isLoading = false;
          })).subscribe(function (entity) {
            _this.notifier.success('추가하였습니다!');

            _this.router.navigate([_this.boardPath]);
          });
        }
      }]);

      return AdminBoardAddBaseComponent;
    }();
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map