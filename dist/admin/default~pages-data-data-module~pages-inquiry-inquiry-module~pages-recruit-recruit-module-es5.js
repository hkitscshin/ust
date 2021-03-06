function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-data-data-module~pages-inquiry-inquiry-module~pages-recruit-recruit-module"], {
  /***/
  "../../node_modules/@tinymce/tinymce-angular/fesm2015/tinymce-tinymce-angular.js":
  /*!****************************************************************************************************************************!*\
    !*** /Volumes/Macintosh SSD/Dev Project/USTSite/node_modules/@tinymce/tinymce-angular/fesm2015/tinymce-tinymce-angular.js ***!
    \****************************************************************************************************************************/

  /*! exports provided: EditorComponent, EditorModule, ɵa */

  /***/
  function node_modulesTinymceTinymceAngularFesm2015TinymceTinymceAngularJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditorComponent", function () {
      return EditorComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditorModule", function () {
      return EditorModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return Events;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /**
     * Copyright (c) 2017-present, Ephox, Inc.
     *
     * This source code is licensed under the Apache 2 license found in the
     * LICENSE file in the root directory of this source tree.
     *
     */


    var getTinymce = function getTinymce() {
      var w = typeof window !== 'undefined' ? window : undefined;
      return w && w.tinymce ? w.tinymce : null;
    };

    var Events = function Events() {
      _classCallCheck(this, Events);

      this.onBeforePaste = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onContextMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onCopy = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onCut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onDblclick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onDragDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onDragGesture = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onDragOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onFocusIn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onFocusOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onKeyDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onKeyPress = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onKeyUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onMouseEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onMouseLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onPaste = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onActivate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onAddUndo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onBeforeAddUndo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onBeforeExecCommand = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onBeforeGetContent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onBeforeRenderUI = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onBeforeSetContent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onClearUndos = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onDeactivate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onDirty = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onExecCommand = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onGetContent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onLoadContent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onNodeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onPostProcess = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onPostRender = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onPreInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onPreProcess = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onProgressState = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onRedo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onReset = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onSaveContent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onSetAttrib = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onObjectResizeStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onObjectResized = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onObjectSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onSetContent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onUndo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.onVisualAid = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onBeforePaste", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onBlur", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onContextMenu", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onCopy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onCut", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onDblclick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onDrag", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onDragDrop", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onDragEnd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onDragGesture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onDragOver", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onDrop", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onFocus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onFocusIn", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onFocusOut", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onKeyDown", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onKeyPress", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onKeyUp", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onMouseDown", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onMouseEnter", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onMouseLeave", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onMouseMove", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onMouseOut", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onMouseOver", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onMouseUp", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onPaste", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onSelectionChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onActivate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onAddUndo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onBeforeAddUndo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onBeforeExecCommand", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onBeforeGetContent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onBeforeRenderUI", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onBeforeSetContent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onClearUndos", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onDeactivate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onDirty", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onExecCommand", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onGetContent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onHide", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onInit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onLoadContent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onNodeChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onPostProcess", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onPostRender", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onPreInit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onPreProcess", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onProgressState", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onRedo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onRemove", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onReset", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onSaveContent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onSetAttrib", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onObjectResizeStart", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onObjectResized", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onObjectSelected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onSetContent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onShow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onSubmit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onUndo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Events.prototype, "onVisualAid", void 0);
    var validEvents = ['onActivate', 'onAddUndo', 'onBeforeAddUndo', 'onBeforeExecCommand', 'onBeforeGetContent', 'onBeforeRenderUI', 'onBeforeSetContent', 'onBeforePaste', 'onBlur', 'onChange', 'onClearUndos', 'onClick', 'onContextMenu', 'onCopy', 'onCut', 'onDblclick', 'onDeactivate', 'onDirty', 'onDrag', 'onDragDrop', 'onDragEnd', 'onDragGesture', 'onDragOver', 'onDrop', 'onExecCommand', 'onFocus', 'onFocusIn', 'onFocusOut', 'onGetContent', 'onHide', 'onInit', 'onKeyDown', 'onKeyPress', 'onKeyUp', 'onLoadContent', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp', 'onNodeChange', 'onObjectResizeStart', 'onObjectResized', 'onObjectSelected', 'onPaste', 'onPostProcess', 'onPostRender', 'onPreProcess', 'onProgressState', 'onRedo', 'onRemove', 'onReset', 'onSaveContent', 'onSelectionChange', 'onSetAttrib', 'onSetContent', 'onShow', 'onSubmit', 'onUndo', 'onVisualAid'];
    /**
     * Copyright (c) 2017-present, Ephox, Inc.
     *
     * This source code is licensed under the Apache 2 license found in the
     * LICENSE file in the root directory of this source tree.
     *
     */

    var bindHandlers = function bindHandlers(ctx, editor, initEvent) {
      validEvents.forEach(function (eventName) {
        var eventEmitter = ctx[eventName];

        if (eventName === 'onInit') {
          ctx.ngZone.run(function () {
            return eventEmitter.emit({
              event: initEvent,
              editor: editor
            });
          });
        } else {
          editor.on(eventName.substring(2), function (event) {
            return ctx.ngZone.run(function () {
              return eventEmitter.emit({
                event: event,
                editor: editor
              });
            });
          });
        }
      });
    };

    var unique = 0;

    var uuid = function uuid(prefix) {
      var date = new Date();
      var time = date.getTime();
      var random = Math.floor(Math.random() * 1000000000);
      unique++;
      return prefix + '_' + random + unique + String(time);
    };

    var isTextarea = function isTextarea(element) {
      return typeof element !== 'undefined' && element.tagName.toLowerCase() === 'textarea';
    };

    var normalizePluginArray = function normalizePluginArray(plugins) {
      if (typeof plugins === 'undefined' || plugins === '') {
        return [];
      }

      return Array.isArray(plugins) ? plugins : plugins.split(' ');
    };

    var mergePlugins = function mergePlugins(initPlugins, inputPlugins) {
      return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins));
    }; // tslint:disable-next-line:no-empty


    var noop = function noop() {};
    /**
     * Copyright (c) 2017-present, Ephox, Inc.
     *
     * This source code is licensed under the Apache 2 license found in the
     * LICENSE file in the root directory of this source tree.
     *
     */


    var injectScriptTag = function injectScriptTag(scriptId, doc, url, callback) {
      var scriptTag = doc.createElement('script');
      scriptTag.referrerPolicy = 'origin';
      scriptTag.type = 'application/javascript';
      scriptTag.id = scriptId;
      scriptTag.addEventListener('load', callback);
      scriptTag.src = url;

      if (doc.head) {
        doc.head.appendChild(scriptTag);
      }
    };

    var create = function create() {
      return {
        listeners: [],
        scriptId: uuid('tiny-script'),
        scriptLoaded: false
      };
    };

    var load = function load(state, doc, url, callback) {
      if (state.scriptLoaded) {
        callback();
      } else {
        state.listeners.push(callback);

        if (!doc.getElementById(state.scriptId)) {
          injectScriptTag(state.scriptId, doc, url, function () {
            state.listeners.forEach(function (fn) {
              return fn();
            });
            state.scriptLoaded = true;
          });
        }
      }
    };

    var scriptState = create();
    var EDITOR_COMPONENT_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return EditorComponent;
      }),
      multi: true
    };

    var EditorComponent =
    /*#__PURE__*/
    function (_Events) {
      _inherits(EditorComponent, _Events);

      function EditorComponent(elementRef, ngZone, platformId) {
        var _this;

        _classCallCheck(this, EditorComponent);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(EditorComponent).call(this));
        _this.platformId = platformId;
        _this.cloudChannel = '5';
        _this.apiKey = 'no-api-key';
        _this.id = '';
        _this.toolbar = null;
        _this._element = undefined;
        _this.onTouchedCallback = noop;
        _this.onChangeCallback = noop;
        _this._elementRef = elementRef;
        _this.ngZone = ngZone;
        _this.initialise = _this.initialise.bind(_assertThisInitialized(_this));
        return _this;
      }

      _createClass(EditorComponent, [{
        key: "writeValue",
        value: function writeValue(value) {
          this.initialValue = value || this.initialValue;
          value = value || '';

          if (this._editor && this._editor.initialized && typeof value === 'string') {
            this._editor.setContent(value);
          }
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChangeCallback = fn;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouchedCallback = fn;
        }
      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          if (this._editor) {
            this._editor.setMode(isDisabled ? 'readonly' : 'design');
          } else if (isDisabled) {
            this.init = Object.assign({}, this.init, {
              readonly: true
            });
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            this.id = this.id || uuid('tiny-angular');
            this.inline = typeof this.inline !== 'undefined' ? typeof this.inline === 'boolean' ? this.inline : true : this.init && this.init.inline;
            this.createElement();

            if (getTinymce() !== null) {
              this.initialise();
            } else if (this._element && this._element.ownerDocument) {
              var doc = this._element.ownerDocument;
              var channel = this.cloudChannel;
              var apiKey = this.apiKey;
              load(scriptState, doc, "https://cdn.tiny.cloud/1/".concat(apiKey, "/tinymce/").concat(channel, "/tinymce.min.js"), this.initialise);
            }
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (getTinymce() !== null) {
            getTinymce().remove(this._editor);
          }
        }
      }, {
        key: "createElement",
        value: function createElement() {
          var tagName = typeof this.tagName === 'string' ? this.tagName : 'div';
          this._element = document.createElement(this.inline ? tagName : 'textarea');

          if (this._element) {
            this._element.id = this.id;

            if (isTextarea(this._element)) {
              this._element.style.visibility = 'hidden';
            }

            this._elementRef.nativeElement.appendChild(this._element);
          }
        }
      }, {
        key: "initialise",
        value: function initialise() {
          var _this2 = this;

          var finalInit = Object.assign({}, this.init, {
            target: this._element,
            inline: this.inline,
            readonly: this.disabled,
            plugins: mergePlugins(this.init && this.init.plugins, this.plugins),
            toolbar: this.toolbar || this.init && this.init.toolbar,
            setup: function setup(editor) {
              _this2._editor = editor;
              editor.on('init', function (e) {
                _this2.initEditor(e, editor);
              });

              if (_this2.init && typeof _this2.init.setup === 'function') {
                _this2.init.setup(editor);
              }
            }
          });

          if (isTextarea(this._element)) {
            this._element.style.visibility = '';
          }

          this.ngZone.runOutsideAngular(function () {
            getTinymce().init(finalInit);
          });
        }
      }, {
        key: "initEditor",
        value: function initEditor(initEvent, editor) {
          var _this3 = this;

          if (typeof this.initialValue === 'string') {
            this.ngZone.run(function () {
              return editor.setContent(_this3.initialValue);
            });
          }

          editor.on('blur', function () {
            return _this3.ngZone.run(function () {
              return _this3.onTouchedCallback();
            });
          });
          editor.on('change keyup undo redo', function () {
            return _this3.ngZone.run(function () {
              return _this3.onChangeCallback(editor.getContent());
            });
          });
          bindHandlers(this, editor, initEvent);
        }
      }, {
        key: "disabled",
        set: function set(val) {
          this._disabled = val;

          if (this._editor && this._editor.initialized) {
            this._editor.setMode(val ? 'readonly' : 'design');
          }
        },
        get: function get() {
          return this._disabled;
        }
      }, {
        key: "editor",
        get: function get() {
          return this._editor;
        }
      }]);

      return EditorComponent;
    }(Events);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], EditorComponent.prototype, "disabled", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], EditorComponent.prototype, "cloudChannel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], EditorComponent.prototype, "apiKey", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], EditorComponent.prototype, "init", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], EditorComponent.prototype, "id", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], EditorComponent.prototype, "initialValue", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], EditorComponent.prototype, "inline", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], EditorComponent.prototype, "tagName", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], EditorComponent.prototype, "plugins", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], EditorComponent.prototype, "toolbar", void 0);
    EditorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'editor',
      template: '<ng-template></ng-template>',
      providers: [EDITOR_COMPONENT_VALUE_ACCESSOR],
      styles: [':host { display: block; }']
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], Object])], EditorComponent);

    var EditorModule = function EditorModule() {
      _classCallCheck(this, EditorModule);
    };

    EditorModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
      declarations: [EditorComponent],
      exports: [EditorComponent]
    })], EditorModule);
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=tinymce-tinymce-angular.js.map

    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../ust/src/lib/shared/components/datepicker/datepicker.component.html":
  /*!************************************************************************************************************************************************************!*\
    !*** /Volumes/Macintosh SSD/Dev Project/USTSite/node_modules/raw-loader/dist/cjs.js!../ust/src/lib/shared/components/datepicker/datepicker.component.html ***!
    \************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsUstSrcLibSharedComponentsDatepickerDatepickerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-form-field>\r\n  <input matInput [matDatepicker]=\"picker\" [placeholder]=\"placeholder || null\" [formControl]=\"formCtrl\" readonly>\r\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n  <mat-datepicker #picker></mat-datepicker>\r\n</mat-form-field>\r\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/tinymce/components/tinymce/tinymce.component.html":
  /*!**********************************************************************************************************************************************************!*\
    !*** /Volumes/Macintosh SSD/Dev Project/USTSite/node_modules/raw-loader/dist/cjs.js!./src/app/modules/tinymce/components/tinymce/tinymce.component.html ***!
    \**********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesTinymceComponentsTinymceTinymceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<editor\n  [formControl]=\"formCtrl\"\n  [init]=\"config\"\n></editor>\n";
    /***/
  },

  /***/
  "../ust/src/lib/shared/components/datepicker/datepicker.component.scss":
  /*!*****************************************************************************!*\
    !*** ../ust/src/lib/shared/components/datepicker/datepicker.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function ustSrcLibSharedComponentsDatepickerDatepickerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy91c3Qvc3JjL2xpYi9zaGFyZWQvY29tcG9uZW50cy9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "../ust/src/lib/shared/components/datepicker/datepicker.component.ts":
  /*!***************************************************************************!*\
    !*** ../ust/src/lib/shared/components/datepicker/datepicker.component.ts ***!
    \***************************************************************************/

  /*! exports provided: DatepickerComponent */

  /***/
  function ustSrcLibSharedComponentsDatepickerDatepickerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatepickerComponent", function () {
      return DatepickerComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _dminine_ng_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @dminine/ng-lib */
    "../../node_modules/@dminine/ng-lib/fesm2015/dminine-ng-lib.js");
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../utils */
    "../ust/src/lib/utils.ts");

    var DatepickerComponent_1;

    var DatepickerComponent = DatepickerComponent_1 =
    /*#__PURE__*/
    function (_dminine_ng_lib__WEBP) {
      _inherits(DatepickerComponent, _dminine_ng_lib__WEBP);

      function DatepickerComponent() {
        _classCallCheck(this, DatepickerComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(DatepickerComponent).call(this, new Date()));
      }

      _createClass(DatepickerComponent, [{
        key: "convertToControlValue",
        value: function convertToControlValue(value) {
          if (value && value.toDate) {
            return value.toDate();
          }

          return null;
        }
      }, {
        key: "convertToEmitValue",
        value: function convertToEmitValue(value) {
          return Object(_utils__WEBPACK_IMPORTED_MODULE_4__["firestoreTimestampFromDate"])(value);
        }
      }]);

      return DatepickerComponent;
    }(_dminine_ng_lib__WEBPACK_IMPORTED_MODULE_3__["FormControlBaseComponent"]);

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DatepickerComponent.prototype, "placeholder", void 0);
    DatepickerComponent = DatepickerComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ust-datepicker',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./datepicker.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../ust/src/lib/shared/components/datepicker/datepicker.component.html"))["default"],
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return DatepickerComponent_1;
        }),
        multi: true
      }],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./datepicker.component.scss */
      "../ust/src/lib/shared/components/datepicker/datepicker.component.scss"))["default"]]
    })], DatepickerComponent);
    /***/
  },

  /***/
  "../ust/src/lib/shared/pipes/timestamp.pipe.ts":
  /*!*****************************************************!*\
    !*** ../ust/src/lib/shared/pipes/timestamp.pipe.ts ***!
    \*****************************************************/

  /*! exports provided: TimestampPipe */

  /***/
  function ustSrcLibSharedPipesTimestampPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimestampPipe", function () {
      return TimestampPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");

    var TimestampPipe =
    /*#__PURE__*/
    function () {
      function TimestampPipe() {
        _classCallCheck(this, TimestampPipe);
      }

      _createClass(TimestampPipe, [{
        key: "transform",
        value: function transform(value) {
          var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'mediumDate';
          var timezone = arguments.length > 2 ? arguments[2] : undefined;
          var locale = arguments.length > 3 ? arguments[3] : undefined;

          if (!value) {
            return null;
          } else if (value.toMillis) {
            return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(value.toMillis(), format, locale || 'en', timezone);
          } else if (value instanceof Date) {
            return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(value, format, locale || 'en', timezone);
          } else {
            return value;
          }
        }
      }]);

      return TimestampPipe;
    }();

    TimestampPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"])({
      name: 'timestamp'
    })], TimestampPipe);
    /***/
  },

  /***/
  "../ust/src/lib/shared/ust-shared.module.ts":
  /*!**************************************************!*\
    !*** ../ust/src/lib/shared/ust-shared.module.ts ***!
    \**************************************************/

  /*! exports provided: UstSharedModule */

  /***/
  function ustSrcLibSharedUstSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UstSharedModule", function () {
      return UstSharedModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _modules_material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../modules/material/material.module */
    "../ust/src/lib/modules/material/material.module.ts");
    /* harmony import */


    var _pipes_timestamp_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pipes/timestamp.pipe */
    "../ust/src/lib/shared/pipes/timestamp.pipe.ts");
    /* harmony import */


    var _components_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/datepicker/datepicker.component */
    "../ust/src/lib/shared/components/datepicker/datepicker.component.ts");

    var UstSharedModule = function UstSharedModule() {
      _classCallCheck(this, UstSharedModule);
    };

    UstSharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_pipes_timestamp_pipe__WEBPACK_IMPORTED_MODULE_5__["TimestampPipe"], _components_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_6__["DatepickerComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _modules_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      exports: [_pipes_timestamp_pipe__WEBPACK_IMPORTED_MODULE_5__["TimestampPipe"], _components_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_6__["DatepickerComponent"]]
    })], UstSharedModule);
    /***/
  },

  /***/
  "../ust/src/lib/utils.ts":
  /*!*******************************!*\
    !*** ../ust/src/lib/utils.ts ***!
    \*******************************/

  /*! exports provided: getParamsId, firestoreTimestampNow, firestoreTimestampFromDate, firestoreTimestampToDate, getTodayNumber, getTodayString, getDateString, stripTag */

  /***/
  function ustSrcLibUtilsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getParamsId", function () {
      return getParamsId;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "firestoreTimestampNow", function () {
      return firestoreTimestampNow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "firestoreTimestampFromDate", function () {
      return firestoreTimestampFromDate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "firestoreTimestampToDate", function () {
      return firestoreTimestampToDate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getTodayNumber", function () {
      return getTodayNumber;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getTodayString", function () {
      return getTodayString;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getDateString", function () {
      return getDateString;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "stripTag", function () {
      return stripTag;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase/app */
    "../../node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);

    function getParamsId(route) {
      return route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (params) {
        return params.id;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(Boolean));
    }

    function firestoreTimestampNow() {
      return firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"].Timestamp.now();
    }

    function firestoreTimestampFromDate(date) {
      return firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"].Timestamp.fromDate(date);
    }

    function firestoreTimestampToDate(date) {
      return date.toDate();
    }

    function getTodayNumber() {
      var today = new Date();
      return [today.getFullYear(), today.getMonth() + 1, today.getDate()];
    }

    function getTodayString() {
      var today = new Date();
      return [today.getFullYear().toString(), (today.getMonth() + 1).toString(), today.getDate().toString()];
    }

    function getDateString(date) {
      return [date.getFullYear().toString(), (date.getMonth() + 1).toString(), date.getDate().toString()];
    }

    function stripTag(html) {
      if (!html || typeof html !== 'string') {
        return html;
      }

      return html.replace(/(<(.|\n)*?>)|(&[#a-z0-9]+;)|(\n)/g, '');
    }
    /***/

  },

  /***/
  "./src/app/modules/admin-board-base/components/admin-board-list-base.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/modules/admin-board-base/components/admin-board-list-base.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: AdminBoardListBaseComponent */

  /***/
  function srcAppModulesAdminBoardBaseComponentsAdminBoardListBaseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminBoardListBaseComponent", function () {
      return AdminBoardListBaseComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _dminine_ng_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @dminine/ng-lib */
    "../../node_modules/@dminine/ng-lib/fesm2015/dminine-ng-lib.js");

    var AdminBoardListBaseComponent =
    /*#__PURE__*/
    function (_dminine_ng_lib__WEBP2) {
      _inherits(AdminBoardListBaseComponent, _dminine_ng_lib__WEBP2);

      function AdminBoardListBaseComponent(entityService) {
        var _this4;

        _classCallCheck(this, AdminBoardListBaseComponent);

        _this4 = _possibleConstructorReturn(this, _getPrototypeOf(AdminBoardListBaseComponent).call(this));
        _this4.entityService = entityService;
        _this4.pageSize = 10;
        return _this4;
      }

      _createClass(AdminBoardListBaseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.addSubscription(this.initTotalCount());
          this.setSubscription('init-entities', this.initEntities());
        }
      }, {
        key: "onPageChange",
        value: function onPageChange(pageEvent) {
          this.setSubscription('init-entities', this.initEntities(pageEvent.pageIndex));
        }
      }, {
        key: "initTotalCount",
        value: function initTotalCount() {
          var _this5 = this;

          return this.entityService.count().subscribe(function (count) {
            _this5.totalCount = count;
          });
        }
      }, {
        key: "initEntities",
        value: function initEntities(page) {
          var _this6 = this;

          var query = {
            sorts: [{
              field: 'createdAt',
              direction: 'desc'
            }],
            perPage: 10,
            page: 1
          };

          if (page >= 0) {
            query.page = page + 1;
          }

          return this.entityService.list(query).subscribe(function (entities) {
            _this6.entities = entities;
          });
        }
      }]);

      return AdminBoardListBaseComponent;
    }(_dminine_ng_lib__WEBPACK_IMPORTED_MODULE_1__["SubscriptionBaseComponent"]);
    /***/

  },

  /***/
  "./src/app/modules/admin-board-base/components/admin-board-modify-base.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/modules/admin-board-base/components/admin-board-modify-base.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: AdminBoardModifyBaseComponent */

  /***/
  function srcAppModulesAdminBoardBaseComponentsAdminBoardModifyBaseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminBoardModifyBaseComponent", function () {
      return AdminBoardModifyBaseComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _dminine_ng_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @dminine/ng-lib */
    "../../node_modules/@dminine/ng-lib/fesm2015/dminine-ng-lib.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");

    var AdminBoardModifyBaseComponent =
    /*#__PURE__*/
    function (_dminine_ng_lib__WEBP3) {
      _inherits(AdminBoardModifyBaseComponent, _dminine_ng_lib__WEBP3);

      function AdminBoardModifyBaseComponent(router, route, entityService, notifier) {
        var _this7;

        _classCallCheck(this, AdminBoardModifyBaseComponent);

        _this7 = _possibleConstructorReturn(this, _getPrototypeOf(AdminBoardModifyBaseComponent).call(this));
        _this7.router = router;
        _this7.route = route;
        _this7.entityService = entityService;
        _this7.notifier = notifier;
        _this7.invalid = true;
        _this7.isLoading = false;
        _this7.boardPath = '/data/notice';
        return _this7;
      }

      _createClass(AdminBoardModifyBaseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.addSubscription(this.initEntity());
        }
      }, {
        key: "modify",
        value: function modify() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!this.invalid) {
                      _context.next = 2;
                      break;
                    }

                    return _context.abrupt("return", this.notifier.warning('모든 정보를 입력해 주세요'));

                  case 2:
                    this.isLoading = true;
                    _context.prev = 3;
                    _context.next = 6;
                    return this.entityService.update(this.entity.id, this.formValue);

                  case 6:
                    if (!this.modifyCallback) {
                      _context.next = 9;
                      break;
                    }

                    _context.next = 9;
                    return this.modifyCallback();

                  case 9:
                    this.notifier.success('수정하였습니다!');
                    _context.next = 12;
                    return this.router.navigate([this.boardPath]);

                  case 12:
                    _context.next = 17;
                    break;

                  case 14:
                    _context.prev = 14;
                    _context.t0 = _context["catch"](3);
                    this.notifier.error("\uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4.\nError: ".concat(_context.t0.message), _context.t0);

                  case 17:
                    this.isLoading = false;

                  case 18:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[3, 14]]);
          }));
        }
      }, {
        key: "delete",
        value: function _delete() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (confirm('정말 삭제하시겠습니까?')) {
                      _context2.next = 2;
                      break;
                    }

                    return _context2.abrupt("return");

                  case 2:
                    this.isLoading = true;
                    _context2.prev = 3;
                    _context2.next = 6;
                    return this.entityService["delete"](this.entity.id);

                  case 6:
                    this.notifier.success('삭제하였습니다!');
                    _context2.next = 9;
                    return this.router.navigate([this.boardPath]);

                  case 9:
                    _context2.next = 14;
                    break;

                  case 11:
                    _context2.prev = 11;
                    _context2.t0 = _context2["catch"](3);
                    this.notifier.error("\uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4.\nError: ".concat(_context2.t0.message), _context2.t0);

                  case 14:
                    this.isLoading = false;

                  case 15:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[3, 11]]);
          }));
        }
      }, {
        key: "initEntity",
        value: function initEntity() {
          var _this8 = this;

          return this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (params) {
            return Boolean(params.id);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (params) {
            return _this8.entityService.get(params.id);
          })).subscribe(function (entity) {
            _this8.entity = entity;
          });
        }
      }]);

      return AdminBoardModifyBaseComponent;
    }(_dminine_ng_lib__WEBPACK_IMPORTED_MODULE_1__["SubscriptionBaseComponent"]);
    /***/

  },

  /***/
  "./src/app/modules/tinymce/components/tinymce/tinymce.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/modules/tinymce/components/tinymce/tinymce.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesTinymceComponentsTinymceTinymceComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL21vZHVsZXMvdGlueW1jZS9jb21wb25lbnRzL3RpbnltY2UvdGlueW1jZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/tinymce/components/tinymce/tinymce.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/modules/tinymce/components/tinymce/tinymce.component.ts ***!
    \*************************************************************************/

  /*! exports provided: TinymceComponent */

  /***/
  function srcAppModulesTinymceComponentsTinymceTinymceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TinymceComponent", function () {
      return TinymceComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _dminine_ng_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @dminine/ng-lib */
    "../../node_modules/@dminine/ng-lib/fesm2015/dminine-ng-lib.js");

    var TinymceComponent_1;

    var TinymceComponent = TinymceComponent_1 =
    /*#__PURE__*/
    function (_dminine_ng_lib__WEBP4) {
      _inherits(TinymceComponent, _dminine_ng_lib__WEBP4);

      // tslint:enable:max-line-length
      function TinymceComponent(uploader) {
        var _this9;

        _classCallCheck(this, TinymceComponent);

        _this9 = _possibleConstructorReturn(this, _getPrototypeOf(TinymceComponent).call(this, null));
        _this9.uploader = uploader; // tslint:disable:max-line-length

        _this9.config = {
          base_url: '/tinymce',
          suffix: '.min',
          plugins: 'print preview fullpage paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
          menubar: 'file edit view insert format tools table help',
          toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
          images_upload_handler: _this9.imagesUploadHandler.bind(_assertThisInitialized(_this9)),
          height: 600,
          language_url: '/assets/tinymce/langs/ko_KR.js',
          language: 'ko_KR'
        };
        return _this9;
      }

      _createClass(TinymceComponent, [{
        key: "imagesUploadHandler",
        value: function imagesUploadHandler(blobInfo, success, failure) {
          var uploadTask = this.uploader.upload(blobInfo.blob(), this.name, blobInfo.filename());
          uploadTask.getDownloadURL().subscribe(success);
          uploadTask["catch"](failure);
        }
      }, {
        key: "convertToEmitValue",
        value: function convertToEmitValue(value) {
          if (value === '<!DOCTYPE html>\n' + '<html>\n' + '<head>\n' + '</head>\n' + '<body>\n' + '\n' + '</body>\n' + '</html>') {
            return null;
          }

          return value;
        }
      }]);

      return TinymceComponent;
    }(_dminine_ng_lib__WEBPACK_IMPORTED_MODULE_3__["FormControlBaseComponent"]);

    TinymceComponent.ctorParameters = function () {
      return [{
        type: _dminine_ng_lib__WEBPACK_IMPORTED_MODULE_3__["DnlFireUploader"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TinymceComponent.prototype, "name", void 0);
    TinymceComponent = TinymceComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ust-tinymce',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tinymce.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/tinymce/components/tinymce/tinymce.component.html"))["default"],
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return TinymceComponent_1;
        }),
        multi: true
      }],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tinymce.component.scss */
      "./src/app/modules/tinymce/components/tinymce/tinymce.component.scss"))["default"]]
    })], TinymceComponent);
    /***/
  },

  /***/
  "./src/app/modules/tinymce/tinymce.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/modules/tinymce/tinymce.module.ts ***!
    \***************************************************/

  /*! exports provided: TinymceModule */

  /***/
  function srcAppModulesTinymceTinymceModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TinymceModule", function () {
      return TinymceModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _components_tinymce_tinymce_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/tinymce/tinymce.component */
    "./src/app/modules/tinymce/components/tinymce/tinymce.component.ts");
    /* harmony import */


    var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @tinymce/tinymce-angular */
    "../../node_modules/@tinymce/tinymce-angular/fesm2015/tinymce-tinymce-angular.js");

    var TinymceModule = function TinymceModule() {
      _classCallCheck(this, TinymceModule);
    };

    TinymceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_tinymce_tinymce_component__WEBPACK_IMPORTED_MODULE_4__["TinymceComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_5__["EditorModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      exports: [_components_tinymce_tinymce_component__WEBPACK_IMPORTED_MODULE_4__["TinymceComponent"]]
    })], TinymceModule);
    /***/
  }
}]);
//# sourceMappingURL=default~pages-data-data-module~pages-inquiry-inquiry-module~pages-recruit-recruit-module-es5.js.map