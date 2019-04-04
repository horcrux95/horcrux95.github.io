webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product_insert_screen_product_insert_screen_component__ = __webpack_require__("../../../../../src/app/product-insert-screen/product-insert-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_guard__ = __webpack_require__("../../../../../src/app/services/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: 'product', component: __WEBPACK_IMPORTED_MODULE_0__product_insert_screen_product_insert_screen_component__["a" /* ProductInsertScreenComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__services_auth_guard__["a" /* AuthGuard */]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_insert_screen_product_insert_screen_component__ = __webpack_require__("../../../../../src/app/product-insert-screen/product-insert-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_rest_handler_service__ = __webpack_require__("../../../../../src/app/services/rest-handler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dynamic_form_dynamic_form_component__ = __webpack_require__("../../../../../src/app/dynamic-form/dynamic-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dynamic_form_question_dynamic_form_question_component__ = __webpack_require__("../../../../../src/app/dynamic-form-question/dynamic-form-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_question_service__ = __webpack_require__("../../../../../src/app/services/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_auth_guard__ = __webpack_require__("../../../../../src/app/services/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__product_insert_screen_product_insert_screen_component__["a" /* ProductInsertScreenComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__dynamic_form_dynamic_form_component__["a" /* DynamicFormComponent */],
                __WEBPACK_IMPORTED_MODULE_10__dynamic_form_question_dynamic_form_question_component__["a" /* DynamicFormQuestionComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__services_rest_handler_service__["a" /* RestHandlerService */], __WEBPACK_IMPORTED_MODULE_11__services_question_service__["a" /* QuestionService */], __WEBPACK_IMPORTED_MODULE_12__services_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/dynamic-form-question/dynamic-form-question.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n        <div [formGroup]=\"form\" class=\"form-group\">\n            <label [attr.for]=\"question.key\">{{ question.label }}</label>\n          \n            <div [ngSwitch]=\"question.controlType\">\n              <input\n                *ngSwitchCase=\"'textbox'\"\n                [formControlName]=\"question.key\"\n                [id]=\"question.key\"\n                [type]=\"question.type\"\n                class=\"form-control\"\n              />\n          \n              <input\n                *ngSwitchCase=\"'number'\"\n                [formControlName]=\"question.key\"\n                [id]=\"question.key\"\n                type=\"number\"\n                class=\"form-control\"\n              />\n          \n              <input\n                *ngSwitchCase=\"'checkbox'\"\n                [formControlName]=\"question.key\"\n                [id]=\"question.key\"\n                [type]=\"question.type\"\n                [checked]=\"question.checked\"\n                class=\"form-control\"\n              />\n            </div>\n          \n            <div class=\"errorMessage\" *ngIf=\"!isValid\">\n              {{ question.validationMessage }}\n            </div>\n          </div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/dynamic-form-question/dynamic-form-question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFormQuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modals_question_base__ = __webpack_require__("../../../../../src/app/modals/question-base.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DynamicFormQuestionComponent = /** @class */ (function () {
    function DynamicFormQuestionComponent() {
    }
    Object.defineProperty(DynamicFormQuestionComponent.prototype, "isValid", {
        get: function () { return (this.form.controls[this.question.key].dirty == true) ? (this.form.controls[this.question.key].valid) : true; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__modals_question_base__["a" /* QuestionBase */])
    ], DynamicFormQuestionComponent.prototype, "question", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */])
    ], DynamicFormQuestionComponent.prototype, "form", void 0);
    DynamicFormQuestionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-question',
            template: __webpack_require__("../../../../../src/app/dynamic-form-question/dynamic-form-question.component.html")
        })
    ], DynamicFormQuestionComponent);
    return DynamicFormQuestionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dynamic-form/dynamic-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\">\n  \n      <div *ngFor=\"let question of questions\" class=\"form-row\">\n        <app-question [question]=\"question\" [form]=\"form\"></app-question>\n      </div>\n  \n      <div class=\"form-row\">\n        <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!form.valid\">Save</button>\n      </div>\n    </form>\n  \n    <div *ngIf=\"payLoad\" class=\"form-row\">\n      <strong>Saved the following values</strong><br>{{payLoad}}\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/dynamic-form/dynamic-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_question_control_service__ = __webpack_require__("../../../../../src/app/services/question-control.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DynamicFormComponent = /** @class */ (function () {
    function DynamicFormComponent(qcs) {
        this.qcs = qcs;
        this.questions = [];
        this.payLoad = '';
    }
    DynamicFormComponent.prototype.ngOnInit = function () {
        this.form = this.qcs.toFormGroup(this.questions);
    };
    DynamicFormComponent.prototype.onSubmit = function () {
        console.log(this.form);
        this.payLoad = JSON.stringify(this.form.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], DynamicFormComponent.prototype, "questions", void 0);
    DynamicFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dynamic-form',
            template: __webpack_require__("../../../../../src/app/dynamic-form/dynamic-form.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_question_control_service__["a" /* QuestionControlService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_question_control_service__["a" /* QuestionControlService */]])
    ], DynamicFormComponent);
    return DynamicFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Ecommerce</h1>\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n        <div *ngFor=\"let item of ProductList\">\n            <h2>{{item.name}}</h2>\n            <button class=\"btn btn-primary\" (click)=\"fetchDefinition(item.definitionUrl)\">Add {{item.name}}</button>\n          </div>\n    </div>\n  </div>\n</div>\n \n\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_rest_handler_service__ = __webpack_require__("../../../../../src/app/services/rest-handler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(_rh, router) {
        this._rh = _rh;
        this.router = router;
        this.ProductList = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._rh.getProductList().subscribe(function (data) {
            _this.ProductList = data;
        }, function (err) {
            //handle error
            console.log(err);
        });
    };
    HomeComponent.prototype.fetchDefinition = function (url) {
        var _this = this;
        this._rh.getDefinationUrl(url).subscribe(function (data) {
            _this._rh.setDefination(data);
            _this.router.navigate(["/product"]);
        }, function (err) {
            //handle error
            console.log(err);
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: "app-home",
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_rest_handler_service__["a" /* RestHandlerService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modals/question-base.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionBase; });
var QuestionBase = /** @class */ (function () {
    function QuestionBase(options) {
        if (options === void 0) { options = {}; }
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        if (this.required == true) {
            this.validationMessage = options.validationMessage || '';
        }
    }
    return QuestionBase;
}());



/***/ }),

/***/ "../../../../../src/app/modals/question-checkbox.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxQuestion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__question_base__ = __webpack_require__("../../../../../src/app/modals/question-base.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CheckboxQuestion = /** @class */ (function (_super) {
    __extends(CheckboxQuestion, _super);
    function CheckboxQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'checkbox';
        _this.type = 'checkbox';
        _this.checked = (options.value == 'False') ? false : true;
        _this.value = _this.checked.toString();
        return _this;
    }
    return CheckboxQuestion;
}(__WEBPACK_IMPORTED_MODULE_0__question_base__["a" /* QuestionBase */]));



/***/ }),

