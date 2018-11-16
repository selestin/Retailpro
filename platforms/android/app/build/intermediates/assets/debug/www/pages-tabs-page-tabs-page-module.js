(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-page-tabs-page-module"],{

/***/ "./src/app/pages/about-popover/about-popover.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/about-popover/about-popover.ts ***!
  \******************************************************/
/*! exports provided: PopoverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverPage", function() { return PopoverPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopoverPage = /** @class */ (function () {
    function PopoverPage(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
    }
    PopoverPage.prototype.support = function () {
        // this.app.getRootNavs()[0].push('/support');
        this.popoverCtrl.dismiss();
    };
    PopoverPage.prototype.close = function (url) {
        window.open(url, '_blank');
        this.popoverCtrl.dismiss();
    };
    PopoverPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n    <ion-list>\n      <ion-item button (click)=\"close('https://ionicframework.com/docs/v2/getting-started')\">\n        <ion-label>Learn Ionic</ion-label>\n      </ion-item>\n      <ion-item button (click)=\"close('https://ionicframework.com/docs/v2')\">\n        <ion-label>Documentation</ion-label>\n      </ion-item>\n      <ion-item button (click)=\"close('https://showcase.ionicframework.com')\">\n        <ion-label>Showcase</ion-label>\n      </ion-item>\n      <ion-item button (click)=\"close('https://github.com/ionic-team/ionic')\">\n        <ion-label>GitHub Repo</ion-label>\n      </ion-item>\n      <ion-item button (click)=\"support()\">\n        <ion-label>Support</ion-label>\n      </ion-item>\n    </ion-list>\n  "
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"]])
    ], PopoverPage);
    return PopoverPage;
}());



/***/ }),

/***/ "./src/app/pages/about/about-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/about/about-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AboutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageRoutingModule", function() { return AboutPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/app/pages/about/about.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _about__WEBPACK_IMPORTED_MODULE_2__["AboutPage"]
    }
];
var AboutPageRoutingModule = /** @class */ (function () {
    function AboutPageRoutingModule() {
    }
    AboutPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AboutPageRoutingModule);
    return AboutPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/about/about.html":
/*!****************************************!*\
  !*** ./src/app/pages/about/about.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>About</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"presentPopover($event)\">\n        <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"about-header\">\n    <img src=\"assets/img/ionic-logo-white.svg\" alt=\"ionic logo\">\n  </div>\n  <div padding class=\"about-info\">\n    <h4>Ionic Conference</h4>\n\n    <ion-list lines=\"none\">\n      <ion-item>\n        <ion-icon name=\"calendar\" slot=\"start\"></ion-icon>\n        <ion-label>Date</ion-label>\n        <ion-datetime displayFormat=\"MMM DD, YYYY\" max=\"2056\" [(ngModel)]=\"conferenceDate\"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n        <ion-label>Location</ion-label>\n        <ion-select>\n          <ion-select-option value=\"madison\" selected>Madison, WI</ion-select-option>\n          <ion-select-option value=\"austin\">Austin, TX</ion-select-option>\n          <ion-select-option value=\"chicago\">Chicago, IL</ion-select-option>\n          <ion-select-option value=\"seattle\">Seattle, WA</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n    <p>\n      The Ionic Conference is a one-day conference featuring talks from the Ionic team. It is focused on Ionic applications being\n      built with Ionic 2. This includes migrating apps from Ionic 1 to Ionic 2, Angular concepts, Webpack, Sass, and many\n      other technologies used in Ionic 2. Tickets are completely sold out, and we’re expecting more than 1000 developers\n      – making this the largest Ionic conference ever!\n    </p>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/about/about.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about */ "./src/app/pages/about/about.ts");
/* harmony import */ var _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../about-popover/about-popover */ "./src/app/pages/about-popover/about-popover.ts");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about-routing.module */ "./src/app/pages/about/about-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _about_routing_module__WEBPACK_IMPORTED_MODULE_6__["AboutPageRoutingModule"]
            ],
            declarations: [_about__WEBPACK_IMPORTED_MODULE_4__["AboutPage"], _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_5__["PopoverPage"]],
            entryComponents: [_about_popover_about_popover__WEBPACK_IMPORTED_MODULE_5__["PopoverPage"]],
            bootstrap: [_about__WEBPACK_IMPORTED_MODULE_4__["AboutPage"]],
        })
    ], AboutModule);
    return AboutModule;
}());



/***/ }),

/***/ "./src/app/pages/about/about.scss":
/*!****************************************!*\
  !*** ./src/app/pages/about/about.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-header {\n  background-color: var(--ion-color-dark);\n  padding: 16px;\n  width: 100%;\n  text-align: center; }\n\n.about-header img {\n  max-width: 200px;\n  padding: 25px 5px 20px 0; }\n\n.about-info p {\n  color: var(--ion-color-medium);\n  text-align: left; }\n\n.about-info ion-icon {\n  color: var(--ion-color-primary); }\n\n.ios .about-info {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/pages/about/about.ts":
/*!**************************************!*\
  !*** ./src/app/pages/about/about.ts ***!
  \**************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../about-popover/about-popover */ "./src/app/pages/about-popover/about-popover.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var AboutPage = /** @class */ (function () {
    function AboutPage(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
        this.conferenceDate = '2047-05-17';
    }
    AboutPage.prototype.presentPopover = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var popover;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverCtrl.create({
                            component: _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_2__["PopoverPage"],
                            event: event
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AboutPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'page-about',
            template: __webpack_require__(/*! ./about.html */ "./src/app/pages/about/about.html"),
            styles: [__webpack_require__(/*! ./about.scss */ "./src/app/pages/about/about.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"]])
    ], AboutPage);
    return AboutPage;
}());



/***/ }),

/***/ "./src/app/pages/map/map-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/map/map-routing.module.ts ***!
  \*************************************************/
/*! exports provided: MapPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageRoutingModule", function() { return MapPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map */ "./src/app/pages/map/map.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _map__WEBPACK_IMPORTED_MODULE_2__["MapPage"]
    }
];
var MapPageRoutingModule = /** @class */ (function () {
    function MapPageRoutingModule() {
    }
    MapPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MapPageRoutingModule);
    return MapPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/map/map.html":
/*!************************************!*\
  !*** ./src/app/pages/map/map.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Map</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div #mapCanvas class=\"map-canvas\"></div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/map/map.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/map/map.module.ts ***!
  \*****************************************/
/*! exports provided: MapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapModule", function() { return MapModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map */ "./src/app/pages/map/map.ts");
/* harmony import */ var _map_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map-routing.module */ "./src/app/pages/map/map-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MapModule = /** @class */ (function () {
    function MapModule() {
    }
    MapModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _map_routing_module__WEBPACK_IMPORTED_MODULE_4__["MapPageRoutingModule"]
            ],
            declarations: [
                _map__WEBPACK_IMPORTED_MODULE_3__["MapPage"],
            ]
        })
    ], MapModule);
    return MapModule;
}());



/***/ }),

