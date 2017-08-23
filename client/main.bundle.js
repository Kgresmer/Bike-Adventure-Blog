webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <a routerLink=\"/\"><img id=\"header-image\" src=\"../../../assets/header.jpg\" style=\"width:100%;\"></a>\r\n</div>\r\n<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n  <flash-messages></flash-messages>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'Adventure Blog';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_feed_feed_component__ = __webpack_require__("../../../../../src/app/components/feed/feed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_post_post_component__ = __webpack_require__("../../../../../src/app/components/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_about_about_component__ = __webpack_require__("../../../../../src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_gallery_gallery_component__ = __webpack_require__("../../../../../src/app/components/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_calendar_calendar_component__ = __webpack_require__("../../../../../src/app/components/calendar/calendar.component.ts");
/* unused harmony export appRouting */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var appRoutes = [
    {
        path: 'feed',
        component: __WEBPACK_IMPORTED_MODULE_5__components_feed_feed_component__["a" /* FeedComponent */]
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_9__components_about_about_component__["a" /* AboutComponent */]
    },
    {
        path: 'calendar',
        component: __WEBPACK_IMPORTED_MODULE_23__components_calendar_calendar_component__["a" /* CalendarComponent */]
    },
    {
        path: 'gallery',
        component: __WEBPACK_IMPORTED_MODULE_21__components_gallery_gallery_component__["a" /* GalleryComponent */]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_5__components_feed_feed_component__["a" /* FeedComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_14__components_profile_profile_component__["a" /* ProfileComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]]
    }
];
var appRouting = __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__components_feed_feed_component__["a" /* FeedComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_post_post_component__["a" /* PostComponent */],
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_20_ng2_file_upload__["FileSelectDirective"],
                __WEBPACK_IMPORTED_MODULE_21__components_gallery_gallery_component__["a" /* GalleryComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_calendar_calendar_component__["a" /* CalendarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                appRouting,
                __WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_19__services_post_service__["a" /* PostService */],
                __WEBPACK_IMPORTED_MODULE_15__services_validate_service__["a" /* ValidateService */],
                __WEBPACK_IMPORTED_MODULE_17__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".about-photo {\r\n  border-radius: 100%;\r\n  width: 70%;\r\n}\r\n\r\n#route-map {\r\n  width: 100%;\r\n  padding-top: 2em\r\n}\r\n\r\n.about-photo-container {\r\n  display: inherit;\r\n  height: 100%;\r\n}\r\n\r\n@media (min-width: 428px) {\r\n  .about-photo-container  {\r\n    height: 250px;\r\n    display: inline-table;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .about-photo-container  {\r\n    height: 250px;\r\n    display: inherit;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .about-photo-container  {\r\n    height: 250px;\r\n    display: inline-table;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .about-photo-container  {\r\n    height: 250px;\r\n    display: inline-table;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"text-align: center; margin-bottom: 10em;\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\r\n      <h1>About Us</h1>\r\n      <p>Sigrid built this site to keep the world updated on our West Coast Bike Tour! We have quit our jobs and devoted\r\n        our life to the journey south with nothing but our bikes, camping gear and an open mind. We are using a route\r\n        from the Adventure Cycling Association and will do our best to avoid highways. The journey is just over a\r\n        thousand miles! We will be camping most of the time and occasionally using Warmshowers.org and maybe AirBnB. We\r\n        plan on doing a bike two days, take one day off type schedule for about a month. We will be taking lots of photos\r\n        and hopefully have some interesting stories to tell and thats what this blog is for. We will try to update it\r\n        everyday, but lets be honest that may not happen. Stay Tuned!\r\n      </p>\r\n      <br>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n          <div class=\"about-photo-container\">\r\n            <img src=\"../../../assets/sigrid.png\" class=\"about-photo\"/>\r\n          </div>\r\n          <h2>Sigrid Stensvold</h2>\r\n          <h4><strong>Cyclist, Writer, Designer, Front-End Developer</strong></h4>\r\n          <p>Originally from Ladysmith, WI the City of Pride, Progress and Promise, she began as a diver\r\n            but slowly realized her destiny is to explore the world by bicycle.</p>\r\n        </div>\r\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n          <div class=\"about-photo-container\">\r\n            <img src=\"../../../assets/kevin.png\" class=\"about-photo\"/>\r\n          </div>\r\n          <h2>Kevin Gresmer</h2>\r\n          <h4><strong>Full Stack Developer, Cyclist, Designer (sort of), Writer </strong></h4>\r\n          <p>A group effort from Wisconsin, Illinois and Dubai was needed to raise this cyclist. </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\r\n      <img id=\"route-map\" src=\"../../../assets/map.jpg\" />\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_dist_css_bootstrap_css__ = __webpack_require__("../../../../bootstrap/dist/css/bootstrap.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_dist_css_bootstrap_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bootstrap_dist_css_bootstrap_css__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by chq-keving on 7/14/2017.
 */


var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/components/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/about/about.component.css")]
        })
    ], AboutComponent);
    return AboutComponent;
}());

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/calendar/calendar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cal-column {\r\n  width: 8%;\r\n  padding-top: 2%;\r\n  padding-bottom: 2%;\r\n  font-size: 1.2em;\r\n}\r\n\r\n\r\n\r\n@media (min-width: 428px) {\r\n  .cal-column {\r\n    width: 8%;\r\n    padding-top: 2%;\r\n    padding-bottom: 2%;\r\n    font-size: 1.2em;\r\n  }\r\n}\r\n\r\n@media (min-width: 780px) {\r\n  .cal-column {\r\n    width: 8%;\r\n    padding-top: 2%;\r\n    padding-bottom: 2%;\r\n    font-size: 1.2em;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .cal-column {\r\n    width: 6%;\r\n    padding-top: 1.5%;\r\n    padding-bottom: 1.5%;\r\n    font-size: 1.4em;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .cal-column {\r\n    width: 6%;\r\n    padding-top: 1.5%;\r\n    padding-bottom: 1.5%;\r\n    font-size: 1.4em;\r\n  }\r\n}\r\n\r\n#calendar-container {\r\n  text-align: center;\r\n}\r\n\r\nbutton {\r\n  padding: 0;\r\n  border-radius: 100%;\r\n  background-color: #00495C;\r\n  color: white;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #ffb100;\r\n  color: black;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/calendar/calendar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div id=\"calendar-container\">\r\n    <div class=\"row\" style=\"text-align: center\">\r\n      <h3>August</h3>\r\n    </div>\r\n    <div class=\"row\">\r\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-8-20')\">\r\n        20\r\n      </button>\r\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-8-21')\">\r\n        21\r\n      </button>\r\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-8-22')\">\r\n        22\r\n      </button>\r\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-8-23')\">\r\n        23\r\n      </button>\r\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-8-24')\">\r\n        24\r\n      </button>\r\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-8-25')\">\r\n        25\r\n      </button>\r\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-8-26')\">\r\n        26\r\n      </button>\r\n    </div>\r\n    <div class=\"row\">\r\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-8-27')\">\r\n        27\r\n      </button>\r\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-8-28')\">\r\n        28\r\n      </button>\r\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-8-29')\">\r\n        29\r\n      </button>\r\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-8-30')\">\r\n        30\r\n      </button>\r\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-8-31')\">\r\n        31\r\n      </button>\r\n      <button class=\"cal-column\" style=\"visibility: hidden\"></button>\r\n      <button class=\"cal-column\" style=\"visibility: hidden\"></button>\r\n    </div>\r\n    <div class=\"row\" style=\"text-align: center;\">\r\n      <h3>September</h3>\r\n    </div>\r\n    <div class=\"row\">\r\n      <button class=\"cal-column\" style=\"visibility: hidden\"></button>\r\n      <button class=\"cal-column\" style=\"visibility: hidden\"></button>\r\n      <button class=\"cal-column\" style=\"visibility: hidden\"></button>\r\n      <button class=\"cal-column\" style=\"visibility: hidden\"></button>\r\n      <button class=\"cal-column\" style=\"visibility: hidden\"></button>\r\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-1')\">\r\n        1\r\n      </button>\r\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-2')\">\r\n        2\r\n      </button>\r\n    </div>\r\n    <div class=\"row\">\r\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-3')\">\r\n        3\r\n      </button>\r\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-4')\">\r\n        4\r\n      </button>\r\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-5')\">\r\n        5\r\n      </button>\r\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-6')\">\r\n        6\r\n      </button>\r\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-7')\">\r\n        7\r\n      </button>\r\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-8')\">\r\n        8\r\n      </button>\r\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-9')\">\r\n        9\r\n      </button>\r\n    </div>\r\n    <div class=\"row\">\r\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-10')\">\r\n        10\r\n      </button>\r\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-11')\">\r\n        11\r\n      </button>\r\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-12')\">\r\n        12\r\n      </button>\r\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-13')\">\r\n        13\r\n      </button>\r\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-14')\">\r\n        14\r\n      </button>\r\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-15')\">\r\n        15\r\n      </button>\r\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-16')\">\r\n        16\r\n      </button>\r\n    </div>\r\n    <div class=\"row\">\r\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-17')\">\r\n        17\r\n      </button>\r\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-18')\">\r\n        18\r\n      </button>\r\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-19')\">\r\n        19\r\n      </button>\r\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-20')\">\r\n        20\r\n      </button>\r\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-21')\">\r\n        21\r\n      </button>\r\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-22')\">\r\n        22\r\n      </button>\r\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-23')\">\r\n        23\r\n      </button>\r\n    </div>\r\n    <div class=\"row\">\r\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-24')\">\r\n        24\r\n      </button>\r\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-25')\">\r\n        25\r\n      </button>\r\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-26')\">\r\n        26\r\n      </button>\r\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-27')\">\r\n        27\r\n      </button>\r\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-28')\">\r\n        28\r\n      </button>\r\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-29')\">\r\n        29\r\n      </button>\r\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-30')\">\r\n        30\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div id=\"post-display\">\r\n  <div class=\"row\" *ngIf=\"posts.length > 0\">\r\n    <div class=\"col-xs-12 col-sm-9 col-md-9 col-lg-9 remove-padding\">\r\n      <div *ngFor=\"let post of posts\">\r\n        <div>\r\n          <app-post [selectedPost]=\"post\"></app-post>\r\n          <hr>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/calendar/calendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_dist_css_bootstrap_css__ = __webpack_require__("../../../../bootstrap/dist/css/bootstrap.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_dist_css_bootstrap_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bootstrap_dist_css_bootstrap_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CalendarComponent = (function () {
    function CalendarComponent(postService, flashMessagesService) {
        this.postService = postService;
        this.flashMessagesService = flashMessagesService;
        this.posts = [];
    }
    CalendarComponent.prototype.showPostsOnDate = function (dateChosen) {
        var _this = this;
        this.postService.getPostsByDate(dateChosen).subscribe(function (response) {
            if (response.success) {
                _this.posts = response.posts;
                if (_this.posts.length > 0) {
                    jQuery('html, body').animate({
                        scrollTop: jQuery("#post-display").offset().top
                    }, 1000);
                }
            }
            else {
                _this.flashMessagesService.show('I\'m Sorry. I can\'t find any posts for that date. ', {
                    cssClass: 'alert-danger',
                    timeout: 4000
                });
            }
        });
    };
    CalendarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-calendar',
            template: __webpack_require__("../../../../../src/app/components/calendar/calendar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/calendar/calendar.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
    ], CalendarComponent);
    return CalendarComponent;
    var _a, _b;
}());

