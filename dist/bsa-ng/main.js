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
		var e = new Error('Cannot find module "' + req + '".');
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
/* harmony import */ var _forget_pass_forgot_pass_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forget-pass/forgot-pass.component */ "./src/app/forget-pass/forgot-pass.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _forget_pass_new_pass_new_pass_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forget-pass/new-pass/new-pass.component */ "./src/app/forget-pass/new-pass/new-pass.component.ts");
/* harmony import */ var _forget_pass_captcha_captcha_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forget-pass/captcha/captcha.component */ "./src/app/forget-pass/captcha/captcha.component.ts");
/* harmony import */ var _guards_new_pass_guard_new_pass_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/new-pass-guard/new-pass.guard */ "./src/app/guards/new-pass-guard/new-pass.guard.ts");
/* harmony import */ var _guards_dashboard_dashboard_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards/dashboard/dashboard.guard */ "./src/app/guards/dashboard/dashboard.guard.ts");
/* harmony import */ var _guards_forms_forms_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guards/forms/forms.guard */ "./src/app/guards/forms/forms.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], canActivate: [_guards_dashboard_dashboard_guard__WEBPACK_IMPORTED_MODULE_9__["DashboardGuard"]] },
    {
        path: 'forget-pass',
        component: _forget_pass_forgot_pass_component__WEBPACK_IMPORTED_MODULE_2__["ForgotPassComponent"],
        canActivate: [_guards_forms_forms_guard__WEBPACK_IMPORTED_MODULE_10__["FormsGuard"]],
        children: [
            { path: '', component: _forget_pass_captcha_captcha_component__WEBPACK_IMPORTED_MODULE_7__["CaptchaComponent"] },
            { path: 'new-pass', component: _forget_pass_new_pass_new_pass_component__WEBPACK_IMPORTED_MODULE_6__["NewPassComponent"], canActivate: [_guards_new_pass_guard_new_pass_guard__WEBPACK_IMPORTED_MODULE_8__["NewPassGuard"]] }
        ],
    },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], canActivate: [_guards_forms_forms_guard__WEBPACK_IMPORTED_MODULE_10__["FormsGuard"]] },
    { path: 'registration', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"], canActivate: [_guards_forms_forms_guard__WEBPACK_IMPORTED_MODULE_10__["FormsGuard"]] }
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _services_user_service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/user-service/user.service */ "./src/app/services/user-service/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(userService) {
        this.userService = userService;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.userService.setDefaultUsers();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _forget_pass_forgot_pass_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forget-pass/forgot-pass.component */ "./src/app/forget-pass/forgot-pass.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_date_picker_service_date_picker_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/date-picker-service/date-picker.service */ "./src/app/services/date-picker-service/date-picker.service.ts");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/index.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ng_recaptcha__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _forget_pass_new_pass_new_pass_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./forget-pass/new-pass/new-pass.component */ "./src/app/forget-pass/new-pass/new-pass.component.ts");
/* harmony import */ var _forget_pass_captcha_captcha_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./forget-pass/captcha/captcha.component */ "./src/app/forget-pass/captcha/captcha.component.ts");
/* harmony import */ var _services_validation_form_validation_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/validation/form-validation.service */ "./src/app/services/validation/form-validation.service.ts");
/* harmony import */ var _guards_new_pass_guard_new_pass_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./guards/new-pass-guard/new-pass.guard */ "./src/app/guards/new-pass-guard/new-pass.guard.ts");
/* harmony import */ var _services_user_service_user_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/user-service/user.service */ "./src/app/services/user-service/user.service.ts");
/* harmony import */ var _guards_forms_forms_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./guards/forms/forms.guard */ "./src/app/guards/forms/forms.guard.ts");
/* harmony import */ var _guards_dashboard_dashboard_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./guards/dashboard/dashboard.guard */ "./src/app/guards/dashboard/dashboard.guard.ts");
/* harmony import */ var _timer_module_timer_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./timer-module/timer.module */ "./src/app/timer-module/timer.module.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _forget_pass_forgot_pass_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPassComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
                _forget_pass_new_pass_new_pass_component__WEBPACK_IMPORTED_MODULE_13__["NewPassComponent"],
                _forget_pass_captcha_captcha_component__WEBPACK_IMPORTED_MODULE_14__["CaptchaComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                ng_recaptcha__WEBPACK_IMPORTED_MODULE_11__["RecaptchaModule"].forRoot(),
                _timer_module_timer_module__WEBPACK_IMPORTED_MODULE_20__["TimerModule"]
            ],
            providers: [_services_date_picker_service_date_picker_service__WEBPACK_IMPORTED_MODULE_10__["DatePickerService"], _services_validation_form_validation_service__WEBPACK_IMPORTED_MODULE_15__["FormValidationService"], _guards_new_pass_guard_new_pass_guard__WEBPACK_IMPORTED_MODULE_16__["NewPassGuard"], _services_user_service_user_service__WEBPACK_IMPORTED_MODULE_17__["UserService"], _guards_forms_forms_guard__WEBPACK_IMPORTED_MODULE_18__["FormsGuard"], _guards_dashboard_dashboard_guard__WEBPACK_IMPORTED_MODULE_19__["DashboardGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group color=\"accent\">\r\n  <mat-tab label=\"Menu\">\r\n    <button mat-button [matMenuTriggerFor]=\"menu1\">Items</button>\r\n    <mat-menu #menu1=\"matMenu\">\r\n      <button mat-menu-item>Item 1</button>\r\n      <button mat-menu-item>Item 2</button>\r\n    </mat-menu>\r\n\r\n    <button mat-button [matMenuTriggerFor]=\"menu2\">Items</button>\r\n    <mat-menu #menu2=\"matMenu\">\r\n      <button mat-menu-item>Item 1</button>\r\n      <button mat-menu-item>Item 2</button>\r\n    </mat-menu>\r\n\r\n    <button mat-button [matMenuTriggerFor]=\"menu3\">Items</button>\r\n    <mat-menu #menu3=\"matMenu\">\r\n      <button mat-menu-item>Item 1</button>\r\n      <button mat-menu-item>Item 2</button>\r\n    </mat-menu>\r\n  </mat-tab>\r\n  <mat-tab label=\"Logout\">\r\n    <button mat-stroked-button color=\"warn\" (click)=\"logout()\">Confirm</button>\r\n  </mat-tab>\r\n  <mat-tab label=\"Item\">\r\n    <button mat-button>Item</button>\r\n    <button mat-button>Item</button>\r\n  </mat-tab>\r\n  <mat-tab label=\"Item\">\r\n    <button mat-button>Item</button>\r\n    <button mat-button>Item</button>\r\n    <button mat-button>Item</button>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n<div class=\"content\">\r\n  <mat-card class=\"card\">\r\n    <mat-card-header>\r\n      <mat-card-title><h3>User Profile</h3></mat-card-title>\r\n      <mat-card-subtitle><h4>Your info</h4></mat-card-subtitle>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <table>\r\n        <tr>\r\n          <td>Name:</td>\r\n          <td>\r\n            <span *ngIf=\"!edit\">{{user.name}}</span>\r\n            <mat-form-field *ngIf=\"edit\">\r\n              <input matInput #name id=\"name\" [formControl]=\"text_field\" placeholder=\"Enter your name\" required>\r\n              <mat-icon matSuffix>mode_edit</mat-icon>\r\n              <mat-error *ngIf=\"text_field.invalid\">{{getErrorMsg()}}</mat-error>\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Surname:</td>\r\n          <td>\r\n            <span *ngIf=\"!edit\">{{user.surname}}</span>\r\n            <mat-form-field *ngIf=\"edit\">\r\n              <input matInput #surname [formControl]=\"text_field1\" placeholder=\"Enter your surname\" required>\r\n              <mat-icon matSuffix>mode_edit</mat-icon>\r\n              <mat-error *ngIf=\"text_field1.invalid\">{{getErrorMsg()}}</mat-error>\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Date of birth:</td>\r\n          <td>{{user.date}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td>Email:</td>\r\n          <td>{{user.email}}</td>\r\n        </tr>\r\n      </table>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <button mat-stroked-button (click)=\"edit=!edit\" *ngIf=\"!edit\">EDIT</button>\r\n      <button mat-stroked-button color=\"warn\" (click)=\"edit=!edit\" *ngIf=\"edit\">CANCEL</button>\r\n      <button mat-raised-button color=\"accent\" (click)=\"saveProfileChanges(text_field.value, text_field1.value)\" *ngIf=\"edit\">SAVE</button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n  <app-timer></app-timer>\r\n</div>\r\n<div class=\"table\">\r\n  <mat-form-field>\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n  </mat-form-field>\r\n  <div class=\"mat-elevation-z8\">\r\n    <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n      <!-- ID Column -->\r\n      <ng-container matColumnDef=\"id\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> ID</th>\r\n        <td mat-cell *matCellDef=\"let row\"> {{row.id}}</td>\r\n      </ng-container>\r\n\r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"name\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Name</th>\r\n        <td mat-cell *matCellDef=\"let row\"> {{row.name}}</td>\r\n      </ng-container>\r\n\r\n      <!-- Surname Column -->\r\n      <ng-container matColumnDef=\"surname\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Surname</th>\r\n        <td mat-cell *matCellDef=\"let row\"> {{row.surname}}</td>\r\n      </ng-container>\r\n\r\n      <!-- Email Column -->\r\n      <ng-container matColumnDef=\"email\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Email</th>\r\n        <td mat-cell *matCellDef=\"let row\"> {{row.email}}</td>\r\n      </ng-container>\r\n\r\n      <!-- Date Column -->\r\n      <ng-container matColumnDef=\"date\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Date</th>\r\n        <td mat-cell *matCellDef=\"let row\"> {{row.date}}</td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </tr>\r\n    </table>\r\n\r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n  </div>\r\n</div>\r\n<mat-toolbar color=\"accent\">\r\n  <mat-toolbar-row>\r\n    <span>Copyright © 2018 NukeMyHome Technologies</span>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\nth.mat-sort-header-sorted {\n  color: black; }\n\n.card {\n  max-width: 300px;\n  margin-top: 10px;\n  margin-bottom: 10px; }\n\n.content {\n  display: flex;\n  justify-content: space-around; }\n\n.table {\n  margin-left: 10px;\n  margin-right: 10px; }\n\nfooter {\n  height: 50px;\n  background-color: whitesmoke;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_user_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user-service/user.service */ "./src/app/services/user-service/user.service.ts");
/* harmony import */ var _services_validation_form_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/validation/form-validation.service */ "./src/app/services/validation/form-validation.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(userService, formValidation, router) {
        this.userService = userService;
        this.formValidation = formValidation;
        this.router = router;
        this.edit = false;
        this.displayedColumns = ['id', 'name', 'surname', 'email', 'date'];
        // из-а того что ведут себя как будто связаны по ссылке
        this.text_field = formValidation.text_field;
        this.text_field1 = formValidation._text_field;
        this.getErrorMsg = formValidation.getEmptyFieldErrorMessage;
        this.user = userService.getUserLoggedIn();
        var users = JSON.parse(localStorage.getItem('users'));
        // Assign the data to the data source for the table to render
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](users);
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('last_user'));
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    DashboardComponent.prototype.saveProfileChanges = function (name, surname) {
        if (name && surname) {
            this.edit = !this.edit;
            this.user.name = name;
            this.user.surname = surname;
            localStorage.setItem('last_user', JSON.stringify(this.user));
        }
        else {
            alert('Provide values or cancel');
        }
    };
    DashboardComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    DashboardComponent.prototype.logout = function () {
        var guard = {
            'dashboard': false,
            'forms': true,
            'new-pass': false
        };
        localStorage.setItem('guard', JSON.stringify(guard));
        this.router.navigate(['login']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], DashboardComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], DashboardComponent.prototype, "sort", void 0);
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_validation_form_validation_service__WEBPACK_IMPORTED_MODULE_3__["FormValidationService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/forget-pass/captcha/captcha.component.html":
/*!************************************************************!*\
  !*** ./src/app/forget-pass/captcha/captcha.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card\">\n  <mat-card-header>\n    <mat-card-title><h3>Are you sure you are not robot?</h3></mat-card-title>\n    <mat-card-subtitle><h4>If you pass, you will know for sure</h4></mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n      <img src=\"../../assets/captcha.gif\" alt=\"captcha\">\n      <mat-form-field class=\"field-full-width\">\n        <input matInput placeholder=\"Enter captcha text\" required (keyup)=\"checkCaptcha($event)\">\n      </mat-form-field>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/forget-pass/captcha/captcha.component.scss":
/*!************************************************************!*\
  !*** ./src/app/forget-pass/captcha/captcha.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Encode+Sans+Condensed);\n@import url(https://fonts.googleapis.com/css?family=Roboto);\na, li, span, button, td {\n  font-family: 'Encode Sans Condensed', sans-serif !important; }\nh1, h2, h3, h4, h5, h6, .mat-card-title, .mat-card-subtitle, .mat-tab-label-content, .mat-sort-header-button {\n  font-family: 'Roboto', sans-serif !important; }\ntd, th {\n  font-size: 16px !important; }\nform {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n.field-full-width {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/forget-pass/captcha/captcha.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/forget-pass/captcha/captcha.component.ts ***!
  \**********************************************************/
/*! exports provided: CaptchaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptchaComponent", function() { return CaptchaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_new_pass_guard_new_pass_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../guards/new-pass-guard/new-pass.guard */ "./src/app/guards/new-pass-guard/new-pass.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CaptchaComponent = /** @class */ (function () {
    function CaptchaComponent(router, newPassGuard) {
        this.router = router;
        this.newPassGuard = newPassGuard;
    }
    CaptchaComponent.prototype.checkCaptcha = function (event) {
        if (event.target.value === "don't type") {
            var guard = {
                'dashboard': false,
                'forms': true,
                'new_pass': true
            };
            localStorage.setItem('guard', JSON.stringify(guard));
            this.router.navigate(['forget-pass/new-pass']);
        }
    };
    CaptchaComponent.prototype.ngOnInit = function () {
    };
    CaptchaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-captcha',
            template: __webpack_require__(/*! ./captcha.component.html */ "./src/app/forget-pass/captcha/captcha.component.html"),
            styles: [__webpack_require__(/*! ./captcha.component.scss */ "./src/app/forget-pass/captcha/captcha.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _guards_new_pass_guard_new_pass_guard__WEBPACK_IMPORTED_MODULE_2__["NewPassGuard"]])
    ], CaptchaComponent);
    return CaptchaComponent;
}());