/***/ "./src/app/pages/map/map.scss":
/*!************************************!*\
  !*** ./src/app/pages/map/map.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "page-map .map-canvas {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: transparent;\n  opacity: 0;\n  transition: opacity 150ms ease-in; }\n\npage-map .show-map {\n  opacity: 1; }\n"

/***/ }),

/***/ "./src/app/pages/map/map.ts":
/*!**********************************!*\
  !*** ./src/app/pages/map/map.ts ***!
  \**********************************/
/*! exports provided: MapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPage", function() { return MapPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_conference_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/conference-data */ "./src/app/providers/conference-data.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapPage = /** @class */ (function () {
    function MapPage(confData, platform) {
        this.confData = confData;
        this.platform = platform;
    }
    MapPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.confData.getMap().subscribe(function (mapData) {
            var mapEle = _this.mapElement.nativeElement;
            var map = new google.maps.Map(mapEle, {
                center: mapData.find(function (d) { return d.center; }),
                zoom: 16
            });
            mapData.forEach(function (markerData) {
                var infoWindow = new google.maps.InfoWindow({
                    content: "<h5>" + markerData.name + "</h5>"
                });
                var marker = new google.maps.Marker({
                    position: markerData,
                    map: map,
                    title: markerData.name
                });
                marker.addListener('click', function () {
                    infoWindow.open(map, marker);
                });
            });
            google.maps.event.addListenerOnce(map, 'idle', function () {
                mapEle.classList.add('show-map');
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mapCanvas'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MapPage.prototype, "mapElement", void 0);
    MapPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'page-map',
            template: __webpack_require__(/*! ./map.html */ "./src/app/pages/map/map.html"),
            styles: [__webpack_require__(/*! ./map.scss */ "./src/app/pages/map/map.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_providers_conference_data__WEBPACK_IMPORTED_MODULE_1__["ConferenceData"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], MapPage);
    return MapPage;
}());



/***/ }),

/***/ "./src/app/pages/schedule-filter/schedule-filter.html":
/*!************************************************************!*\
  !*** ./src/app/pages/schedule-filter/schedule-filter.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">Cancel</ion-button>\n    </ion-buttons>\n\n    <ion-title>\n      Filter Sessions\n    </ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"applyFilters()\" strong>Done</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"outer-content\">\n\n  <ion-list>\n    <ion-list-header>Tracks</ion-list-header>\n\n    <ion-item *ngFor=\"let track of tracks\" [attr.track]=\"track.name | lowercase\">\n      <span slot=\"start\" class=\"dot\"></span>\n      <ion-label>{{track.name}}</ion-label>\n      <ion-toggle [(ngModel)]=\"track.isChecked\" color=\"success\"></ion-toggle>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n    <ion-item (click)=\"resetFilters()\" detail=\"false\" class=\"reset-filters\">\n      Reset All Filters\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/schedule-filter/schedule-filter.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/schedule-filter/schedule-filter.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "page-schedule ion-item-sliding[track=ionic] ion-label {\n  border-left: 2px solid var(--ion-color-primary);\n  padding-left: 10px; }\n\npage-schedule ion-item-sliding[track=angular] ion-label {\n  border-left: 2px solid #ac282b;\n  padding-left: 10px; }\n\npage-schedule ion-item-sliding[track=communication] ion-label {\n  border-left: 2px solid #8e8d93;\n  padding-left: 10px; }\n\npage-schedule ion-item-sliding[track=tooling] ion-label {\n  border-left: 2px solid #fe4c52;\n  padding-left: 10px; }\n\npage-schedule ion-item-sliding[track=services] ion-label {\n  border-left: 2px solid #fd8b2d;\n  padding-left: 10px; }\n\npage-schedule ion-item-sliding[track=design] ion-label {\n  border-left: 2px solid #fed035;\n  padding-left: 10px; }\n\npage-schedule ion-item-sliding[track=workshop] ion-label {\n  border-left: 2px solid #69bb7b;\n  padding-left: 10px; }\n\npage-schedule ion-item-sliding[track=food] ion-label {\n  border-left: 2px solid #3bc7c4;\n  padding-left: 10px; }\n\npage-schedule ion-item-sliding[track=documentation] ion-label {\n  border-left: 2px solid #b16be3;\n  padding-left: 10px; }\n\npage-schedule ion-item-sliding[track=navigation] ion-label {\n  border-left: 2px solid #6600cc;\n  padding-left: 10px; }\n\npage-schedule-filter .reset-filters {\n  color: var(--ion-color-danger); }\n\npage-schedule-filter ion-item[track=ionic] .dot {\n  display: inline-block;\n  height: 10px;\n  width: 10px;\n  background-color: var(--ion-color-primary);\n  border-radius: 5px;\n  margin-right: 10px; }\n\npage-schedule-filter ion-item[track=angular] .dot {\n  display: inline-block;\n  height: 10px;\n  width: 10px;\n  background-color: #ac282b;\n  border-radius: 5px;\n  margin-right: 10px; }\n\npage-schedule-filter ion-item[track=communication] .dot {\n  display: inline-block;\n  height: 10px;\n  width: 10px;\n  background-color: #8e8d93;\n  border-radius: 5px;\n  margin-right: 10px; }\n\npage-schedule-filter ion-item[track=tooling] .dot {\n  display: inline-block;\n  height: 10px;\n  width: 10px;\n  background-color: #fe4c52;\n  border-radius: 5px;\n  margin-right: 10px; }\n\npage-schedule-filter ion-item[track=services] .dot {\n  display: inline-block;\n  height: 10px;\n  width: 10px;\n  background-color: #fd8b2d;\n  border-radius: 5px;\n  margin-right: 10px; }\n\npage-schedule-filter ion-item[track=design] .dot {\n  display: inline-block;\n  height: 10px;\n  width: 10px;\n  background-color: #fed035;\n  border-radius: 5px;\n  margin-right: 10px; }\n\npage-schedule-filter ion-item[track=workshop] .dot {\n  display: inline-block;\n  height: 10px;\n  width: 10px;\n  background-color: #69bb7b;\n  border-radius: 5px;\n  margin-right: 10px; }\n\npage-schedule-filter ion-item[track=food] .dot {\n  display: inline-block;\n  height: 10px;\n  width: 10px;\n  background-color: #3bc7c4;\n  border-radius: 5px;\n  margin-right: 10px; }\n\npage-schedule-filter ion-item[track=documentation] .dot {\n  display: inline-block;\n  height: 10px;\n  width: 10px;\n  background-color: #b16be3;\n  border-radius: 5px;\n  margin-right: 10px; }\n\npage-schedule-filter ion-item[track=navigation] .dot {\n  display: inline-block;\n  height: 10px;\n  width: 10px;\n  background-color: #6600cc;\n  border-radius: 5px;\n  margin-right: 10px; }\n"

/***/ }),

/***/ "./src/app/pages/schedule-filter/schedule-filter.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/schedule-filter/schedule-filter.ts ***!
  \**********************************************************/
