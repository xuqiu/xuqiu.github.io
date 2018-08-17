(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _device_device_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./device/device.component */ "./src/app/device/device.component.ts");
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./statistics/statistics.component */ "./src/app/statistics/statistics.component.ts");
/* harmony import */ var _config_config_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config/config.component */ "./src/app/config/config.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'device', component: _device_device_component__WEBPACK_IMPORTED_MODULE_3__["DeviceComponent"] },
    { path: 'statistics', component: _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_4__["StatisticsComponent"] },
    { path: 'config', component: _config_config_component__WEBPACK_IMPORTED_MODULE_5__["ConfigComponent"] },
    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ons-navigator>\n  <ons-page>\n    <div class=\"page__background\"></div>\n    <div class=\"page__content\">\n      <app-tabbar></app-tabbar>\n    </div>\n  </ons-page>\n</ons-navigator>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'SauceX';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_onsenui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-onsenui */ "./node_modules/ngx-onsenui/ngx-onsenui.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _tabbar_tabbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabbar/tabbar.component */ "./src/app/tabbar/tabbar.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _device_device_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./device/device.component */ "./src/app/device/device.component.ts");
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./statistics/statistics.component */ "./src/app/statistics/statistics.component.ts");
/* harmony import */ var _config_config_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./config/config.component */ "./src/app/config/config.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _bottle_bottle_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bottle/bottle.component */ "./src/app/bottle/bottle.component.ts");
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./chart/chart.component */ "./src/app/chart/chart.component.ts");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/fesm5/ngx-echarts.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _tabbar_tabbar_component__WEBPACK_IMPORTED_MODULE_5__["TabbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _device_device_component__WEBPACK_IMPORTED_MODULE_8__["DeviceComponent"],
                _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_9__["StatisticsComponent"],
                _config_config_component__WEBPACK_IMPORTED_MODULE_10__["ConfigComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"],
                _bottle_bottle_component__WEBPACK_IMPORTED_MODULE_12__["BottleComponent"],
                _chart_chart_component__WEBPACK_IMPORTED_MODULE_13__["ChartComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_onsenui__WEBPACK_IMPORTED_MODULE_2__["OnsenModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                ngx_echarts__WEBPACK_IMPORTED_MODULE_14__["NgxEchartsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            entryComponents: [_device_device_component__WEBPACK_IMPORTED_MODULE_8__["DeviceComponent"]],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"],
            ],
        })
    ], AppModule);
    return AppModule;
}());

Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(AppModule);


/***/ }),