/***/ }),

/***/ "./src/app/forget-pass/forgot-pass.component.html":
/*!********************************************************!*\
  !*** ./src/app/forget-pass/forgot-pass.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/forget-pass/forgot-pass.component.scss":
/*!********************************************************!*\
  !*** ./src/app/forget-pass/forgot-pass.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Encode+Sans+Condensed);\n@import url(https://fonts.googleapis.com/css?family=Roboto);\na, li, span, button, td {\n  font-family: 'Encode Sans Condensed', sans-serif !important; }\nh1, h2, h3, h4, h5, h6, .mat-card-title, .mat-card-subtitle, .mat-tab-label-content, .mat-sort-header-button {\n  font-family: 'Roboto', sans-serif !important; }\ntd, th {\n  font-size: 16px !important; }\nform {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n.field-full-width {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/forget-pass/forgot-pass.component.ts":
/*!******************************************************!*\
  !*** ./src/app/forget-pass/forgot-pass.component.ts ***!
  \******************************************************/
/*! exports provided: ForgotPassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPassComponent", function() { return ForgotPassComponent; });
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

var ForgotPassComponent = /** @class */ (function () {
    function ForgotPassComponent() {
    }
    ForgotPassComponent.prototype.ngOnInit = function () {
    };
    ForgotPassComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forget-pass',
            template: __webpack_require__(/*! ./forgot-pass.component.html */ "./src/app/forget-pass/forgot-pass.component.html"),
            styles: [__webpack_require__(/*! ./forgot-pass.component.scss */ "./src/app/forget-pass/forgot-pass.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ForgotPassComponent);
    return ForgotPassComponent;
}());



/***/ }),