/*! exports provided: ScheduleFilterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleFilterPage", function() { return ScheduleFilterPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/conference-data */ "./src/app/providers/conference-data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScheduleFilterPage = /** @class */ (function () {
    function ScheduleFilterPage(confData, modalCtrl) {
        this.confData = confData;
        this.modalCtrl = modalCtrl;
        this.tracks = [];
    }
    // TODO use the ionViewDidEnter event
    ScheduleFilterPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        // passed in array of track names that should be excluded (unchecked)
        var excludedTrackNames = []; // this.navParams.data.excludedTracks;
        this.confData.getTracks().subscribe(function (trackNames) {
            trackNames.forEach(function (trackName) {
                _this.tracks.push({
                    name: trackName,
                    isChecked: (excludedTrackNames.indexOf(trackName) === -1)
                });
            });
        });
    };
    ScheduleFilterPage.prototype.resetFilters = function () {
        // reset all of the toggles to be checked
        this.tracks.forEach(function (track) {
            track.isChecked = true;
        });
    };
    ScheduleFilterPage.prototype.applyFilters = function () {
        // Pass back a new array of track names to exclude
        var excludedTrackNames = this.tracks.filter(function (c) { return !c.isChecked; }).map(function (c) { return c.name; });
        this.dismiss(excludedTrackNames);
    };
    ScheduleFilterPage.prototype.dismiss = function (data) {
        // using the injected ModalController this page
        // can "dismiss" itself and pass back data
        this.modalCtrl.dismiss(data);
    };
    ScheduleFilterPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'page-schedule-filter',
            template: __webpack_require__(/*! ./schedule-filter.html */ "./src/app/pages/schedule-filter/schedule-filter.html"),
            styles: [__webpack_require__(/*! ./schedule-filter.scss */ "./src/app/pages/schedule-filter/schedule-filter.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_providers_conference_data__WEBPACK_IMPORTED_MODULE_2__["ConferenceData"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], ScheduleFilterPage);
    return ScheduleFilterPage;
}());



/***/ }),

/***/ "./src/app/pages/schedule/schedule-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/schedule/schedule-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SchedulePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulePageRoutingModule", function() { return SchedulePageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule */ "./src/app/pages/schedule/schedule.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _schedule__WEBPACK_IMPORTED_MODULE_2__["SchedulePage"]
    }
];
var SchedulePageRoutingModule = /** @class */ (function () {
    function SchedulePageRoutingModule() {
    }
    SchedulePageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SchedulePageRoutingModule);
    return SchedulePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/schedule/schedule.html":
/*!**********************************************!*\
  !*** ./src/app/pages/schedule/schedule.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n\n    <ion-segment [(ngModel)]=\"segment\" (ionChange)=\"updateSchedule()\">\n      <ion-segment-button value=\"all\">\n        All\n      </ion-segment-button>\n      <ion-segment-button value=\"favorites\">\n        Favorites\n      </ion-segment-button>\n    </ion-segment>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"presentFilter()\">\n        <ion-icon slot=\"icon-only\" name=\"options\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-toolbar>\n    <ion-searchbar [(ngModel)]=\"queryText\" (ionChange)=\"updateSchedule()\" placeholder=\"Search\">\n    </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list #scheduleList [hidden]=\"shownSessions === 0\">\n    <ion-item-group *ngFor=\"let group of groups\" [hidden]=\"group.hide\">\n      <ion-item-divider sticky>\n        <ion-label>\n          {{group.time}}\n        </ion-label>\n      </ion-item-divider>\n\n      <ion-item-sliding *ngFor=\"let session of group.sessions\" #slidingItem [attr.track]=\"session.tracks[0] | lowercase\" [hidden]=\"session.hide\">\n        <ion-item button (click)=\"goToSessionDetail(session)\">\n          <ion-label>\n            <h3>{{session.name}}</h3>\n            <p>\n              {{session.timeStart}} &mdash; {{session.timeEnd}}: {{session.location}}\n            </p>\n          </ion-label>\n        </ion-item>\n        <ion-item-options>\n          <ion-item-option color=\"favorite\" (click)=\"addFavorite(slidingItem, session)\" *ngIf=\"segment === 'all'\">\n            Favorite\n          </ion-item-option>\n          <ion-item-option color=\"danger\" (click)=\"removeFavorite(slidingItem, session, 'Remove Favorite')\" *ngIf=\"segment === 'favorites'\">\n            Remove\n          </ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-item-group>\n  </ion-list>\n\n  <ion-list-header [hidden]=\"shownSessions > 0\">\n    No Sessions Found\n  </ion-list-header>\n\n  <ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\" #fab>\n    <ion-fab-button><ion-icon name=\"share\"></ion-icon></ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button color=\"vimeo\" (click)=\"openSocial('Vimeo', fab)\">\n        <ion-icon name=\"logo-vimeo\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"google\" (click)=\"openSocial('Google+', fab)\">\n        <ion-icon name=\"logo-googleplus\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"twitter\" (click)=\"openSocial('Twitter', fab)\">\n        <ion-icon name=\"logo-twitter\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"facebook\" (click)=\"openSocial('Facebook', fab)\">\n        <ion-icon name=\"logo-facebook\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/schedule/schedule.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/schedule/schedule.module.ts ***!
  \***************************************************/
/*! exports provided: ScheduleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleModule", function() { return ScheduleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schedule */ "./src/app/pages/schedule/schedule.ts");
/* harmony import */ var _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../schedule-filter/schedule-filter */ "./src/app/pages/schedule-filter/schedule-filter.ts");
/* harmony import */ var _schedule_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./schedule-routing.module */ "./src/app/pages/schedule/schedule-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ScheduleModule = /** @class */ (function () {
    function ScheduleModule() {
    }
    ScheduleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _schedule_routing_module__WEBPACK_IMPORTED_MODULE_6__["SchedulePageRoutingModule"]
            ],
            declarations: [
                _schedule__WEBPACK_IMPORTED_MODULE_4__["SchedulePage"],
                _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_5__["ScheduleFilterPage"]
            ],
            entryComponents: [
                _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_5__["ScheduleFilterPage"]
            ]
        })
    ], ScheduleModule);
    return ScheduleModule;
}());



/***/ }),

