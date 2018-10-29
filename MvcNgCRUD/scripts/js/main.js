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

module.exports = "\r\n<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'NgMvcCRUD';
        this.isUserList = true;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_data_row_user_data_row_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-data-row/user-data-row.component */ "./src/app/user-data-row/user-data-row.component.ts");
/* harmony import */ var _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./users-list/users-list.component */ "./src/app/users-list/users-list.component.ts");
/* harmony import */ var _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-form/user-form.component */ "./src/app/user-form/user-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', redirectTo: 'userList', pathMatch: 'full' },
    { path: 'userList', component: _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_9__["UsersListComponent"] },
    { path: 'userForm', component: _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_10__["UserFormComponent"] },
    { path: 'userForm/:id', component: _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_10__["UserFormComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _user_data_row_user_data_row_component__WEBPACK_IMPORTED_MODULE_8__["UserDataRowComponent"],
                _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_9__["UsersListComponent"],
                _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_10__["UserFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes)
            ],
            providers: [
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\r\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\r\n    <div class=\"container\">\r\n        <a class=\"navbar-brand\" href=\"#\">Start Bootstrap</a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n            <ul class=\"navbar-nav ml-auto\">\r\n                <li class=\"nav-item active\">\r\n                    <a class=\"nav-link\" href=\"#\">\r\n                        Home\r\n                        <span class=\"sr-only\">(current)</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"#\">About</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"#\">Services</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"#\">Contact</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
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

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/user-data-row/user-data-row.component.css":
/*!***********************************************************!*\
  !*** ./src/app/user-data-row/user-data-row.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-data-row/user-data-row.component.html":
/*!************************************************************!*\
  !*** ./src/app/user-data-row/user-data-row.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tr>\r\n    <td>{{user.userId}}</td>\r\n    <td>{{user.userName}}</td>\r\n    <td>{{user.address}}</td>\r\n    <td>{{user.contactNo}}</td>\r\n    <td>{{user.email}}</td>\r\n</tr>\r\n"

/***/ }),

/***/ "./src/app/user-data-row/user-data-row.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/user-data-row/user-data-row.component.ts ***!
  \**********************************************************/
/*! exports provided: UserDataRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataRowComponent", function() { return UserDataRowComponent; });
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

var UserDataRowComponent = /** @class */ (function () {
    function UserDataRowComponent() {
    }
    UserDataRowComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserDataRowComponent.prototype, "user", void 0);
    UserDataRowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-data-row',
            template: __webpack_require__(/*! ./user-data-row.component.html */ "./src/app/user-data-row/user-data-row.component.html"),
            styles: [__webpack_require__(/*! ./user-data-row.component.css */ "./src/app/user-data-row/user-data-row.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserDataRowComponent);
    return UserDataRowComponent;
}());



/***/ }),