/***/ "./src/app/forget-pass/new-pass/new-pass.component.html":
/*!**************************************************************!*\
  !*** ./src/app/forget-pass/new-pass/new-pass.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card\">\n  <mat-card-header>\n    <mat-card-title><h3>Password reset</h3></mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <mat-form-field class=\"field-full-width\">\n      <input matInput placeholder=\"Enter your email\" [formControl]=\"email\" required>\n      <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"field-full-width\" hintLabel=\"Min 3 characters\">\n      <input matInput #password minlength=\"3\" placeholder=\"Enter your password\" [type]=\"hidePass ? 'password' : 'text'\" required>\n      <mat-hint align=\"end\">{{password.value?.length || 0}}/3</mat-hint>\n      <mat-icon matSuffix (click)=\"hidePass = !hidePass\">{{hidePass ? 'visibility' : 'visibility_off'}}</mat-icon>\n    </mat-form-field>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-stroked-button color=\"warn\" *ngIf=\"!email.invalid && password.value?.length >=3\" (click)=\"changePass(email, password.value)\">Submit</button>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/forget-pass/new-pass/new-pass.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/forget-pass/new-pass/new-pass.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Encode+Sans+Condensed);\n@import url(https://fonts.googleapis.com/css?family=Roboto);\na, li, span, button, td {\n  font-family: 'Encode Sans Condensed', sans-serif !important; }\nh1, h2, h3, h4, h5, h6, .mat-card-title, .mat-card-subtitle, .mat-tab-label-content, .mat-sort-header-button {\n  font-family: 'Roboto', sans-serif !important; }\ntd, th {\n  font-size: 16px !important; }\nform {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n.field-full-width {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/forget-pass/new-pass/new-pass.component.ts":
/*!************************************************************!*\
  !*** ./src/app/forget-pass/new-pass/new-pass.component.ts ***!
  \************************************************************/