//# sourceMappingURL=calendar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".post-submit-btn {\r\n  margin-bottom: 5em;\r\n}\r\n\r\n#display-delete-post {\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<label>What would you like to do?</label>\r\n<select [(ngModel)]=\"postAction\" name=\"postAction\" (change)=\"updatePostForm()\">\r\n  <option value=\"\"></option>\r\n  <option value=\"edit\">Edit a Post</option>\r\n  <option value=\"delete\">Delete a Post</option>\r\n  <option value=\"create\">Create a Post</option>\r\n</select>\r\n\r\n<h2 *ngIf=\"postAction === 'create'\" class=\"page-header\">Create a post</h2>\r\n\r\n<div *ngIf=\"postAction === 'edit'\" class=\"editHeader\">\r\n  <h2 class=\"page-header\">Edit a post</h2>\r\n  <label>Select the post you would like to edit</label>\r\n  <select [(ngModel)]=\"postToEdit\" name=\"postToEdit\" (change)=\"updateEditPostData(post)\">\r\n    <option value=\"\"></option>\r\n    <option *ngFor=\"let post of posts\" [ngValue]=\"post\">{{post.title}}-{{post.date}}</option>\r\n  </select>\r\n</div>\r\n\r\n<div *ngIf=\"postAction === 'delete'\" class=\"deleteHeader dropdown\">\r\n  <h2 class=\"page-header\">Delete a post</h2>\r\n  <label>Select the post you would like to edit</label>\r\n  <select [(ngModel)]=\"postToDelete\" name=\"postToDelete\">\r\n    <option value=\"\"></option>\r\n    <option *ngFor=\"let post of posts\" [ngValue]=\"post\">\r\n      {{post.title}}-{{post.date}}\r\n    </option>\r\n  </select>\r\n\r\n  <div *ngIf=\"postToDelete\" id=\"display-delete-post\">\r\n    <p>{{postToDelete.title}}-{{postToDelete.date}}</p>\r\n    <button class=\"btn-danger\" (click)=\"deletePost(postToDelete)\">Delete</button>\r\n  </div>\r\n</div>\r\n\r\n<form *ngIf=\"(postAction === 'edit' && postToEdit) || postAction === 'create'\" (submit)=\"onSubmitPost()\">\r\n\r\n  <!-- Date -->\r\n  <div class=\"form-group\">\r\n    <label>Date</label>\r\n    <input type=\"date\" [(ngModel)]=\"currentPost.date\" name=\"date\" class=\"form-control\">\r\n  </div>\r\n\r\n  <!-- Post Title -->\r\n  <div class=\"form-group\">\r\n    <label>Title</label>\r\n    <input [(ngModel)]=\"currentPost.title\" name=\"newPost.title\" class=\"form-control\">\r\n  </div>\r\n\r\n  <!-- Body of the post -->\r\n  <div class=\"form-group\">\r\n    <label>Body</label>\r\n    <textarea [(ngModel)]=\"currentPost.body\" name=\"newPost.body\" class=\"form-control\" style=\"height: 10em;\"></textarea>\r\n  </div>\r\n\r\n  <!-- Add photos -->\r\n  <!-- Edit Photos -->\r\n  <div class=\"form-group\" *ngIf=\"postAction === 'edit'\">\r\n    <label>Existing Photos</label>\r\n    <div *ngFor=\"let photo of currentPost.photos\">\r\n      <p>{{photo}} <button class=\"btn btn-danger\" (click)=\"deletePhoto(photo)\">Delete</button></p>\r\n    </div>\r\n    <p *ngIf=\"currentPost.photos && currentPost.photos.length === 0\">There are no photos attached to this post.</p>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"single\">Upload one photo at a time</label>\r\n    <input type=\"file\" class=\"form-control\" id=\"single\" name=\"single\" ng2FileSelect [uploader]=\"uploader\" />\r\n  </div>\r\n  <table class=\"table\">\r\n    <thead>\r\n    <tr>\r\n      <th width=\"50%\">Name</th>\r\n      <th>Size</th>\r\n      <th>Progress</th>\r\n      <th>Status</th>\r\n      <th>Actions</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let item of uploader.queue\">\r\n      <td><strong>{{ item.file.name }}</strong></td>\r\n      <td nowrap>{{ item.file.size/1024/1024 | number:'.2' }} MB</td>\r\n      <td>\r\n        <div class=\"progress\" style=\"margin-bottom: 0;\">\r\n          <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\r\n        </div>\r\n      </td>\r\n      <td class=\"text-center\">\r\n        <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\r\n        <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\r\n        <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\r\n      </td>\r\n      <td nowrap>\r\n        <button type=\"button\" class=\"btn btn-warning btn-xs\"\r\n                (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\r\n          <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-danger btn-xs\"\r\n                (click)=\"item.remove()\">\r\n          <span class=\"glyphicon glyphicon-trash\"></span> Remove\r\n        </button>\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n  <!-- end of photo input -->\r\n\r\n  <!-- Tags -->\r\n  <div class=\"form-group\">\r\n    <label>Tags (comma separated)</label>\r\n    <input [(ngModel)]=\"currentPost.tags\" name=\"newPost.tags\" class=\"form-control\">\r\n  </div>\r\n  <!-- Time Biked Today in Minutes -->\r\n  <div class=\"form-group\">\r\n    <label>Total time biked today in minutes</label>\r\n    <input type=\"number\" [(ngModel)]=\"currentPost.timeBikedToday\" name=\"newPost.timeBikedToday\"\r\n           class=\"form-control\">\r\n  </div>\r\n  <!-- Miles biked since the last post (could be miles biked today) -->\r\n  <div class=\"form-group\">\r\n    <label>Miles Since Last Post  (could be miles biked today) </label>\r\n    <input type=\"number\" [(ngModel)]=\"currentPost.milesSinceLastPost\" name=\"newPost.milesSinceLastPost\"\r\n           class=\"form-control\">\r\n  </div>\r\n  <!-- Temperature -->\r\n  <div class=\"form-group\">\r\n    <label>Temperature</label>\r\n    <input type=\"number\" [(ngModel)]=\"currentPost.temperature\" name=\"newPost.temperature\" class=\"form-control\">\r\n  </div>\r\n  <!-- Weather Condition -->\r\n  <div class=\"form-group\">\r\n    <label>Weather Condition</label>\r\n    <select [(ngModel)]=\"currentPost.weatherCondition\" name=\"newPost.weatherCondition\">\r\n      <option *ngFor=\"let condition of weatherConditions\" [ngValue]=\"condition\">{{condition}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Horizontal or Vertical Layout</label>\r\n    <select [(ngModel)]=\"currentPost.layout\" name=\"newPost.layout\">\r\n      <option value=\"horizontal\">Horizontal</option>\r\n      <option value=\"vertical\">Vertical</option>\r\n    </select>\r\n  </div>\r\n  <!-- Author (defaults to name of the current user) -->\r\n  <div class=\"form-group\">\r\n    <label>Author (defaults to name of the current user)</label>\r\n    <input type=\"text\" [(ngModel)]=\"currentPost.author\" name=\"newPost.author\" class=\"form-control\">\r\n  </div>\r\n  <!-- submit button -->\r\n  <div *ngFor=\"let error of errorMessages\">\r\n    <p class=\"alert-danger\">{{error}}</p>\r\n  </div>\r\n  <input type=\"submit\" [disabled]=\"errorMessages.length > 0\" class=\"btn btn-primary post-submit-btn\" value=\"Submit\">\r\n</form>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__feed_feed_component__ = __webpack_require__("../../../../../src/app/components/feed/feed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__);
/* unused harmony export TotalsAddition */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TotalsAddition = (function () {
    function TotalsAddition() {
    }
    return TotalsAddition;
}());