/***/ "./src/app/user-form/user-form.component.css":
/*!***************************************************!*\
  !*** ./src/app/user-form/user-form.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-form/user-form.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-form/user-form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding: 20px;\">\r\n\r\n    \r\n    <span class=\"alert alert-danger\" *ngIf = \"isError\">{{error}}</span>\r\n\r\n    <form [formGroup]=\"myForm\" (ngSubmit)=\"addNewUser(myForm)\" class=\"form-horizontal\">\r\n        <div calss=\"form-group\" *ngIf =\"isAdd\">\r\n            <label for=\"productName\">User Id:</label>\r\n            <input type=\"text\" id=\"userId\" class=\"form-control\" name=\"userId\" placeholder=\"User Id\"\r\n                   [formControl]=\"myForm.get('UserId')\" />\r\n        </div><br />\r\n\r\n        <div calss=\"form-group\" *ngIf=\"!isAdd\">\r\n            <label for=\"productName\">User Id:</label>\r\n            <input type=\"text\" id=\"userId\" class=\"form-control\" name=\"userId\" placeholder=\"User Id\"\r\n                   [formControl]=\"myForm.get('UserId')\" readonly =\"readonly\" />\r\n        </div><br />\r\n\r\n        <div calss=\"form-group\">\r\n            <label for=\"productName\">User Name:</label>\r\n            <input type=\"text\" id=\"userName\" class=\"form-control\" name=\"userName\" placeholder=\"User Name\"\r\n                   [formControl]=\"myForm.get('UserName')\" />\r\n        </div><br />\r\n\r\n        <div calss=\"form-group\">\r\n            <label for=\"productName\">Address:</label>\r\n            <input type=\"text\" id=\"address\" class=\"form-control\" name=\"address\" placeholder=\"Address\"\r\n                   [formControl]=\"myForm.get('Address')\" />\r\n        </div><br />\r\n\r\n        <div calss=\"form-group\">\r\n            <label for=\"productName\">Contact Number:</label>\r\n            <input type=\"text\" id=\"contactNo\" class=\"form-control\" name=\"contactNo\" placeholder=\"Contact Number\"\r\n                   [formControl]=\"myForm.get('ContactNo')\" />\r\n        </div><br />\r\n\r\n        <div calss=\"form-group\">\r\n            <label for=\"productName\">Email Id:</label>\r\n            <input type=\"text\" id=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Email Id\"\r\n                   [formControl]=\"myForm.get('EmailId')\" />\r\n        </div><br />\r\n\r\n        <div class=\"form-group\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n        </div><br />\r\n\r\n    </form>\r\n\r\n    <a href=\"\" class=\"btn btn-danger\" [routerLink]=\"['/userList']\">Back to User List</a>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user-form/user-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-form/user-form.component.ts ***!
  \**************************************************/
/*! exports provided: UserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormComponent", function() { return UserFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.model */ "./src/app/user.model.ts");
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