/***/ "./src/app/bottle/bottle.component.css":
/*!*********************************************!*\
  !*** ./src/app/bottle/bottle.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  box-sizing: border-box;\r\n}\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n}\r\nbody {\r\n  background-color: #1a1a1a;\r\n  font-family: sans-serif;\r\n  font-size: 15px;\r\n  color: #ccc;\r\n}\r\ninput[type=\"text\"] {\r\n  background-color: transparent;\r\n  margin-top: 30px;\r\n  border: 0;\r\n  border-bottom: solid 1px #8080ff;\r\n  text-align: center;\r\n  font-size: 20px;\r\n  color: #518bf0;\r\n  text-shadow: 0 0 3px #518bf0;\r\n  width: 45px;\r\n  display: inline-block;\r\n}\r\ninput:focus {\r\n  outline: 0;\r\n  border-bottom: dashed 1px #ff8080;\r\n}\r\ninput::-moz-selection {\r\n  color: #1a1a1a;\r\n  background-color: #c6e4ee;\r\n}\r\ninput::selection {\r\n  color: #1a1a1a;\r\n  background-color: #c6e4ee;\r\n}\r\n::-webkit-input-placeholder {\r\n  color: #7aa6f3;\r\n  text-shadow: 0 0 3px #7aa6f3;\r\n}\r\n:-moz-placeholder {\r\n  color: #7aa6f3;\r\n  text-shadow: 0 0 3px #7aa6f3;\r\n}\r\n::-moz-placeholder {\r\n  color: #7aa6f3;\r\n  text-shadow: 0 0 3px #7aa6f3;\r\n}\r\n:-ms-input-placeholder {\r\n  color: #7aa6f3;\r\n  text-shadow: 0 0 3px #7aa6f3;\r\n}\r\n.wrapper {\r\n\r\n  display: flex;\r\n  -o-box-align: center;\r\n  align-items: center;\r\n  -o-box-pack: center;\r\n  justify-content: center;\r\n  -o-box-orient: vertical;\r\n  flex-direction: column;\r\n  height: 100%;\r\n}\r\n.content {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: -webkit-flex;\r\n  -webkit-justify-content: center;\r\n}\r\n.green {\r\n  margin-top: 15px;\r\n}\r\n.green .progress,\r\n.red .progress,\r\n.orange .progress {\r\n  position: relative;\r\n  border-radius: 7%;\r\n  width: 52%;\r\n  padding-top: 70%;\r\n  height: 0;\r\n}\r\n.green .progress {\r\n  border: 2px solid #53fc53;\r\n}\r\n.green .progress {\r\n  box-shadow: 0 0 20px #029502;\r\n}\r\n.green .progress,\r\n.red .progress,\r\n.orange .progress {\r\n  transition: all 1s ease;\r\n}\r\n.green .progress .inner,\r\n.red .progress .inner,\r\n.orange .progress .inner {\r\n  position: absolute;\r\n  overflow: hidden;\r\n  z-index: 2;\r\n  border-radius: 5%;\r\n  top:0;\r\n  width: 100%;\r\n  height: 100%;\r\n  border: 1px solid #1a1a1a;\r\n  transition: all 1s ease;\r\n}\r\n.green .progress .inner .water,\r\n.red .progress .inner .water,\r\n.orange .progress .inner .water {\r\n  position: absolute;\r\n  z-index: 1;\r\n  width: 290%;\r\n  height: 200%;\r\n  left: -95%;\r\n  border-radius: 40%;\r\n  -webkit-animation-iteration-count: infinite;\r\n  animation-iteration-count: infinite;\r\n  -webkit-animation-timing-function: linear;\r\n  animation-timing-function: linear;\r\n  -webkit-animation-duration: 10s;\r\n  animation-duration: 10s;\r\n  -webkit-animation-name: spin;\r\n  animation-name: spin;\r\n  transition: all 1s ease;\r\n}\r\n.green .progress .inner .water {\r\n  background: rgba(83,252,83,0.5);\r\n  box-shadow: 0 0 20px #03bc03;\r\n}\r\n.red .progress .inner .water {\r\n  background: rgba(237,59,59,0.5);\r\n  box-shadow: 0 0 20px #9b0e0e;\r\n}\r\n.orange .progress .inner .water {\r\n  background: rgba(240,124,62,0.5);\r\n  box-shadow: 0 0 20px #a0400c;\r\n}\r\n.progress .inner .glare {\r\n  position: absolute;\r\n  left: 20%;\r\n  z-index: 5;\r\n  width: 20%;\r\n  height: 100%;\r\n  background-color: rgba(255,255,255,0.4);\r\n  transition: all 1s ease;\r\n}\r\n.progress .inner .glare2 {\r\n  left: 85%;\r\n  width: 15%;\r\n}\r\n.green .progress .inner .percent,\r\n.red .progress .inner .percent,\r\n.orange .progress .inner .percent,\r\n.label{\r\n  position: absolute;\r\n\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  z-index: 6;\r\n\r\n  font-size: 8vw;\r\n  transition: all 1s ease;\r\n}\r\n.percent{\r\n  top: 60%;\r\n}\r\n.label{\r\n  top: 30%;\r\n}\r\n.green .progress .inner .percent{\r\n  color: #03c603;\r\n  text-shadow: 0 0 10px #029502;\r\n}\r\n.red .progress .inner .percent {\r\n  color: #a30f0f;\r\n  text-shadow: 0 0 10px #7a0b0b;\r\n}\r\n.red {\r\n  margin-top: 15px;\r\n}\r\n.red .progress {\r\n  border: 2px solid #ed3b3b;\r\n}\r\n.red .progress {\r\n  box-shadow: 0 0 20px #7a0b0b;\r\n}\r\n.orange {\r\n  margin-top: 15px;\r\n}\r\n.orange .progress {\r\n  border: 2px solid #f07c3e;\r\n}\r\n.orange .progress {\r\n  box-shadow: 0 0 20px #7e320a;\r\n}\r\n.orange .progress .inner .percent {\r\n  color: #a8430d;\r\n}\r\n.orange .progress .inner .percent {\r\n  text-shadow: 0 0 10px #7e320a;\r\n}\r\n#copyright {\r\n  margin-top: 25px;\r\n  background-color: transparent;\r\n  font-size: 14px;\r\n  color: #b3b3b3;\r\n  text-align: center;\r\n}\r\n#copyright div {\r\n  margin-bottom: 10px;\r\n}\r\n#copyright a,\r\n#copyright a:link {\r\n  color: #808080;\r\n  text-decoration: none;\r\n  border-bottom: 1px solid #808080;\r\n  padding-bottom: 2px;\r\n}\r\n#copyright a:active {\r\n  color: #b3b3b3;\r\n}\r\n#copyright a:hover {\r\n  color: #b3b3b3;\r\n  border-bottom: 1px solid #b3b3b3;\r\n  padding-bottom: 4px;\r\n}\r\n.instructions {\r\n  display: inline-block;\r\n  margin: 5px 0;\r\n  font-size: 16px;\r\n}\r\n@-webkit-keyframes spin {\r\n  from {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes spin {\r\n  from {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/bottle/bottle.component.html":
/*!**********************************************!*\
  !*** ./src/app/bottle/bottle.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"{{color}} content\">\n  <div class=\"progress\">\n    <div class=\"inner\">\n      <div class=\"percent label\"><span>{{label}}</span></div>\n      <div class=\"percent\"><span>{{value}}</span>%</div>\n      <div class=\"water\" [ngStyle]=\"{'top':(100-value)+'%'}\" ></div>\n      <div class=\"glare\"></div>\n      <div class=\"glare glare2\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/bottle/bottle.component.ts":
/*!********************************************!*\
  !*** ./src/app/bottle/bottle.component.ts ***!
  \********************************************/