/*! exports provided: NewPassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPassComponent", function() { return NewPassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validation_form_validation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/validation/form-validation.service */ "./src/app/services/validation/form-validation.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewPassComponent = /** @class */ (function () {
    function NewPassComponent(formValidation, router) {
        this.formValidation = formValidation;
        this.router = router;
        this.hidePass = true;
        this.email = this.formValidation.email;
        this.getErrorMessage = this.formValidation.getEmailErrorMessage;
    }
    NewPassComponent.prototype.ngOnInit = function () {
    };
    NewPassComponent.prototype.changePass = function (email, password) {
        if (!email.invalid && password.length >= 3) {
            var users = JSON.parse(localStorage.getItem('users'));
            for (var i = 0; i < users.length; i++) {
                if (users[i].email === email.value) {
                    users[i].password = password;
                    localStorage.setItem('users', JSON.stringify(users));
                    alert('Password changed');
                    var guard = {
                        'dashboard': false,
                        'forms': true,
                        'new_pass': false
                    };
                    localStorage.setItem('guard', JSON.stringify(guard));
                    this.router.navigate(['login']);
                }
            }
        }
        else {
            alert('email or password incorrect');
        }
    };
    NewPassComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-child-forget-pass',
            template: __webpack_require__(/*! ./new-pass.component.html */ "./src/app/forget-pass/new-pass/new-pass.component.html"),
            styles: [__webpack_require__(/*! ./new-pass.component.scss */ "./src/app/forget-pass/new-pass/new-pass.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_validation_form_validation_service__WEBPACK_IMPORTED_MODULE_1__["FormValidationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewPassComponent);
    return NewPassComponent;
}());