/***/ "../../../../../src/app/modals/question-int.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumberboxQuestion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__question_base__ = __webpack_require__("../../../../../src/app/modals/question-base.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var NumberboxQuestion = /** @class */ (function (_super) {
    __extends(NumberboxQuestion, _super);
    function NumberboxQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'number';
        _this.type = 'number';
        return _this;
    }
    return NumberboxQuestion;
}(__WEBPACK_IMPORTED_MODULE_0__question_base__["a" /* QuestionBase */]));



/***/ }),

/***/ "../../../../../src/app/modals/question-text.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextboxQuestion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__question_base__ = __webpack_require__("../../../../../src/app/modals/question-base.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TextboxQuestion = /** @class */ (function (_super) {
    __extends(TextboxQuestion, _super);
    function TextboxQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'textbox';
        _this.type = options['type'] || '';
        return _this;
    }
    return TextboxQuestion;
}(__WEBPACK_IMPORTED_MODULE_0__question_base__["a" /* QuestionBase */]));



/***/ }),

/***/ "../../../../../src/app/product-insert-screen/product-insert-screen.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-insert-screen/product-insert-screen.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Add Product</h2>\n<app-dynamic-form  [questions]=\"questions\"></app-dynamic-form>\n"

/***/ }),

/***/ "../../../../../src/app/product-insert-screen/product-insert-screen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductInsertScreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_rest_handler_service__ = __webpack_require__("../../../../../src/app/services/rest-handler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_question_service__ = __webpack_require__("../../../../../src/app/services/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modals_question_text__ = __webpack_require__("../../../../../src/app/modals/question-text.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modals_question_checkbox__ = __webpack_require__("../../../../../src/app/modals/question-checkbox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modals_question_int__ = __webpack_require__("../../../../../src/app/modals/question-int.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductInsertScreenComponent = /** @class */ (function () {
    function ProductInsertScreenComponent(_rh, _qs) {
        this._rh = _rh;
        this._qs = _qs;
        this.questions = [];
    }
    ProductInsertScreenComponent.prototype.ngOnInit = function () {
        this.definition = this._rh.getDefinition();
        for (var _i = 0, _a = this.definition; _i < _a.length; _i++) {
            var def = _a[_i];
            if (def.type == "text") {
                this.questions.push(new __WEBPACK_IMPORTED_MODULE_3__modals_question_text__["a" /* TextboxQuestion */]({
                    key: def.caption,
                    label: def.caption,
                    value: def.defaultValue,
                    required: def.mandatory,
                    validationMessage: def.validationMessage
                }));
            }
            if (def.type == "int") {
                this.questions.push(new __WEBPACK_IMPORTED_MODULE_5__modals_question_int__["a" /* NumberboxQuestion */]({
                    key: def.caption,
                    label: def.caption,
                    value: def.defaultValue,
                    required: def.mandatory,
                    validationMessage: def.validationMessage
                }));
            }
            if (def.type == "bool") {
                this.questions.push(new __WEBPACK_IMPORTED_MODULE_4__modals_question_checkbox__["a" /* CheckboxQuestion */]({
                    key: def.caption,
                    label: def.caption,
                    value: def.defaultValue,
                    required: def.mandatory,
                    validationMessage: def.validationMessage
                }));
            }
        }
        this._qs.setQuestions(this.questions);
        this.questions = this._qs.getQuestions();
    };
    ProductInsertScreenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-product-insert-screen",
            template: __webpack_require__("../../../../../src/app/product-insert-screen/product-insert-screen.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product-insert-screen/product-insert-screen.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_rest_handler_service__["a" /* RestHandlerService */], __WEBPACK_IMPORTED_MODULE_2__services_question_service__["a" /* QuestionService */]])
    ], ProductInsertScreenComponent);
    return ProductInsertScreenComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_handler_service__ = __webpack_require__("../../../../../src/app/services/rest-handler.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(_rh, myRoute) {
        this._rh = _rh;
        this.myRoute = myRoute;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var val = this._rh.getDefinition();
        if (val && val != []) {
            return true;
        }
        else {
            this.myRoute.navigate(["/"]);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__rest_handler_service__["a" /* RestHandlerService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/question-control.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionControlService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestionControlService = /** @class */ (function () {
    function QuestionControlService() {
    }
    QuestionControlService.prototype.toFormGroup = function (questions) {
        var group = {};
        questions.forEach(function (question) {
            group[question.key] = question.required ? new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](question.value || '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required)
                : new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](question.value || '');
        });
        return new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */](group);
    };
    QuestionControlService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], QuestionControlService);
    return QuestionControlService;
}());



/***/ }),

/***/ "../../../../../src/app/services/question.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var QuestionService = /** @class */ (function () {
    function QuestionService() {
        this.questions = [];
    }
    QuestionService.prototype.getQuestions = function () {
        return this.questions;
    };
    QuestionService.prototype.setQuestions = function (obj) {
        this.questions = obj;
    };
    QuestionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], QuestionService);
    return QuestionService;
}());



/***/ }),

/***/ "../../../../../src/app/services/rest-handler.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestHandlerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RestHandlerService = /** @class */ (function () {
    function RestHandlerService(http) {
        this.http = http;
    }
    RestHandlerService.prototype.getProductList = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/products');
    };
    RestHandlerService.prototype.getDefinationUrl = function (url) {
        return this.http.get(url);
    };
    RestHandlerService.prototype.setDefination = function (obj) {
        this.definition = obj;
    };
    RestHandlerService.prototype.getDefinition = function () {
        return this.definition;
    };
    RestHandlerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RestHandlerService);
    return RestHandlerService;
}());



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
    production: false,
    apiUrl: 'https://ds-ecom.azurewebsites.net'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map