function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!*******************************************************************************************************************!*\
    !*** /Volumes/Macintosh SSD/Dev Project/USTSite/node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/core/components/layout-page/layout-page.component.html":
  /*!*******************************************************************************************************************************************************!*\
    !*** /Volumes/Macintosh SSD/Dev Project/USTSite/node_modules/raw-loader/dist/cjs.js!./src/app/core/components/layout-page/layout-page.component.html ***!
    \*******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreComponentsLayoutPageLayoutPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ust-toolbar></ust-toolbar>\r\n\r\n<div class=\"sidebar-and-content-box\">\r\n  <ust-sidebar></ust-sidebar>\r\n\r\n  <div class=\"layout-content-box\">\r\n    <div class=\"layout-content\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/core/components/sidebar/sidebar.component.html":
  /*!***********************************************************************************************************************************************!*\
    !*** /Volumes/Macintosh SSD/Dev Project/USTSite/node_modules/raw-loader/dist/cjs.js!./src/app/core/components/sidebar/sidebar.component.html ***!
    \***********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreComponentsSidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ul class=\"nav-list\">\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLink=\"/dashboard\" routerLinkActive=\"active\">\r\n      <mat-icon>dashboard</mat-icon> 대시보드\r\n    </a>\r\n  </li>\r\n\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLink=\"/investment\" routerLinkActive=\"active\">\r\n      <mat-icon>bar_chart</mat-icon> 투자 관리\r\n    </a>\r\n  </li>\r\n\r\n  <ol class=\"nav-sub-box\" *ngIf=\"title === '투자 관리'\">\r\n    <li class=\"nav-sub-link\" routerLink=\"/investment/finance\" routerLinkActive=\"active\">재무 정보</li>\r\n  </ol>\r\n\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLink=\"/data\" routerLinkActive=\"active\">\r\n      <mat-icon>file_copy</mat-icon> 자료실\r\n    </a>\r\n  </li>\r\n\r\n  <ol class=\"nav-sub-box\" *ngIf=\"title === '자료실'\">\r\n    <li class=\"nav-sub-link\" routerLink=\"/data/notice\" routerLinkActive=\"active\">공지사항</li>\r\n    <li class=\"nav-sub-link\" routerLink=\"/data/press-release\" routerLinkActive=\"active\">보도자료</li>\r\n    <li class=\"nav-sub-link\" routerLink=\"/data/news\" routerLinkActive=\"active\">사내동정</li>\r\n    <li class=\"nav-sub-link\" routerLink=\"/data/download\" routerLinkActive=\"active\">다운로드</li>\r\n  </ol>\r\n\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLink=\"/inquiry\" routerLinkActive=\"active\">\r\n      <mat-icon>contact_mail</mat-icon> 문의 관리\r\n    </a>\r\n  </li>\r\n\r\n  <ol class=\"nav-sub-box\" *ngIf=\"title === '문의 관리'\">\r\n    <li class=\"nav-sub-link\" routerLink=\"/inquiry/grade\" routerLinkActive=\"active\">성적서요청</li>\r\n    <li class=\"nav-sub-link\" routerLink=\"/inquiry/estimate\" routerLinkActive=\"active\">견적문의</li>\r\n    <li class=\"nav-sub-link\" routerLink=\"/inquiry/inquiry\" routerLinkActive=\"active\">제품문의</li>\r\n  </ol>\r\n\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLink=\"/recruit\" routerLinkActive=\"active\">\r\n      <mat-icon>person</mat-icon> 채용 관리\r\n    </a>\r\n  </li>\r\n</ul>\r\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/core/components/toolbar/toolbar.component.html":
  /*!***********************************************************************************************************************************************!*\
    !*** /Volumes/Macintosh SSD/Dev Project/USTSite/node_modules/raw-loader/dist/cjs.js!./src/app/core/components/toolbar/toolbar.component.html ***!
    \***********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreComponentsToolbarToolbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxLayout=\"row\">\r\n  <h1 class=\"logo\" fxFlex=\"none\" routerLink=\"/\">\r\n    <img dnlSrc=\"assets/images/logo-color.png\" alt=\"logo\">\r\n    <span class=\"logo-name\">UST</span>\r\n  </h1>\r\n\r\n  <div fxFlex=\"auto\">\r\n    <h2 class=\"title\">{{ title }}</h2>\r\n  </div>\r\n\r\n  <button class=\"logout-button\" mat-button (click)=\"logout()\" type=\"button\">로그아웃</button>\r\n</div>\r\n";
    /***/
  },

  /***/
  "../../node_modules/tslib/tslib.es6.js":
  /*!**********************************************************************************!*\
    !*** /Volumes/Macintosh SSD/Dev Project/USTSite/node_modules/tslib/tslib.es6.js ***!
    \**********************************************************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    /***/

  },

  /***/
  "../ust/src/lib/entities/user/index.ts":
  /*!*********************************************!*\
    !*** ../ust/src/lib/entities/user/index.ts ***!
    \*********************************************/

  /*! exports provided: UserQuery, UserStore, UserService */

  /***/
  function ustSrcLibEntitiesUserIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _user_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./user.query */
    "../ust/src/lib/entities/user/user.query.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserQuery", function () {
      return _user_query__WEBPACK_IMPORTED_MODULE_1__["UserQuery"];
    });
    /* harmony import */


    var _user_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user.store */
    "../ust/src/lib/entities/user/user.store.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserStore", function () {
      return _user_store__WEBPACK_IMPORTED_MODULE_2__["UserStore"];
    });
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user.service */
    "../ust/src/lib/entities/user/user.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"];
    });
    /***/

  },

  /***/
  "../ust/src/lib/entities/user/user.query.ts":
  /*!**************************************************!*\
    !*** ../ust/src/lib/entities/user/user.query.ts ***!
    \**************************************************/

  /*! exports provided: UserQuery */

  /***/
  function ustSrcLibEntitiesUserUserQueryTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserQuery", function () {
      return UserQuery;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _dminine_ng_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @dminine/ng-lib */
    "../../node_modules/@dminine/ng-lib/fesm2015/dminine-ng-lib.js");
    /* harmony import */


    var _user_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user.store */
    "../ust/src/lib/entities/user/user.store.ts");

    var UserQuery =
    /*#__PURE__*/
    function (_dminine_ng_lib__WEBP) {
      _inherits(UserQuery, _dminine_ng_lib__WEBP);

      function UserQuery(store) {
        var _this;

        _classCallCheck(this, UserQuery);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(UserQuery).call(this, store));
        _this.store = store;
        return _this;
      }

      return UserQuery;
    }(_dminine_ng_lib__WEBPACK_IMPORTED_MODULE_2__["DnlFirestoreQuery"]);

    UserQuery.ctorParameters = function () {
      return [{
        type: _user_store__WEBPACK_IMPORTED_MODULE_3__["UserStore"]
      }];
    };

    UserQuery = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserQuery);
    /***/
  },

  /***/
  "../ust/src/lib/entities/user/user.service.ts":
  /*!****************************************************!*\
    !*** ../ust/src/lib/entities/user/user.service.ts ***!
    \****************************************************/

  /*! exports provided: UserService */

  /***/
  function ustSrcLibEntitiesUserUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "../../node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _dminine_ng_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @dminine/ng-lib */
    "../../node_modules/@dminine/ng-lib/fesm2015/dminine-ng-lib.js");
    /* harmony import */


    var _user_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user.query */
    "../ust/src/lib/entities/user/user.query.ts");
    /* harmony import */


    var _user_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user.store */
    "../ust/src/lib/entities/user/user.store.ts");

    var UserService =
    /*#__PURE__*/
    function (_dminine_ng_lib__WEBP2) {
      _inherits(UserService, _dminine_ng_lib__WEBP2);

      function UserService(userStore, userQuery, afs) {
        var _this2;

        _classCallCheck(this, UserService);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(UserService).call(this, userStore, userQuery, afs, 'users'));
        _this2.userStore = userStore;
        _this2.userQuery = userQuery;
        _this2.afs = afs;
        return _this2;
      }

      return UserService;
    }(_dminine_ng_lib__WEBPACK_IMPORTED_MODULE_3__["DnlFirestoreService"]);

    UserService.ctorParameters = function () {
      return [{
        type: _user_store__WEBPACK_IMPORTED_MODULE_5__["UserStore"]
      }, {
        type: _user_query__WEBPACK_IMPORTED_MODULE_4__["UserQuery"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "../ust/src/lib/entities/user/user.store.ts":
  /*!**************************************************!*\
    !*** ../ust/src/lib/entities/user/user.store.ts ***!
    \**************************************************/

  /*! exports provided: UserStore */

  /***/
  function ustSrcLibEntitiesUserUserStoreTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserStore", function () {
      return UserStore;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @datorama/akita */
    "../../node_modules/@datorama/akita/fesm2015/datorama-akita.js");
    /* harmony import */


    var _dminine_ng_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @dminine/ng-lib */
    "../../node_modules/@dminine/ng-lib/fesm2015/dminine-ng-lib.js");

    var initialState = {
      ui: {
        filter: ''
      }
    };

    var UserStore =
    /*#__PURE__*/
    function (_dminine_ng_lib__WEBP3) {
      _inherits(UserStore, _dminine_ng_lib__WEBP3);

      function UserStore() {
        _classCallCheck(this, UserStore);

        return _possibleConstructorReturn(this, _getPrototypeOf(UserStore).call(this, initialState));
      }

      return UserStore;
    }(_dminine_ng_lib__WEBPACK_IMPORTED_MODULE_3__["DnlFirestoreStore"]);

    UserStore = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["StoreConfig"])({
      name: 'user'
    })], UserStore);
    /***/
  },

  /***/
  "../ust/src/lib/modules/auth/guard/auth.guard.ts":
  /*!*******************************************************!*\
    !*** ../ust/src/lib/modules/auth/guard/auth.guard.ts ***!
    \*******************************************************/

  /*! exports provided: AuthGuard */

  /***/
  function ustSrcLibModulesAuthGuardAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../state */
    "../ust/src/lib/modules/auth/state/index.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(authQuery, router) {
        _classCallCheck(this, AuthGuard);

        this.authQuery = authQuery;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canLoad",
        value: function canLoad(route) {
          return this.checkLoggedIn();
        }
      }, {
        key: "canActivateChild",
        value: function canActivateChild(route) {
          return this.canActivate(route);
        }
      }, {
        key: "canActivate",
        value: function canActivate(route) {
          return this.checkLoggedIn();
        }
      }, {
        key: "checkLoggedIn",
        value: function checkLoggedIn() {
          var _this3 = this;

          return this.authQuery.select(function (state) {
            return state;
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])(function (state) {
            return state.isAuthLoaded;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (state) {
            return state.isLoggedIn;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (isLoggedIn) {
            if (!isLoggedIn) {
              _this3.router.navigateByUrl('/login');

              throw new Error('access denied!');
            }
          }));
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _state__WEBPACK_IMPORTED_MODULE_4__["AuthQuery"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "../ust/src/lib/modules/auth/state/auth.query.ts":
  /*!*******************************************************!*\
    !*** ../ust/src/lib/modules/auth/state/auth.query.ts ***!
    \*******************************************************/

  /*! exports provided: AuthQuery */

  /***/
  function ustSrcLibModulesAuthStateAuthQueryTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthQuery", function () {
      return AuthQuery;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @datorama/akita */
    "../../node_modules/@datorama/akita/fesm2015/datorama-akita.js");
    /* harmony import */


    var _auth_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.store */
    "../ust/src/lib/modules/auth/state/auth.store.ts");

    var AuthQuery =
    /*#__PURE__*/
    function (_datorama_akita__WEBP) {
      _inherits(AuthQuery, _datorama_akita__WEBP);

      function AuthQuery(store) {
        var _this4;

        _classCallCheck(this, AuthQuery);

        _this4 = _possibleConstructorReturn(this, _getPrototypeOf(AuthQuery).call(this, store));
        _this4.store = store;
        _this4.user$ = _this4.select(function (state) {
          return state.user;
        });
        _this4.isLoggedIn$ = _this4.select(function (state) {
          return state.isLoggedIn;
        });
        return _this4;
      }

      _createClass(AuthQuery, [{
        key: "user",
        get: function get() {
          return this.getValue().user;
        }
      }, {
        key: "isLoggedIn",
        get: function get() {
          return this.getValue().isLoggedIn;
        }
      }]);

      return AuthQuery;
    }(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["Query"]);

    AuthQuery.ctorParameters = function () {
      return [{
        type: _auth_store__WEBPACK_IMPORTED_MODULE_3__["AuthStore"]
      }];
    };

    AuthQuery = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthQuery);
    /***/
  },

  /***/
  "../ust/src/lib/modules/auth/state/auth.service.ts":
  /*!*********************************************************!*\
    !*** ../ust/src/lib/modules/auth/state/auth.service.ts ***!
    \*********************************************************/

  /*! exports provided: AuthService */

  /***/
  function ustSrcLibModulesAuthStateAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "../../node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _entities_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../entities/user */
    "../ust/src/lib/entities/user/index.ts");
    /* harmony import */


    var _auth_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth.query */
    "../ust/src/lib/modules/auth/state/auth.query.ts");
    /* harmony import */


    var _auth_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./auth.store */
    "../ust/src/lib/modules/auth/state/auth.store.ts");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(authStore, authQuery, afAuth, userService) {
        _classCallCheck(this, AuthService);

        this.authStore = authStore;
        this.authQuery = authQuery;
        this.afAuth = afAuth;
        this.userService = userService;
      }

      _createClass(AuthService, [{
        key: "init",
        value: function init() {
          var _this5 = this;

          var _this$partCheckedHavi = this.partCheckedHavingFirebaseUser(this.afAuth.authState),
              _this$partCheckedHavi2 = _slicedToArray(_this$partCheckedHavi, 2),
              loggedIn$ = _this$partCheckedHavi2[0],
              notLoggedIn$ = _this$partCheckedHavi2[1];

          loggedIn$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
            return _this5.updateLoggedInStateInAkita();
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (firebaseUser) {
            return _this5.userService.get(firebaseUser.uid);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (user) {
            return Boolean(user);
          })).subscribe(function (user) {
            _this5.updateJoinedStateInAkita(user);
          });
          notLoggedIn$.subscribe(function () {
            return _this5.updateNotLoggedInStateInAkita();
          });
        }
      }, {
        key: "loginWithEmail",
        value: function loginWithEmail(email, password) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!this.afAuth.auth.currentUser) {
                      _context.next = 3;
                      break;
                    }

                    _context.next = 3;
                    return this.afAuth.auth.signOut();

                  case 3:
                    return _context.abrupt("return", this.afAuth.auth.signInWithEmailAndPassword(email, password));

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this6 = this;

          return this.afAuth.auth.signOut().then(function () {
            return _this6.updateNotLoggedInStateInAkita();
          }).then();
        }
      }, {
        key: "partCheckedHavingFirebaseUser",
        value: function partCheckedHavingFirebaseUser(state) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["partition"])(state, function (firebaseUser) {
            return Boolean(firebaseUser);
          });
        }
      }, {
        key: "updateLoggedInStateInAkita",
        value: function updateLoggedInStateInAkita() {
          this.authStore.update({
            isAuthLoaded: true,
            isLoggedIn: true
          });
        }
      }, {
        key: "updateNotLoggedInStateInAkita",
        value: function updateNotLoggedInStateInAkita() {
          this.authStore.update({
            isAuthLoaded: true,
            isLoggedIn: false,
            isDbLoaded: true,
            user: null
          });
        }
      }, {
        key: "updateJoinedStateInAkita",
        value: function updateJoinedStateInAkita(user) {
          this.authStore.update({
            isLoggedIn: true,
            isDbLoaded: true,
            user: user
          });
        }
      }, {
        key: "putUserToDb",
        value: function putUserToDb(id, userInfo) {
          var user = {
            isAdmin: true
          };
          return this.userService.upsert(id, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _auth_store__WEBPACK_IMPORTED_MODULE_7__["AuthStore"]
      }, {
        type: _auth_query__WEBPACK_IMPORTED_MODULE_6__["AuthQuery"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }, {
        type: _entities_user__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "../ust/src/lib/modules/auth/state/auth.store.ts":
  /*!*******************************************************!*\
    !*** ../ust/src/lib/modules/auth/state/auth.store.ts ***!
    \*******************************************************/

  /*! exports provided: createInitialState, AuthStore */

  /***/
  function ustSrcLibModulesAuthStateAuthStoreTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createInitialState", function () {
      return createInitialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthStore", function () {
      return AuthStore;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @datorama/akita */
    "../../node_modules/@datorama/akita/fesm2015/datorama-akita.js");

    function createInitialState() {
      return {
        isAuthLoaded: false,
        isDbLoaded: false,
        isLoggedIn: false,
        user: null,
        redirectUrl: '/'
      };
    }

    var AuthStore =
    /*#__PURE__*/
    function (_datorama_akita__WEBP2) {
      _inherits(AuthStore, _datorama_akita__WEBP2);

      function AuthStore() {
        _classCallCheck(this, AuthStore);

        return _possibleConstructorReturn(this, _getPrototypeOf(AuthStore).call(this, createInitialState()));
      }

      return AuthStore;
    }(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["Store"]);

    AuthStore = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["StoreConfig"])({
      name: 'auth'
    })], AuthStore);
    /***/
  },

  /***/
  "../ust/src/lib/modules/auth/state/index.ts":
  /*!**************************************************!*\
    !*** ../ust/src/lib/modules/auth/state/index.ts ***!
    \**************************************************/

  /*! exports provided: AuthQuery, createInitialState, AuthStore, AuthService */

  /***/
  function ustSrcLibModulesAuthStateIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _auth_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.query */
    "../ust/src/lib/modules/auth/state/auth.query.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthQuery", function () {
      return _auth_query__WEBPACK_IMPORTED_MODULE_1__["AuthQuery"];
    });
    /* harmony import */


    var _auth_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.store */
    "../ust/src/lib/modules/auth/state/auth.store.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "createInitialState", function () {
      return _auth_store__WEBPACK_IMPORTED_MODULE_2__["createInitialState"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthStore", function () {
      return _auth_store__WEBPACK_IMPORTED_MODULE_2__["AuthStore"];
    });
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "../ust/src/lib/modules/auth/state/auth.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"];
    });
    /***/

  },

  /***/
  "../ust/src/lib/modules/material/material.module.ts":
  /*!**********************************************************!*\
    !*** ../ust/src/lib/modules/material/material.module.ts ***!
    \**********************************************************/

  /*! exports provided: MaterialModule */

  /***/
  function ustSrcLibModulesMaterialMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "../../node_modules/@angular/material/esm2015/material.js");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"]],
      exports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"]]
    })], MaterialModule);
    /***/
  },

  /***/
  "../ust/src/lib/tokens.ts":
  /*!********************************!*\
    !*** ../ust/src/lib/tokens.ts ***!
    \********************************/

  /*! exports provided: NOTIFIER */

  /***/
  function ustSrcLibTokensTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NOTIFIER", function () {
      return NOTIFIER;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");

    var NOTIFIER = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('notifier');
    /***/
  },

  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ust_src_lib_modules_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../ust/src/lib/modules/auth/guard/auth.guard */
    "../ust/src/lib/modules/auth/guard/auth.guard.ts");
    /* harmony import */


    var _core_components_layout_page_layout_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./core/components/layout-page/layout-page.component */
    "./src/app/core/components/layout-page/layout-page.component.ts");

    var routes = [{
      path: '',
      component: _core_components_layout_page_layout_page_component__WEBPACK_IMPORTED_MODULE_4__["LayoutPageComponent"],
      canActivate: [_ust_src_lib_modules_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
      children: [{
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      }, {
        path: 'dashboard',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-dashboard-dashboard-module */
          "pages-dashboard-dashboard-module").then(__webpack_require__.bind(null,
          /*! ./pages/dashboard/dashboard.module */
          "./src/app/pages/dashboard/dashboard.module.ts")).then(function (m) {
            return m.DashboardPageModule;
          });
        },
        data: {
          title: '대시보드'
        }
      }, {
        path: 'investment',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-investment-investment-module */
          "pages-investment-investment-module").then(__webpack_require__.bind(null,
          /*! ./pages/investment/investment.module */
          "./src/app/pages/investment/investment.module.ts")).then(function (m) {
            return m.InvestmentPageModule;
          });
        },
        data: {
          title: '투자 관리'
        }
      }, {
        path: 'data',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-data-data-module */
          [__webpack_require__.e("default~pages-data-data-module~pages-inquiry-inquiry-module~pages-recruit-recruit-module"), __webpack_require__.e("default~pages-data-data-module~pages-inquiry-inquiry-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-data-data-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/data/data.module */
          "./src/app/pages/data/data.module.ts")).then(function (m) {
            return m.DataPageModule;
          });
        },
        data: {
          title: '자료실'
        }
      }, {
        path: 'inquiry',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-inquiry-inquiry-module */
          [__webpack_require__.e("default~pages-data-data-module~pages-inquiry-inquiry-module~pages-recruit-recruit-module"), __webpack_require__.e("default~pages-data-data-module~pages-inquiry-inquiry-module"), __webpack_require__.e("pages-inquiry-inquiry-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/inquiry/inquiry.module */
          "./src/app/pages/inquiry/inquiry.module.ts")).then(function (m) {
            return m.InquiryPageModule;
          });
        },
        data: {
          title: '문의 관리'
        }
      }, {
        path: 'recruit',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-recruit-recruit-module */
          [__webpack_require__.e("default~pages-data-data-module~pages-inquiry-inquiry-module~pages-recruit-recruit-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-recruit-recruit-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/recruit/recruit.module */
          "./src/app/pages/recruit/recruit.module.ts")).then(function (m) {
            return m.RecruitPageModule;
          });
        },
        data: {
          title: '채용 관리'
        }
      }]
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-login-login-module */
        "pages-login-login-module").then(__webpack_require__.bind(null,
        /*! ./pages/login/login.module */
        "./src/app/pages/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: '**',
      redirectTo: 'login'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ust_src_lib_modules_auth_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../ust/src/lib/modules/auth/state */
    "../ust/src/lib/modules/auth/state/index.ts");

    var AppComponent = function AppComponent(authService) {
      _classCallCheck(this, AppComponent);

      this.authService = authService;
      this.authService.init();
    };

    AppComponent.ctorParameters = function () {
      return [{
        type: _ust_src_lib_modules_auth_state__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ust-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire */
    "../../node_modules/@angular/fire/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "../../node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "../../node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_fire_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/functions */
    "../../node_modules/@angular/fire/functions/es2015/index.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/storage */
    "../../node_modules/@angular/fire/storage/es2015/index.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _ust_src_lib_tokens__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../ust/src/lib/tokens */
    "../ust/src/lib/tokens.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./core/core.module */
    "./src/app/core/core.module.ts");
    /* harmony import */


    var _core_services_notifier_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./core/services/notifier.service */
    "./src/app/core/services/notifier.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_1__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].firebase), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestoreModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorageModule"], _angular_fire_functions__WEBPACK_IMPORTED_MODULE_4__["AngularFireFunctionsModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_13__["CoreModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"]],
      providers: [{
        provide: _ust_src_lib_tokens__WEBPACK_IMPORTED_MODULE_9__["NOTIFIER"],
        useClass: _core_services_notifier_service__WEBPACK_IMPORTED_MODULE_14__["Notifier"]
      }, {
        provide: _angular_fire_functions__WEBPACK_IMPORTED_MODULE_4__["FunctionsRegionToken"],
        useValue: 'asia-northeast1'
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/core/components/layout-page/layout-page.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/core/components/layout-page/layout-page.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreComponentsLayoutPageLayoutPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ust-toolbar {\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 72px;\n  border-bottom: 1px solid #ddd;\n  background-color: #fff;\n  box-sizing: border-box;\n  z-index: 999;\n}\n\nust-sidebar {\n  display: block;\n  position: fixed;\n  top: 72px;\n  left: 0;\n  width: 200px;\n  height: calc(100% - 72px);\n  background-color: #999;\n  overflow-y: auto;\n  box-sizing: border-box;\n  z-index: 998;\n}\n\n.sidebar-and-content-box {\n  padding-top: 72px;\n  height: calc(100% - 72px);\n}\n\n.layout-content-box {\n  padding-left: 200px;\n  min-height: 100%;\n  background-color: #ddd;\n  overflow-y: auto;\n  box-sizing: border-box;\n}\n\n.layout-content {\n  margin: 24px auto;\n  width: 1032px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL01hY2ludG9zaCBTU0QvRGV2IFByb2plY3QvVVNUU2l0ZS9wcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2NvcmUvY29tcG9uZW50cy9sYXlvdXQtcGFnZS9sYXlvdXQtcGFnZS5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2FkbWluL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL2xheW91dC1wYWdlL2xheW91dC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtBQ0NGIiwiZmlsZSI6InByb2plY3RzL2FkbWluL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL2xheW91dC1wYWdlL2xheW91dC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidXN0LXRvb2xiYXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDcycHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHotaW5kZXg6IDk5OTtcclxufVxyXG5cclxudXN0LXNpZGViYXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDcycHg7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA3MnB4KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB6LWluZGV4OiA5OTg7XHJcbn1cclxuXHJcbi5zaWRlYmFyLWFuZC1jb250ZW50LWJveCB7XHJcbiAgcGFkZGluZy10b3A6IDcycHg7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA3MnB4KTtcclxufVxyXG5cclxuLmxheW91dC1jb250ZW50LWJveCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMDBweDtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4ubGF5b3V0LWNvbnRlbnQge1xyXG4gIG1hcmdpbjogMjRweCBhdXRvO1xyXG4gIHdpZHRoOiAxMDMycHg7XHJcbn1cclxuIiwidXN0LXRvb2xiYXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcycHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB6LWluZGV4OiA5OTk7XG59XG5cbnVzdC1zaWRlYmFyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA3MnB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNzJweCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTk7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHotaW5kZXg6IDk5ODtcbn1cblxuLnNpZGViYXItYW5kLWNvbnRlbnQtYm94IHtcbiAgcGFkZGluZy10b3A6IDcycHg7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNzJweCk7XG59XG5cbi5sYXlvdXQtY29udGVudC1ib3gge1xuICBwYWRkaW5nLWxlZnQ6IDIwMHB4O1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ubGF5b3V0LWNvbnRlbnQge1xuICBtYXJnaW46IDI0cHggYXV0bztcbiAgd2lkdGg6IDEwMzJweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/core/components/layout-page/layout-page.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/core/components/layout-page/layout-page.component.ts ***!
    \**********************************************************************/

  /*! exports provided: LayoutPageComponent */

  /***/
  function srcAppCoreComponentsLayoutPageLayoutPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutPageComponent", function () {
      return LayoutPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");

    var LayoutPageComponent =
    /*#__PURE__*/
    function () {
      function LayoutPageComponent() {
        _classCallCheck(this, LayoutPageComponent);
      }

      _createClass(LayoutPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LayoutPageComponent;
    }();

    LayoutPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ust-layout-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./layout-page.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/core/components/layout-page/layout-page.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./layout-page.component.scss */
      "./src/app/core/components/layout-page/layout-page.component.scss"))["default"]]
    })], LayoutPageComponent);
    /***/
  },

  /***/
  "./src/app/core/components/sidebar/sidebar.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/core/components/sidebar/sidebar.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreComponentsSidebarSidebarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  position: relative;\n}\n\n.nav-link {\n  display: inline-flex;\n  align-items: center;\n  vertical-align: middle;\n  position: relative;\n  padding: 16px;\n  width: 100%;\n  height: 48px;\n  color: #fff;\n  text-decoration: none;\n  font-size: 14px;\n  letter-spacing: -0.7px;\n  box-sizing: border-box;\n}\n\n.nav-link .mat-icon {\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n  margin-right: 4px;\n}\n\n.nav-link.active {\n  background-color: #0c0c0c;\n}\n\n.nav-link.active::before {\n  content: \" \";\n  display: block;\n  position: absolute;\n  top: 8px;\n  left: 0;\n  width: 4px;\n  height: 32px;\n  background-color: #ea4d07;\n}\n\n.nav-sub-box {\n  background-color: #0c0c0c;\n  padding-left: 30px;\n}\n\n.nav-sub-link {\n  display: inline-flex;\n  align-items: center;\n  vertical-align: middle;\n  position: relative;\n  padding: 16px;\n  width: 100%;\n  height: 48px;\n  color: #fff;\n  font-size: 14px;\n  letter-spacing: -0.7px;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n\n.nav-sub-link.active {\n  font-weight: 600;\n}\n\n.nav-sub-link.active::before {\n  content: \" \";\n  display: block;\n  position: absolute;\n  top: 8px;\n  left: 0;\n  width: 4px;\n  height: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL01hY2ludG9zaCBTU0QvRGV2IFByb2plY3QvVVNUU2l0ZS9wcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2NvcmUvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2NvcmUvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCIvVm9sdW1lcy9NYWNpbnRvc2ggU1NEL0RldiBQcm9qZWN0L1VTVFNpdGUvcHJvamVjdHMvdXN0L3NyYy9zY3NzL19taXhpbnMuc2NzcyIsIi9Wb2x1bWVzL01hY2ludG9zaCBTU0QvRGV2IFByb2plY3QvVVNUU2l0ZS9wcm9qZWN0cy91c3Qvc3JjL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQUE7QUNERjs7QURJQTtFRThDRSxvQkFBQTtFQUVFLG1CQUFBO0VBQ0Esc0JBQUE7RUYvQ0Ysa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQ0NGOztBRENFO0VFK0hBLFdGOUhxQjtFRStIckIsWUYvSHFCO0VFZ0lyQixlRmhJcUI7RUFDbkIsaUJBQUE7QUNHSjs7QURBRTtFQUNFLHlCR25CVTtBRnFCZDs7QURBSTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJHNUJlO0FGOEJyQjs7QURHQTtFQUNFLHlCR25DWTtFSG9DWixrQkFBQTtBQ0FGOztBREdBO0VFUUUsb0JBQUE7RUFFRSxtQkFBQTtFQUNBLHNCQUFBO0VGVEYsa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDRUY7O0FEQUU7RUFDRSxnQkFBQTtBQ0VKOztBREFJO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNFTiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2NvcmUvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiY29yZVwiO1xyXG5cclxuOmhvc3Qge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm5hdi1saW5rIHtcclxuICBAaW5jbHVkZSBpbmxpbmUtY2VudGVyKHZlcnRpY2FsKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuN3B4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gIC5tYXQtaWNvbiB7XHJcbiAgICBAaW5jbHVkZSBpY29uLXNpemUoMTZweCk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICB9XHJcblxyXG4gICYuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibGFjaztcclxuXHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiBcIiBcIjtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA4cHg7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHdpZHRoOiA0cHg7XHJcbiAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLW9yYW5naXNoLXJlZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5uYXYtc3ViLWJveCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrO1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxufVxyXG5cclxuLm5hdi1zdWItbGluayB7XHJcbiAgQGluY2x1ZGUgaW5saW5lLWNlbnRlcih2ZXJ0aWNhbCk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuN3B4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAmLmFjdGl2ZSB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDhweDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgd2lkdGg6IDRweDtcclxuICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm5hdi1saW5rIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDhweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuN3B4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLm5hdi1saW5rIC5tYXQtaWNvbiB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG4ubmF2LWxpbmsuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjMGMwYztcbn1cbi5uYXYtbGluay5hY3RpdmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDhweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDRweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE0ZDA3O1xufVxuXG4ubmF2LXN1Yi1ib3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMwYzBjO1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG59XG5cbi5uYXYtc3ViLWxpbmsge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxNnB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0OHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuN3B4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubmF2LXN1Yi1saW5rLmFjdGl2ZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ubmF2LXN1Yi1saW5rLmFjdGl2ZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNHB4O1xuICBoZWlnaHQ6IDMycHg7XG59IiwiQG1peGluIGF0LXJvb3QoJGNsYXNzKSB7XHJcbiAgQGF0LXJvb3QgI3skY2xhc3N9I3smfSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBhdC1yb290LWFjdGl2ZSB7XHJcbiAgQGF0LXJvb3QgLmFjdGl2ZSN7Jn0ge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gaW5saW5lLWJsb2NrKCkge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcblxyXG4vLyBQb3NpdGlvblxyXG5AbWl4aW4gbWFyZ2luLWNlbnRlcigkZGlyZWN0aW9uOiBib3RoKSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIEBpZiAkZGlyZWN0aW9uICE9IGhvcml6b250YWwge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgfVxyXG4gIEBpZiAkZGlyZWN0aW9uICE9IHZlcnRpY2FsIHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRyYW5zbGF0ZS1jZW50ZXIoJGRpcmVjdGlvbjogYm90aCkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBAaWYgJGRpcmVjdGlvbiAhPSBob3Jpem9udGFsIHtcclxuICAgIHRvcDogNTAlO1xyXG4gIH1cclxuICBAaWYgJGRpcmVjdGlvbiAhPSB2ZXJ0aWNhbCB7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgfVxyXG4gIEBpZiAkZGlyZWN0aW9uID09IGhvcml6b250YWwge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIH0gQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSB2ZXJ0aWNhbCB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgfSBAZWxzZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBpbmxpbmUtY2VudGVyKCRkaXJlY3Rpb246IGJvdGgpIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBAaWYgJGRpcmVjdGlvbiAhPSBob3Jpem9udGFsIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxuICBAaWYgJGRpcmVjdGlvbiAhPSB2ZXJ0aWNhbCB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi8vIEltYWdlXHJcblxyXG5AbWl4aW4gYmFja2dyb3VuZC1jb3ZlciB7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbkBtaXhpbiBiYWNrZ3JvdW5kLWltYWdlLW1hZ25pZmljYXRpb24oJHVybCkge1xyXG4gICR0d2ljZTogc3RyLWluc2VydCgkdXJsLCBcIkAyeFwiLCAtNSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR1cmwpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGltYWdlLXNldCh1cmwoJHVybCkgMXgsIHVybCgkdHdpY2UpIDJ4KTtcclxufVxyXG5cclxuLy8gTWFyZ2luXHJcblxyXG5AbWl4aW4gbWFyZ2luLXJpZ2h0LXdpdGhvdXQtbGFzdC1jaGlsZCgkbWFyZ2luKSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAkbWFyZ2luO1xyXG5cclxuICAmOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIG1hcmdpbi1yaWdodC13aXRob3V0LW50aC1jaGlsZCgkbWFyZ2luLCAkbnVtYmVyKSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAkbWFyZ2luO1xyXG5cclxuICAmOm50aC1jaGlsZCgjeyRudW1iZXJ9KSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gbWFyZ2luLWJvdHRvbS13aXRob3V0LWxhc3QtY2hpbGQoJG1hcmdpbikge1xyXG4gIG1hcmdpbi1ib3R0b206ICRtYXJnaW47XHJcblxyXG4gICY6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8vIEJvcmRlclxyXG5cclxuQG1peGluIGJvcmRlci1yaWdodC13aXRob3V0LWxhc3QtY2hpbGQoJGJvcmRlcikge1xyXG4gIGJvcmRlci1yaWdodDogJGJvcmRlcjtcclxuXHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1yaWdodDogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBib3JkZXItYm90dG9tLXdpdGhvdXQtbGFzdC1jaGlsZCgkYm9yZGVyKSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogJGJvcmRlcjtcclxuXHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gYm94LXNoYWRvdyB7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMTNweCAwIHJnYmEoMCwgNTUsIDEyMiwgMC4yKTtcclxufVxyXG5cclxuQG1peGluIGxpc3QtYm9yZGVyKCRib3JkZXIpIHtcclxuICBib3JkZXItdG9wOiAkYm9yZGVyO1xyXG4gIGJvcmRlci1yaWdodDogJGJvcmRlcjtcclxuICBib3JkZXItbGVmdDogJGJvcmRlcjtcclxuXHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206ICRib3JkZXI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gcGlsbCgkaGVpZ2h0KSB7XHJcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xyXG4gIGJvcmRlci1yYWRpdXM6ICRoZWlnaHQgLyAyO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcblxyXG4vLyBJY29uXHJcblxyXG5AbWl4aW4gaWNvbi1zaXplKCRzaXplKSB7XHJcbiAgd2lkdGg6ICRzaXplO1xyXG4gIGhlaWdodDogJHNpemU7XHJcbiAgZm9udC1zaXplOiAkc2l6ZTtcclxufVxyXG5cclxuXHJcbi8vIENvbG9yIHtcclxuXHJcbkBtaXhpbiBib3JkZXItbm9uZSB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc3BhcmVudCB7XHJcbiAgcGFkZGluZzogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuXHJcbi8vIFdoaXRlIEJveFxyXG5cclxuQG1peGluIHdoaXRlLWJveCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAxMHB4IDUwcHggMTBweCAxNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMzI1cHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuQG1peGluIHdoaXRlLWJveC1zbWFsbCB7XHJcbiAgcGFkZGluZzogNXB4IDQwcHggNXB4IDEwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuQG1peGluIHdoaXRlLWJveC1pbm5lci1mb250IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC44cHg7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG5cclxuQG1peGluIHdoaXRlLWJveC1pbm5lci1pY29uIHtcclxuICBAaW5jbHVkZSBtYXJnaW4tY2VudGVyKHZlcnRpY2FsKTtcclxuICByaWdodDogMTVweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gd2hpdGUtYm94LWlubmVyLWljb24tc21hbGwge1xyXG4gIHJpZ2h0OiAxMnB4O1xyXG4gIHdpZHRoOiAxNnB4O1xyXG59XHJcblxyXG5cclxuLy8gRWxsaXBzaXNcclxuXHJcbkBtaXhpbiBlbGxpcHNpcyB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG5AbWl4aW4gbXVsdGlMaW5lRWxsaXBzaXMoJGxpbmVIZWlnaHQ6IDEuMmVtLCAkbGluZUNvdW50OiAxLCAkYmdDb2xvcjogd2hpdGUpe1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxpbmUtaGVpZ2h0OiAkbGluZUhlaWdodDtcclxuICBtYXgtaGVpZ2h0OiAkbGluZUhlaWdodCAqICRsaW5lQ291bnQ7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICBtYXJnaW4tcmlnaHQ6IC0xZW07XHJcbiAgcGFkZGluZy1yaWdodDogMWVtO1xyXG5cclxuICAmOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnLi4uJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gIH1cclxuXHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDFlbTtcclxuICAgIGhlaWdodDogMWVtO1xyXG4gICAgbWFyZ2luLXRvcDogMC4yZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmdDb2xvcjtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vLyBTY3JvbGxcclxuXHJcbkBtaXhpbiBzY3JvbGwtc3R5bGUoJHdpZHRoOiA1cHgsICRiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2KSB7XHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgfVxyXG5cclxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogJHdpZHRoO1xyXG4gIH1cclxuXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLy8gQnJlYWtQb2ludFxyXG5AbWl4aW4gc20ge1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1OTlweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gbHQtbGcge1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMTc5cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIG1kIHtcclxuICBAbWVkaWEobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDExNzlweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gbGcge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMTgwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4iLCIkY29sb3ItcHJpbWFyeTogIzBjNGU4YjtcclxuJGNvbG9yLXNlY29uZGFyeTogIzEwYzRkMztcclxuJGNvbG9yLXdhdGVyLWJsdWU6ICMwYzgwZTM7XHJcbiRjb2xvci1hcXVhLW1hcmluZTogIzRmZTZhZjtcclxuJGNvbG9yLXdoaXRlOiAjZmZmO1xyXG4kY29sb3ItYmxhY2s6ICMwYzBjMGM7XHJcbiRjb2xvci1vcmFuZ2lzaC1yZWQ6ICNlYTRkMDdcclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/core/components/sidebar/sidebar.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/core/components/sidebar/sidebar.component.ts ***!
    \**************************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppCoreComponentsSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _dminine_ng_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @dminine/ng-lib */
    "../../node_modules/@dminine/ng-lib/fesm2015/dminine-ng-lib.js");

    var SidebarComponent =
    /*#__PURE__*/
    function (_dminine_ng_lib__WEBP4) {
      _inherits(SidebarComponent, _dminine_ng_lib__WEBP4);

      function SidebarComponent(router) {
        var _this7;

        _classCallCheck(this, SidebarComponent);

        _this7 = _possibleConstructorReturn(this, _getPrototypeOf(SidebarComponent).call(this));
        _this7.router = router;
        return _this7;
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.addSubscription(this.initRouterEvents());
        }
      }, {
        key: "initRouterEvents",
        value: function initRouterEvents() {
          var _this8 = this;

          return this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivationEnd"]) {
              if (event.snapshot.data.title) {
                _this8.title = event.snapshot.data.title;
              }
            }
          });
        }
      }]);

      return SidebarComponent;
    }(_dminine_ng_lib__WEBPACK_IMPORTED_MODULE_3__["SubscriptionBaseComponent"]);

    SidebarComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ust-sidebar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/core/components/sidebar/sidebar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidebar.component.scss */
      "./src/app/core/components/sidebar/sidebar.component.scss"))["default"]]
    })], SidebarComponent);
    /***/
  },

  /***/
  "./src/app/core/components/toolbar/toolbar.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/core/components/toolbar/toolbar.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreComponentsToolbarToolbarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h1 {\n  display: inline-flex;\n  align-items: center;\n  vertical-align: middle;\n  justify-content: center;\n  width: 200px;\n  height: 72px;\n  cursor: pointer;\n}\nh1 img {\n  width: 50px;\n}\nh1 .logo-name {\n  font-size: 20px;\n  line-height: 26px;\n}\n.title {\n  margin-left: 24px;\n  color: #0c0c0c;\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 72px;\n  letter-spacing: -1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL01hY2ludG9zaCBTU0QvRGV2IFByb2plY3QvVVNUU2l0ZS9wcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2NvcmUvY29tcG9uZW50cy90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnNjc3MiLCIvVm9sdW1lcy9NYWNpbnRvc2ggU1NEL0RldiBQcm9qZWN0L1VTVFNpdGUvcHJvamVjdHMvdXN0L3NyYy9zY3NzL19taXhpbnMuc2NzcyIsInByb2plY3RzL2FkbWluL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuc2NzcyIsIi9Wb2x1bWVzL01hY2ludG9zaCBTU0QvRGV2IFByb2plY3QvVVNUU2l0ZS9wcm9qZWN0cy91c3Qvc3JjL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VDa0RFLG9CQUFBO0VBRUUsbUJBQUE7RUFDQSxzQkFBQTtFQUdBLHVCQUFBO0VEdERGLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBRUVGO0FGQUU7RUFDRSxXQUFBO0FFRUo7QUZDRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBRUNKO0FGR0E7RUFDRSxpQkFBQTtFQUNBLGNHZlk7RUhnQlosZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBRUFGIiwiZmlsZSI6InByb2plY3RzL2FkbWluL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb3JlXCI7XHJcblxyXG5oMSB7XHJcbiAgQGluY2x1ZGUgaW5saW5lLWNlbnRlcjtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiA3MnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gIH1cclxuXHJcbiAgLmxvZ28tbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICB9XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XHJcbiAgY29sb3I6ICRjb2xvci1ibGFjaztcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogNzJweDtcclxuICBsZXR0ZXItc3BhY2luZzogLTFweDtcclxufVxyXG4iLCJAbWl4aW4gYXQtcm9vdCgkY2xhc3MpIHtcclxuICBAYXQtcm9vdCAjeyRjbGFzc30jeyZ9IHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGF0LXJvb3QtYWN0aXZlIHtcclxuICBAYXQtcm9vdCAuYWN0aXZlI3smfSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBpbmxpbmUtYmxvY2soKSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuXHJcbi8vIFBvc2l0aW9uXHJcbkBtaXhpbiBtYXJnaW4tY2VudGVyKCRkaXJlY3Rpb246IGJvdGgpIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgQGlmICRkaXJlY3Rpb24gIT0gaG9yaXpvbnRhbCB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICB9XHJcbiAgQGlmICRkaXJlY3Rpb24gIT0gdmVydGljYWwge1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNsYXRlLWNlbnRlcigkZGlyZWN0aW9uOiBib3RoKSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIEBpZiAkZGlyZWN0aW9uICE9IGhvcml6b250YWwge1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgfVxyXG4gIEBpZiAkZGlyZWN0aW9uICE9IHZlcnRpY2FsIHtcclxuICAgIGxlZnQ6IDUwJTtcclxuICB9XHJcbiAgQGlmICRkaXJlY3Rpb24gPT0gaG9yaXpvbnRhbCB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgfSBAZWxzZSBpZiAkZGlyZWN0aW9uID09IHZlcnRpY2FsIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB9IEBlbHNlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGlubGluZS1jZW50ZXIoJGRpcmVjdGlvbjogYm90aCkge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIEBpZiAkZGlyZWN0aW9uICE9IGhvcml6b250YWwge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG4gIEBpZiAkZGlyZWN0aW9uICE9IHZlcnRpY2FsIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuLy8gSW1hZ2VcclxuXHJcbkBtaXhpbiBiYWNrZ3JvdW5kLWNvdmVyIHtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuQG1peGluIGJhY2tncm91bmQtaW1hZ2UtbWFnbmlmaWNhdGlvbigkdXJsKSB7XHJcbiAgJHR3aWNlOiBzdHItaW5zZXJ0KCR1cmwsIFwiQDJ4XCIsIC01KTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHVybCk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogaW1hZ2Utc2V0KHVybCgkdXJsKSAxeCwgdXJsKCR0d2ljZSkgMngpO1xyXG59XHJcblxyXG4vLyBNYXJnaW5cclxuXHJcbkBtaXhpbiBtYXJnaW4tcmlnaHQtd2l0aG91dC1sYXN0LWNoaWxkKCRtYXJnaW4pIHtcclxuICBtYXJnaW4tcmlnaHQ6ICRtYXJnaW47XHJcblxyXG4gICY6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gbWFyZ2luLXJpZ2h0LXdpdGhvdXQtbnRoLWNoaWxkKCRtYXJnaW4sICRudW1iZXIpIHtcclxuICBtYXJnaW4tcmlnaHQ6ICRtYXJnaW47XHJcblxyXG4gICY6bnRoLWNoaWxkKCN7JG51bWJlcn0pIHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtYXJnaW4tYm90dG9tLXdpdGhvdXQtbGFzdC1jaGlsZCgkbWFyZ2luKSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogJG1hcmdpbjtcclxuXHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLy8gQm9yZGVyXHJcblxyXG5AbWl4aW4gYm9yZGVyLXJpZ2h0LXdpdGhvdXQtbGFzdC1jaGlsZCgkYm9yZGVyKSB7XHJcbiAgYm9yZGVyLXJpZ2h0OiAkYm9yZGVyO1xyXG5cclxuICAmOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGJvcmRlci1ib3R0b20td2l0aG91dC1sYXN0LWNoaWxkKCRib3JkZXIpIHtcclxuICBib3JkZXItYm90dG9tOiAkYm9yZGVyO1xyXG5cclxuICAmOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBib3gtc2hhZG93IHtcclxuICBib3gtc2hhZG93OiAwIDJweCAxM3B4IDAgcmdiYSgwLCA1NSwgMTIyLCAwLjIpO1xyXG59XHJcblxyXG5AbWl4aW4gbGlzdC1ib3JkZXIoJGJvcmRlcikge1xyXG4gIGJvcmRlci10b3A6ICRib3JkZXI7XHJcbiAgYm9yZGVyLXJpZ2h0OiAkYm9yZGVyO1xyXG4gIGJvcmRlci1sZWZ0OiAkYm9yZGVyO1xyXG5cclxuICAmOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogJGJvcmRlcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBwaWxsKCRoZWlnaHQpIHtcclxuICBoZWlnaHQ6ICRoZWlnaHQ7XHJcbiAgYm9yZGVyLXJhZGl1czogJGhlaWdodCAvIDI7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuXHJcbi8vIEljb25cclxuXHJcbkBtaXhpbiBpY29uLXNpemUoJHNpemUpIHtcclxuICB3aWR0aDogJHNpemU7XHJcbiAgaGVpZ2h0OiAkc2l6ZTtcclxuICBmb250LXNpemU6ICRzaXplO1xyXG59XHJcblxyXG5cclxuLy8gQ29sb3Ige1xyXG5cclxuQG1peGluIGJvcmRlci1ub25lIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuQG1peGluIHRyYW5zcGFyZW50IHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5cclxuLy8gV2hpdGUgQm94XHJcblxyXG5AbWl4aW4gd2hpdGUtYm94IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDEwcHggNTBweCAxMHB4IDE1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAzMjVweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5AbWl4aW4gd2hpdGUtYm94LXNtYWxsIHtcclxuICBwYWRkaW5nOiA1cHggNDBweCA1cHggMTBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5AbWl4aW4gd2hpdGUtYm94LWlubmVyLWZvbnQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjhweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcblxyXG5AbWl4aW4gd2hpdGUtYm94LWlubmVyLWljb24ge1xyXG4gIEBpbmNsdWRlIG1hcmdpbi1jZW50ZXIodmVydGljYWwpO1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB3aGl0ZS1ib3gtaW5uZXItaWNvbi1zbWFsbCB7XHJcbiAgcmlnaHQ6IDEycHg7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbn1cclxuXHJcblxyXG4vLyBFbGxpcHNpc1xyXG5cclxuQG1peGluIGVsbGlwc2lzIHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbkBtaXhpbiBtdWx0aUxpbmVFbGxpcHNpcygkbGluZUhlaWdodDogMS4yZW0sICRsaW5lQ291bnQ6IDEsICRiZ0NvbG9yOiB3aGl0ZSl7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGluZS1oZWlnaHQ6ICRsaW5lSGVpZ2h0O1xyXG4gIG1heC1oZWlnaHQ6ICRsaW5lSGVpZ2h0ICogJGxpbmVDb3VudDtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIG1hcmdpbi1yaWdodDogLTFlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxZW07XHJcblxyXG4gICY6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcuLi4nO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgfVxyXG5cclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMWVtO1xyXG4gICAgaGVpZ2h0OiAxZW07XHJcbiAgICBtYXJnaW4tdG9wOiAwLjJlbTtcclxuICAgIGJhY2tncm91bmQ6ICRiZ0NvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8vIFNjcm9sbFxyXG5cclxuQG1peGluIHNjcm9sbC1zdHlsZSgkd2lkdGg6IDVweCwgJGJhY2tncm91bmQtY29sb3I6ICM2NjYpIHtcclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICB9XHJcblxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAkd2lkdGg7XHJcbiAgfVxyXG5cclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vLyBCcmVha1BvaW50XHJcbkBtaXhpbiBzbSB7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU5OXB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBsdC1sZyB7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDExNzlweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gbWQge1xyXG4gIEBtZWRpYShtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogMTE3OXB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBsZyB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDExODBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbiIsImgxIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNzJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuaDEgaW1nIHtcbiAgd2lkdGg6IDUwcHg7XG59XG5oMSAubG9nby1uYW1lIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuLnRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gIGNvbG9yOiAjMGMwYzBjO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiA3MnB4O1xuICBsZXR0ZXItc3BhY2luZzogLTFweDtcbn0iLCIkY29sb3ItcHJpbWFyeTogIzBjNGU4YjtcclxuJGNvbG9yLXNlY29uZGFyeTogIzEwYzRkMztcclxuJGNvbG9yLXdhdGVyLWJsdWU6ICMwYzgwZTM7XHJcbiRjb2xvci1hcXVhLW1hcmluZTogIzRmZTZhZjtcclxuJGNvbG9yLXdoaXRlOiAjZmZmO1xyXG4kY29sb3ItYmxhY2s6ICMwYzBjMGM7XHJcbiRjb2xvci1vcmFuZ2lzaC1yZWQ6ICNlYTRkMDdcclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/core/components/toolbar/toolbar.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/core/components/toolbar/toolbar.component.ts ***!
    \**************************************************************/

  /*! exports provided: ToolbarComponent */

  /***/
  function srcAppCoreComponentsToolbarToolbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function () {
      return ToolbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _dminine_ng_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @dminine/ng-lib */
    "../../node_modules/@dminine/ng-lib/fesm2015/dminine-ng-lib.js");
    /* harmony import */


    var _ust_src_lib_modules_auth_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../../ust/src/lib/modules/auth/state */
    "../ust/src/lib/modules/auth/state/index.ts");

    var ToolbarComponent =
    /*#__PURE__*/
    function (_dminine_ng_lib__WEBP5) {
      _inherits(ToolbarComponent, _dminine_ng_lib__WEBP5);

      function ToolbarComponent(router, authService) {
        var _this9;

        _classCallCheck(this, ToolbarComponent);

        _this9 = _possibleConstructorReturn(this, _getPrototypeOf(ToolbarComponent).call(this));
        _this9.router = router;
        _this9.authService = authService;

        _this9.addSubscription(_this9.initRouterEvents());

        return _this9;
      }

      _createClass(ToolbarComponent, [{
        key: "logout",
        value: function logout() {
          this.authService.logout();
          this.router.navigate(['/login']);
        }
      }, {
        key: "initRouterEvents",
        value: function initRouterEvents() {
          var _this10 = this;

          return this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivationEnd"]) {
              if (event.snapshot.data.title) {
                _this10.title = event.snapshot.data.title;
              }
            }
          });
        }
      }]);

      return ToolbarComponent;
    }(_dminine_ng_lib__WEBPACK_IMPORTED_MODULE_3__["SubscriptionBaseComponent"]);

    ToolbarComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ust_src_lib_modules_auth_state__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ust-toolbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./toolbar.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/core/components/toolbar/toolbar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./toolbar.component.scss */
      "./src/app/core/components/toolbar/toolbar.component.scss"))["default"]]
    })], ToolbarComponent);
    /***/
  },

  /***/
  "./src/app/core/core.module.ts":
  /*!*************************************!*\
    !*** ./src/app/core/core.module.ts ***!
    \*************************************/

  /*! exports provided: CoreModule */

  /***/
  function srcAppCoreCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout */
    "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _dminine_ng_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @dminine/ng-lib */
    "../../node_modules/@dminine/ng-lib/fesm2015/dminine-ng-lib.js");
    /* harmony import */


    var _ust_src_lib_modules_material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../ust/src/lib/modules/material/material.module */
    "../ust/src/lib/modules/material/material.module.ts");
    /* harmony import */


    var _components_layout_page_layout_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/layout-page/layout-page.component */
    "./src/app/core/components/layout-page/layout-page.component.ts");
    /* harmony import */


    var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/sidebar/sidebar.component */
    "./src/app/core/components/sidebar/sidebar.component.ts");
    /* harmony import */


    var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/toolbar/toolbar.component */
    "./src/app/core/components/toolbar/toolbar.component.ts");

    var CoreModule = function CoreModule() {
      _classCallCheck(this, CoreModule);
    };

    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_layout_page_layout_page_component__WEBPACK_IMPORTED_MODULE_7__["LayoutPageComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"], _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_9__["ToolbarComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _ust_src_lib_modules_material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _dminine_ng_lib__WEBPACK_IMPORTED_MODULE_5__["DnlSharedModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexModule"]],
      exports: [_components_layout_page_layout_page_component__WEBPACK_IMPORTED_MODULE_7__["LayoutPageComponent"]]
    })], CoreModule);
    /***/
  },

  /***/
  "./src/app/core/services/notifier.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/core/services/notifier.service.ts ***!
    \***************************************************/

  /*! exports provided: Notifier */

  /***/
  function srcAppCoreServicesNotifierServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Notifier", function () {
      return Notifier;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "../../node_modules/@angular/material/esm2015/material.js");

    var Notifier =
    /*#__PURE__*/
    function () {
      function Notifier(snackBar) {
        _classCallCheck(this, Notifier);

        this.snackBar = snackBar;
      }

      _createClass(Notifier, [{
        key: "info",
        value: function info(message) {
          var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
          this.snackBar.open(message, '', {
            duration: duration,
            panelClass: 'info'
          });
        }
      }, {
        key: "success",
        value: function success(message) {
          var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
          this.snackBar.open(message, '', {
            duration: duration,
            panelClass: 'success'
          });
        }
      }, {
        key: "warning",
        value: function warning(message) {
          var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
          this.snackBar.open(message, '', {
            duration: duration,
            panelClass: 'warning'
          });
        }
      }, {
        key: "error",
        value: function error(message, err) {
          var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5000;
          this.snackBar.open(message, '', {
            duration: duration,
            panelClass: 'error'
          });

          if (err) {
            console.error(err);
          }
        }
      }]);

      return Notifier;
    }();

    Notifier.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }];
    };

    Notifier = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], Notifier);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");

    var environment = {
      production: false,
      firebase: {
        apiKey: 'AIzaSyA3OhTBj2UjRT2UuBWNOV_MCJpRNPObups',
        authDomain: 'ust-dev-b50c0.firebaseapp.com',
        databaseURL: 'https://ust-dev-b50c0.firebaseio.com',
        projectId: 'ust-dev-b50c0',
        storageBucket: 'ust-dev-b50c0.appspot.com',
        messagingSenderId: '97555241672',
        appId: '1:97555241672:web:2fe22889535d7d66dce3fd',
        measurementId: 'G-XD16T09R5C'
      }
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "../../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Volumes/Macintosh SSD/Dev Project/USTSite/projects/admin/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map