webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

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

module.exports = "<div>\n  <a routerLink=\"/\"><img id=\"header-image\" src=\"../../../assets/header.jpg\" style=\"width:100%;\"></a>\n</div>\n<app-navbar></app-navbar>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n  <flash-messages></flash-messages>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NewlinePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewlinePipe = (function () {
    function NewlinePipe() {
    }
    NewlinePipe.prototype.transform = function (value, args) {
        return value.replace(/(?:\r\n|\r|\n)/g, '<br />');
    };
    NewlinePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'newLine', pure: false })
    ], NewlinePipe);
    return NewlinePipe;
}());

var AppComponent = (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'Adventure Blog';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
/* unused harmony export appRouting */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_post_page_post_page_component__ = __webpack_require__("../../../../../src/app/components/post-page/post-page.component.ts");
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
        path: 'post/:id',
        component: __WEBPACK_IMPORTED_MODULE_24__components_post_page_post_page_component__["a" /* PostPageComponent */]
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
var appRouting = __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
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
                __WEBPACK_IMPORTED_MODULE_7__app_component__["b" /* NewlinePipe */],
                __WEBPACK_IMPORTED_MODULE_20_ng2_file_upload__["FileSelectDirective"],
                __WEBPACK_IMPORTED_MODULE_21__components_gallery_gallery_component__["a" /* GalleryComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_calendar_calendar_component__["a" /* CalendarComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_post_page_post_page_component__["a" /* PostPageComponent */]
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
                __WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */],
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
exports.push([module.i, ".about-photo {\n  border-radius: 100%;\n  width: 70%;\n}\n\n#route-map {\n  width: 100%;\n  padding-top: 2em\n}\n\n.about-photo-container {\n  display: inherit;\n  height: 100%;\n}\n\n@media (min-width: 428px) {\n  .about-photo-container  {\n    height: 250px;\n    display: inline-table;\n  }\n}\n\n@media (min-width: 768px) {\n  .about-photo-container  {\n    height: 250px;\n    display: inherit;\n  }\n}\n\n@media (min-width: 992px) {\n  .about-photo-container  {\n    height: 250px;\n    display: inline-table;\n  }\n}\n\n@media (min-width: 1200px) {\n  .about-photo-container  {\n    height: 250px;\n    display: inline-table;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"text-align: center; margin-bottom: 10em;\">\n  <div class=\"row\">\n    <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n      <h1>About Us</h1>\n      <p>120 is the combined number of spokes on our wheels and the name of this website created to document our travels,\n        adventures, and mishaps by bicycle.  We are a Midwestern couple with cycling at our roots, harking back to our\n        early days side saddling together around Madison, WI, and Houston, TX.  This website is a collaboration project;\n        Kevin coded the majority of the site, while Sigrid designed the graphics and layout.\n        <br>\n        <br>\n        We are currently en route to San Francisco — on our first long distance bike tour from SEA to SAN — during a\n        brief hiatus between jobs and cities. Our route spans a little over 1000 miles down the coast, includes 3 states,\n        and will take us about one month to complete.  We are armed with Adventure Cycling Association maps, 5 panniers,\n        and the expectation that things can and will go wrong — which is half the fun of biking for us.  You can follow\n        our progress here, unless we are having too much fun to write, in which case you can use your imaginations. Happy trails!\n      </p>\n      <br>\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n          <div class=\"about-photo-container\">\n            <img src=\"../../../assets/sigrid.png\" class=\"about-photo\"/>\n          </div>\n          <h2>Sigrid Stensvold</h2>\n          <h4><strong>Cyclist, Writer, Designer, Aspiring Front-End Developer</strong></h4>\n          <p>Weighing in at 192 lbs (bike & gear included) from Ladysmith, WI, Sigrid discovered touring while\n            studying in Bologna, IT, when she and some friends attempted a short bike overnight. They found themselves\n            lost in the middle of a field at sunset, only to be saved by a friendly local cyclist. The experience,\n            along with a rural milk vending machine, made Sigrid fall cage over toes for the pace and the inevitable misadventures\n            of touring.\n          </p>\n        </div>\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n          <div class=\"about-photo-container\">\n            <img src=\"../../../assets/kevin.png\" class=\"about-photo\"/>\n          </div>\n          <h2>Kevin Gresmer</h2>\n          <h4><strong>Cyclist, Full Stack Developer, Designer (sort of), Writer </strong></h4>\n          <p>A group effort from Wisconsin, Illinois and Dubai was needed to raise this cyclist. Early on in life he\n            dreamed of playing in the NHL, but his love of Legos and lack of talent led to a career as an engineer. He\n            became a biker pretty early in life, but it wasn't until college when he would trek through snowy roads of\n            Wisconsin on his 1985 Schwinn that he realized, this is the way to travel. </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n      <img id=\"route-map\" src=\"../../../assets/map.jpg\" />\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_dist_css_bootstrap_css__ = __webpack_require__("../../../../bootstrap/dist/css/bootstrap.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_dist_css_bootstrap_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bootstrap_dist_css_bootstrap_css__);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
exports.push([module.i, ".cal-column {\n  width: 8%;\n  padding-top: 2%;\n  padding-bottom: 2%;\n  font-size: 1.2em;\n}\n\n\n\n@media (min-width: 428px) {\n  .cal-column {\n    width: 8%;\n    padding-top: 2%;\n    padding-bottom: 2%;\n    font-size: 1.2em;\n  }\n}\n\n@media (min-width: 780px) {\n  .cal-column {\n    width: 8%;\n    padding-top: 2%;\n    padding-bottom: 2%;\n    font-size: 1.2em;\n  }\n}\n\n@media (min-width: 992px) {\n  .cal-column {\n    width: 6%;\n    padding-top: 1.5%;\n    padding-bottom: 1.5%;\n    font-size: 1.4em;\n  }\n}\n\n@media (min-width: 1200px) {\n  .cal-column {\n    width: 6%;\n    padding-top: 1.5%;\n    padding-bottom: 1.5%;\n    font-size: 1.4em;\n  }\n}\n\n#calendar-container {\n  text-align: center;\n  margin-bottom: 5em;\n}\n\nbutton {\n  padding: 0;\n  border-radius: 100%;\n  background-color: #00495C;\n  color: white;\n}\n\nbutton:hover {\n  background-color: #ffb100;\n  color: black;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/calendar/calendar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div id=\"calendar-container\">\n    <div class=\"row\" style=\"text-align: center\">\n      <h3>August</h3>\n    </div>\n    <div class=\"row\">\n      <button class=\"cal-column\" style=\"visibility: hidden\"></button>\n      <button class=\"cal-column\" style=\"visibility: hidden\"></button>\n      <button class=\"cal-column\" style=\"visibility: hidden\"></button>\n      <button class=\"cal-column\" style=\"visibility: hidden\"></button>\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-8-24')\">\n        24\n      </button>\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-8-25')\">\n        25\n      </button>\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-8-26')\">\n        26\n      </button>\n    </div>\n    <div class=\"row\">\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-8-27')\">\n        27\n      </button>\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-8-28')\">\n        28\n      </button>\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-8-29')\">\n        29\n      </button>\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-8-30')\">\n        30\n      </button>\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-8-31')\">\n        31\n      </button>\n      <button class=\"cal-column\" style=\"visibility: hidden\"></button>\n      <button class=\"cal-column\" style=\"visibility: hidden\"></button>\n    </div>\n    <div class=\"row\" style=\"text-align: center;\">\n      <h3>September</h3>\n    </div>\n    <div class=\"row\">\n      <button class=\"cal-column\" style=\"visibility: hidden\"></button>\n      <button class=\"cal-column\" style=\"visibility: hidden\"></button>\n      <button class=\"cal-column\" style=\"visibility: hidden\"></button>\n      <button class=\"cal-column\" style=\"visibility: hidden\"></button>\n      <button class=\"cal-column\" style=\"visibility: hidden\"></button>\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-1')\">\n        1\n      </button>\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-2')\">\n        2\n      </button>\n    </div>\n    <div class=\"row\">\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-3')\">\n        3\n      </button>\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-4')\">\n        4\n      </button>\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-5')\">\n        5\n      </button>\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-6')\">\n        6\n      </button>\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-7')\">\n        7\n      </button>\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-8')\">\n        8\n      </button>\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-9')\">\n        9\n      </button>\n    </div>\n    <div class=\"row\">\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-10')\">\n        10\n      </button>\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-11')\">\n        11\n      </button>\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-12')\">\n        12\n      </button>\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-13')\">\n        13\n      </button>\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-14')\">\n        14\n      </button>\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-15')\">\n        15\n      </button>\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-16')\">\n        16\n      </button>\n    </div>\n    <div class=\"row\">\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-17')\">\n        17\n      </button>\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-18')\">\n        18\n      </button>\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-19')\">\n        19\n      </button>\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-20')\">\n        20\n      </button>\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-21')\">\n        21\n      </button>\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-22')\">\n        22\n      </button>\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-23')\">\n        23\n      </button>\n    </div>\n    <div class=\"row\">\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-24')\">\n        24\n      </button>\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-25')\">\n        25\n      </button>\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-26')\">\n        26\n      </button>\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-27')\">\n        27\n      </button>\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-28')\">\n        28\n      </button>\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-29')\">\n        29\n      </button>\n      <button class=\"cal-column\" (click)=\"showPostsOnDate('2017-9-30')\">\n        30\n      </button>\n    </div>\n  </div>\n</div>\n<div id=\"post-display\">\n  <div class=\"row\" *ngIf=\"posts.length > 0\">\n    <div class=\"col-xs-12 col-sm-9 col-md-9 col-lg-9 remove-padding\">\n      <div *ngFor=\"let post of posts\">\n        <div>\n          <app-post [selectedPost]=\"post\"></app-post>\n          <hr>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/calendar/calendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_dist_css_bootstrap_css__ = __webpack_require__("../../../../bootstrap/dist/css/bootstrap.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_dist_css_bootstrap_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bootstrap_dist_css_bootstrap_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
exports.push([module.i, ".post-submit-btn {\n  margin-bottom: 5em;\n}\n\n#display-delete-post {\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n<label>What would you like to do?</label>\n<select [(ngModel)]=\"postAction\" name=\"postAction\" (change)=\"updatePostForm()\">\n  <option value=\"\"></option>\n  <option value=\"edit\">Edit a Post</option>\n  <option value=\"delete\">Delete a Post</option>\n  <option value=\"create\">Create a Post</option>\n</select>\n\n<h2 *ngIf=\"postAction === 'create'\" class=\"page-header\">Create a post</h2>\n\n<div *ngIf=\"postAction === 'edit'\" class=\"editHeader\">\n  <h2 class=\"page-header\">Edit a post</h2>\n  <label>Select the post you would like to edit</label>\n  <select [(ngModel)]=\"postToEdit\" name=\"postToEdit\" (change)=\"updateEditPostData(post)\">\n    <option value=\"\"></option>\n    <option *ngFor=\"let post of posts\" [ngValue]=\"post\">{{post.title}}-{{post.date}}</option>\n  </select>\n</div>\n\n<div *ngIf=\"postAction === 'delete'\" class=\"deleteHeader dropdown\">\n  <h2 class=\"page-header\">Delete a post</h2>\n  <label>Select the post you would like to edit</label>\n  <select [(ngModel)]=\"postToDelete\" name=\"postToDelete\">\n    <option value=\"\"></option>\n    <option *ngFor=\"let post of posts\" [ngValue]=\"post\">\n      {{post.title}}-{{post.date}}\n    </option>\n  </select>\n\n  <div *ngIf=\"postToDelete\" id=\"display-delete-post\">\n    <p>{{postToDelete.title}}-{{postToDelete.date}}</p>\n    <button class=\"btn-danger\" (click)=\"deletePost(postToDelete)\">Delete</button>\n  </div>\n</div>\n\n<form *ngIf=\"(postAction === 'edit' && postToEdit) || postAction === 'create'\" (submit)=\"onSubmitPost()\">\n\n  <!-- Date -->\n  <div class=\"form-group\">\n    <label>Date</label>\n    <input type=\"date\" [(ngModel)]=\"currentPost.date\" name=\"date\" class=\"form-control\">\n  </div>\n\n  <!-- Post Title -->\n  <div class=\"form-group\">\n    <label>Title</label>\n    <input [(ngModel)]=\"currentPost.title\" name=\"newPost.title\" class=\"form-control\">\n  </div>\n\n  <!-- Body of the post -->\n  <div class=\"form-group\">\n    <label>Body</label>\n    <textarea [(ngModel)]=\"currentPost.body\" name=\"newPost.body\" class=\"form-control\" style=\"height: 10em;\"></textarea>\n  </div>\n\n  <!-- Add photos -->\n  <!-- Edit Photos -->\n  <div class=\"form-group\" *ngIf=\"postAction === 'edit'\">\n    <label>Existing Photos</label>\n    <div *ngFor=\"let photo of currentPost.photos\">\n      <p>{{photo}} <button type=\"button\" class=\"btn btn-danger\" (click)=\"deletePhoto(photo)\">Delete</button></p>\n    </div>\n    <p *ngIf=\"currentPost.photos && currentPost.photos.length === 0\">There are no photos attached to this post.</p>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"single\">Upload one photo at a time</label>\n    <input type=\"file\" class=\"form-control\" id=\"single\" name=\"single\" ng2FileSelect [uploader]=\"uploader\" />\n  </div>\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th width=\"50%\">Name</th>\n      <th>Size</th>\n      <th>Progress</th>\n      <th>Status</th>\n      <th>Actions</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let item of uploader.queue\">\n      <td><strong>{{ item.file.name }}</strong></td>\n      <td nowrap>{{ item.file.size/1024/1024 | number:'.2' }} MB</td>\n      <td>\n        <div class=\"progress\" style=\"margin-bottom: 0;\">\n          <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\n        </div>\n      </td>\n      <td class=\"text-center\">\n        <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\n        <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\n        <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\n      </td>\n      <td nowrap>\n        <button type=\"button\" class=\"btn btn-warning btn-xs\"\n                (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n          <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\n        </button>\n        <button type=\"button\" class=\"btn btn-danger btn-xs\"\n                (click)=\"item.remove()\">\n          <span class=\"glyphicon glyphicon-trash\"></span> Remove\n        </button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n  <!-- end of photo input -->\n\n  <!-- Tags -->\n  <div class=\"form-group\">\n    <label>Tags (comma separated)</label>\n    <input [(ngModel)]=\"currentPost.tags\" name=\"newPost.tags\" class=\"form-control\">\n  </div>\n  <!-- Time Biked Today in Minutes -->\n  <div class=\"form-group\">\n    <label>Total time biked today in minutes</label>\n    <input type=\"number\" [(ngModel)]=\"currentPost.timeBikedToday\" name=\"newPost.timeBikedToday\"\n           class=\"form-control\">\n  </div>\n  <!-- Miles biked since the last post (could be miles biked today) -->\n  <div class=\"form-group\">\n    <label>Miles Since Last Post  (could be miles biked today) </label>\n    <input type=\"number\" [(ngModel)]=\"currentPost.milesSinceLastPost\" name=\"newPost.milesSinceLastPost\"\n           class=\"form-control\">\n  </div>\n  <!-- Temperature -->\n  <div class=\"form-group\">\n    <label>Temperature</label>\n    <input type=\"number\" [(ngModel)]=\"currentPost.temperature\" name=\"newPost.temperature\" class=\"form-control\">\n  </div>\n  <!-- Weather Condition -->\n  <div class=\"form-group\">\n    <label>Weather Condition</label>\n    <select [(ngModel)]=\"currentPost.weatherCondition\" name=\"newPost.weatherCondition\">\n      <option *ngFor=\"let condition of weatherConditions\" [ngValue]=\"condition\">{{condition}}</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label>Horizontal or Vertical Layout</label>\n    <select [(ngModel)]=\"currentPost.layout\" name=\"newPost.layout\">\n      <option value=\"horizontal\">Horizontal</option>\n      <option value=\"vertical\">Vertical</option>\n    </select>\n  </div>\n  <!-- Author (defaults to name of the current user) -->\n  <div class=\"form-group\">\n    <label>Author (defaults to name of the current user)</label>\n    <input type=\"text\" [(ngModel)]=\"currentPost.author\" name=\"newPost.author\" class=\"form-control\">\n  </div>\n  <!-- submit button -->\n  <div *ngFor=\"let error of errorMessages\">\n    <p class=\"alert-danger\">{{error}}</p>\n  </div>\n  <input type=\"submit\" [disabled]=\"errorMessages.length > 0\" class=\"btn btn-primary post-submit-btn\" value=\"Submit\">\n</form>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TotalsAddition */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__feed_feed_component__ = __webpack_require__("../../../../../src/app/components/feed/feed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__);
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
        this.currentPost.comments = [];
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
        this.currentPost.comments = this.postToEdit.comments;
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
        this.currentPost.comments = [];
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
        var currentPost = this.currentPost;
        this.postService.deletePhoto(photo).subscribe(function (response) {
            if (response.success) {
                if (currentPost && currentPost.photos) {
                    currentPost.photos.splice(_this.currentPost.photos.indexOf(photo), 1);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
exports.push([module.i, ".selected {\n  background-color: #CFD8DC !important;\n}\n\n.display-post-thumbnail {\n  height: 5%;\n}\n\n.weather-section {\n  line-height: 2em;\n}\n\n.post-block {\n  padding-bottom: 1em;\n  border-bottom: solid 1px #00495C;\n  margin-bottom: 1em;\n}\n\n#post-weather-image {\n  width: 10%;\n}\n\n.blog-post-image-thumbnail {\n  padding-top: 5%;\n  width: 100%;\n}\n\n#tag-container {\n  display: inline-block;\n  padding: 5px;\n}\n\n.tag-link {\n  padding: 3px;\n}\n\n#search-button {\n  margin-top: 5px;\n  background-color: #00495C;\n  border: none;\n}\n\n.remove-padding {\n  padding: 0;\n}\n\n.totals-number {\n  font-size: 1.2em;\n  margin-bottom: 5em;\n}\n\n.totals-image {\n  margin-bottom: 5px;\n  width: 40%;\n}\n\n.total-miles-section {\n  padding-bottom: 1em;\n}\n\n#totals-display {\n  text-align: center;\n  position: relative;\n  right: -0%;\n  height:100%;\n}\n\n@media (min-width: 428px) {\n  #totals-display  {\n    position: relative;\n  }\n}\n\n@media (min-width: 780px) {\n  #totals-display  {\n    position: fixed;\n    right: -0%;\n  }\n}\n\n@media (min-width: 992px) {\n  #totals-display  {\n    position: fixed;\n    right: -0%;\n  }\n}\n\n@media (min-width: 1200px) {\n  #totals-display  {\n    position: fixed;\n    right: -0%;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/feed/feed.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"display: inline-block;\">\n  <ul class=\"pagination\" *ngIf=\"pageNumbers.length > 1\">\n    <li *ngFor=\"let page of pageNumbers\"><a href=\"#\" (click)=\"changePage(page)\">{{page}}</a></li>\n  </ul>\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-9 col-md-9 col-lg-9 remove-padding\">\n      <div *ngFor=\"let post of activePage\" class=\"display-post-thumbnail\">\n        <a [routerLink]=\"['/post', post._id]\" title=\"Click to read more\" data-toggle=\"tooltip\" data-placement=\"top\">\n          <div class=\"post-block\">\n            <div class=\"row\">\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-12 weather-section\">\n                <h3>{{post.title}}</h3><span [innerHtml]=\"post.body.split('. ')[0]\"></span>. . . . <small>(see more)</small>\n                <p>Miles Since last Post: <strong>{{post.milesSinceLastPost}}</strong><br>\n                  <small>Posted by: {{post.author}} on {{post.date.split('T')[0]}}</small>\n                  - <img id=\"post-weather-image\" src=\"{{formatPhotoName(post.weatherCondition[0])}}\"/>\n                  <small>{{post.temperature}}&#8457;</small>\n                </p>\n              </div>\n              <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12 weather-section\">\n                <img class=\"blog-post-image-thumbnail\" src=\"{{s3url}}{{post.photos[0]}}\"/>\n              </div>\n            </div>\n          </div>\n        </a>\n      </div>\n    </div>\n    <div class=\"col-xs-offset-3 col-xs-6 col-sm-3 col-md-3 col-lg-3\"\n         id=\"totals-display\" *ngIf=\"totals\">\n      <div style=\"background-color: #ffffff; padding: 1.5rem;\">\n        <div class=\"total-miles-section\">\n          <img src=\"../../../assets/bike.png\" class=\"totals-image\"> <br>\n          Total Miles Biked: <br>\n          <span class=\"totals-number\">{{totals.totalMilesBiked | number : '1.2-2'}}</span> <br>\n        </div>\n        <div class=\"total-time-section\">\n          <img src=\"../../../assets/clock.png\" class=\"totals-image\"> <br>\n          Total Time Biked: <br>\n          <span class=\"totals-number\">{{totalTimeBiked.days}}</span> days<br>\n          <span class=\"totals-number\">{{totalTimeBiked.hours}}</span> hrs<br>\n          <span class=\"totals-number\">{{totalTimeBiked.minutes}}</span> mins<br>\n        </div>\n        <hr>\n        <div id=\"search-section\">\n          <label>Search by Tag</label>\n          <br>\n          <div id=\"tag-container\">\n            <a *ngFor=\"let tag of filterTags\" href=\"#\" (click)=\"searchForTag(tag)\" class=\"tag-link\">\n              {{tag}}\n            </a>\n          </div>\n          <br>\n          <button id=\"search-button\" *ngIf=\"filteredPosts.length > 0\" (click)=\"clearSearchResults()\"\n                  class=\"btn btn-info\">\n            Clear Search Results\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <ul class=\"pagination\" *ngIf=\"pageNumbers.length > 1\">\n    <li *ngFor=\"let page of pageNumbers\"><a href=\"#\" (click)=\"changePage(page)\">{{page}}</a></li>\n  </ul>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/feed/feed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Post; });
/* unused harmony export Totals */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
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
        this.s3url = 'https://blog-post-photos.s3.amazonaws.com/';
        this.filteredPosts = [];
        this.mapOfPages = {};
        this.numOfPostsPerPage = 4;
        this.pageNumbers = [];
        this.filterTags = [];
        jQuery(document).ready(function () {
            jQuery('[data-toggle=tooltip]').hover(function () {
                // on mouseenter
                jQuery(this).tooltip('show');
            }, function () {
                // on mouseleave
                jQuery(this).tooltip('hide');
            });
        });
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
                _this.posts = response.posts.sort(function (a, b) {
                    var dateA = new Date(a.date), dateB = new Date(b.date);
                    return dateA - dateB;
                }).reverse();
                _this.visiblePosts = _this.posts;
                _this.setupPagination();
                _this.setFilterTags();
            }
        });
    };
    FeedComponent.prototype.setFilterTags = function () {
        var _this = this;
        for (var i = 0; i < this.activePage.length; i++) {
            if (this.activePage[i].tags && this.activePage[i].tags.length > 0) {
                this.activePage[i].tags.split(',').map(function (tag) {
                    if (_this.filterTags.indexOf(tag.trim()) < 0) {
                        _this.filterTags.push(tag.trim());
                    }
                });
            }
        }
    };
    FeedComponent.prototype.formatPhotoName = function (weatherCondition) {
        switch (weatherCondition) {
            case 'Cloudy': {
                return '../../../assets/cloudy.png';
            }
            case 'Partly Cloudy': {
                return '../../../assets/partlycloudy.png';
            }
            case 'Sunny': {
                return '../../../assets/sunny.png';
            }
            case 'Rainy': {
                return '../../../assets/rain.png';
            }
            case 'Raining Cats and Dogs': {
                return '../../../assets/rainycats.png';
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
                    _this.totalTimeBiked.hours = Math.floor((_this.totals.totalTimeBiked - _this.totalTimeBiked.days * 1440) / 60);
                    _this.totalTimeBiked.minutes = (_this.totals.totalTimeBiked - (_this.totalTimeBiked.days * 1440) - (_this.totalTimeBiked.hours * 60)) % 60;
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
        for (var i = 0; i < numOfPosts; i += this.numOfPostsPerPage) {
            this.mapOfPages[pageNumber] = this.visiblePosts.slice(i, i + this.numOfPostsPerPage);
            pageNumber++;
        }
        this.pageNumbers = Object.keys(this.mapOfPages);
        this.activePage = this.mapOfPages[1];
    };
    FeedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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

module.exports = "<ul class=\"nav navbar-nav\">\n  <li>\n    <a *ngIf=\"!authService.loggedIn()\" routerLinkActive=\"active\" class=\"navbar-brand\"\n         routerLink=\"/login\" style=\"color: darkgrey\">\n      Log In\n    </a>\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
exports.push([module.i, "\n.gallery-image {\n  width: 100%;\n  height: 10%;\n  padding: 1rem;\n  /*-moz-box-shadow: 2px 2px 7px rgba(0, 0, 0, .2);*/\n  /*-webkit-box-shadow: 2px 2px 7px rgba(0, 0, 0, .2);*/\n  /*box-shadow: 2px 2px 7px rgba(0, 0, 0, .2);*/\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<p><small>Click a photo to enlarge!</small></p>\n<div class=\"container\" style=\"margin-bottom: 10em;\">\n  <div class=\"row\">\n    <div class=\"col-xs-6 col-sm-6 col-md-3 col-lg-3\" style=\"text-align:center;\">\n      <div class=\"row\" *ngFor=\"let photo of photoGroupOne\">\n          <img (click)=\"showModal(s3url, photo.Key)\" class=\"gallery-image\"\n               src=\"{{s3url}}{{photo.Key}}\">\n      </div>\n    </div>\n    <div class=\"col-xs-6 col-sm-6 col-md-3 col-lg-3\" style=\"text-align:center;\">\n      <div class=\"row\" *ngFor=\"let photo of photoGroupTwo\">\n        <img (click)=\"showModal(s3url, photo.Key)\" class=\"gallery-image\" src=\"{{s3url}}{{photo.Key}}\">\n      </div>\n    </div>\n    <div class=\"col-xs-6 col-sm-6 col-md-3 col-lg-3\" style=\"text-align:center;\">\n      <div class=\"row\" *ngFor=\"let photo of photoGroupThree\">\n        <img (click)=\"showModal(s3url, photo.Key)\" class=\"gallery-image\" src=\"{{s3url}}{{photo.Key}}\">\n      </div>\n    </div>\n    <div class=\"col-xs-6 col-sm-6 col-md-3 col-lg-3\" style=\"text-align:center;\">\n      <div class=\"row\" *ngFor=\"let photo of photoGroupFour\">\n        <img (click)=\"showModal(s3url, photo.Key)\" class=\"gallery-image\" src=\"{{s3url}}{{photo.Key}}\">\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Creates the bootstrap modal where the image will appear -->\n<div class=\"modal fade\" id=\"imagemodal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"galleryImageModal\"\n     aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-body\">\n      <img [src]=\"imagePreview\" id=\"imagepreview\" style=\"width: 100%;\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
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
        this.numOfPostsPerPage = 4;
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
    GalleryComponent.prototype.changePage = function (pageNum) {
        this.activePage = this.mapOfPages[pageNum];
    };
    GalleryComponent.prototype.setupPagination = function () {
        var numOfPosts = this.visiblePosts.length;
        var pageNumber = 1;
        for (var i = 0, j = numOfPosts; i < numOfPosts; i += this.numOfPostsPerPage) {
            this.mapOfPages[pageNumber] = this.visiblePosts.slice(i, i + this.numOfPostsPerPage);
            pageNumber++;
        }
        this.pageNumbers = Object.keys(this.mapOfPages);
        this.activePage = this.mapOfPages[1];
    };
    GalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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

module.exports = "\n<div class=\"jumbotron text-center\">\n  <h1>Sigrid Likes Pancakes</h1>\n  <div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
exports.push([module.i, "#navbar {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.icon-bar {\n  background: #00495C;\n}\n\n.active {\n  color: #ffb100 !important;\n}\n\n.navbar-brand {\n  color: #00495C;\n}\n\n.navbar-brand:hover {\n  color: #ffb100;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div id=\"navbar\" >\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\"\n                data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\" style=\"border: solid #00495C 1px;\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n      </div>\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n        <a routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\" class=\"navbar-brand\"\n           routerLink=\"/\">Home</a>\n        <a routerLinkActive=\"active\" class=\"navbar-brand\" routerLink=\"/gallery\">Gallery</a>\n        <a routerLinkActive=\"active\" class=\"navbar-brand\" routerLink=\"/about\">About</a>\n        <a routerLinkActive=\"active\" class=\"navbar-brand\" routerLink=\"/calendar\">Calendar</a>\n        <div class=\"dropdown\" *ngIf=\"authService.loggedIn()\">\n          <a class=\"navbar-brand \" type=\"button\" data-toggle=\"dropdown\">Admin\n            <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a *ngIf=\"authService.loggedIn()\" routerLinkActive=\"active\" class=\"navbar-brand\"\n                   routerLink=\"/dashboard\">Dashboard</a>\n            </li>\n            <li><a *ngIf=\"authService.loggedIn()\" routerLinkActive=\"active\" class=\"navbar-brand\" routerLink=\"/profile\">Profile</a>\n            </li>\n            <li><a *ngIf=\"authService.loggedIn()\" class=\"navbar-brand\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n\n  </div><!-- /.container-fluid -->\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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

/***/ "../../../../../src/app/components/post-page/post-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selected {\n  background-color: #CFD8DC !important;\n}\n\n.pagination {\n  margin: 0;\n}\n\n#tag-container {\n  display: inline-block;\n  padding: 5px;\n}\n\n.tag-link {\n  padding: 3px;\n}\n\n#search-button {\n  margin-top: 5px;\n  background-color: #00495C;\n  border: none;\n}\n\n.remove-padding {\n  padding: 0;\n}\n\n.totals-number {\n  font-size: 1.2em;\n  margin-bottom: 5em;\n}\n\n.totals-image {\n  margin-bottom: 5px;\n  width: 40%;\n}\n\n.total-miles-section {\n  padding-bottom: 1em;\n}\n\n#totals-display {\n  text-align: center;\n  position: relative;\n  right: -0%;\n  height:100%;\n}\n\n@media (min-width: 428px) {\n  #totals-display  {\n    position: relative;\n  }\n}\n\n@media (min-width: 780px) {\n  #totals-display  {\n    position: fixed;\n    right: -0%;\n  }\n}\n\n@media (min-width: 992px) {\n  #totals-display  {\n    position: fixed;\n    right: -0%;\n  }\n}\n\n@media (min-width: 1200px) {\n  #totals-display  {\n    position: fixed;\n    right: -0%;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/post-page/post-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"display: inline-block;\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-9 col-md-9 col-lg-9 remove-padding\" *ngIf=\"activePost\">\n      <div *ngIf=\"previousPost && nextPost\">\n        <a class=\"pull-right\" [routerLink]=\"['/post', nextPost._id]\" (click)=\"removedPostFromPage()\" >&nbsp;| Next Day</a>\n        <a class=\"pull-right\" [routerLink]=\"['/post', previousPost._id]\" (click)=\"removedPostFromPage()\" >Previous Day</a>\n      </div>\n      <div *ngIf=\"previousPost && !nextPost\">\n        <a class=\"pull-right\" [routerLink]=\"['/post', previousPost._id]\" (click)=\"removedPostFromPage()\" >Previous Day</a>\n      </div>\n      <div *ngIf=\"!previousPost && nextPost\">\n        <a class=\"pull-right\" [routerLink]=\"['/post', nextPost._id]\" (click)=\"removedPostFromPage()\" >Next Day</a>\n      </div>\n        <app-post [selectedPost]=\"activePost\"></app-post>\n        <hr>\n    </div>\n    <div class=\"col-xs-offset-3 col-xs-6 col-sm-3 col-md-3 col-lg-3\"\n         id=\"totals-display\" *ngIf=\"totals\">\n      <div style=\"background-color: #ffffff; padding: 1.5rem;\">\n        <div class=\"total-miles-section\">\n          <img src=\"../../../assets/bike.png\" class=\"totals-image\"> <br>\n          Total Miles Biked: <br>\n          <span class=\"totals-number\">{{totals.totalMilesBiked | number : '1.2-2'}}</span> <br>\n        </div>\n        <div class=\"total-time-section\">\n          <img src=\"../../../assets/clock.png\" class=\"totals-image\"> <br>\n          Total Time Biked: <br>\n          <span class=\"totals-number\">{{totalTimeBiked.days}}</span> days<br>\n          <span class=\"totals-number\">{{totalTimeBiked.hours}}</span> hrs<br>\n          <span class=\"totals-number\">{{totalTimeBiked.minutes}}</span> mins<br>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/post-page/post-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Totals */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__feed_feed_component__ = __webpack_require__("../../../../../src/app/components/feed/feed.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Totals = (function () {
    function Totals() {
    }
    return Totals;
}());

var PostPageComponent = (function () {
    function PostPageComponent(postService, flashMessagesService, route) {
        this.postService = postService;
        this.flashMessagesService = flashMessagesService;
        this.route = route;
        this.totalTimeBiked = { days: 0, hours: 0, minutes: 0 };
    }
    PostPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nextPost = null;
        this.previousPost = null;
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.postService.getPostById(id).subscribe(function (response) {
                if (response.success) {
                    _this.activePost = response.post;
                    if (_this.activePost.weatherCondition) {
                        _this.setWeatherPhoto();
                    }
                    if (_this.activePost.date) {
                        _this.activePost.date = _this.activePost.date.split('T')[0];
                    }
                    var currentDate = new Date(_this.activePost.date);
                    var previousDayDate = new Date(currentDate.getTime() - (24 * 60 * 60 * 1000)).toISOString().split('T')[0];
                    var nextDayDate = new Date(currentDate.getTime() + (24 * 60 * 60 * 1000)).toISOString().split('T')[0];
                    _this.postService.getPostsByDate(previousDayDate).subscribe(function (response) {
                        if (response.success && response.posts.length > 0) {
                            _this.previousPost = response.posts[response.posts.length - 1];
                        }
                        else {
                            _this.previousPost = null;
                        }
                    });
                    _this.postService.getPostsByDate(nextDayDate).subscribe(function (response) {
                        if (response.success && response.posts.length > 0) {
                            _this.nextPost = response.posts[response.posts.length - 1];
                        }
                        else {
                            _this.nextPost = null;
                        }
                    });
                }
                else {
                    _this.flashMessagesService.show('I\'m Sorry. I seem to have misplaced that post. ', {
                        cssClass: 'alert-danger',
                        timeout: 5000
                    });
                }
            });
        });
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
    };
    PostPageComponent.prototype.getTotals = function () {
        var _this = this;
        this.postService.getTotals().subscribe(function (response) {
            if (response.success) {
                _this.totals = response.totals;
                if (_this.totals.totalTimeBiked) {
                    _this.totalTimeBiked.days = Math.floor(_this.totals.totalTimeBiked / 1440);
                    _this.totalTimeBiked.hours = Math.floor((_this.totals.totalTimeBiked - _this.totalTimeBiked.days * 1440) / 60);
                    _this.totalTimeBiked.minutes = (_this.totals.totalTimeBiked - (_this.totalTimeBiked.days * 1440) - (_this.totalTimeBiked.hours * 60)) % 60;
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
    PostPageComponent.prototype.removedPostFromPage = function () {
        this.activePost = new __WEBPACK_IMPORTED_MODULE_4__feed_feed_component__["b" /* Post */]();
    };
    PostPageComponent.prototype.setWeatherPhoto = function () {
        switch (this.activePost.weatherCondition[0]) {
            case 'Cloudy': {
                this.activePost.weatherCondition = '../../../assets/cloudy.png';
                return;
            }
            case 'Partly Cloudy': {
                this.activePost.weatherCondition = '../../../assets/partlycloudy.png';
                return;
            }
            case 'Sunny': {
                this.activePost.weatherCondition = '../../../assets/sunny.png';
                return;
            }
            case 'Rainy': {
                this.activePost.weatherCondition = '../../../assets/rain.png';
                return;
            }
            case 'Raining Cats and Dogs': {
                this.activePost.weatherCondition = '../../../assets/rainycats.png';
                return;
            }
        }
    };
    PostPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-post-page',
            template: __webpack_require__("../../../../../src/app/components/post-page/post-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/post-page/post-page.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
    ], PostPageComponent);
    return PostPageComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=post-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/post/post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".post-block {\n\n}\n\nh3 {\n  font-size: 2em;\n  margin-bottom: 0;\n}\n\n.weather-section {\n  line-height: 2em;\n}\n\n#post-header-section-vert {\n  margin-bottom: 15px;\n}\n\ndiv.white-space-pre-wrap {\n  white-space: pre-wrap;\n}\n\n#post-header-section-hori {\n  margin-bottom: 15px;\n}\n\n.blog-post-image-vert {\n  margin-bottom: 10px;\n  margin-right: 10px;\n  width: 50%;\n  float: left\n}\n\n.blog-post-image-hori {\n  margin-bottom: 10px;\n  width: 100%;\n}\n\n#post-weather-image {\n  width: 10%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"\" class=\"blog-post\">\n  <div class=\"post-block\">\n    <div *ngIf=\"selectedPost && selectedPost.layout === 'vertical'\">\n      <div class=\"row\" id=\"post-header-section-vert\">\n        <div class=\"col-lg-10 col-md-10 col-sm-10 col-xs-12\">\n          <h3>{{selectedPost.title}}</h3>\n        </div>\n        <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-12 weather-section\">\n          <small>Posted by: {{selectedPost.author}} on {{selectedPost.date}}</small>\n          -\n          <img id=\"post-weather-image\" src=\"{{selectedPost.weatherCondition}}\"/>\n          <small>{{selectedPost.temperature}}&#8457;</small>\n        </div>\n      </div>\n      <div><img class=\"blog-post-image-vert\" src=\"{{s3url}}{{selectedPost.photos[0]}}\"/>\n        <span class=\"white-space-pre-wrap\" [innerHtml]=\"selectedPost.body | newLine\"></span>\n      </div>\n    </div>\n    <div *ngIf=\"selectedPost && selectedPost.layout === 'horizontal'\">\n      <div class=\"row\" id=\"post-header-section-hori\">\n        <div class=\"col-lg-10 col-md-10 col-sm-10 col-xs-12\">\n          <h3>{{selectedPost.title}}</h3>\n        </div>\n        <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-12 weather-section\">\n          <small>Posted by: {{selectedPost.author}} on {{selectedPost.date}}</small>\n          -\n          <img id=\"post-weather-image\" src=\"{{selectedPost.weatherCondition}}\"/>\n          <small>{{selectedPost.temperature}}&#8457;</small>\n        </div>\n      </div>\n      <div><img class=\"blog-post-image-hori\" src=\"{{s3url}}{{selectedPost.photos[0]}}\"/>\n        <span class=\"white-space-pre-wrap\" [innerHtml]=\"selectedPost.body | newLine\"></span>\n      </div>\n    </div>\n    <br>\n    <div class=\"row\">\n      <div class=\"col-lg-11 col-md-11 col-sm-11 col-xs-12\">\n        <p>Miles Since last Post: <strong>{{selectedPost.milesSinceLastPost}}</strong>. Time spent biking: <strong>{{timeBiked}}</strong>\n        </p>\n      </div>\n      <div class=\"col-lg-11 col-md-11 col-sm-11 col-xs-12\">\n        <p>Tags: {{selectedPost.tags}}</p>\n      </div>\n    </div>\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-lg-11 col-md-11 col-sm-11 col-xs-12\">\n        <div *ngFor=\"let comment of selectedPost.comments\">\n          <p>{{comment.text}}<br>\n            &nbsp;&nbsp;&nbsp;&nbsp;<small> - {{comment.author}}</small></p>\n        </div>\n        <label for=\"new-comment-author\"><small>Your name/display name:</small></label><br>\n        <input [(ngModel)]=\"newCommentAuthor\" id=\"new-comment-author\" placeholder=\"Your name\"/><br>\n        <label for=\"new-comment\"><small>Comment (Warning: C Coding in the woods and haven't implemented the edit or delete comment functionality yet):</small></label><br>\n        <input id=\"new-comment\" [(ngModel)]=\"newComment\" placeholder=\"Comment\"/><br>\n        <button (click)=\"submitComment()\" class=\"btn\">Submit</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__feed_feed_component__ = __webpack_require__("../../../../../src/app/components/feed/feed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
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
    function PostComponent(postService, flashMessagesService) {
        this.postService = postService;
        this.flashMessagesService = flashMessagesService;
        this.postService = postService;
        this.flashMessagesService = flashMessagesService;
    }
    PostComponent.prototype.ngOnInit = function () {
        this.newComment = null;
        this.newCommentAuthor = null;
        this.s3url = 'https://blog-post-photos.s3.amazonaws.com/';
        if (this.selectedPost.weatherCondition) {
            this.setWeatherPhoto();
        }
        if (this.selectedPost.date) {
            this.formattedDate = this.selectedPost.date.split('T')[0];
        }
        if (this.selectedPost.timeBikedToday) {
            var hours = Math.floor(this.selectedPost.timeBikedToday / 60);
            var minutes = this.selectedPost.timeBikedToday % 60;
            this.timeBiked = hours + ' hours ' + minutes + ' minutes';
        }
        else {
            this.timeBiked = '0 hours 0 minutes';
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
    PostComponent.prototype.submitComment = function () {
        var _this = this;
        if (!this.newComment || !this.newCommentAuthor) {
            this.flashMessagesService.show('Please add a name to be displayed and a comment', {
                cssClass: 'alert-success',
                timeout: 4000
            });
            return;
        }
        var comment = {
            text: this.newComment,
            author: this.newCommentAuthor
        };
        this.selectedPost.comments.push(comment);
        this.postService.editPost(this.selectedPost).subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show('Comment was Added.', {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.newComment = null;
                _this.newCommentAuthor = null;
            }
            else {
                _this.flashMessagesService.show('I messed something up. Refresh the page and try again?', {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__feed_feed_component__["b" /* Post */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__feed_feed_component__["b" /* Post */]) === "function" && _a || Object)
    ], PostComponent.prototype, "selectedPost", void 0);
    PostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-post',
            template: __webpack_require__("../../../../../src/app/components/post/post.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/post/post.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
    ], PostComponent);
    return PostComponent;
    var _a, _b, _c;
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

module.exports = "<div *ngIf=\"user\" style=\"margin-bottom: 12em;\">\n  <h2 class=\"page-header\">Profile</h2>\n  <form (submit)=\"onSubmitEditUser()\">\n    <div class=\"form-group\">\n      <label>Name</label>\n      <input type=\"text\" [(ngModel)]=\"user.name\" name=\"name\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Username</label>\n      <input type=\"text\" [(ngModel)]=\"user.username\" name=\"username\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Password</label>\n      <input type=\"password\" [(ngModel)]=\"user.password\" name=\"password\" disabled readonly class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Email</label>\n      <input type=\"text\" [(ngModel)]=\"user.email\" name=\"email\" class=\"form-control\">\n    </div>\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Edit User Details\">\n    <button class=\"btn-danger\" (click)=\"onDeleteUser()\" type=\"button\">Delete</button>\n  </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
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
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
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
        return this.http.put('posts/photo/delete', { photo: photo }, { headers: headers })
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
    PostService.prototype.getPostById = function (id) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        params.set('id', id);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]();
        requestOptions.params = params;
        return this.http.get('posts/id', requestOptions)
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map