/***/ }),

/***/ "./src/app/guards/dashboard/dashboard.guard.ts":
/*!*****************************************************!*\
  !*** ./src/app/guards/dashboard/dashboard.guard.ts ***!
  \*****************************************************/
/*! exports provided: DashboardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardGuard", function() { return DashboardGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardGuard = /** @class */ (function () {
    function DashboardGuard(router) {
        this.router = router;
        this.state = false;
    }
    DashboardGuard.prototype.canActivate = function (next, state) {
        if (JSON.parse(localStorage.getItem('guard')) !== null) {
            this.state = JSON.parse(localStorage.getItem('guard')).dashboard;
        }
        if (this.state === false) {
            this.router.navigate(['login']);
        }
        return this.state;
    };
    DashboardGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DashboardGuard);
    return DashboardGuard;
}());



/***/ }),

/***/ "./src/app/guards/forms/forms.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/guards/forms/forms.guard.ts ***!
  \*********************************************/
/*! exports provided: FormsGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsGuard", function() { return FormsGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormsGuard = /** @class */ (function () {
    function FormsGuard(router) {
        this.router = router;
        this.state = true;
    }
    FormsGuard.prototype.canActivate = function (next, state) {
        if (JSON.parse(localStorage.getItem('guard')) !== null) {
            this.state = JSON.parse(localStorage.getItem('guard')).forms;
        }
        if (this.state === false) {
            this.router.navigate(['dashboard']);
        }
        return this.state;
    };
    FormsGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FormsGuard);
    return FormsGuard;
}());



/***/ }),

/***/ "./src/app/guards/new-pass-guard/new-pass.guard.ts":
/*!*********************************************************!*\
  !*** ./src/app/guards/new-pass-guard/new-pass.guard.ts ***!
  \*********************************************************/