var DashboardComponent = (function () {
    function DashboardComponent(postService, flashMessagesService, router) {
        this.postService = postService;
        this.flashMessagesService = flashMessagesService;
        this.router = router;
        this.HORIZONTAL_LAYOUT = 'horizontal';
        this.VERTICAL_LAYOUT = 'vertical';
        this.uploader = new __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__["FileUploader"]({ url: 'posts/upload' });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postService.getAllPosts().subscribe(function (response) {
            _this.posts = response.posts;
        });
        this.errorMessages = [];
        this.currentPost = new __WEBPACK_IMPORTED_MODULE_1__feed_feed_component__["b" /* Post */]();
        this.currentPost.timeBikedToday = 0;
        this.currentPost.milesSinceLastPost = 0;
        this.currentPost.layout = this.HORIZONTAL_LAYOUT;
        this.currentPost.author = localStorage.getItem('name');
        this.weatherConditions = ['Cloudy', 'Partly Cloudy', 'Sunny', 'Rainy', 'Raining Cats and Dogs'];
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            var responsePath = JSON.parse(response);
            if (responsePath.fileName && responsePath.fileName !== 'hasnt been set yet') {
                if (_this.currentPost.photos) {
                    _this.currentPost.photos.push(responsePath.fileName);
                }
                else {
                    _this.currentPost.photos = [responsePath.fileName];
                }
            }
        };
        this.uploader.onCompleteAll = function () {
            if (_this.postAction === 'create') {
                _this.sendUpdateTotalsRequest();
                _this.sendPostRequests();
            }
            else if (_this.postAction === 'edit') {
                _this.sendUpdateTotalsRequest();
                _this.sendEditRequest();
            }
        };
    };
    DashboardComponent.prototype.deletePost = function (postToDelete) {
        var _this = this;
        var dataToAddToTripTotals = {
            milesSinceLastPost: -Math.abs(postToDelete.milesSinceLastPost),
            timeBikedToday: -Math.abs(postToDelete.timeBikedToday)
        };
        this.postService.addToTotals(dataToAddToTripTotals).subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show(data.msg, {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessagesService.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
                _this.router.navigate(['/login']);
            }
        });
        if (postToDelete.photos && postToDelete.photos.length > 0) {
            for (var i = 0; i < postToDelete.photos.length; i++) {
                this.deletePhoto(postToDelete.photos[i]);
            }
        }
        this.postService.deletePost(postToDelete._id).subscribe(function (response) {
            if (response.success) {
                _this.flashMessagesService.show(response.msg, {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.postAction = '';
            }
            else {
                _this.flashMessagesService.show(response.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
            }
        });
    };
    DashboardComponent.prototype.updateEditPostData = function () {
        this.currentPost = new __WEBPACK_IMPORTED_MODULE_1__feed_feed_component__["b" /* Post */]();
        this.currentPost.timeBikedToday = this.postToEdit.timeBikedToday || 0;
        this.currentPost.milesSinceLastPost = this.postToEdit.milesSinceLastPost || 0;
        this.currentPost.photos = this.postToEdit.photos;
        this.currentPost.author = this.postToEdit.author;
        this.currentPost.body = this.postToEdit.body;
        this.currentPost._id = this.postToEdit._id;
        this.currentPost.layout = this.postToEdit.layout;
        this.currentPost.recap = this.postToEdit.recap;
        this.currentPost.tags = this.postToEdit.tags;
        this.currentPost.title = this.postToEdit.title;
        this.currentPost.temperature = this.postToEdit.temperature || 0;
        this.currentPost.weatherCondition = this.postToEdit.weatherCondition;
        this.currentPost.date = this.postToEdit.date.split('T')[0];
        this.currentPost.weatherCondition = this.currentPost.weatherCondition[0];
    };
    DashboardComponent.prototype.updatePostForm = function () {
        this.currentPost = new __WEBPACK_IMPORTED_MODULE_1__feed_feed_component__["b" /* Post */]();
        this.currentPost.timeBikedToday = 0;
        this.currentPost.date = new Date().toISOString().split('T')[0];
        this.currentPost.milesSinceLastPost = 0;
        this.currentPost.layout = this.HORIZONTAL_LAYOUT;
        this.currentPost.author = localStorage.getItem('name');
    };
    DashboardComponent.prototype.onSubmitPost = function () {
        if (!this.validateInputs())
            return;
        if (this.uploader.queue.length > 0) {
            for (var _i = 0, _a = this.uploader.queue; _i < _a.length; _i++) {
                var item = _a[_i];
                item.upload();
            }
        }
        else if (this.postAction === 'create') {
            this.sendUpdateTotalsRequest();
            this.sendPostRequests();
        }
        else if (this.postAction === 'edit') {
            this.sendUpdateTotalsRequest();
            this.sendEditRequest();
        }
    };
    DashboardComponent.prototype.validateInputs = function () {
        var _this = this;
        // date: string;
        if (typeof this.currentPost.date === 'undefined' || this.currentPost.date.length < 4) {
            this.errorMessages.push('Enter in a date! ');
        }
        // title: string;
        if (typeof this.currentPost.title === 'undefined' || this.currentPost.title.length < 2) {
            this.errorMessages.push('What you dont want a title?!');
        }
        // body: string;
        if (typeof this.currentPost.body === 'undefined' || this.currentPost.body.length < 5) {
            this.errorMessages.push('This isn\'t a blog that just shows headlines. Give it a body. ');
        }
        // _________________ Do any of these need validation or are they optional?
        // photos: string[];
        // tags: [string];
        // recap: boolean;
        // milesSinceLastPost: number;
        // timeBikedToday: number;
        // temperature: string;
        // weatherCondition: string;
        // author: string;
        if (typeof this.currentPost.author === 'undefined' || this.currentPost.author.length < 2) {
            this.errorMessages.push('If you wrote it own it. Enter an author');
        }
        if (this.errorMessages.length > 0) {
            setTimeout(function () {
                _this.errorMessages = [];
            }, 3000);
            return false;
        }
        return true;
    };
    DashboardComponent.prototype.deletePhoto = function (photo) {
        var _this = this;
        this.postService.deletePhoto(photo).subscribe(function (response) {
            if (response.success) {
                if (_this.currentPost) {
                    _this.currentPost.photos.splice(_this.currentPost.photos.indexOf(photo), 1);
                }
                _this.flashMessagesService.show(response.msg, {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
            }
            else {
                _this.flashMessagesService.show(response.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
            }
        });
    };
    DashboardComponent.prototype.sendPostRequests = function () {
        var _this = this;
        if (this.currentPost.photos) {
            this.currentPost.photos = this.currentPost.photos.map(function (photo) {
                return photo.replace(/ /g, '-');
            });
        }
        this.postService.addPost(this.currentPost).subscribe(function (data) {
            if (data.success) {
                _this.uploader.clearQueue();
                _this.flashMessagesService.show(data.msg, {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                location.reload();
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessagesService.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
                _this.router.navigate(['/login']);
            }
        });
    };
    DashboardComponent.prototype.sendEditRequest = function () {
        var _this = this;
        if (this.currentPost.photos) {
            this.currentPost.photos = this.currentPost.photos.map(function (photo) {
                return photo.replace(/ /g, '-');
            });
        }
        this.postService.editPost(this.currentPost).subscribe(function (data) {
            if (data.success) {
                _this.uploader.clearQueue();
                _this.flashMessagesService.show(data.msg, {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.updatePostForm();
                _this.postAction = '';
                _this.postToEdit = null;
            }
            else {
                _this.flashMessagesService.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
            }
        });
    };
    DashboardComponent.prototype.sendUpdateTotalsRequest = function () {
        var _this = this;
        var dataToAddToTripTotals = {
            milesSinceLastPost: this.currentPost.milesSinceLastPost,
            timeBikedToday: this.currentPost.timeBikedToday
        };
        if (this.postAction === 'edit') {
            if (this.postToEdit.milesSinceLastPost === this.currentPost.milesSinceLastPost &&
                this.postToEdit.timeBikedToday === this.currentPost.timeBikedToday) {
                return;
            }
            else if (this.postToEdit.milesSinceLastPost !== this.currentPost.milesSinceLastPost ||
                this.postToEdit.timeBikedToday !== this.currentPost.timeBikedToday) {
                dataToAddToTripTotals.timeBikedToday = this.currentPost.timeBikedToday - this.postToEdit.timeBikedToday;
                dataToAddToTripTotals.milesSinceLastPost = this.currentPost.milesSinceLastPost - this.postToEdit.milesSinceLastPost;
            }
        }
        if (typeof this.currentPost.milesSinceLastPost === 'number' &&
            typeof this.currentPost.timeBikedToday === 'number') {
            this.postService.addToTotals(dataToAddToTripTotals).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessagesService.show(data.msg, {
                        cssClass: 'alert-success',
                        timeout: 5000
                    });
                    _this.router.navigate(['/dashboard']);
                }
                else {
                    _this.flashMessagesService.show(data.msg, {
                        cssClass: 'alert-danger',
                        timeout: 5000
                    });
                    _this.router.navigate(['/login']);
                }
            });
        }
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/feed/feed.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selected {\r\n  background-color: #CFD8DC !important;\r\n}\r\n\r\n.pagination {\r\n  margin: 0;\r\n}\r\n\r\n#tag-container {\r\n  display: inline-block;\r\n  padding: 5px;\r\n}\r\n\r\n.tag-link {\r\n  padding: 3px;\r\n}\r\n\r\n#search-button {\r\n  margin-top: 5px;\r\n  background-color: #00495C;\r\n  border: none;\r\n}\r\n\r\n.remove-padding {\r\n  padding: 0;\r\n}\r\n\r\n.totals-number {\r\n  font-size: 1.2em;\r\n  margin-bottom: 5em;\r\n}\r\n\r\n.totals-image {\r\n  margin-bottom: 5px;\r\n  width: 40%;\r\n}\r\n\r\n.total-miles-section {\r\n  padding-bottom: 1em;\r\n}\r\n\r\n#totals-display {\r\n  text-align: center;\r\n  position: relative;\r\n  right: -0%;\r\n  height:100%;\r\n}\r\n\r\n@media (min-width: 428px) {\r\n  #totals-display  {\r\n    position: relative;\r\n  }\r\n}\r\n\r\n@media (min-width: 780px) {\r\n  #totals-display  {\r\n    position: fixed;\r\n    right: -0%;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  #totals-display  {\r\n    position: fixed;\r\n    right: -0%;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  #totals-display  {\r\n    position: fixed;\r\n    right: -0%;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/feed/feed.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"display: inline-block;\">\r\n  <ul class=\"pagination\" *ngIf=\"pageNumbers.length > 1\">\r\n    <li *ngFor=\"let page of pageNumbers\"><a href=\"#\" (click)=\"changePage(page)\">{{page}}</a></li>\r\n  </ul>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 col-sm-9 col-md-9 col-lg-9 remove-padding\">\r\n      <div *ngFor=\"let post of activePage\" >\r\n        <div>\r\n        <app-post [selectedPost]=\"post\"></app-post>\r\n        <hr>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xs-offset-3 col-xs-6 col-sm-3 col-md-3 col-lg-3\"\r\n         id=\"totals-display\" *ngIf=\"totals\">\r\n      <div style=\"background-color: #ffffff; padding: 1.5rem;\">\r\n        <div class=\"total-miles-section\">\r\n          <img src=\"../../../assets/bike.png\" class=\"totals-image\"> <br>\r\n          Total Miles Biked: <br>\r\n          <span class=\"totals-number\">{{totals.totalMilesBiked}}</span> <br>\r\n        </div>\r\n        <div class=\"total-time-section\">\r\n          <img src=\"../../../assets/clock.png\" class=\"totals-image\"> <br>\r\n          Total Time Biked: <br>\r\n          <span class=\"totals-number\">{{totalTimeBiked.days}}</span> days<br>\r\n          <span class=\"totals-number\">{{totalTimeBiked.hours}}</span> hrs<br>\r\n          <span class=\"totals-number\">{{totalTimeBiked.minutes}}</span> mins<br>\r\n        </div>\r\n        <hr>\r\n        <div id=\"search-section\">\r\n          <label>Search by Tag</label>\r\n          <br>\r\n          <div id=\"tag-container\">\r\n            <a *ngFor=\"let tag of filterTags\" href=\"#\" (click)=\"searchForTag(tag)\" class=\"tag-link\">\r\n              {{tag}}\r\n            </a>\r\n          </div>\r\n          <br>\r\n          <button id=\"search-button\" *ngIf=\"filteredPosts.length > 0\" (click)=\"clearSearchResults()\"\r\n                  class=\"btn btn-info\">\r\n            Clear Search Results\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ul class=\"pagination\" *ngIf=\"pageNumbers.length > 1\">\r\n    <li *ngFor=\"let page of pageNumbers\"><a href=\"#\" (click)=\"changePage(page)\">{{page}}</a></li>\r\n  </ul>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/feed/feed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Post; });
/* unused harmony export Totals */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Post = (function () {
    function Post() {
    }
    return Post;
}());

var Totals = (function () {
    function Totals() {
    }
    return Totals;
}());

var FeedComponent = (function () {
    function FeedComponent(postService, flashMessagesService, http) {
        this.postService = postService;
        this.flashMessagesService = flashMessagesService;
        this.http = http;
        this.totalTimeBiked = { days: 0, hours: 0, minutes: 0 };
    }
    FeedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredPosts = [];
        this.mapOfPages = {};
        this.numOfPostsPerPage = 2;
        this.pageNumbers = [];
        this.filterTags = [];
        jQuery(window).scroll(function () {
            if (jQuery(window).width() > 780) {
                if (jQuery(window).scrollTop() > 220) {
                    jQuery("#totals-display").offset({ top: jQuery(window).scrollTop() + 5 });
                }
                else {
                    var offset = jQuery("#header-image").height() + 90;
                    jQuery("#totals-display").offset({ top: offset });
                }
            }
        });
        this.getTotals();
        this.postService.getAllPosts().subscribe(function (response) {
            if (response.success) {
                _this.posts = response.posts.reverse();
                _this.visiblePosts = _this.posts;
                _this.setupPagination();
                _this.setFilterTags();
            }
        });
    };
    FeedComponent.prototype.setFilterTags = function () {
        var _this = this;
        for (var i = 0; i < this.posts.length; i++) {
            if (this.posts[i].tags && this.posts[i].tags.length > 0) {
                this.posts[i].tags.split(',').map(function (tag) {
                    if (_this.filterTags.indexOf(tag.trim()) < 0) {
                        _this.filterTags.push(tag.trim());
                    }
                });
            }
        }
    };
    FeedComponent.prototype.getTotals = function () {
        var _this = this;
        this.postService.getTotals().subscribe(function (response) {
            if (response.success) {
                _this.totals = response.totals;
                if (_this.totals.totalTimeBiked) {
                    _this.totalTimeBiked.days = Math.floor(_this.totals.totalTimeBiked / 1440);
                    _this.totalTimeBiked.hours = Math.floor(_this.totals.totalTimeBiked / 60);
                    _this.totalTimeBiked.minutes = _this.totals.totalTimeBiked % 60;
                }
            }
            else {
                _this.flashMessagesService.show('I\'m Sorry. I seem to have misplaced the totals. ', {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
            }
        });
    };
    FeedComponent.prototype.searchForTag = function (searchText) {
        var _this = this;
        this.postService.getPostsByTag(searchText).subscribe(function (response) {
            if (response.success) {
                _this.filteredPosts = response.posts;
                if (_this.filteredPosts.length > 0) {
                    _this.visiblePosts = _this.filteredPosts;
                    _this.setupPagination();
                }
            }
            else {
                _this.flashMessagesService.show('I\'m Sorry. I can\'t find any posts with that tag. ', {
                    cssClass: 'alert-danger',
                    timeout: 4000
                });
            }
        });
    };
    FeedComponent.prototype.clearSearchResults = function () {
        this.visiblePosts = this.posts;
        this.setupPagination();
    };
    FeedComponent.prototype.changePage = function (pageNum) {
        this.activePage = this.mapOfPages[pageNum];
    };
    FeedComponent.prototype.setupPagination = function () {
        var numOfPosts = this.visiblePosts.length;
        var pageNumber = 1;
        for (var i = 0, j = numOfPosts; i < numOfPosts; i += this.numOfPostsPerPage) {
            this.mapOfPages[pageNumber] = this.visiblePosts.slice(i, i + this.numOfPostsPerPage);
            pageNumber++;
        }
        this.pageNumbers = Object.keys(this.mapOfPages);
        this.activePage = this.mapOfPages[1];
    };
    FeedComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-feed-root',
            template: __webpack_require__("../../../../../src/app/components/feed/feed.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/feed/feed.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]) === "function" && _c || Object])
    ], FeedComponent);
    return FeedComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=feed.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav navbar-nav\">\r\n  <li>\r\n    <a *ngIf=\"!authService.loggedIn()\" routerLinkActive=\"active\" class=\"navbar-brand\"\r\n         routerLink=\"/login\" style=\"color: darkgrey\">\r\n      Log In\r\n    </a>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FooterComponent = (function () {
    function FooterComponent(authService, flashMessagesService, router) {
        this.authService = authService;
        this.flashMessagesService = flashMessagesService;
        this.router = router;
    }
    FooterComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessagesService.show('You have been logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
    ], FooterComponent);
    return FooterComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/gallery/gallery.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.gallery-image {\r\n  width: 100%;\r\n  height: 10%;\r\n  padding: 1rem;\r\n  /*-moz-box-shadow: 2px 2px 7px rgba(0, 0, 0, .2);*/\r\n  /*-webkit-box-shadow: 2px 2px 7px rgba(0, 0, 0, .2);*/\r\n  /*box-shadow: 2px 2px 7px rgba(0, 0, 0, .2);*/\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-bottom: 10em;\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-6 col-sm-6 col-md-3 col-lg-3\" style=\"text-align:center;\">\r\n      <div class=\"row\" *ngFor=\"let photo of photoGroupOne\">\r\n          <img (click)=\"showModal(s3url, photo.Key)\" class=\"gallery-image\"\r\n               src=\"{{s3url}}{{photo.Key}}\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xs-6 col-sm-6 col-md-3 col-lg-3\" style=\"text-align:center;\">\r\n      <div class=\"row\" *ngFor=\"let photo of photoGroupTwo\">\r\n        <img (click)=\"showModal(s3url, photo.Key)\" class=\"gallery-image\" src=\"{{s3url}}{{photo.Key}}\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xs-6 col-sm-6 col-md-3 col-lg-3\" style=\"text-align:center;\">\r\n      <div class=\"row\" *ngFor=\"let photo of photoGroupThree\">\r\n        <img (click)=\"showModal(s3url, photo.Key)\" class=\"gallery-image\" src=\"{{s3url}}{{photo.Key}}\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xs-6 col-sm-6 col-md-3 col-lg-3\" style=\"text-align:center;\">\r\n      <div class=\"row\" *ngFor=\"let photo of photoGroupFour\">\r\n        <img (click)=\"showModal(s3url, photo.Key)\" class=\"gallery-image\" src=\"{{s3url}}{{photo.Key}}\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Creates the bootstrap modal where the image will appear -->\r\n<div class=\"modal fade\" id=\"imagemodal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"galleryImageModal\"\r\n     aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-body\">\r\n      <img [src]=\"imagePreview\" id=\"imagepreview\" style=\"width: 100%;\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GalleryComponent = (function () {
    function GalleryComponent(postService, flashMessagesService) {
        this.postService = postService;
        this.flashMessagesService = flashMessagesService;
    }
    GalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.s3url = 'https://blog-post-photos.s3.amazonaws.com/';
        this.postService.getPictures().subscribe(function (response) {
            if (response.success) {
                _this.photos = response.photos;
                _this.photoGroupOne = [];
                _this.photoGroupTwo = [];
                _this.photoGroupThree = [];
                _this.photoGroupFour = [];
                _this.setPhotoGroups();
            }
            else {
                _this.flashMessagesService.show('I\'m Sorry. I seem to have misplaced the photos. ', {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
            }
        });
    };
    GalleryComponent.prototype.showModal = function (s3url, Key) {
        this.imagePreview = s3url + Key;
        jQuery('#imagemodal').modal('show');
    };
    GalleryComponent.prototype.setPhotoGroups = function () {
        var numOfPhotos = this.photos.length;
        var count = 1;
        for (var i = 0; i < numOfPhotos; i++) {
            this.addPhotoToArray(this.photos[i], count);
            if (count === 4) {
                count = 1;
            }
            else {
                count++;
            }
        }
    };
    GalleryComponent.prototype.addPhotoToArray = function (photo, index) {
        switch (index) {
            case 1:
                this.photoGroupOne.push(photo);
                break;
            case 2:
                this.photoGroupTwo.push(photo);
                break;
            case 3:
                this.photoGroupThree.push(photo);
                break;
            case 4:
                this.photoGroupFour.push(photo);
                break;
        }
    };
    GalleryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__("../../../../../src/app/components/gallery/gallery.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/gallery/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
    ], GalleryComponent);
    return GalleryComponent;
    var _a, _b;
}());

//# sourceMappingURL=gallery.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"jumbotron text-center\">\r\n  <h1>Sigrid Likes Pancakes</h1>\r\n  <div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\r\n<form (submit)=\"onLoginSubmit()\">\r\n  <div class=\"form-group\">\r\n    <label>Username</label>\r\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Password</label>\r\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\r\n  </div>\r\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessagesService) {
        this.authService = authService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        // validate?
        // login
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessagesService.show('You are now logged in!', {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessagesService.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#navbar {\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n.icon-bar {\r\n  background: #00495C;\r\n}\r\n\r\n.active {\r\n  color: #ffb100 !important;\r\n}\r\n\r\n.navbar-brand {\r\n  color: #00495C;\r\n}\r\n\r\n.navbar-brand:hover {\r\n  color: #ffb100;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\">\r\n  <div class=\"container-fluid\">\r\n    <!-- Brand and toggle get grouped for better mobile display -->\r\n    <div id=\"navbar\" >\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\"\r\n                data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\" style=\"border: solid #00495C 1px;\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n      </div>\r\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n        <a routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\" class=\"navbar-brand\"\r\n           routerLink=\"/\">Latest</a>\r\n        <a routerLinkActive=\"active\" class=\"navbar-brand\" routerLink=\"/gallery\">Gallery</a>\r\n        <a routerLinkActive=\"active\" class=\"navbar-brand\" >About</a>\r\n        <a routerLinkActive=\"active\" class=\"navbar-brand\" routerLink=\"/calendar\">Calendar</a>\r\n        <div class=\"dropdown\" *ngIf=\"authService.loggedIn()\">\r\n          <a class=\"navbar-brand \" type=\"button\" data-toggle=\"dropdown\">Admin\r\n            <span class=\"caret\"></span></a>\r\n          <ul class=\"dropdown-menu\">\r\n            <li><a *ngIf=\"authService.loggedIn()\" routerLinkActive=\"active\" class=\"navbar-brand\"\r\n                   routerLink=\"/dashboard\">Dashboard</a>\r\n            </li>\r\n            <li><a *ngIf=\"authService.loggedIn()\" routerLinkActive=\"active\" class=\"navbar-brand\" routerLink=\"/profile\">Profile</a>\r\n            </li>\r\n            <li><a *ngIf=\"authService.loggedIn()\" class=\"navbar-brand\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div><!-- /.container-fluid -->\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by chq-keving on 7/14/2017.
 */




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessagesService) {
        this.authService = authService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessagesService.show('You have been logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/post/post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".post-block {\r\n\r\n}\r\n\r\nh3 {\r\n  font-size: 2em;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.weather-section {\r\n  line-height: 2em;\r\n}\r\n\r\n#post-header-section-vert {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n#post-header-section-hori {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.blog-post-image-vert {\r\n  margin-bottom: 10px;\r\n  margin-right: 10px;\r\n  width: 50%;\r\n  float: left\r\n}\r\n\r\n.blog-post-image-hori {\r\n  margin-bottom: 10px;\r\n  width: 100%;\r\n}\r\n\r\n#post-weather-image {\r\n  width: 10%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"\" class=\"blog-post\" *ngIf=\"selectedPost && selectedPost.layout === 'horizontal'\">\r\n  <div class=\"post-block\">\r\n    <div class=\"row\" id=\"post-header-section-hori\">\r\n      <div class=\"col-lg-10 col-md-10 col-sm-10 col-xs-12\">\r\n        <h3>{{selectedPost.title}}</h3>\r\n      </div>\r\n      <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-12 weather-section\">\r\n        <small>Posted by: {{selectedPost.author}} on {{formattedDate}}</small> -\r\n        <img id=\"post-weather-image\" src=\"{{formattedWeatherPhotoName}}\"/>\r\n        <small>{{selectedPost.temperature}}&#8457;</small>\r\n      </div>\r\n    </div>\r\n    <div><img class=\"blog-post-image-hori\" src=\"{{s3url}}{{selectedPost.photos[0]}}\"/>{{selectedPost.body}}\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-11 col-md-11 col-sm-11 col-xs-12\">\r\n        <p>Miles Since last Post: <strong>{{selectedPost.milesSinceLastPost}}</strong>.  Time spent biking: <strong>{{timeBiked}}</strong></p>\r\n      </div>\r\n      <div class=\"col-lg-11 col-md-11 col-sm-11 col-xs-12\">\r\n        <p>Tags: {{selectedPost.tags}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div style=\"\" class=\"blog-post\" *ngIf=\"selectedPost && selectedPost.layout === 'vertical'\">\r\n  <div class=\"post-block\">\r\n    <div class=\"row\" id=\"post-header-section-vert\">\r\n      <div class=\"col-lg-10 col-md-10 col-sm-10 col-xs-12\">\r\n        <h3>{{selectedPost.title}}</h3>\r\n      </div>\r\n      <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-12 weather-section\">\r\n        <small>Posted by: {{selectedPost.author}} on {{formattedDate}}</small> -\r\n        <img id=\"post-weather-image\" src=\"{{formattedWeatherPhotoName}}\"/>\r\n        <small>{{selectedPost.temperature}}&#8457;</small>\r\n      </div>\r\n    </div>\r\n    <div><img class=\"blog-post-image-vert\" src=\"{{s3url}}{{selectedPost.photos[0]}}\"/>{{selectedPost.body}}\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-11 col-md-11 col-sm-11 col-xs-12\">\r\n        <p>Miles Since last Post: <strong>{{selectedPost.milesSinceLastPost}}</strong>.  Time spent biking: <strong>{{timeBiked}}</strong></p>\r\n      </div>\r\n      <div class=\"col-lg-11 col-md-11 col-sm-11 col-xs-12\">\r\n        <p>Tags: {{selectedPost.tags}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__feed_feed_component__ = __webpack_require__("../../../../../src/app/components/feed/feed.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostComponent = (function () {
    function PostComponent() {
    }
    PostComponent.prototype.ngOnInit = function () {
        this.s3url = 'https://blog-post-photos.s3.amazonaws.com/';
        if (this.selectedPost.weatherCondition) {
            this.setWeatherPhoto();
        }
        if (this.selectedPost.date) {
            this.formattedDate = new Date(this.selectedPost.date).toLocaleString().split(',')[0];
        }
        if (this.selectedPost.timeBikedToday) {
            var hours = Math.floor(this.selectedPost.timeBikedToday / 60);
            var minutes = this.selectedPost.timeBikedToday % 60;
            this.timeBiked = hours + ' hours ' + minutes + ' minutes';
        }
    };
    PostComponent.prototype.setWeatherPhoto = function () {
        switch (this.selectedPost.weatherCondition[0]) {
            case 'Cloudy': {
                this.formattedWeatherPhotoName = '../../../assets/cloudy.png';
                return;
            }
            case 'Partly Cloudy': {
                this.formattedWeatherPhotoName = '../../../assets/partlycloudy.png';
                return;
            }
            case 'Sunny': {
                this.formattedWeatherPhotoName = '../../../assets/sunny.png';
                return;
            }
            case 'Rainy': {
                this.formattedWeatherPhotoName = '../../../assets/rain.png';
                return;
            }
            case 'Raining Cats and Dogs': {
                this.formattedWeatherPhotoName = '../../../assets/rainycats.png';
                return;
            }
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__feed_feed_component__["b" /* Post */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__feed_feed_component__["b" /* Post */]) === "function" && _a || Object)
    ], PostComponent.prototype, "selectedPost", void 0);
    PostComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-post',
            template: __webpack_require__("../../../../../src/app/components/post/post.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/post/post.component.css")]
        })
    ], PostComponent);
    return PostComponent;
    var _a;
}());

//# sourceMappingURL=post.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\" style=\"margin-bottom: 12em;\">\r\n  <h2 class=\"page-header\">Profile</h2>\r\n  <form (submit)=\"onSubmitEditUser()\">\r\n    <div class=\"form-group\">\r\n      <label>Name</label>\r\n      <input type=\"text\" [(ngModel)]=\"user.name\" name=\"name\" class=\"form-control\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Username</label>\r\n      <input type=\"text\" [(ngModel)]=\"user.username\" name=\"username\" class=\"form-control\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Password</label>\r\n      <input type=\"password\" [(ngModel)]=\"user.password\" name=\"password\" disabled readonly class=\"form-control\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Email</label>\r\n      <input type=\"text\" [(ngModel)]=\"user.email\" name=\"email\" class=\"form-control\">\r\n    </div>\r\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Edit User Details\">\r\n    <button class=\"btn-danger\" (click)=\"onDeleteUser()\" type=\"button\">Delete</button>\r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(authService, router, flashMessagesService) {
        this.authService = authService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            console.log(_this.user);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent.prototype.onDeleteUser = function () {
        var _this = this;
        this.authService.deleteUser(this.user._id).subscribe(function (response) {
            if (response.success) {
                _this.flashMessagesService.show(response.msg, {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.authService.logout();
                _this.router.navigate(['/home']);
            }
            else {
                _this.flashMessagesService.show(response.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
            }
        });
    };
    ProfileComponent.prototype.onSubmitEditUser = function () {
        var _this = this;
        this.authService.editUser(this.user).subscribe(function (response) {
            if (response.success) {
                _this.flashMessagesService.show(response.msg, {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
            }
            else {
                _this.flashMessagesService.show(response.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
            }
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\r\n<form (submit)=\"onRegisterSubmit()\">\r\n  <div class=\"form-group\">\r\n    <label>Name</label>\r\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Username</label>\r\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Password</label>\r\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Email</label>\r\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\r\n  </div>\r\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessagesService, authService, router) {
        this.validateService = validateService;
        this.flashMessagesService = flashMessagesService;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            password: this.password,
            username: this.username
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessagesService.show('Please fill out all fields.', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessagesService.show('Please enter a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                if (!data.userAlreadyExists) {
                    _this.router.navigate(['/login']);
                }
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());

//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.editUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('users/update', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.deleteUser = function (userId) {
        var body = {
            userId: userId
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('users/delete', body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('name', user.name);
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/post.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostService = (function () {
    function PostService(http) {
        this.http = http;
    }
    PostService.prototype.addToTotals = function (dataToAdd) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('posts/addToTotals', dataToAdd)
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.addPost = function (post) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('posts/add', post)
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.editPost = function (post) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('posts/edit', post, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.deletePhoto = function (photo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('photo/delete', { photo: photo }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.deletePost = function (postId) {
        var body = {
            postId: postId
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('posts/delete', body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.getAllPosts = function () {
        return this.http.get('posts/all')
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.getPostsByTag = function (tag) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        params.set('tag', tag);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]();
        requestOptions.params = params;
        return this.http.get('posts/filterByTag', requestOptions)
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.getPostsByDate = function (date) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        params.set('date', date);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]();
        requestOptions.params = params;
        return this.http.get('posts/filterByDate', requestOptions)
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.getTotals = function () {
        return this.http.get('posts/totals')
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.getPictures = function () {
        return this.http.get('posts/uploads/all')
            .map(function (res) { return res.json(); });
    };
    PostService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
    ], PostService);
    return PostService;
    var _a;
}());

//# sourceMappingURL=post.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name === undefined || user.name === '' ||
            user.username === undefined || user.username === '' ||
            user.password === undefined || user.password === '' ||
            user.email === undefined || user.email === '') {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery_src_jquery__ = __webpack_require__("../../../../jquery/src/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery_src_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery_src_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bootstrap_dist_js_bootstrap__ = __webpack_require__("../../../../bootstrap/dist/js/bootstrap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bootstrap_dist_js_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_bootstrap_dist_js_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");






if (__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map