/***/ "./src/app/pages/schedule/schedule.scss":
/*!**********************************************!*\
  !*** ./src/app/pages/schedule/schedule.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "page-schedule ion-item-sliding[track=ionic] ion-label {\n  border-left: 2px solid var(--ion-color-primary);\n  padding-left: 10px; }\n\npage-schedule ion-item-sliding[track=angular] ion-label {\n  border-left: 2px solid #ac282b;\n  padding-left: 10px; }\n\npage-schedule ion-item-sliding[track=communication] ion-label {\n  border-left: 2px solid #8e8d93;\n  padding-left: 10px; }\n\npage-schedule ion-item-sliding[track=tooling] ion-label {\n  border-left: 2px solid #fe4c52;\n  padding-left: 10px; }\n\npage-schedule ion-item-sliding[track=services] ion-label {\n  border-left: 2px solid #fd8b2d;\n  padding-left: 10px; }\n\npage-schedule ion-item-sliding[track=design] ion-label {\n  border-left: 2px solid #fed035;\n  padding-left: 10px; }\n\npage-schedule ion-item-sliding[track=workshop] ion-label {\n  border-left: 2px solid #69bb7b;\n  padding-left: 10px; }\n\npage-schedule ion-item-sliding[track=food] ion-label {\n  border-left: 2px solid #3bc7c4;\n  padding-left: 10px; }\n\npage-schedule ion-item-sliding[track=documentation] ion-label {\n  border-left: 2px solid #b16be3;\n  padding-left: 10px; }\n\npage-schedule ion-item-sliding[track=navigation] ion-label {\n  border-left: 2px solid #6600cc;\n  padding-left: 10px; }\n"

/***/ }),

/***/ "./src/app/pages/schedule/schedule.ts":
/*!********************************************!*\
  !*** ./src/app/pages/schedule/schedule.ts ***!
  \********************************************/
/*! exports provided: SchedulePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulePage", function() { return SchedulePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../schedule-filter/schedule-filter */ "./src/app/pages/schedule-filter/schedule-filter.ts");
/* harmony import */ var _providers_conference_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/conference-data */ "./src/app/providers/conference-data.ts");
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/user-data */ "./src/app/providers/user-data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var SchedulePage = /** @class */ (function () {
    function SchedulePage(alertCtrl, confData, loadingCtrl, modalCtrl, router, toastCtrl, user) {
        this.alertCtrl = alertCtrl;
        this.confData = confData;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.user = user;
        this.dayIndex = 0;
        this.queryText = '';
        this.segment = 'all';
        this.excludeTracks = [];
        this.shownSessions = [];
        this.groups = [];
    }
    SchedulePage.prototype.ionViewWillEnter = function () {
        // this.app.setTitle('Schedule');
        this.updateSchedule();
    };
    SchedulePage.prototype.updateSchedule = function () {
        var _this = this;
        // Close any open sliding items when the schedule updates
        if (this.scheduleList) {
            this.scheduleList.closeSlidingItems();
        }
        this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe(function (data) {
            _this.shownSessions = data.shownSessions;
            _this.groups = data.groups;
        });
    };
    SchedulePage.prototype.presentFilter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_3__["ScheduleFilterPage"],
                            componentProps: { excludedTracks: this.excludeTracks }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onWillDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        if (data) {
                            this.excludeTracks = data;
                            this.updateSchedule();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SchedulePage.prototype.goToSessionDetail = function (sessionData) {
        // go to the session detail page
        // and pass in the session data
        this.router.navigateByUrl("app/tabs/(schedule:session/" + sessionData.id + ")");
    };
    SchedulePage.prototype.addFavorite = function (slidingItem, sessionData) {
        return __awaiter(this, void 0, void 0, function () {
            var alert_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.user.hasFavorite(sessionData.name)) return [3 /*break*/, 1];
                        // woops, they already favorited it! What shall we do!?
                        // prompt them to remove it
                        this.removeFavorite(slidingItem, sessionData, 'Favorite already added');
                        return [3 /*break*/, 4];
                    case 1:
                        // remember this session as a user favorite
                        this.user.addFavorite(sessionData.name);
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: 'Favorite Added',
                                buttons: [{
                                        text: 'OK',
                                        handler: function () {
                                            // close the sliding item
                                            slidingItem.close();
                                        }
                                    }]
                            })];
                    case 2:
                        alert_1 = _a.sent();
                        // now present the alert on top of all other content
                        return [4 /*yield*/, alert_1.present()];
                    case 3:
                        // now present the alert on top of all other content
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SchedulePage.prototype.removeFavorite = function (slidingItem, sessionData, title) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: title,
                            message: 'Would you like to remove this session from your favorites?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    handler: function () {
                                        // they clicked the cancel button, do not remove the session
                                        // close the sliding item and hide the option buttons
                                        slidingItem.close();
                                    }
                                },
                                {
                                    text: 'Remove',
                                    handler: function () {
                                        // they want to remove this session from their favorites
                                        _this.user.removeFavorite(sessionData.name);
                                        _this.updateSchedule();
                                        // close the sliding item and hide the option buttons
                                        slidingItem.close();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        // now present the alert on top of all other content
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        // now present the alert on top of all other content
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SchedulePage.prototype.openSocial = function (network, fab) {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: "Posting to " + network,
                            duration: (Math.random() * 1000) + 500
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, loading.onWillDismiss()];
                    case 3:
                        _a.sent();
                        fab.close();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scheduleList'),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["List"])
    ], SchedulePage.prototype, "scheduleList", void 0);
    SchedulePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'page-schedule',
            template: __webpack_require__(/*! ./schedule.html */ "./src/app/pages/schedule/schedule.html"),
            styles: [__webpack_require__(/*! ./schedule.scss */ "./src/app/pages/schedule/schedule.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _providers_conference_data__WEBPACK_IMPORTED_MODULE_4__["ConferenceData"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _providers_user_data__WEBPACK_IMPORTED_MODULE_5__["UserData"]])
    ], SchedulePage);
    return SchedulePage;
}());



/***/ }),

/***/ "./src/app/pages/session-detail/session-detail-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/session-detail/session-detail-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: SessionDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionDetailPageRoutingModule", function() { return SessionDetailPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _session_detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session-detail */ "./src/app/pages/session-detail/session-detail.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _session_detail__WEBPACK_IMPORTED_MODULE_2__["SessionDetailPage"]
    }
];
var SessionDetailPageRoutingModule = /** @class */ (function () {
    function SessionDetailPageRoutingModule() {
    }
    SessionDetailPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SessionDetailPageRoutingModule);
    return SessionDetailPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/session-detail/session-detail.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/session-detail/session-detail.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Schedule\" defaultHref=\"/app/tabs/(schedule:schedule)\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{session?.name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div padding *ngIf=\"session\">\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col size=\"6\">\n          <span *ngFor=\"let track of session?.tracks\" [class]=\"'session-track-'+track.toLowerCase()\">{{track}}</span>\n        </ion-col>\n        <ion-col size=\"6\" text-right [ngClass]=\"{'show-favorite': isFavorite}\">\n          <ion-icon name=\"heart-empty\" size=\"large\" class=\"icon-heart-empty\" (click)=\"toggleFavorite()\"></ion-icon>\n          <ion-icon name=\"heart\" color=\"danger\" size=\"large\" class=\"icon-heart\" (click)=\"toggleFavorite()\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <h1>{{session.name}}</h1>\n    <p>{{session.description}}</p>\n    <ion-text color=\"medium\">\n      {{session.timeStart}} &ndash; {{session.timeEnd}}\n      <br /> {{session.location}}\n    </ion-text>\n  </div>\n\n  <ion-list>\n    <ion-item (click)=\"sessionClick('watch')\" button>\n      <ion-label color=\"primary\">Watch</ion-label>\n    </ion-item>\n    <ion-item (click)=\"sessionClick('add to calendar')\" button>\n      <ion-label color=\"primary\">Add to Calendar</ion-label>\n    </ion-item>\n    <ion-item (click)=\"sessionClick('mark as unwatched')\" button>\n      <ion-label color=\"primary\">Mark as Unwatched</ion-label>\n    </ion-item>\n    <ion-item (click)=\"sessionClick('download video')\" button>\n      <ion-label color=\"primary\">Download Video</ion-label>\n      <ion-icon slot=\"end\" color=\"primary\" size=\"small\" name=\"cloud-download\"></ion-icon>\n    </ion-item>\n    <ion-item (click)=\"sessionClick('leave feedback')\" button>\n      <ion-label color=\"primary\">Leave Feedback</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/session-detail/session-detail.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/session-detail/session-detail.module.ts ***!
  \***************************************************************/
/*! exports provided: SessionDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionDetailModule", function() { return SessionDetailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _session_detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session-detail */ "./src/app/pages/session-detail/session-detail.ts");
/* harmony import */ var _session_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session-detail-routing.module */ "./src/app/pages/session-detail/session-detail-routing.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SessionDetailModule = /** @class */ (function () {
    function SessionDetailModule() {
    }
    SessionDetailModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _session_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__["SessionDetailPageRoutingModule"]
            ],
            declarations: [
                _session_detail__WEBPACK_IMPORTED_MODULE_2__["SessionDetailPage"],
            ]
        })
    ], SessionDetailModule);
    return SessionDetailModule;
}());



