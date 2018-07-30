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

module.exports = "<div>\n    <H1 class=\"text-primary\">INVOICE SYSTEM</H1>\n</div>\n<div class=\"ui-inputgroup\">\n  \n    <button pButton type=\"button\" label=\"Get All Invoices\" (click)=\"getAllInvoices()\" ></button>\n   \n</div>\n<br/>\n<div class=\"ui-inputgroup\">\n        <input type=\"text\" [(ngModel)]=\"Invoices.id\" pInputText placeholder=\"Inovice Number\">   \n        <button pButton type=\"button\" label=\"Get Invoice\" (click)=\"getInvoices()\"></button>   \n        \n</div>\n<br/>\n<p-table [value]=\"InvoicesLists\"  [paginator]=\"true\" [rows]=\"15\">\n    <ng-template pTemplate=\"header\">\n        <tr>\n            <th>Inovices Number</th>\n            <th>Client</th>\n            <th>Vat Rate</th>\n            <th>Vat</th>\n            <th>Sub Total</th>\n            <th>Total</th>\n            <th>Invoice Date</th>\n            <th>View</th>\n        </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-InvoicesList>\n        <tr>\n            <td>{{InvoicesList.id}}</td>\n            <td>{{InvoicesList.client}}</td>\n            <td>{{InvoicesList.vatRate}}</td>\n            <td>{{InvoicesList.vat}}</td>\n            <td>{{InvoicesList.subTotal}}</td>\n            <td>{{InvoicesList.total}}</td>\n            <td>{{InvoicesList.invoiceDate | date}}</td>\n            <td><button type=\"button\" pButton icon=\"fa fa-plus\" (click)=\"viewInvoices(InvoicesList)\" label=\"View Invoice\"></button></td>\n\n        </tr>\n    </ng-template>\n\n    <ng-template pTemplate=\"summary\" let-rowData>\n        <div style=\"text-align:left\">\n            <button type=\"button\" pButton icon=\"fa fa-plus\" (click)=\"showDialog()\" label=\"Create Invoice\"></button>\n        </div>\n    </ng-template>\n</p-table>\n\n\n\n<p-dialog header=\" Add Inovices\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [width]=\"650\">\n    <div class=\"ui-g ui-fluid\" >\n        <div class=\"ui-g-12\">\n            <div class=\"ui-g-4\">\n                <label for=\"vin\">Invoice Number:</label>\n            </div>\n            <div class=\"ui-g-8\">\n                <input [disabled]=\"true\"  pInputText id=\"vin\" [(ngModel)]=\"Invoices.id\" name=\"id\" />\n            </div>\n        </div>\n        <div class=\"ui-g-12\">\n            <div class=\"ui-g-4\">\n                <label for=\"year\">Client:</label>\n            </div>\n            <div class=\"ui-g-8\">\n                <input pInputText id=\"client\" [(ngModel)]=\"Invoices.client\" name=\"client\" />\n            </div>\n        </div>\n        <div class=\"ui-g-12\">\n            <div class=\"ui-g-4\">\n                <label for=\"brand\">Vat Rate:</label>\n            </div>\n            <div class=\"ui-g-8\">\n                <input pInputText id=\"vatRate\" [(ngModel)]=\"Invoices.vatRate\" name=\"vatRate\" />\n            </div>\n        </div>\n        <div class=\"ui-g-12\">\n            <div class=\"ui-g-4\">\n                <label for=\"brand\">Vat:</label>\n            </div>\n            <div class=\"ui-g-8\">\n                <input  [disabled]=\"true\" pInputText id=\"vatRate\" [(ngModel)]=\"Invoices.vat\" name=\"vat\" />\n            </div>\n        </div>\n        <div class=\"ui-g-12\">\n            <div class=\"ui-g-4\">\n                <label for=\"color\">Sub Total:</label>\n            </div>\n            <div class=\"ui-g-8\">\n                <input [disabled]=\"true\"   pInputText id=\"subTotal\" [(ngModel)]=\"Invoices.subTotal\" name=\"subTotal\" />\n            </div>\n        </div>\n        <div class=\"ui-g-12\">\n            <div class=\"ui-g-4\">\n                <label for=\"color\">Total:</label>\n            </div>\n            <div class=\"ui-g-8\">\n                <input [disabled]=\"true\"   pInputText id=\"total\" [(ngModel)]=\"Invoices.total\"  name=\"total\"/>\n            </div>\n        </div>\n    </div>\n    <div class=\"ui-g-12\">\n        <div class=\"ui-g-4\">\n            <label for=\"color\">Line Items</label>\n        </div>\n    </div>\n\n    <p-table [value]=\"items\"  [paginator]=\"true\" [rows]=\"15\">\n            <ng-template pTemplate=\"header\">\n                <tr>\n                    <th>Quantity</th>\n                    <th>Description</th>\n                    <th>Unit Price</th>\n                    <th>Line Item Total</th>\n                </tr>\n            </ng-template>\n            <ng-template pTemplate=\"body\" let-item>\n                <tr>\n                    <td>{{item.quantity}}</td>\n                    <td>{{item.description}}</td>\n                    <td>{{item.unitPrice}}</td>\n                    <td>{{item.lineItemTotal}}</td>\n                </tr>\n            </ng-template>\n        \n            <ng-template pTemplate=\"summary\" let-rowData>\n                <div style=\"text-align:left\">\n                    <button type=\"button\" pButton icon=\"fa fa-plus\" (click)=\"showLineItmesDialog()\" label=\"Add Items\"></button>\n                </div>\n            </ng-template>\n        </p-table>\n    <p-footer>\n        <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n            <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"clear()\" label=\"Clear\"></button>\n            <button type=\"button\" pButton icon=\"fa fa-check\" (click)=\"savaInvoice()\" label=\"Save\"></button>\n        </div>\n    </p-footer>\n</p-dialog>\n\n<p-dialog header=\"Line Items Details\" [(visible)]=\"displayItmeDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [width]=\"300\">\n    <form novalidate #itemsDetails=\"ngForm\">\n        <div class=\"ui-g ui-fluid\">\n            <div class=\"ui-g-12\">\n                <div class=\"ui-g-4\">\n                    <label >Quantity</label>\n                </div>\n                <div class=\"ui-g-8\">\n                    <input pInputText id=\"vin\" [ngModel]=\"lineItems.quantity\" name=\"quantity\"/>\n                </div>\n            </div>\n            <div class=\"ui-g-12\">\n                <div class=\"ui-g-4\">\n                    <label >Description</label>\n                </div>\n                <div class=\"ui-g-8\">\n                    <input pInputText id=\"year\" [ngModel]=\"lineItems.description\" name=\"description\" />\n                </div>\n            </div>\n            <div class=\"ui-g-12\">\n                <div class=\"ui-g-4\">\n                    <label >Unit Price</label>\n                </div>\n                <div class=\"ui-g-8\">\n                    <input pInputText id=\"brand\" [ngModel]=\"lineItems.unitPrice\" name=\"unitPrice\" />\n                </div>\n            </div>\n            <div class=\"ui-g-12\">\n                <div class=\"ui-g-4\">\n                    <label >Items Total</label>\n                </div>\n                <div class=\"ui-g-8\">\n                    <input [disabled]=\"true\"  pInputText id=\"color\" [ngModel]=\"lineItems.lineItemTotal\"   name=\"lineItemTotal\"/>\n                </div>\n            </div>\n        </div>\n    </form>\n        <p-footer>\n            <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n                <button type=\"button\" pButton icon=\"fa fa-check\" (click)=\"addItems(itemsDetails)\" label=\"Add\"></button>\n            </div>\n        </p-footer>\n    </p-dialog>\n    <p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__invoices_service_service__ = __webpack_require__("../../../../../src/app/invoices-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoice__ = __webpack_require__("../../../../../src/app/invoice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lineitems__ = __webpack_require__("../../../../../src/app/lineitems.ts");
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
    function AppComponent(InvoicesService) {
        this.InvoicesService = InvoicesService;
        this.title = 'app';
        this.Invoices = new __WEBPACK_IMPORTED_MODULE_2__invoice__["a" /* Invoice */]();
        this.lineItems = new __WEBPACK_IMPORTED_MODULE_3__lineitems__["a" /* Lineitems */]();
        this.InvoicesLists = [];
        this.items = new Array();
        this.msgs = [];
    }
    AppComponent.prototype.getAllInvoices = function () {
        var _this = this;
        this.InvoicesLists = [];
        this.InvoicesService.getAllInvoices().subscribe(function (res) { _this.InvoicesLists = res; }, function (err) { return console.error(err); });
    };
    AppComponent.prototype.getInvoices = function () {
        var _this = this;
        this.InvoicesLists = [];
        this.InvoicesService.getInvoice(this.Invoices.id).subscribe(function (res) {
            _this.InvoicesLists.push(res);
            _this.Invoices.id = null;
        }, function (err) { return console.error(err); });
    };
    AppComponent.prototype.showDialog = function () {
        this.clear();
        this.displayDialog = true;
    };
    AppComponent.prototype.showLineItmesDialog = function () {
        this.displayItmeDialog = true;
    };
    AppComponent.prototype.addItems = function (itemsDetails) {
        if (!this.Invoices.lineItem) {
            this.Invoices.lineItem = [];
        }
        this.Invoices.lineItem.push(itemsDetails.value);
        itemsDetails.resetForm();
        this.items = this.Invoices.lineItem;
        this.displayItmeDialog = false;
    };
    AppComponent.prototype.savaInvoice = function () {
        var _this = this;
        this.InvoicesService.SaveInvoice(this.Invoices).subscribe(function (res) {
            _this.showSuccess();
            _this.clear();
            _this.displayDialog = false;
        }, function (err) { return console.error(err); });
    };
    AppComponent.prototype.showSuccess = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Invioce submitted' });
    };
    AppComponent.prototype.clear = function () {
        this.Invoices = new __WEBPACK_IMPORTED_MODULE_2__invoice__["a" /* Invoice */]();
        this.items = new Array();
    };
    AppComponent.prototype.viewInvoices = function (InvoicesList) {
        this.Invoices = InvoicesList;
        this.items = this.Invoices.lineItem;
        this.displayDialog = true;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__invoices_service_service__["a" /* InvoicesService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_panel__ = __webpack_require__("../../../../primeng/panel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_panel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_panel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_table__ = __webpack_require__("../../../../primeng/table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_inputtext__ = __webpack_require__("../../../../primeng/inputtext.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_inputtext___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_primeng_inputtext__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_button__ = __webpack_require__("../../../../primeng/button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_primeng_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_components_dialog_dialog__ = __webpack_require__("../../../../primeng/components/dialog/dialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_components_dialog_dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_primeng_components_dialog_dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_growl__ = __webpack_require__("../../../../primeng/growl.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_growl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_primeng_growl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__invoices_service_service__ = __webpack_require__("../../../../../src/app/invoices-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// ui imports







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6_primeng_panel__["PanelModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_table__["TableModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_inputtext__["InputTextModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_button__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_10_primeng_components_dialog_dialog__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_11_primeng_growl__["GrowlModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__invoices_service_service__["a" /* InvoicesService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/invoice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Invoice; });
var Invoice = (function () {
    function Invoice() {
    }
    return Invoice;
}());



/***/ }),

