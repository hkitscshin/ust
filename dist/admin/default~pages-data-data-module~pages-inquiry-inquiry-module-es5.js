function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-data-data-module~pages-inquiry-inquiry-module"], {
  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/file-uploader/file-uploader.component.html":
  /*!*************************************************************************************************************************************************************!*\
    !*** /Volumes/Macintosh SSD/Dev Project/USTSite/node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/file-uploader/file-uploader.component.html ***!
    \*************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsFileUploaderFileUploaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"file-input\" fxFlex fxLayoutAlign=\"start end\">\r\n  <button class=\"button\"\r\n          (click)=\"onButtonClick()\"\r\n          mat-flat-button\r\n          color=\"primary\"\r\n          type=\"button\">파일 선택</button>\r\n\r\n\r\n  <input #fileInputRef\r\n         type=\"file\"\r\n         (change)=\"uploadFile($event.target.files[0])\">\r\n</div>\r\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/image-uploader/image-uploader.component.html":
  /*!***************************************************************************************************************************************************************!*\
    !*** /Volumes/Macintosh SSD/Dev Project/USTSite/node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/image-uploader/image-uploader.component.html ***!
    \***************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsImageUploaderImageUploaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"file-input\">\r\n  <div class=\"image-uploader-box\"\r\n       [ngStyle]=\"{ width: width + 'px', height: height + 'px' }\">\r\n    <img *ngIf=\"formCtrl.value\" [src]=\"formCtrl.value\" alt=\"image\">\r\n  </div>\r\n\r\n  <div class=\"button-box\">\r\n    <button class=\"button\"\r\n            (click)=\"onButtonClick()\"\r\n            mat-flat-button\r\n            color=\"primary\"\r\n            type=\"button\">이미지 선택</button>\r\n\r\n    <input matInput type=\"text\" *ngIf=\"formCtrl.value\" [value]=\"formCtrl.value || '이미지 없음'\" readonly>\r\n  </div>\r\n\r\n  <input #fileInputRef\r\n         class=\"input\"\r\n         type=\"file\"\r\n         accept=\"image/*\"\r\n         (change)=\"uploadFile($event.target.files[0])\">\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/shared/components/file-uploader/file-uploader.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/shared/components/file-uploader/file-uploader.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsFileUploaderFileUploaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".file-input {\n  margin-top: 15px;\n}\n.file-input input {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL01hY2ludG9zaCBTU0QvRGV2IFByb2plY3QvVVNUU2l0ZS9wcm9qZWN0cy9hZG1pbi9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ZpbGUtdXBsb2FkZXIvZmlsZS11cGxvYWRlci5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2FkbWluL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZmlsZS11cGxvYWRlci9maWxlLXVwbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZ0JBQUE7QUNERjtBREdFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUNESiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ZpbGUtdXBsb2FkZXIvZmlsZS11cGxvYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb3JlXCI7XHJcblxyXG4uZmlsZS1pbnB1dCB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuXHJcbiAgaW5wdXQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogLTFweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBjbGlwOnJlY3QoMCwwLDAsMCk7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgfVxyXG59XHJcbiIsIi5maWxlLWlucHV0IHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5maWxlLWlucHV0IGlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDFweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAtMXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xuICBib3JkZXI6IDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shared/components/file-uploader/file-uploader.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/shared/components/file-uploader/file-uploader.component.ts ***!
    \****************************************************************************/

  /*! exports provided: FileUploaderComponent */

  /***/
  function srcAppSharedComponentsFileUploaderFileUploaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileUploaderComponent", function () {
      return FileUploaderComponent;
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

    var FileUploaderComponent_1;

    var FileUploaderComponent = FileUploaderComponent_1 =
    /*#__PURE__*/
    function () {
      function FileUploaderComponent(fb, uploader) {
        _classCallCheck(this, FileUploaderComponent);

        this.fb = fb;
        this.uploader = uploader;
        this.formGroup = this.createForm();
        this.controlTypeMap = {
          title: 'formControl',
          url: 'formControl'
        };
      }

      _createClass(FileUploaderComponent, [{
        key: "onButtonClick",
        value: function onButtonClick() {
          this.fileInputRef.nativeElement.click();
        }
      }, {
        key: "uploadFile",
        value: function uploadFile(file) {
          var _this = this;

          if (file) {
            var uploadTask = this.uploader.upload(file, 'board-file');
            uploadTask.getDownloadURL().subscribe(function (url) {
              _this.formGroup.setValue({
                title: file.name,
                url: url
              });

              _this.fileInputRef.nativeElement.value = '';
            });
          }
        }
      }, {
        key: "createForm",
        value: function createForm() {
          return this.fb.group({
            title: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            url: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }]);

      return FileUploaderComponent;
    }();

    FileUploaderComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _dminine_ng_lib__WEBPACK_IMPORTED_MODULE_3__["DnlFireUploader"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInputRef', {
      "static": true
    })], FileUploaderComponent.prototype, "fileInputRef", void 0);
    FileUploaderComponent = FileUploaderComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ust-file-uploader',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./file-uploader.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/file-uploader/file-uploader.component.html"))["default"],
      providers: [{
        provide: _dminine_ng_lib__WEBPACK_IMPORTED_MODULE_3__["DNL_GROUP_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return FileUploaderComponent_1;
        })
      }],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./file-uploader.component.scss */
      "./src/app/shared/components/file-uploader/file-uploader.component.scss"))["default"]]
    })], FileUploaderComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/image-uploader/image-uploader.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/shared/components/image-uploader/image-uploader.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsImageUploaderImageUploaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".file-input {\n  margin-top: 15px;\n}\n.file-input .image-uploader-box {\n  position: relative;\n  background-color: #ddd;\n  cursor: pointer;\n  margin-bottom: 12px;\n}\n.file-input img {\n  width: 100%;\n  height: 100%;\n}\n.file-input .button-box {\n  display: flex;\n}\n.file-input .button-box button {\n  margin-right: 12px;\n}\n.file-input .button-box input {\n  font-size: 15px;\n  text-overflow: ellipsis;\n  max-width: 500px;\n}\n.file-input .input {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL01hY2ludG9zaCBTU0QvRGV2IFByb2plY3QvVVNUU2l0ZS9wcm9qZWN0cy9hZG1pbi9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ltYWdlLXVwbG9hZGVyL2ltYWdlLXVwbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvYWRtaW4vc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9pbWFnZS11cGxvYWRlci9pbWFnZS11cGxvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFBO0FDREY7QURHRTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNESjtBRElFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNGSjtBREtFO0VBQ0UsYUFBQTtBQ0hKO0FES0k7RUFDRSxrQkFBQTtBQ0hOO0FETUk7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0pOO0FEUUU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQ05KIiwiZmlsZSI6InByb2plY3RzL2FkbWluL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW1hZ2UtdXBsb2FkZXIvaW1hZ2UtdXBsb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiY29yZVwiO1xyXG5cclxuLmZpbGUtaW5wdXQge1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcblxyXG4gIC5pbWFnZS11cGxvYWRlci1ib3gge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgfVxyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uLWJveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaW5wdXQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogLTFweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBjbGlwOnJlY3QoMCwwLDAsMCk7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgfVxyXG59XHJcbiIsIi5maWxlLWlucHV0IHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5maWxlLWlucHV0IC5pbWFnZS11cGxvYWRlci1ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi5maWxlLWlucHV0IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZmlsZS1pbnB1dCAuYnV0dG9uLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZmlsZS1pbnB1dCAuYnV0dG9uLWJveCBidXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG4uZmlsZS1pbnB1dCAuYnV0dG9uLWJveCBpbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG1heC13aWR0aDogNTAwcHg7XG59XG4uZmlsZS1pbnB1dCAuaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMXB4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IC0xcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XG4gIGJvcmRlcjogMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/components/image-uploader/image-uploader.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/shared/components/image-uploader/image-uploader.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ImageUploaderComponent */

  /***/
  function srcAppSharedComponentsImageUploaderImageUploaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageUploaderComponent", function () {
      return ImageUploaderComponent;
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

    var ImageUploaderComponent_1;

    var ImageUploaderComponent = ImageUploaderComponent_1 =
    /*#__PURE__*/
    function (_dminine_ng_lib__WEBP) {
      _inherits(ImageUploaderComponent, _dminine_ng_lib__WEBP);

      function ImageUploaderComponent(uploader) {
        var _this2;

        _classCallCheck(this, ImageUploaderComponent);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(ImageUploaderComponent).call(this));
        _this2.uploader = uploader;
        _this2.width = 100;
        _this2.height = 100;
        return _this2;
      }

      _createClass(ImageUploaderComponent, [{
        key: "onButtonClick",
        value: function onButtonClick() {
          this.fileInputRef.nativeElement.click();
        }
      }, {
        key: "uploadFile",
        value: function uploadFile(file) {
          var _this3 = this;

          if (file) {
            var uploadTask = this.uploader.upload(file, 'board-image');
            uploadTask.getDownloadURL().subscribe(function (url) {
              _this3.formCtrl.setValue(url);

              _this3.fileInputRef.nativeElement.value = '';
            });
          }
        }
      }]);

      return ImageUploaderComponent;
    }(_dminine_ng_lib__WEBPACK_IMPORTED_MODULE_3__["FormControlBaseComponent"]);

    ImageUploaderComponent.ctorParameters = function () {
      return [{
        type: _dminine_ng_lib__WEBPACK_IMPORTED_MODULE_3__["DnlFireUploader"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ImageUploaderComponent.prototype, "width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ImageUploaderComponent.prototype, "height", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInputRef', {
      "static": true
    })], ImageUploaderComponent.prototype, "fileInputRef", void 0);
    ImageUploaderComponent = ImageUploaderComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ust-image-uploader',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./image-uploader.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/image-uploader/image-uploader.component.html"))["default"],
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return ImageUploaderComponent_1;
        }),
        multi: true
      }],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./image-uploader.component.scss */
      "./src/app/shared/components/image-uploader/image-uploader.component.scss"))["default"]]
    })], ImageUploaderComponent);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ust_src_lib_modules_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../ust/src/lib/modules/material/material.module */
    "../ust/src/lib/modules/material/material.module.ts");
    /* harmony import */


    var _components_file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/file-uploader/file-uploader.component */
    "./src/app/shared/components/file-uploader/file-uploader.component.ts");
    /* harmony import */


    var _components_image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/image-uploader/image-uploader.component */
    "./src/app/shared/components/image-uploader/image-uploader.component.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_6__["FileUploaderComponent"], _components_image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_7__["ImageUploaderComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ust_src_lib_modules_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
      exports: [_components_file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_6__["FileUploaderComponent"], _components_image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_7__["ImageUploaderComponent"]]
    })], SharedModule);
    /***/
  }
}]);
//# sourceMappingURL=default~pages-data-data-module~pages-inquiry-inquiry-module-es5.js.map