/***/ }),

/***/ "./src/app/pages/session-detail/session-detail.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/session-detail/session-detail.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .session-track-ionic {\n  color: var(--ion-color-primary); }\n\n:host .session-track-angular {\n  color: var(--ion-color-angular); }\n\n:host .session-track-communication {\n  color: var(--ion-color-communication); }\n\n:host .session-track-tooling {\n  color: var(--ion-color-tooling); }\n\n:host .session-track-services {\n  color: var(--ion-color-services); }\n\n:host .session-track-design {\n  color: var(--ion-color-design); }\n\n:host .session-track-workshop {\n  color: var(--ion-color-workshop); }\n\n:host .session-track-food {\n  color: var(--ion-color-food); }\n\n:host .session-track-documentation {\n  color: var(--ion-color-documentation); }\n\n:host .session-track-navigation {\n  color: var(--ion-color-navigation); }\n\n:host .show-favorite {\n  position: relative; }\n\n:host .icon-heart-empty {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  transition: -webkit-transform 0.3s ease;\n  transition: transform 0.3s ease;\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease; }\n\n:host .icon-heart {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  transition: -webkit-transform 0.3s ease;\n  transition: transform 0.3s ease;\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease; }\n\n:host .show-favorite .icon-heart {\n  -webkit-transform: scale(1);\n          transform: scale(1); }\n\n:host .show-favorite .icon-heart-empty {\n  -webkit-transform: scale(0);\n          transform: scale(0); }\n"

/***/ }),

/***/ "./src/app/pages/session-detail/session-detail.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/session-detail/session-detail.ts ***!
  \********************************************************/
/*! exports provided: SessionDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionDetailPage", function() { return SessionDetailPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_conference_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/conference-data */ "./src/app/providers/conference-data.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/user-data */ "./src/app/providers/user-data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SessionDetailPage = /** @class */ (function () {
    function SessionDetailPage(dataProvider, userProvider, route) {
        this.dataProvider = dataProvider;
        this.userProvider = userProvider;
        this.route = route;
        this.isFavorite = false;
    }
    SessionDetailPage.prototype.sessionClick = function (item) {
        console.log('Clicked', item);
    };
    SessionDetailPage.prototype.toggleFavorite = function () {
        if (this.userProvider.hasFavorite(this.session.name)) {
            this.userProvider.removeFavorite(this.session.name);
            this.isFavorite = false;
        }
        else {
            this.userProvider.addFavorite(this.session.name);
            this.isFavorite = true;
        }
    };
    SessionDetailPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.dataProvider.load().subscribe(function (data) {
            if (data &&
                data.schedule &&
                data.schedule[0] &&
                data.schedule[0].groups) {
                var sessionId = _this.route.snapshot.paramMap.get('sessionId');
                for (var _i = 0, _a = data.schedule[0].groups; _i < _a.length; _i++) {
                    var group = _a[_i];
                    if (group && group.sessions) {
                        for (var _b = 0, _c = group.sessions; _b < _c.length; _b++) {
                            var session = _c[_b];
                            if (session && session.id === sessionId) {
                                _this.session = session;
                                _this.isFavorite = _this.userProvider.hasFavorite(_this.session.name);
                                break;
                            }
                        }
                    }
                }
            }
        });
    };
    SessionDetailPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'page-session-detail',
            styles: [__webpack_require__(/*! ./session-detail.scss */ "./src/app/pages/session-detail/session-detail.scss")],
            template: __webpack_require__(/*! ./session-detail.html */ "./src/app/pages/session-detail/session-detail.html")
        }),
        __metadata("design:paramtypes", [_providers_conference_data__WEBPACK_IMPORTED_MODULE_1__["ConferenceData"],
            _providers_user_data__WEBPACK_IMPORTED_MODULE_3__["UserData"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SessionDetailPage);
    return SessionDetailPage;
}());



/***/ }),

/***/ "./src/app/pages/speaker-detail/speaker-detail-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/speaker-detail/speaker-detail-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: SpeakerDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakerDetailPageRoutingModule", function() { return SpeakerDetailPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _speaker_detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./speaker-detail */ "./src/app/pages/speaker-detail/speaker-detail.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _speaker_detail__WEBPACK_IMPORTED_MODULE_2__["SpeakerDetailPage"]
    }
];
var SpeakerDetailPageRoutingModule = /** @class */ (function () {
    function SpeakerDetailPageRoutingModule() {
    }
    SpeakerDetailPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SpeakerDetailPageRoutingModule);
    return SpeakerDetailPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/speaker-detail/speaker-detail.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/speaker-detail/speaker-detail.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Speakers\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{speaker?.name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class=\"speaker-detail\">\n  <div text-center *ngIf=\"speaker\">\n    <img [src]=\"speaker.profilePic\" [alt]=\"speaker.name\">\n    <br>\n\n    <ion-button fill=\"clear\" size=\"small\" color=\"twitter\">\n      <ion-icon name=\"logo-twitter\" slot=\"icon-only\"></ion-icon>\n    </ion-button>\n    <ion-button fill=\"clear\" size=\"small\" color=\"github\">\n      <ion-icon name=\"logo-github\" slot=\"icon-only\"></ion-icon>\n    </ion-button>\n    <ion-button fill=\"clear\" size=\"small\" color=\"instagram\">\n      <ion-icon name=\"logo-instagram\" slot=\"icon-only\"></ion-icon>\n    </ion-button>\n  </div>\n\n  <p>{{speaker?.about}}</p>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/speaker-detail/speaker-detail.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/speaker-detail/speaker-detail.module.ts ***!
  \***************************************************************/
/*! exports provided: SpeakerDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakerDetailModule", function() { return SpeakerDetailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _speaker_detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./speaker-detail */ "./src/app/pages/speaker-detail/speaker-detail.ts");
/* harmony import */ var _speaker_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./speaker-detail-routing.module */ "./src/app/pages/speaker-detail/speaker-detail-routing.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SpeakerDetailModule = /** @class */ (function () {
    function SpeakerDetailModule() {
    }
    SpeakerDetailModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _speaker_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__["SpeakerDetailPageRoutingModule"]
            ],
            declarations: [
                _speaker_detail__WEBPACK_IMPORTED_MODULE_2__["SpeakerDetailPage"],
            ]
        })
    ], SpeakerDetailModule);
    return SpeakerDetailModule;
}());