/*! exports provided: NewPassGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPassGuard", function() { return NewPassGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewPassGuard = /** @class */ (function () {
    function NewPassGuard(router) {
        this.router = router;
        this.state = false;
    }
    NewPassGuard.prototype.canActivate = function (route, state) {
        if (JSON.parse(localStorage.getItem('guard')) !== null) {
            this.state = JSON.parse(localStorage.getItem('guard')).new_pass;
        }
        if (this.state === false) {
            this.router.navigate(['login']);
        }
        return this.state;
    };
    NewPassGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NewPassGuard);
    return NewPassGuard;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card\">\r\n  <mat-card-header>\r\n    <mat-card-title><h1>Login</h1></mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <mat-form-field class=\"field-full-width\">\r\n      <input matInput placeholder=\"Enter your email\" [formControl]=\"email\" required>\r\n      <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"field-full-width\">\r\n      <input matInput #pass placeholder=\"Enter your password\" [type]=\"hidePass ? 'password' : 'text'\" required>\r\n      <mat-icon matSuffix (click)=\"hidePass = !hidePass\">{{hidePass ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n    </mat-form-field>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <mat-list role=\"list\">\r\n      <mat-list-item *ngIf=\"!email.invalid && pass.value\" role=\"listitem\"><button mat-stroked-button color=\"accent\" (click)=\"login(email.value, pass.value)\">Submit</button></mat-list-item>\r\n      <mat-list-item role=\"listitem\"><a routerLink=\"/forget-pass\"><button mat-stroked-button>Forget password</button></a></mat-list-item>\r\n      <mat-list-item role=\"listitem\"><a routerLink=\"/registration\"><button mat-stroked-button>Registration</button></a></mat-list-item>\r\n    </mat-list>\r\n  </mat-card-actions>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Encode+Sans+Condensed);\n@import url(https://fonts.googleapis.com/css?family=Roboto);\na, li, span, button, td {\n  font-family: 'Encode Sans Condensed', sans-serif !important; }\nh1, h2, h3, h4, h5, h6, .mat-card-title, .mat-card-subtitle, .mat-tab-label-content, .mat-sort-header-button {\n  font-family: 'Roboto', sans-serif !important; }\ntd, th {\n  font-size: 16px !important; }\nform {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n.field-full-width {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validation_form_validation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/validation/form-validation.service */ "./src/app/services/validation/form-validation.service.ts");
/* harmony import */ var _services_user_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user-service/user.service */ "./src/app/services/user-service/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(formValidation, userService, router) {
        this.formValidation = formValidation;
        this.userService = userService;
        this.router = router;
        this.hidePass = true;
        this.email = this.formValidation.email;
        this.getErrorMessage = this.formValidation.getEmailErrorMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var guard = {
            'dashboard': false,
            'forms': true,
            'new_pass': false
        };
        localStorage.setItem('guard', JSON.stringify(guard));
    };
    LoginComponent.prototype.login = function (email, password) {
        var users = JSON.parse(localStorage.getItem('users'));
        for (var i = 0; i < users.length; i++) {
            if (users[i].email === email && password === users[i].password) {
                this.userService.setUserLoggedIn(users[i]);
                localStorage.setItem('last_user', JSON.stringify(users[i]));
                var guard = {
                    'dashboard': true,
                    'forms': false,
                    'new_pass': false
                };
                localStorage.setItem('guard', JSON.stringify(guard));
                this.router.navigate(['dashboard']);
                return;
            }
        }
        alert('Email or password incorrect');
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_validation_form_validation_service__WEBPACK_IMPORTED_MODULE_1__["FormValidationService"], _services_user_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTreeModule"],
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTreeModule"],
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.html":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>\n    <mat-card-title><h1>Registration</h1></mat-card-title>\n    <mat-card-subtitle><h2>Welcome</h2></mat-card-subtitle>\n  </mat-card-header>\n<form action=\"#\">\n  <mat-form-field hintLabel=\"Max 15 characters\" class=\"field-full-width\">\n    <input matInput #name maxlength=\"15\" placeholder=\"Enter your Name\" required>\n    <mat-hint align=\"end\">{{name.value?.length || 0}}/15</mat-hint>\n  </mat-form-field>\n  <mat-form-field hintLabel=\"Max 15 characters\" class=\"field-full-width\">\n    <input matInput #surname maxlength=\"15\" placeholder=\"Enter your Surname\" required>\n    <mat-hint align=\"end\">{{surname.value?.length || 0}}/15</mat-hint>\n  </mat-form-field>\n  <mat-form-field class=\"field-full-width\">\n    <input matInput placeholder=\"Enter your email\" [formControl]=\"email\" required>\n    <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"field-full-width\">\n    <input matInput #date [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n    <mat-datepicker #picker></mat-datepicker>\n  </mat-form-field>\n  <mat-form-field class=\"field-full-width\" hintLabel=\"Min 3 characters\">\n    <input matInput #password minlength=\"3\" placeholder=\"Enter your password\" [type]=\"hidePass ? 'password' : 'text'\"\n           required>\n    <mat-hint align=\"end\">{{password.value?.length || 0}}/3</mat-hint>\n    <mat-icon matSuffix (click)=\"hidePass = !hidePass\">{{hidePass ? 'visibility' : 'visibility_off'}}</mat-icon>\n  </mat-form-field>\n\n</form>\n  <mat-card-actions>\n    <button mat-raised-button color=\"accent\" #submit (click)=\"userData(name.value,surname.value,email.value,date.value,password.value)\"\n            *ngIf=\"!email.invalid && name.value.length > 0 && surname.value.length > 0 && date.value && password.value.length >=3\"\n    >Submit\n    </button>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/registration/registration.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Encode+Sans+Condensed);\n@import url(https://fonts.googleapis.com/css?family=Roboto);\na, li, span, button, td {\n  font-family: 'Encode Sans Condensed', sans-serif !important; }\nh1, h2, h3, h4, h5, h6, .mat-card-title, .mat-card-subtitle, .mat-tab-label-content, .mat-sort-header-button {\n  font-family: 'Roboto', sans-serif !important; }\ntd, th {\n  font-size: 16px !important; }\nform {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n.field-full-width {\n  width: 100%; }\n.mat-card {\n  width: 500px;\n  margin: auto;\n  margin-top: 10px; }\n"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_date_picker_service_date_picker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/date-picker-service/date-picker.service */ "./src/app/services/date-picker-service/date-picker.service.ts");
/* harmony import */ var _services_validation_form_validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/validation/form-validation.service */ "./src/app/services/validation/form-validation.service.ts");
/* harmony import */ var _services_user_service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user-service/user.service */ "./src/app/services/user-service/user.service.ts");
/* harmony import */ var _guards_dashboard_dashboard_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../guards/dashboard/dashboard.guard */ "./src/app/guards/dashboard/dashboard.guard.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(datePicker, formValidation, userService, dashboardGuard, router) {
        this.datePicker = datePicker;
        this.formValidation = formValidation;
        this.userService = userService;
        this.dashboardGuard = dashboardGuard;
        this.router = router;
        this.hidePass = true;
        this.minDate = this.datePicker.minDate;
        this.maxDate = this.datePicker.maxDate;
        this.email = this.formValidation.email;
        this.getErrorMessage = this.formValidation.getEmailErrorMessage;
    }
    RegistrationComponent.prototype.userData = function (name, surname, email, date, password) {
        var user = { name: name, surname: surname, email: email, date: date, password: password, id: null };
        this.userService.pushUserToLocalStorage(user);
        this.dashboardGuard.state = true;
        this.router.navigate(['dashboard']);
    };
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.scss */ "./src/app/registration/registration.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_date_picker_service_date_picker_service__WEBPACK_IMPORTED_MODULE_1__["DatePickerService"], _services_validation_form_validation_service__WEBPACK_IMPORTED_MODULE_2__["FormValidationService"],
            _services_user_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _guards_dashboard_dashboard_guard__WEBPACK_IMPORTED_MODULE_4__["DashboardGuard"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/services/date-picker-service/date-picker.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/services/date-picker-service/date-picker.service.ts ***!
  \*********************************************************************/
/*! exports provided: DatePickerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerService", function() { return DatePickerService; });
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

var DatePickerService = /** @class */ (function () {
    function DatePickerService() {
        this.minDate = new Date();
        this.maxDate = new Date();
        this.minDate.setFullYear(this.minDate.getFullYear() - 100);
        this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    }
    DatePickerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DatePickerService);
    return DatePickerService;
}());