var UserFormComponent = /** @class */ (function () {
    function UserFormComponent(fb, http, router, _ActivatedRoute) {
        var _this = this;
        this.http = http;
        this.router = router;
        this._ActivatedRoute = _ActivatedRoute;
        if (this._ActivatedRoute.snapshot.params['id'] != null) {
            this.isAdd = false;
            alert("Edit Data of User Id: " + this._ActivatedRoute.snapshot.params['id']);
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
            var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
            var data = { UserId: this._ActivatedRoute.snapshot.params['id'] };
            //alert("User Id: " + this._ActivatedRoute.snapshot.params['id']);
            var user = new _user_model__WEBPACK_IMPORTED_MODULE_3__["User"]();
            user.UserId = this._ActivatedRoute.snapshot.params['id'];
            this.http.post('/api/Users/GetUser', user, options)
                .subscribe(function (response) {
                _this.userData = response.json();
                _this.myForm = fb.group({
                    'UserId': [_this.userData['UserId'], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    'UserName': [_this.userData['UserName'], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    'Address': [_this.userData['Address'], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    'ContactNo': [_this.userData['ContactNo'], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    'EmailId': [_this.userData['EmailId'], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
                });
            });
        }
        else {
            this.isAdd = true;
            alert("add new user");
            this.myForm = fb.group({
                'UserId': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                'UserName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                'Address': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                'ContactNo': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                'EmailId': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
        }
        this.myForm = fb.group({
            'UserId': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'UserName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'Address': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'ContactNo': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'EmailId': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.isError = false;
        this.error = '';
    }
    UserFormComponent.prototype.ngOnInit = function () {
    };
    UserFormComponent.prototype.addNewUser = function (values) {
        var _this = this;
        if (values.controls['UserId'].valid && values.controls['UserName'].valid && values.controls['Address'].valid &&
            values.controls['ContactNo'].valid && values.controls['EmailId'].valid) {
            alert('User Name: ' + values.controls['UserId'].value);
        }
        var user = new _user_model__WEBPACK_IMPORTED_MODULE_3__["User"]();
        user.UserId = values.controls['UserId'].value;
        user.UserName = values.controls['UserName'].value;
        user.Address = values.controls['Address'].value;
        user.ContactNo = values.controls['ContactNo'].value;
        user.EmailId = values.controls['EmailId'].value;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
        if (this.isAdd) { //Add User
            this.http.post('/api/Users/AddUser', user, options).subscribe(function (response) {
                //let body = response.json();
                if (response.status == 200) {
                    _this.router.navigate(['/userList']);
                }
                else {
                    _this.isError = true;
                    _this.error = "Unable to add user";
                }
            });
        }
        else { //Edit user
            this.http.post('/api/Users/EditUser', user, options).subscribe(function (response) {
                //let body = response.json();
                if (response.status == 200) {
                    _this.router.navigate(['/userList']);
                }
                else {
                    _this.isError = true;
                    _this.error = "Unable to edit user";
                }
            });
        }
    };
    UserFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-form',
            template: __webpack_require__(/*! ./user-form.component.html */ "./src/app/user-form/user-form.component.html"),
            styles: [__webpack_require__(/*! ./user-form.component.css */ "./src/app/user-form/user-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], UserFormComponent);
    return UserFormComponent;
}());



/***/ }),

/***/ "./src/app/user.model.ts":
/*!*******************************!*\
  !*** ./src/app/user.model.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/users-list/users-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/users-list/users-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/users-list/users-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/users-list/users-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding: 20px;\">\r\n    <a href=\"\" class=\"btn btn-primary\" [routerLink]=\"['/userForm']\">New User</a><br /><br />\r\n\r\n    <table class=\"table table-striped\" *ngIf=\"usersList != null\">\r\n        <tr>\r\n            <th>User Id</th>\r\n            <th>User Name</th>\r\n            <th>Address</th>\r\n            <th>Contact No</th>\r\n            <th>Email</th>\r\n            <th>Actions</th>\r\n        </tr>\r\n        <!--<app-user-data-row *ngFor =\"let user of usersList\" [user] = \"user\"></app-user-data-row>-->\r\n\r\n        <tr *ngFor=\"let user of usersList\">\r\n            <td>{{user.UserId}}</td>\r\n            <td>{{user.UserName}}</td>\r\n            <td>{{user.Address}}</td>\r\n            <td>{{user.ContactNo}}</td>\r\n            <td>{{user.EmailId}}</td>\r\n            <td colspan=\"2\"><a href=\"#\" class=\"text text-success\" (click)=\"editUser($event, user.UserId)\" [routerLink]=\"['/userForm', user.UserId]\">Edit</a>&nbsp;&nbsp;\r\n                <a href=\"#\" class=\"text text-danger\">Delete</a>\r\n            </td>\r\n        </tr>\r\n\r\n\r\n\r\n    </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/users-list/users-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/users-list/users-list.component.ts ***!
  \****************************************************/
/*! exports provided: UsersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListComponent", function() { return UsersListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersListComponent = /** @class */ (function () {
    function UsersListComponent(http) {
        var _this = this;
        this.http = http;
        this.http.request('/api/Users/GetUsers')
            .subscribe(function (response) {
            _this.usersList = response.json();
        });
        //this.usersList = [
        //    { UserId: "1", UserName: "abc", Address: "baroda", ContactNo: 344738, EmailId: "abc@gmail.com" },
        //    { UserId: "2", UserName: "def", Address: "anand", ContactNo: 342378, EmailId: "def@gmail.com" },
        //    { UserId: "3", UserName: "ghi", Address: "surat", ContactNo: 298473, EmailId: "ghi@gmail.com" },
        //    { UserId: "4", UserName: "jkl", Address: "rajkot", ContactNo: 985849, EmailId: "jkl@gmail.com" }
        //];
    }
    UsersListComponent.prototype.editUser = function (event, userId) {
        alert('User Id: ' + userId);
        event.stopPropagation();
    };
    UsersListComponent.prototype.ngOnInit = function () {
    };
    UsersListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users-list',
            template: __webpack_require__(/*! ./users-list.component.html */ "./src/app/users-list/users-list.component.html"),
            styles: [__webpack_require__(/*! ./users-list.component.css */ "./src/app/users-list/users-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], UsersListComponent);
    return UsersListComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Omatics\Source\Repos\MvcNgCRUD\MvcNgCRUD\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map