/***/ }),

/***/ "./src/app/pages/speaker-detail/speaker-detail.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/speaker-detail/speaker-detail.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "page-speaker-detail .speaker-detail img {\n  max-width: 140px;\n  border-radius: 50%; }\n\npage-speaker-detail .speaker-detail p {\n  color: #60646B; }\n"

/***/ }),

/***/ "./src/app/pages/speaker-detail/speaker-detail.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/speaker-detail/speaker-detail.ts ***!
  \********************************************************/
/*! exports provided: SpeakerDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakerDetailPage", function() { return SpeakerDetailPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/conference-data */ "./src/app/providers/conference-data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpeakerDetailPage = /** @class */ (function () {
    function SpeakerDetailPage(dataProvider, router, route) {
        this.dataProvider = dataProvider;
        this.router = router;
        this.route = route;
    }
    SpeakerDetailPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.dataProvider.load().subscribe(function (data) {
            var speakerId = _this.route.snapshot.paramMap.get('speakerId');
            if (data && data.speakers) {
                for (var _i = 0, _a = data.speakers; _i < _a.length; _i++) {
                    var speaker = _a[_i];
                    if (speaker && speaker.id === speakerId) {
                        _this.speaker = speaker;
                        break;
                    }
                }
            }
        });
    };
    SpeakerDetailPage.prototype.goToSessionDetail = function (session) {
        this.router.navigateByUrl("app/tabs/(schedule:session/" + session.id + ")");
    };
    SpeakerDetailPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'page-speaker-detail',
            template: __webpack_require__(/*! ./speaker-detail.html */ "./src/app/pages/speaker-detail/speaker-detail.html"),
            styles: [__webpack_require__(/*! ./speaker-detail.scss */ "./src/app/pages/speaker-detail/speaker-detail.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_providers_conference_data__WEBPACK_IMPORTED_MODULE_2__["ConferenceData"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SpeakerDetailPage);
    return SpeakerDetailPage;
}());



/***/ }),

/***/ "./src/app/pages/speaker-list/speaker-list-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/speaker-list/speaker-list-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: SpeakerListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakerListPageRoutingModule", function() { return SpeakerListPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _speaker_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./speaker-list */ "./src/app/pages/speaker-list/speaker-list.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _speaker_list__WEBPACK_IMPORTED_MODULE_2__["SpeakerListPage"]
    }
];
var SpeakerListPageRoutingModule = /** @class */ (function () {
    function SpeakerListPageRoutingModule() {
    }
    SpeakerListPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SpeakerListPageRoutingModule);
    return SpeakerListPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/speaker-list/speaker-list.html":
/*!******************************************************!*\
  !*** ./src/app/pages/speaker-list/speaker-list.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Speakers</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"outer-content\">\n  <ion-list>\n    <ion-grid fixed>\n      <ion-row align-items-stretch>\n        <ion-col size=\"12\" size-md=\"6\" *ngFor=\"let speaker of speakers\">\n          <ion-card class=\"speaker-card\">\n            <ion-card-header>\n              <ion-item detail=\"false\" lines=\"none\" button [href]=\"'app/tabs/(speakers:speaker-details/'+ speaker.id\">\n                <ion-avatar slot=\"start\">\n                  <img [src]=\"speaker.profilePic\" alt=\"Speaker profile pic\">\n                </ion-avatar>\n                {{speaker.name}}\n              </ion-item>\n            </ion-card-header>\n\n            <ion-card-content>\n              <ion-list>\n                <ion-item *ngFor=\"let session of speaker.sessions\" button [href]=\"'app/tabs/(speakers:session/'+session.id\">\n                  <h3>{{session.name}}</h3>\n                </ion-item>\n\n                <ion-item button (click)=\"goToSpeakerDetail(speaker)\" [href]=\"'app/tabs/(speakers:speaker-details/'+ speaker.id\">\n                  <h3>About {{speaker.name}}</h3>\n                </ion-item>\n              </ion-list>\n            </ion-card-content>\n\n            <ion-row no-padding justify-content-center>\n              <ion-col text-left size=\"4\">\n                <ion-button fill=\"clear\" size=\"small\" color=\"primary\" (click)=\"goToSpeakerTwitter(speaker)\">\n                  <ion-icon name=\"logo-twitter\" slot=\"start\"></ion-icon>\n                  Tweet\n                </ion-button>\n              </ion-col>\n              <ion-col text-center size=\"4\">\n                <ion-button fill=\"clear\" size=\"small\" color=\"primary\" (click)=\"openSpeakerShare(speaker)\">\n                  <ion-icon name=\"share-alt\" slot=\"start\"></ion-icon>\n                  Share\n                </ion-button>\n              </ion-col>\n              <ion-col text-right size=\"4\">\n                <ion-button fill=\"clear\" size=\"small\" color=\"primary\" (click)=\"openContact(speaker)\">\n                  <ion-icon name=\"chatboxes\" slot=\"start\"></ion-icon>\n                  Contact\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/speaker-list/speaker-list.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/speaker-list/speaker-list.module.ts ***!
  \***********************************************************/
/*! exports provided: SpeakerListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakerListModule", function() { return SpeakerListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _speaker_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./speaker-list */ "./src/app/pages/speaker-list/speaker-list.ts");
/* harmony import */ var _speaker_list_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./speaker-list-routing.module */ "./src/app/pages/speaker-list/speaker-list-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SpeakerListModule = /** @class */ (function () {
    function SpeakerListModule() {
    }
    SpeakerListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _speaker_list_routing_module__WEBPACK_IMPORTED_MODULE_4__["SpeakerListPageRoutingModule"]
            ],
            declarations: [_speaker_list__WEBPACK_IMPORTED_MODULE_3__["SpeakerListPage"]],
        })
    ], SpeakerListModule);
    return SpeakerListModule;
}());



/***/ }),

/***/ "./src/app/pages/speaker-list/speaker-list.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/speaker-list/speaker-list.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "page-speaker-list .scroll {\n  background: #EDEDED; }\n\npage-speaker-list .speaker-card {\n  height: 100%;\n  display: flex;\n  flex-direction: column; }\n\npage-speaker-list .speaker-card ion-card-header {\n  padding: 0; }\n\npage-speaker-list .speaker-card ion-card-header .item {\n  padding: 4px 16px; }\n\npage-speaker-list .speaker-card ion-card-content {\n  flex: 1 1 auto;\n  padding: 0; }\n"

/***/ }),