/*! exports provided: BottleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottleComponent", function() { return BottleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BottleComponent = /** @class */ (function () {
    function BottleComponent() {
        this.color = 'green';
        this.pRadioChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onModelChange = function () { };
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
    }
    BottleComponent_1 = BottleComponent;
    BottleComponent.prototype.writeValue = function (value) {
        if (value !== this.value) {
            this.value = value;
        }
    };
    BottleComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    BottleComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    BottleComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BottleComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BottleComponent.prototype, "color", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], BottleComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('rb'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BottleComponent.prototype, "inputViewChild", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BottleComponent.prototype, "pRadioChange", void 0);
    BottleComponent = BottleComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bottle',
            template: __webpack_require__(/*! ./bottle.component.html */ "./src/app/bottle/bottle.component.html"),
            styles: [__webpack_require__(/*! ./bottle.component.css */ "./src/app/bottle/bottle.component.css")],
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return BottleComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], BottleComponent);
    return BottleComponent;
    var BottleComponent_1;
}());



/***/ }),

/***/ "./src/app/bottle/bottle.ts":
/*!**********************************!*\
  !*** ./src/app/bottle/bottle.ts ***!
  \**********************************/
/*! exports provided: Bottle, Color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bottle", function() { return Bottle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
var Bottle = /** @class */ (function () {
    function Bottle() {
        this._value = 0;
    }
    Object.defineProperty(Bottle.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bottle.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (value) {
            this._label = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bottle.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    return Bottle;
}());

var Color;
(function (Color) {
    Color["green"] = "green";
    Color["orange"] = "orange";
    Color["red"] = "red";
})(Color || (Color = {}));


/***/ }),