/***/ }),

/***/ "./src/app/services/user-service/user.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/user-service/user.service.ts ***!
  \*******************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
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

var users = [
    { id: 1, name: 'Vasia', surname: 'Pupkin', password: '111', date: '12/03/1965', email: 'vasia@gmail.com' },
    { id: 2, name: 'Sveta', surname: 'Zajcew', password: '111', date: '13/01/1961', email: 'sveta@gmail.com' },
    { id: 3, name: 'Chmo', surname: 'Moiseew', password: '111', date: '18/03/1962', email: 'chmo@gmail.com' },
    { id: 4, name: 'Lola', surname: 'Porosh', password: '111', date: '25/12/1994', email: 'lola@gmail.com' },
    { id: 5, name: 'Doll', surname: 'Timosh', password: '111', date: '16/05/1981', email: 'doll@gmail.com' },
    { id: 6, name: 'Mr', surname: 'Azarow', password: '111', date: '22/08/1985', email: 'mr@gmail.com' },
    { id: 7, name: 'Wowa', surname: 'Trish', password: '111', date: '21/03/1993', email: 'wowa@gmail.com' },
    { id: 8, name: 'Kon', surname: 'Nikol', password: '111', date: '14/01/1997', email: 'kon@gmail.com' },
    { id: 9, name: 'Rock', surname: 'Yos', password: '111', date: '4/04/1996', email: 'rock@gmail.com' }
];
var UserService = /** @class */ (function () {
    function UserService() {
        this.isUserLoggedIn = false;
    }
    UserService.prototype.setDefaultUsers = function () {
        if (JSON.parse(localStorage.getItem('users')) == null) {
            localStorage.setItem('users', JSON.stringify(users));
        }
    };
    UserService.prototype.pushUserToLocalStorage = function (user) {
        var _users = JSON.parse(localStorage.getItem('users'));
        user.id = _users[_users.length - 1].id + 1;
        _users.push(user);
        localStorage.setItem('users', JSON.stringify(_users));
        this.setUserLoggedIn(user);
    };
    UserService.prototype.setUserLoggedIn = function (_user) {
        this.isUserLoggedIn = true;
        this.user = _user;
    };
    UserService.prototype.getUserLoggedIn = function () {
        return this.user;
    };
    UserService.prototype.logOut = function () {
        return this.isUserLoggedIn = false;
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/validation/form-validation.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/services/validation/form-validation.service.ts ***!
  \****************************************************************/
/*! exports provided: FormValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormValidationService", function() { return FormValidationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FormValidationService = /** @class */ (function () {
    function FormValidationService() {
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
        this.text_field = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this._text_field = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
    }
    FormValidationService.prototype.getEmailErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    FormValidationService.prototype.getEmptyFieldErrorMessage = function () {
        return this.text_field.hasError('required') ? 'You must enter a value' : '';
    };
    FormValidationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], FormValidationService);
    return FormValidationService;
}());



/***/ }),