/***/ "../../../../../src/app/invoices-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoicesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// const httpOptions = {
//   headers:new HttpHeaders({'Content-Type':'application/json'})
// }
var InvoicesService = (function () {
    function InvoicesService(_http) {
        this._http = _http;
        this.getAllInvoicesUrl = "/api/invoices";
        this.getInvoiceUrl = "/api/invoices";
        this.addInvoiceUrl = "/api/invoices";
    }
    InvoicesService.prototype.getAllInvoices = function () {
        return this._http.get(this.getAllInvoicesUrl)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    InvoicesService.prototype.getInvoice = function (invoiceNumber) {
        // return this._http.get(this.getInvoiceUrl, invoiceNumber);
        return this._http.get(this.getInvoiceUrl.concat("/", invoiceNumber))
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    InvoicesService.prototype.SaveInvoice = function (invoices) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers, withCredentials: true });
        return this._http.post(this.addInvoiceUrl, invoices, options);
    };
    InvoicesService.prototype.handleError = function (error) {
        console.error('ApiServices::handleError', error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error);
    };
    InvoicesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], InvoicesService);
    return InvoicesService;
}());



/***/ }),

/***/ "../../../../../src/app/lineitems.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Lineitems; });
var Lineitems = (function () {
    function Lineitems() {
    }
    return Lineitems;
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
    production: false
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
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