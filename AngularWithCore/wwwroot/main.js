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

module.exports = "<app-my-nav></app-my-nav>\r\n<!--<h2>Angular With .Net Core</h2>\r\n<ul>\r\n  <li *ngFor=\"let result of apiValues\">{{result}}</li>\r\n</ul>-->\r\n<!--<app-my-table></app-my-table>-->\r\n\r\n<app-my-dashboard></app-my-dashboard>\r\n"

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


var AppComponent = /** @class */ (function () {
    function AppComponent(_service) {
        this._service = _service;
        this.apiValues = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._service.get("/api/values").subscribe(function (result) {
            _this.apiValues = result.json();
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
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
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _my_nav_my_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-nav/my-nav.component */ "./src/app/my-nav/my-nav.component.ts");
/* harmony import */ var _my_dashboard_my_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-dashboard/my-dashboard.component */ "./src/app/my-dashboard/my-dashboard.component.ts");
/* harmony import */ var _my_table_my_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-table/my-table.component */ "./src/app/my-table/my-table.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: 'my-dashboard', component: _my_dashboard_my_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["MyDashboardComponent"] },
    { path: 'second-page', component: _my_table_my_table_component__WEBPACK_IMPORTED_MODULE_6__["MyTableComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _my_nav_my_nav_component__WEBPACK_IMPORTED_MODULE_4__["MyNavComponent"],
                _my_dashboard_my_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["MyDashboardComponent"],
                _my_table_my_table_component__WEBPACK_IMPORTED_MODULE_6__["MyTableComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/my-dashboard/my-dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/my-dashboard/my-dashboard.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  margin: 20px;\n}\n\n.dashboard-card {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n}\n\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\n.dashboard-card-content {\n  text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/my-dashboard/my-dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/my-dashboard/my-dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\n  <h1 class=\"mat-h1\">Dashboard</h1>\n  <mat-grid-list cols=\"2\" rowHeight=\"350px\">\n    <mat-grid-tile *ngFor=\"let card of cards | async\" [colspan]=\"card.cols\" [rowspan]=\"card.rows\">\n      <mat-card class=\"dashboard-card\">\n        <mat-card-header>\n          <mat-card-title>\n            {{card.title}}\n            <button mat-icon-button class=\"more-button\" [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">\n              <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\" xPosition=\"before\">\n              <button mat-menu-item>Expand</button>\n              <button mat-menu-item>Remove</button>\n            </mat-menu>\n          </mat-card-title>\n        </mat-card-header>\n        <mat-card-content class=\"dashboard-card-content\">\n          <div>Card Content Here</div>\n        </mat-card-content>\n      </mat-card>\n    </mat-grid-tile>\n  </mat-grid-list>\n</div>\n"

/***/ }),

/***/ "./src/app/my-dashboard/my-dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/my-dashboard/my-dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: MyDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDashboardComponent", function() { return MyDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyDashboardComponent = /** @class */ (function () {
    function MyDashboardComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        /** Based on the screen size, switch from standard to one column per row */
        this.cards = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_a) {
            var matches = _a.matches;
            if (matches) {
                return [
                    { title: 'Card 1', cols: 1, rows: 1 },
                    { title: 'Card 2', cols: 1, rows: 1 },
                    { title: 'Card 3', cols: 1, rows: 1 },
                    { title: 'Card 4', cols: 1, rows: 1 }
                ];
            }
            return [
                { title: 'Card 1', cols: 2, rows: 1 },
                { title: 'Card 2', cols: 1, rows: 1 },
                { title: 'Card 3', cols: 1, rows: 2 },
                { title: 'Card 4', cols: 1, rows: 1 }
            ];
        }));
    }
    MyDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-dashboard',
            template: __webpack_require__(/*! ./my-dashboard.component.html */ "./src/app/my-dashboard/my-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./my-dashboard.component.css */ "./src/app/my-dashboard/my-dashboard.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
    ], MyDashboardComponent);
    return MyDashboardComponent;
}());



/***/ }),

/***/ "./src/app/my-nav/my-nav.component.css":
/*!*********************************************!*\
  !*** ./src/app/my-nav/my-nav.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n"

/***/ }),

/***/ "./src/app/my-nav/my-nav.component.html":
/*!**********************************************!*\
  !*** ./src/app/my-nav/my-nav.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\"\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n      [opened]=\"!(isHandset$ | async)\">\n    <mat-toolbar>Menu</mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item routerLink=\"/my-dashboard\">Dasboard</a>\n      <a mat-list-item routerLink=\"/second-page\" >Second Page</a>\n      <a mat-list-item routerLink=\"/Student\" >Student</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\r\n    <mat-toolbar color=\"primary\">\r\n      <button type=\"button\"\r\n              aria-label=\"Toggle sidenav\"\r\n              mat-icon-button\r\n              (click)=\"drawer.toggle()\"\r\n              *ngIf=\"isHandset$ | async\">\r\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n      </button>\r\n      <span>AngularProject</span>\r\n    </mat-toolbar>\r\n    <!-- Add Content Here -->\r\n    <router-outlet></router-outlet>\r\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/my-nav/my-nav.component.ts":
/*!********************************************!*\
  !*** ./src/app/my-nav/my-nav.component.ts ***!
  \********************************************/