/***/ "./src/app/timer-module/timer.module.ts":
/*!**********************************************!*\
  !*** ./src/app/timer-module/timer.module.ts ***!
  \**********************************************/
/*! exports provided: TimerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerModule", function() { return TimerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _timer_timer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timer/timer.component */ "./src/app/timer-module/timer/timer.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TimerModule = /** @class */ (function () {
    function TimerModule() {
    }
    TimerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]
            ],
            declarations: [_timer_timer_component__WEBPACK_IMPORTED_MODULE_2__["TimerComponent"]],
            exports: [
                _timer_timer_component__WEBPACK_IMPORTED_MODULE_2__["TimerComponent"]
            ]
        })
    ], TimerModule);
    return TimerModule;
}());



/***/ }),

/***/ "./src/app/timer-module/timer/timer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/timer-module/timer/timer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card\">\r\n  <mat-card-header>\r\n    <mat-card-title><h3>Timer</h3></mat-card-title>\r\n    <mat-card-subtitle><h4>Use it wisely</h4></mat-card-subtitle>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <mat-form-field class=\"field-full-width\" style=\"width: 50px; text-align: right; margin-right: 5px\">\r\n      <input matInput [value]=\"default_time\" #sec type=\"number\">\r\n    </mat-form-field>\r\n    <span>s</span>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button mat-raised-button color=\"accent\" (click)=\"timer('start', sec)\" *ngIf=\"!hide\">Start</button>\r\n    <button mat-raised-button color=\"accent\" (click)=\"timer('stop', sec)\" *ngIf=\"hide\">Stop</button>\r\n    <button mat-raised-button color=\"accent\" (click)=\"timer('reset', sec)\">Reset</button>\r\n  </mat-card-actions>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/timer-module/timer/timer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/timer-module/timer/timer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  max-width: 300px;\n  margin-top: 10px;\n  margin-bottom: 10px; }\n"

/***/ }),

/***/ "./src/app/timer-module/timer/timer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/timer-module/timer/timer.component.ts ***!
  \*******************************************************/
/*! exports provided: TimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerComponent", function() { return TimerComponent; });
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

var TimerComponent = /** @class */ (function () {
    function TimerComponent() {
        this.default_time = 10;
        this.hide = false;
    }
    TimerComponent.prototype.myStopFunction = function () {
        clearInterval(this.myVar);
    };
    TimerComponent.prototype.timer = function (command, timeInput) {
        if (command === 'start') {
            this.hide = true;
            this.myVar = setInterval(function () {
                myTimer(timeInput);
            }, 1000);
        }
        else if (command === 'stop') {
            this.hide = false;
            this.myStopFunction();
        }
        else if (command === 'reset') {
            this.hide = false;
            this.myStopFunction();
            timeInput.value = this.default_time;
        }
    };
    TimerComponent.prototype.ngOnInit = function () {
    };
    TimerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timer',
            template: __webpack_require__(/*! ./timer.component.html */ "./src/app/timer-module/timer/timer.component.html"),
            styles: [__webpack_require__(/*! ./timer.component.scss */ "./src/app/timer-module/timer/timer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TimerComponent);
    return TimerComponent;
}());

function myTimer(timeInput) {
    var time = timeInput.value;
    time = time - 1;
    if (time >= 0) {
        timeInput.value = time;
    }
    else {
        this.myStopFunction();
    }
}


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
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





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

module.exports = __webpack_require__(/*! D:\Programs\BSA\bsa-ng\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map