/***/ "./src/app/chart/chart.component.css":
/*!*******************************************!*\
  !*** ./src/app/chart/chart.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/chart/chart.component.html":
/*!********************************************!*\
  !*** ./src/app/chart/chart.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-accent-info\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">最近50天酱料食用量(ml)</h4>\n    <div class=\"mt-4\">\n        <div echarts [options]=\"options\" class=\"demo-chart\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/chart/chart.component.ts":
/*!******************************************!*\
  !*** ./src/app/chart/chart.component.ts ***!
  \******************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChartComponent = /** @class */ (function () {
    function ChartComponent() {
    }
    ChartComponent.prototype.ngOnInit = function () {
        var xAxisData = [];
        var data1 = [];
        var data2 = [];
        for (var i = 50; i < 100; i++) {
            var day = new Date();
            day.setDate(day.getDate() - (100 - i));
            xAxisData.push(day.getMonth() + '-' + day.getDate());
            data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
            data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
        }
        this.options = {
            legend: {
                data: ['酱油', '醋'],
                align: 'left'
            },
            tooltip: {},
            xAxis: {
                data: xAxisData,
                silent: false,
                splitLine: {
                    show: false
                }
            },
            yAxis: {},
            series: [{
                    name: '醋',
                    type: 'bar',
                    data: data1,
                    animationDelay: function (idx) {
                        return idx * 10;
                    }
                }, {
                    name: '酱油',
                    type: 'bar',
                    data: data2,
                    animationDelay: function (idx) {
                        return idx * 10 + 100;
                    }
                }],
            animationEasing: 'elasticOut',
            animationDelayUpdate: function (idx) {
                return idx * 5;
            }
        };
    };
    ChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chart',
            template: __webpack_require__(/*! ./chart.component.html */ "./src/app/chart/chart.component.html"),
            styles: [__webpack_require__(/*! ./chart.component.css */ "./src/app/chart/chart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChartComponent);
    return ChartComponent;
}());



/***/ }),

/***/ "./src/app/config/config.component.css":
/*!*********************************************!*\
  !*** ./src/app/config/config.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/config/config.component.html":
/*!**********************************************!*\
  !*** ./src/app/config/config.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  config works!\n</p>\n"

/***/ }),

/***/ "./src/app/config/config.component.ts":
/*!********************************************!*\
  !*** ./src/app/config/config.component.ts ***!
  \********************************************/
/*! exports provided: ConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigComponent", function() { return ConfigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfigComponent = /** @class */ (function () {
    function ConfigComponent() {
    }
    ConfigComponent.prototype.ngOnInit = function () {
    };
    ConfigComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-config',
            template: __webpack_require__(/*! ./config.component.html */ "./src/app/config/config.component.html"),
            styles: [__webpack_require__(/*! ./config.component.css */ "./src/app/config/config.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfigComponent);
    return ConfigComponent;
}());



/***/ }),

/***/ "./src/app/device/device.component.css":
/*!*********************************************!*\
  !*** ./src/app/device/device.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/device/device.component.html":
/*!**********************************************!*\
  !*** ./src/app/device/device.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  device works!\n</p>\n"

/***/ }),

/***/ "./src/app/device/device.component.ts":
/*!********************************************!*\
  !*** ./src/app/device/device.component.ts ***!
  \********************************************/