/*! exports provided: MyNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyNavComponent", function() { return MyNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyNavComponent = /** @class */ (function () {
    function MyNavComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
    }
    MyNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-nav',
            template: __webpack_require__(/*! ./my-nav.component.html */ "./src/app/my-nav/my-nav.component.html"),
            styles: [__webpack_require__(/*! ./my-nav.component.css */ "./src/app/my-nav/my-nav.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]])
    ], MyNavComponent);
    return MyNavComponent;
}());



/***/ }),

/***/ "./src/app/my-table/my-table-datasource.ts":
/*!*************************************************!*\
  !*** ./src/app/my-table/my-table-datasource.ts ***!
  \*************************************************/
/*! exports provided: MyTableDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTableDataSource", function() { return MyTableDataSource; });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



// TODO: replace this with real data from your application
var EXAMPLE_DATA = [
    { id: 1, name: 'Hydrogen' },
    { id: 2, name: 'Helium' },
    { id: 3, name: 'Lithium' },
    { id: 4, name: 'Beryllium' },
    { id: 5, name: 'Boron' },
    { id: 6, name: 'Carbon' },
    { id: 7, name: 'Nitrogen' },
    { id: 8, name: 'Oxygen' },
    { id: 9, name: 'Fluorine' },
    { id: 10, name: 'Neon' },
    { id: 11, name: 'Sodium' },
    { id: 12, name: 'Magnesium' },
    { id: 13, name: 'Aluminum' },
    { id: 14, name: 'Silicon' },
    { id: 15, name: 'Phosphorus' },
    { id: 16, name: 'Sulfur' },
    { id: 17, name: 'Chlorine' },
    { id: 18, name: 'Argon' },
    { id: 19, name: 'Potassium' },
    { id: 20, name: 'Calcium' },
];
/**
 * Data source for the MyTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
var MyTableDataSource = /** @class */ (function (_super) {
    __extends(MyTableDataSource, _super);
    function MyTableDataSource(paginator, sort) {
        var _this = _super.call(this) || this;
        _this.paginator = paginator;
        _this.sort = sort;
        _this.data = EXAMPLE_DATA;
        return _this;
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    MyTableDataSource.prototype.connect = function () {
        var _this = this;
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        var dataMutations = [
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];
        // Set the paginator's length
        this.paginator.length = this.data.length;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"].apply(void 0, dataMutations).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () {
            return _this.getPagedData(_this.getSortedData(_this.data.slice()));
        }));
    };
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    MyTableDataSource.prototype.disconnect = function () { };
    /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     */
    MyTableDataSource.prototype.getPagedData = function (data) {
        var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    };
    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    MyTableDataSource.prototype.getSortedData = function (data) {
        var _this = this;
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'id': return compare(+a.id, +b.id, isAsc);
                default: return 0;
            }
        });
    };
    return MyTableDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["DataSource"]));

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/my-table/my-table.component.css":
/*!*************************************************!*\
  !*** ./src/app/my-table/my-table.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width-table {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/my-table/my-table.component.html":
/*!**************************************************!*\
  !*** ./src/app/my-table/my-table.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\">\n  <table mat-table class=\"full-width-table\" [dataSource]=\"dataSource\" matSort aria-label=\"Elements\">\n    <!-- Id Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Id</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.id}}</td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.name}}</td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator #paginator\n      [length]=\"dataSource.data.length\"\n      [pageIndex]=\"0\"\n      [pageSize]=\"50\"\n      [pageSizeOptions]=\"[25, 50, 100, 250]\">\n  </mat-paginator>\n</div>\n"

/***/ }),

/***/ "./src/app/my-table/my-table.component.ts":
/*!************************************************!*\
  !*** ./src/app/my-table/my-table.component.ts ***!
  \************************************************/
/*! exports provided: MyTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTableComponent", function() { return MyTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _my_table_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-table-datasource */ "./src/app/my-table/my-table-datasource.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyTableComponent = /** @class */ (function () {
    function MyTableComponent() {
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['id', 'name'];
    }
    MyTableComponent.prototype.ngOnInit = function () {
        this.dataSource = new _my_table_datasource__WEBPACK_IMPORTED_MODULE_2__["MyTableDataSource"](this.paginator, this.sort);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], MyTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], MyTableComponent.prototype, "sort", void 0);
    MyTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-table',
            template: __webpack_require__(/*! ./my-table.component.html */ "./src/app/my-table/my-table.component.html"),
            styles: [__webpack_require__(/*! ./my-table.component.css */ "./src/app/my-table/my-table.component.css")],
        })
    ], MyTableComponent);
    return MyTableComponent;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\AngularWithCore\AngularWithCore\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map