/***/ "./src/app/pages/speaker-list/speaker-list.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/speaker-list/speaker-list.ts ***!
  \****************************************************/
/*! exports provided: SpeakerListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakerListPage", function() { return SpeakerListPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _providers_conference_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/conference-data */ "./src/app/providers/conference-data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var SpeakerListPage = /** @class */ (function () {
    function SpeakerListPage(actionSheetCtrl, confData, inAppBrowser, router) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.confData = confData;
        this.inAppBrowser = inAppBrowser;
        this.router = router;
        this.speakers = [];
    }
    SpeakerListPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.confData.getSpeakers().subscribe(function (speakers) {
            _this.speakers = speakers;
        });
    };
    SpeakerListPage.prototype.goToSessionDetail = function (session) {
        this.router.navigateByUrl("app/tabs/(speakers:session/" + session.id + ")");
    };
    SpeakerListPage.prototype.goToSpeakerDetail = function (speaker) {
        this.router.navigateByUrl("app/tabs/(speakers:speaker-details/" + speaker.id + ")");
    };
    SpeakerListPage.prototype.goToSpeakerTwitter = function (speaker) {
        this.inAppBrowser.create("https://twitter.com/" + speaker.twitter, '_blank');
    };
    SpeakerListPage.prototype.openSpeakerShare = function (speaker) {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            header: 'Share ' + speaker.name,
                            buttons: [
                                {
                                    text: 'Copy Link',
                                    handler: function () {
                                        console.log('Copy link clicked on https://twitter.com/' + speaker.twitter);
                                        if (window['cordova'] &&
                                            window['cordova'].plugins.clipboard) {
                                            window['cordova'].plugins.clipboard.copy('https://twitter.com/' + speaker.twitter);
                                        }
                                    }
                                },
                                {
                                    text: 'Share via ...'
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel'
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SpeakerListPage.prototype.openContact = function (speaker) {
        return __awaiter(this, void 0, void 0, function () {
            var mode, actionSheet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mode = 'ios';
                        return [4 /*yield*/, this.actionSheetCtrl.create({
                                header: 'Contact ' + speaker.name,
                                buttons: [
                                    {
                                        text: "Email ( " + speaker.email + " )",
                                        icon: mode !== 'ios' ? 'mail' : null,
                                        handler: function () {
                                            window.open('mailto:' + speaker.email);
                                        }
                                    },
                                    {
                                        text: "Call ( " + speaker.phone + " )",
                                        icon: mode !== 'ios' ? 'call' : null,
                                        handler: function () {
                                            window.open('tel:' + speaker.phone);
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SpeakerListPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'page-speaker-list',
            template: __webpack_require__(/*! ./speaker-list.html */ "./src/app/pages/speaker-list/speaker-list.html"),
            styles: [__webpack_require__(/*! ./speaker-list.scss */ "./src/app/pages/speaker-list/speaker-list.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
            _providers_conference_data__WEBPACK_IMPORTED_MODULE_4__["ConferenceData"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SpeakerListPage);
    return SpeakerListPage;
}());



/***/ }),

/***/ "./src/app/pages/tabs-page/tabs-page-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/tabs-page/tabs-page-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs-page */ "./src/app/pages/tabs-page/tabs-page.ts");
/* harmony import */ var _about_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../about/about */ "./src/app/pages/about/about.ts");
/* harmony import */ var _map_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../map/map */ "./src/app/pages/map/map.ts");
/* harmony import */ var _schedule_schedule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../schedule/schedule */ "./src/app/pages/schedule/schedule.ts");
/* harmony import */ var _session_detail_session_detail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../session-detail/session-detail */ "./src/app/pages/session-detail/session-detail.ts");
/* harmony import */ var _speaker_detail_speaker_detail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../speaker-detail/speaker-detail */ "./src/app/pages/speaker-detail/speaker-detail.ts");
/* harmony import */ var _speaker_list_speaker_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../speaker-list/speaker-list */ "./src/app/pages/speaker-list/speaker-list.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_2__["TabsPage"],
        children: [
            // tab one
            {
                path: 'schedule',
                component: _schedule_schedule__WEBPACK_IMPORTED_MODULE_5__["SchedulePage"],
                outlet: 'schedule'
            },
            {
                path: 'session/:sessionId',
                component: _session_detail_session_detail__WEBPACK_IMPORTED_MODULE_6__["SessionDetailPage"],
                outlet: 'schedule'
            },
            // tab two
            {
                path: 'speakers',
                component: _speaker_list_speaker_list__WEBPACK_IMPORTED_MODULE_8__["SpeakerListPage"],
                outlet: 'speakers'
            },
            {
                path: 'session/:sessionId',
                component: _session_detail_session_detail__WEBPACK_IMPORTED_MODULE_6__["SessionDetailPage"],
                outlet: 'speakers'
            },
            {
                path: 'speaker-details/:speakerId',
                component: _speaker_detail_speaker_detail__WEBPACK_IMPORTED_MODULE_7__["SpeakerDetailPage"],
                outlet: 'speakers'
            },
            // tab three
            {
                path: 'map',
                component: _map_map__WEBPACK_IMPORTED_MODULE_4__["MapPage"],
                outlet: 'map'
            },
            // tab four
            {
                path: 'about',
                component: _about_about__WEBPACK_IMPORTED_MODULE_3__["AboutPage"],
                outlet: 'about'
            }
        ]
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/tabs-page/tabs-page.html":
/*!************************************************!*\
  !*** ./src/app/pages/tabs-page/tabs-page.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"schedule\" href=\"/app/tabs/(schedule:schedule)\">\n      <ion-icon name=\"calendar\"></ion-icon>\n      <ion-label>Schedule</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"speakers\" href=\"/app/tabs/(speakers:speakers)\">\n      <ion-icon name=\"contacts\"></ion-icon>\n      <ion-label>Speakers</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"map\" href=\"/app/tabs/(map:map)\">\n      <ion-icon name=\"map\"></ion-icon>\n      <ion-label>Map</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"about\" href=\"/app/tabs/(about:about)\">\n      <ion-icon name=\"information-circle\"></ion-icon>\n      <ion-label>About</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n  <ion-tab tab=\"schedule\">\n    <ion-router-outlet name=\"schedule\"></ion-router-outlet>\n  </ion-tab>\n\n  <ion-tab tab=\"speakers\">\n    <ion-router-outlet name=\"speakers\"></ion-router-outlet>\n  </ion-tab>\n\n  <ion-tab tab=\"map\">\n    <ion-router-outlet name=\"map\"></ion-router-outlet>\n  </ion-tab>\n\n  <ion-tab tab=\"about\">\n    <ion-router-outlet name=\"about\"></ion-router-outlet>\n  </ion-tab>\n\n</ion-tabs>\n"

/***/ }),

/***/ "./src/app/pages/tabs-page/tabs-page.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/tabs-page/tabs-page.module.ts ***!
  \*****************************************************/
/*! exports provided: TabsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsModule", function() { return TabsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs-page */ "./src/app/pages/tabs-page/tabs-page.ts");
/* harmony import */ var _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs-page-routing.module */ "./src/app/pages/tabs-page/tabs-page-routing.module.ts");
/* harmony import */ var _about_about_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../about/about.module */ "./src/app/pages/about/about.module.ts");
/* harmony import */ var _map_map_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../map/map.module */ "./src/app/pages/map/map.module.ts");
/* harmony import */ var _schedule_schedule_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../schedule/schedule.module */ "./src/app/pages/schedule/schedule.module.ts");
/* harmony import */ var _session_detail_session_detail_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../session-detail/session-detail.module */ "./src/app/pages/session-detail/session-detail.module.ts");
/* harmony import */ var _speaker_detail_speaker_detail_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../speaker-detail/speaker-detail.module */ "./src/app/pages/speaker-detail/speaker-detail.module.ts");
/* harmony import */ var _speaker_list_speaker_list_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../speaker-list/speaker-list.module */ "./src/app/pages/speaker-list/speaker-list.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var TabsModule = /** @class */ (function () {
    function TabsModule() {
    }
    TabsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _about_about_module__WEBPACK_IMPORTED_MODULE_5__["AboutModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _map_map_module__WEBPACK_IMPORTED_MODULE_6__["MapModule"],
                _schedule_schedule_module__WEBPACK_IMPORTED_MODULE_7__["ScheduleModule"],
                _session_detail_session_detail_module__WEBPACK_IMPORTED_MODULE_8__["SessionDetailModule"],
                _speaker_detail_speaker_detail_module__WEBPACK_IMPORTED_MODULE_9__["SpeakerDetailModule"],
                _speaker_list_speaker_list_module__WEBPACK_IMPORTED_MODULE_10__["SpeakerListModule"],
                _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["TabsPageRoutingModule"]
            ],
            declarations: [
                _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
            ]
        })
    ], TabsModule);
    return TabsModule;
}());