/*! exports provided: DeviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceComponent", function() { return DeviceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DeviceComponent = /** @class */ (function () {
    function DeviceComponent() {
    }
    DeviceComponent.prototype.ngOnInit = function () {
    };
    DeviceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-device',
            template: __webpack_require__(/*! ./device.component.html */ "./src/app/device/device.component.html"),
            styles: [__webpack_require__(/*! ./device.component.css */ "./src/app/device/device.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DeviceComponent);
    return DeviceComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg{\r\n  position: absolute;\r\n  top:0;\r\n  left:0;\r\n  height:100%;\r\n  width: 100%;\r\n  border: solid 1px;\r\n  z-index: -1;\r\n  background-image: url('sauceX-bg.jpg');\r\n  background-size:100% 100%;\r\n}\r\n.main-page{\r\n  background-color: rgba(255,255,255,0.4);\r\n}\r\nons-page.page--material__background.page__background{\r\n  background-color: rgba(255,255,255,0);\r\n}\r\n.bottle-grid{\r\n\r\n  margin: 0; /* 与外界元素的距离为0 */\r\n  width: 100%; /* 宽度根据元素内容调整 */\r\n  padding: 0; /* 与内部元素的距离为0 */\r\n}\r\n.bottle-grid ul{\r\n  width: 100%;\r\n  padding: 30px 0 0 0;\r\n  list-style:none; /* 去掉ul前面的符号 */\r\n}\r\n.bottle-grid li{\r\n  float:left; /* 向左漂移，将竖排变为横排 */\r\n  width: 49%;\r\n  padding-top:50%;\r\n  text-align: center;\r\n  position: relative;\r\n}\r\n.bottle-grid li app-bottle{\r\n  position: absolute;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg\"></div>\n<ons-page [transparent]=\"true\" style=\"opacity: 0.8;\" class=\"main-page\">\n  <ons-toolbar>\n    <div class=\"center\">酱料罐信息</div>\n  </ons-toolbar>\n  <ons-list >\n    <ons-list-title>更新于 {{now|date:'yyyy-MM-dd hh:mm:ss'}}</ons-list-title>\n    <ons-list-item>\n      <div class=\"bottle-grid\">\n        <ul>\n          <li *ngFor=\"let bottle of bottles; let i = index\"><app-bottle [value]=\"bottle.value\" [color]=\"bottle.color\" [label]=\"bottle.label\"></app-bottle></li>\n        </ul>\n      </div>\n    </ons-list-item>\n  </ons-list>\n</ons-page>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bottle_bottle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bottle/bottle */ "./src/app/bottle/bottle.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.now = new Date();
        this.bottles = [
            { 'label': '酱油', 'color': _bottle_bottle__WEBPACK_IMPORTED_MODULE_1__["Color"].orange, 'value': 22 },
            { 'label': '醋', 'color': _bottle_bottle__WEBPACK_IMPORTED_MODULE_1__["Color"].green, 'value': 55 },
            { 'label': '料酒', 'color': _bottle_bottle__WEBPACK_IMPORTED_MODULE_1__["Color"].red, 'value': 75 },
            { 'label': '香油', 'color': _bottle_bottle__WEBPACK_IMPORTED_MODULE_1__["Color"].orange, 'value': 92 }
        ];
        // const bottle: Bottle = new Bottle();
        // bottle.value = 22;
        // bottle.color = Color.green;
        // bottle.label = '酱油';
        // const bottle2: Bottle = new Bottle();
        // bottle2.value = 88;
        // bottle2.color = Color.red;
        // bottle2.label = '醋';
        // this.bottles.push(bottle);
        // this.bottles.push(bottle2);
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.css":
/*!*************************************************!*\
  !*** ./src/app/settings/settings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-bar{\r\n  background-color: black;\r\n  text-align: center;\r\n  height: 24px;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  color: #ffffff;\r\n}\r\n.list-item__thumbnail {\r\n  width: 80px;\r\n  height: 80px;\r\n  margin: 10px;\r\n}\r\n.icon-grid{\r\n\r\n  margin: 0; /* 与外界元素的距离为0 */\r\n  width: 100%; /* 宽度根据元素内容调整 */\r\n  padding: 0; /* 与内部元素的距离为0 */\r\n}\r\n.icon-grid ul{\r\n  padding: 30px 0 0 0;\r\n  list-style:none; /* 去掉ul前面的符号 */\r\n}\r\n.icon-grid li{\r\n  float:left; /* 向左漂移，将竖排变为横排 */\r\n  width: 33%;\r\n  height: 120px;\r\n  text-align: center;\r\n}\r\n.icon-grid ons-icon{\r\n  border: 2px solid;\r\n  width: 50px;\r\n  height: 50px;\r\n  font-size: 30px;\r\n  line-height: 50px;\r\n  border-radius: 50%;\r\n}\r\n.icon-grid span{\r\n  font-size: 14px;\r\n  line-height: 30px;\r\n}\r\n.ib1{\r\n  border-color: deepskyblue;\r\n  color: deepskyblue;\r\n}\r\n.ib2{\r\n  border-color: forestgreen;\r\n  color: forestgreen;\r\n}\r\n.ib3{\r\n  border-color: darkkhaki;\r\n  color: darkkhaki;\r\n}\r\n.ib4{\r\n  border-color: darkslateblue;\r\n  color: darkslateblue;\r\n}\r\n.ib5{\r\n  border-color: crimson;\r\n  color: crimson;\r\n}\r\n.ib6{\r\n  border-color: dodgerblue;\r\n  color: dodgerblue;\r\n}\r\n.ib7{\r\n  border-color: sienna;\r\n  color: deepskyblue;\r\n}\r\n.ib8{\r\n  border-color: darkgreen;\r\n  color: darkgreen;\r\n}\r\n.ib9{\r\n  border-color: sienna;\r\n  color: sienna;\r\n}\r\n.bottom-bar{\r\n  text-align: center;\r\n  height: 24px;\r\n  font-size: 12px;\r\n  line-height: 24px;\r\n  color: #aaaaaa;\r\n}\r\n"

/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ons-page>\n  <ons-toolbar>\n    <div class=\"center\">我的设置</div>\n  </ons-toolbar>\n  <div class=\"content\">\n    <ons-list>\n      <ons-list-item style=\"background-color: #fafafa\">\n        <div class=\"left\">\n          <img class=\"list-item__thumbnail\" src=\"https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83erw4M6eiclcUhVahyQWV5pwe1O7HntiaR8Ilu4ibbb6Y0ymTU08c0icIJP1N2s1tkw9gamRHYUueWpqoQ/132\">\n        </div>\n        <br>\n        <div class=\"center\" style=\"background-size: 100% 0px;\">\n          <span class=\"list-item__title\" style=\"margin: 10px;\">吃货大佬  <ons-fab modifier=\"mini\"><ons-icon icon=\"fa-list\"></ons-icon></ons-fab></span>\n          <span class=\"list-item__subtitle\" style=\"margin: 10px;\"><ons-icon icon=\"fa-mobile\" size=\"24px\"></ons-icon> 手机号码: 188-8888-8888</span>\n        </div>\n      </ons-list-item>\n      <ons-list-item class=\"icon-grid\">\n        <ul>\n          <li><ons-icon class=\"ib1\" icon=\"fa-user\"></ons-icon><br><span>账号</span></li>\n          <li><ons-icon class=\"ib2\" icon=\"fa-cloud\"></ons-icon><br><span>云服务</span></li>\n          <li><ons-icon class=\"ib3\" icon=\"fa-comment\"></ons-icon><br><span>消息</span></li>\n          <li><ons-icon class=\"ib4\" icon=\"fa-info\"></ons-icon><br><span>关于</span></li>\n          <li><ons-icon class=\"ib5\" icon=\"question\"></ons-icon><br><span>帮助</span></li>\n          <li><ons-icon class=\"ib6\" icon=\"fa-cog\"></ons-icon><br><span>设置</span></li>\n          <li><ons-icon class=\"ib7\" icon=\"fa-headphones\"></ons-icon><br><span>客服</span></li>\n          <li><ons-icon class=\"ib8\" icon=\"fa-thumbs-up\"></ons-icon><br><span>推荐</span></li>\n          <li><ons-icon class=\"ib9\" icon=\"fa-sign-out\"></ons-icon><br><span>退出</span></li>\n        </ul>\n      </ons-list-item>\n    </ons-list>\n    <ons-bottom-toolbar class=\"bottom-bar\">\n      智能调料盒云服务 v0.0.1\n    </ons-bottom-toolbar>\n  </div>\n</ons-page>\n"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/statistics/statistics.component.css":
/*!*****************************************************!*\
  !*** ./src/app/statistics/statistics.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/statistics/statistics.component.html":
/*!******************************************************!*\
  !*** ./src/app/statistics/statistics.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ons-page>\n  <ons-toolbar>\n    <div class=\"center\">酱料食用统计</div>\n  </ons-toolbar>\n  <app-chart></app-chart>\n</ons-page>\n"

/***/ }),

/***/ "./src/app/statistics/statistics.component.ts":
/*!****************************************************!*\
  !*** ./src/app/statistics/statistics.component.ts ***!
  \****************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatisticsComponent = /** @class */ (function () {
    function StatisticsComponent() {
    }
    StatisticsComponent.prototype.ngOnInit = function () {
    };
    StatisticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-statistics',
            template: __webpack_require__(/*! ./statistics.component.html */ "./src/app/statistics/statistics.component.html"),
            styles: [__webpack_require__(/*! ./statistics.component.css */ "./src/app/statistics/statistics.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StatisticsComponent);
    return StatisticsComponent;
}());



/***/ }),

/***/ "./src/app/tabbar/tabbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/tabbar/tabbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-tabbar {\r\n  position: absolute;\r\n  top:0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n.tabbar {\r\n  text-align: center;\r\n  position: absolute;\r\n  left:0;\r\n  right: 0;\r\n  bottom: 0;\r\n  height: 49px;\r\n}\r\n.tabbar--material a.active {\r\n  /*background-color: #26a69a;*/\r\n}\r\n.tabbar:not(.tab-bar--material) a.active {\r\n  color: royalblue;\r\n}\r\nmain {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 50px;\r\n  left: 0;\r\n  right: 0;\r\n  overflow: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/tabbar/tabbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/tabbar/tabbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"tabbar\" [class.tabbar--material]=\"material\">\n  <label class=\"tabbar__item\" [class.tabbar--material__item]=\"material\" *ngFor=\"let tab of tabs; let i = index\">\n    <!-- <input type=\"radio\" label=\"tabbar\" [checked]=\"tab === selectedTab\"> -->\n    <a class=\"tabbar__button\" [class.tabbar--material__button]=\"material\" [routerLink]=\"[tab.path]\" routerLinkActive='active'>\n      <ons-icon class=\"ons-icon fa {{tab.icon}}\" size=\"24px\"></ons-icon><br>\n\n    </a>\n  </label>\n</nav>\n\n<main>\n  <router-outlet></router-outlet>\n</main>\n"

/***/ }),

/***/ "./src/app/tabbar/tabbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/tabbar/tabbar.component.ts ***!
  \********************************************/
/*! exports provided: TabbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabbarComponent", function() { return TabbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_onsenui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-onsenui */ "./node_modules/ngx-onsenui/ngx-onsenui.js");
/* harmony import */ var _device_device_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../device/device.component */ "./src/app/device/device.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabbarComponent = /** @class */ (function () {
    function TabbarComponent() {
        this.device = _device_device_component__WEBPACK_IMPORTED_MODULE_2__["DeviceComponent"];
        this.tabs = [
            { path: 'home', label: 'Home', icon: 'fa-home', },
            { path: 'config', label: 'config', icon: 'fa-sliders', },
            { path: 'statistics', label: 'statistics', icon: 'fa-bar-chart', },
            { path: 'settings', label: 'settings', icon: 'fa-user-circle-o', },
        ];
        this.material = ngx_onsenui__WEBPACK_IMPORTED_MODULE_1__["onsPlatform"].isAndroid();
    }
    TabbarComponent.prototype.updateStyle = function (platform) {
        this.material = platform === 'ios';
    };
    TabbarComponent.prototype.ngOnInit = function () {
    };
    TabbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabbar',
            template: __webpack_require__(/*! ./tabbar.component.html */ "./src/app/tabbar/tabbar.component.html"),
            styles: [__webpack_require__(/*! ./tabbar.component.css */ "./src/app/tabbar/tabbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TabbarComponent);
    return TabbarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\github\SauceX\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map