/***/ }),

/***/ "./src/app/pages/tabs-page/tabs-page.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/tabs-page/tabs-page.ts ***!
  \**********************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TabsPage = /** @class */ (function () {
    function TabsPage() {
    }
    TabsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./tabs-page.html */ "./src/app/pages/tabs-page/tabs-page.html")
        })
    ], TabsPage);
    return TabsPage;
}());



/***/ }),

/***/ "./src/app/providers/conference-data.ts":
/*!**********************************************!*\
  !*** ./src/app/providers/conference-data.ts ***!
  \**********************************************/
/*! exports provided: ConferenceData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConferenceData", function() { return ConferenceData; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _user_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-data */ "./src/app/providers/user-data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConferenceData = /** @class */ (function () {
    function ConferenceData(http, user) {
        this.http = http;
        this.user = user;
    }
    ConferenceData.prototype.load = function () {
        if (this.data) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.data);
        }
        else {
            return this.http
                .get('assets/data/data.json')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.processData, this));
        }
    };
    ConferenceData.prototype.processData = function (data) {
        var _this = this;
        // just some good 'ol JS fun with objects and arrays
        // build up the data by linking speakers to sessions
        this.data = data;
        this.data.tracks = [];
        // loop through each day in the schedule
        this.data.schedule.forEach(function (day) {
            // loop through each timeline group in the day
            day.groups.forEach(function (group) {
                // loop through each session in the timeline group
                group.sessions.forEach(function (session) {
                    session.speakers = [];
                    if (session.speakerNames) {
                        session.speakerNames.forEach(function (speakerName) {
                            var speaker = _this.data.speakers.find(function (s) { return s.name === speakerName; });
                            if (speaker) {
                                session.speakers.push(speaker);
                                speaker.sessions = speaker.sessions || [];
                                speaker.sessions.push(session);
                            }
                        });
                    }
                    if (session.tracks) {
                        session.tracks.forEach(function (track) {
                            if (_this.data.tracks.indexOf(track) < 0) {
                                _this.data.tracks.push(track);
                            }
                        });
                    }
                });
            });
        });
        return this.data;
    };
    ConferenceData.prototype.getTimeline = function (dayIndex, queryText, excludeTracks, segment) {
        var _this = this;
        if (queryText === void 0) { queryText = ''; }
        if (excludeTracks === void 0) { excludeTracks = []; }
        if (segment === void 0) { segment = 'all'; }
        return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            var day = data.schedule[dayIndex];
            day.shownSessions = 0;
            queryText = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
            var queryWords = queryText.split(' ').filter(function (w) { return !!w.trim().length; });
            day.groups.forEach(function (group) {
                group.hide = true;
                group.sessions.forEach(function (session) {
                    // check if this session should show or not
                    _this.filterSession(session, queryWords, excludeTracks, segment);
                    if (!session.hide) {
                        // if this session is not hidden then this group should show
                        group.hide = false;
                        day.shownSessions++;
                    }
                });
            });
            return day;
        }));
    };
    ConferenceData.prototype.filterSession = function (session, queryWords, excludeTracks, segment) {
        var matchesQueryText = false;
        if (queryWords.length) {
            // of any query word is in the session name than it passes the query test
            queryWords.forEach(function (queryWord) {
                if (session.name.toLowerCase().indexOf(queryWord) > -1) {
                    matchesQueryText = true;
                }
            });
        }
        else {
            // if there are no query words then this session passes the query test
            matchesQueryText = true;
        }
        // if any of the sessions tracks are not in the
        // exclude tracks then this session passes the track test
        var matchesTracks = false;
        session.tracks.forEach(function (trackName) {
            if (excludeTracks.indexOf(trackName) === -1) {
                matchesTracks = true;
            }
        });
        // if the segement is 'favorites', but session is not a user favorite
        // then this session does not pass the segment test
        var matchesSegment = false;
        if (segment === 'favorites') {
            if (this.user.hasFavorite(session.name)) {
                matchesSegment = true;
            }
        }
        else {
            matchesSegment = true;
        }
        // all tests must be true if it should not be hidden
        session.hide = !(matchesQueryText && matchesTracks && matchesSegment);
    };
    ConferenceData.prototype.getSpeakers = function () {
        return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data.speakers.sort(function (a, b) {
                var aName = a.name.split(' ').pop();
                var bName = b.name.split(' ').pop();
                return aName.localeCompare(bName);
            });
        }));
    };
    ConferenceData.prototype.getTracks = function () {
        return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data.tracks.sort();
        }));
    };
    ConferenceData.prototype.getMap = function () {
        return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data.map;
        }));
    };
    ConferenceData = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _user_data__WEBPACK_IMPORTED_MODULE_4__["UserData"]])
    ], ConferenceData);
    return ConferenceData;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tabs-page-tabs-page-module.js.map