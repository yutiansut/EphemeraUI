webpackJsonp([0],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StrategiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__strategy_strategy__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers_providers__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StrategiesPage = /** @class */ (function () {
    function StrategiesPage(navCtrl, navParams, provider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
    }
    StrategiesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.provider.getAllStrategies().subscribe(function (data) { return _this.strategies = data; });
    };
    StrategiesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StrategiesPage');
    };
    StrategiesPage.prototype.equityStrategyTapped = function ($event, strategy) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__strategy_strategy__["a" /* StrategyPage */], strategy);
    };
    StrategiesPage.prototype.cryptoStrategyTapped = function ($event, strategy) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__strategy_strategy__["a" /* StrategyPage */], strategy);
    };
    StrategiesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-strategies',template:/*ion-inline-start:"/Users/vincents/Desktop/ionic-ui/src/pages/strategies/strategies.html"*/'\n<ion-header>\n\n  <ion-navbar color = "secondary">\n    <ion-title text-center>Strategies</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<ion-title>\n  <br>\n  View Statistics on All Closed Trades\n  <br>\n  <br>\n</ion-title>\n\n  <ion-list-header>Strategies</ion-list-header>\n  <ion-list inset>\n    <button *ngFor="let strategy of strategies" ion-item (click)="equityStrategyTapped($event, strategy)">\n      {{strategy.name}}\n    </button>\n  </ion-list>  \n\n\n</ion-content>\n'/*ion-inline-end:"/Users/vincents/Desktop/ionic-ui/src/pages/strategies/strategies.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_providers_providers__["a" /* ProvidersProvider */]])
    ], StrategiesPage);
    return StrategiesPage;
}());

//# sourceMappingURL=strategies.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StrategyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__trade_trade__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_providers_providers__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StrategyPage = /** @class */ (function () {
    function StrategyPage(navCtrl, navParams, provider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.strategy = this.navParams.data;
    }
    StrategyPage.prototype.ngOnInit = function () {
        var _this = this;
        this.provider.getEquityTradesByStrategy(this.strategy.name).subscribe(function (data) { return _this.equityStrategyTrades = data; });
        this.provider.getCryptoTradesByStrategy(this.strategy.name).subscribe(function (data) { return _this.cryptoStrategyTrades = data; });
    };
    StrategyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StrategyPage');
    };
    StrategyPage.prototype.tradeTapped = function ($event, trade) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__trade_trade__["a" /* TradePage */], trade);
    };
    StrategyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-strategy',template:/*ion-inline-start:"/Users/vincents/Desktop/ionic-ui/src/pages/strategy/strategy.html"*/'\n<ion-header>\n\n    <ion-navbar color = "secondary">\n      <ion-title>{{strategy.name}}</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n    <ion-list-header>Equity Trades</ion-list-header>\n    <ion-item *ngFor="let equityStrategyTrade of equityStrategyTrades" (click)="tradeTapped($event, equityStrategyTrade)">\n          {{equityStrategyTrade.direction}}\n          {{equityStrategyTrade.ticker}}\n          <span [ngStyle]="{\'font-weight\': \'bold\', \'color\': equityStrategyTrade.percentChange >= 0 ? \'green\' : \'red\'}">{{equityStrategyTrade.percentChange}}%</span>  </ion-item>\n  <ion-list-header>Crypto Trades</ion-list-header>\n  <ion-item *ngFor="let cryptoStrategyTrade of cryptoStrategyTrades" (click)="tradeTapped($event, cryptoStrategyTrade)">\n        {{cryptoStrategyTrade.direction}}\n        {{cryptoStrategyTrade.ticker}}\n        <span [ngStyle]="{\'font-weight\': \'bold\', \'color\': equityStrategyTrade.percentChange >= 0 ? \'green\' : \'red\'}">{{cryptoStrategyTrade.percentChange}}%</span>  </ion-item>\n  \n  </ion-content>\n  '/*ion-inline-end:"/Users/vincents/Desktop/ionic-ui/src/pages/strategy/strategy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_providers_providers__["a" /* ProvidersProvider */]])
    ], StrategyPage);
    return StrategyPage;
}());

//# sourceMappingURL=strategy.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenTradesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__trade_trade__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers_providers__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OpenTradesPage = /** @class */ (function () {
    function OpenTradesPage(navCtrl, navParams, provider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
    }
    OpenTradesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.provider.getOpenEquityTrades().subscribe(function (data) { return _this.equityOpenTrades = data; });
        this.provider.getOpenCryptoTrades().subscribe(function (data) { return _this.cryptoOpenTrades = data; });
    };
    OpenTradesPage.prototype.ionViewDidLoad = function () {
    };
    OpenTradesPage.prototype.openTradeTapped = function ($event, openTrade) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__trade_trade__["a" /* TradePage */], openTrade);
    };
    OpenTradesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-open-trades',template:/*ion-inline-start:"/Users/vincents/Desktop/ionic-ui/src/pages/open-trades/open-trades.html"*/'\n<ion-header>\n\n  <ion-navbar color = "secondary">\n    <ion-title>Open Trades</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list-header>Equity Trades</ion-list-header>\n  <ion-item *ngFor="let equityOpenTrade of equityOpenTrades" (click)="openTradeTapped($event, equityOpenTrade)">\n        {{equityOpenTrade.direction}}\n        {{equityOpenTrade.ticker}}\n        ${{equityOpenTrade.signalBuyPrice}}\n</ion-item>\n<ion-list-header>Crypto Trades</ion-list-header>\n<ion-item *ngFor="let cryptoOpenTrade of cryptoOpenTrades" (click)="openTradeTapped($event, cryptoOpenTrade)">\n      {{cryptoOpenTrade.direction}}\n      {{cryptoOpenTrade.ticker}}\n      ${{cryptoOpenTrade.signalBuyPrice}}\n</ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/Users/vincents/Desktop/ionic-ui/src/pages/open-trades/open-trades.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__node_modules_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__node_modules_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_providers_providers__["a" /* ProvidersProvider */]])
    ], OpenTradesPage);
    return OpenTradesPage;
}());

//# sourceMappingURL=open-trades.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatisticsPage = /** @class */ (function () {
    function StatisticsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StatisticsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StatisticsPage');
    };
    StatisticsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-statistics',template:/*ion-inline-start:"/Users/vincents/Desktop/ionic-ui/src/pages/statistics/statistics.html"*/'\n<ion-header>\n\n  <ion-navbar color = "secondary">\n    <ion-title text-center>Statistics</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/vincents/Desktop/ionic-ui/src/pages/statistics/statistics.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], StatisticsPage);
    return StatisticsPage;
}());

//# sourceMappingURL=statistics.js.map

/***/ }),

/***/ 118:
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
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewtradebyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_providers_providers__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tickers_tickers__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__strategies_strategies__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__closed_trades_closed_trades__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ViewtradebyPage = /** @class */ (function () {
    function ViewtradebyPage(navCtrl, navParams, provider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
    }
    ViewtradebyPage.prototype.ngOnInit = function () {
    };
    ViewtradebyPage.prototype.ionViewDidLoad = function () {
        console.log(this.eCount);
    };
    ViewtradebyPage.prototype.goToStrategies = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__strategies_strategies__["a" /* StrategiesPage */]);
    };
    ViewtradebyPage.prototype.goToTickers = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__tickers_tickers__["a" /* TickersPage */]);
    };
    ViewtradebyPage.prototype.goToClosedTrades = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__closed_trades_closed_trades__["a" /* ClosedTradesPage */]);
    };
    ViewtradebyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-viewtradeby',template:/*ion-inline-start:"/Users/vincents/Desktop/ionic-ui/src/pages/viewtradeby/viewtradeby.html"*/'\n<ion-header>\n\n  <ion-navbar color = "secondary">\n    <ion-title>View Closed Trades By</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list inset>\n      <button ion-item (click)="goToClosedTrades()">\n        All\n      </button>\n      <button ion-item (click)="goToStrategies()">\n        Strategy\n      </button>\n      <button ion-item (click)="goToTickers()">\n        Symbol\n      </button>\n    </ion-list>  \n   \n\n</ion-content>\n'/*ion-inline-end:"/Users/vincents/Desktop/ionic-ui/src/pages/viewtradeby/viewtradeby.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_providers_providers__["a" /* ProvidersProvider */]])
    ], ViewtradebyPage);
    return ViewtradebyPage;
}());

//# sourceMappingURL=viewtradeby.js.map

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvidersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProvidersProvider = /** @class */ (function () {
    function ProvidersProvider(http) {
        this.http = http;
        this.API = 'http://167.99.52.238:8080';
        this.EQUITY_TRADES = this.API + '/equity-trades';
        this.EQUITY_TRADE_SIGNALS = this.API + '/equity-trade-signals';
        this.CRYPTO_TRADES = this.API + '/crypto-trades';
        this.CRYPTO_TRADE_SIGNALS = this.API + '/crypto-trade-signals';
    }
    ProvidersProvider.prototype.getAllEquityTrades = function () {
        return this.http.get(this.EQUITY_TRADES + "/all");
    };
    ProvidersProvider.prototype.getAllCryptoTrades = function () {
        return this.http.get(this.CRYPTO_TRADES + "/all");
    };
    ProvidersProvider.prototype.getOpenEquityTrades = function () {
        return this.http.get(this.EQUITY_TRADES + "/open");
    };
    ProvidersProvider.prototype.getClosedEquityTrades = function () {
        return this.http.get(this.EQUITY_TRADES + "/closed");
    };
    ProvidersProvider.prototype.getOpenCryptoTrades = function () {
        return this.http.get(this.CRYPTO_TRADES + "/open");
    };
    ProvidersProvider.prototype.getClosedCryptoTrades = function () {
        return this.http.get(this.CRYPTO_TRADES + "/closed");
    };
    ProvidersProvider.prototype.getAllEquityTradeSignals = function () {
        return this.http.get(this.EQUITY_TRADE_SIGNALS + "/all");
    };
    ProvidersProvider.prototype.getAllCryptoTradeSignals = function () {
        return this.http.get(this.CRYPTO_TRADE_SIGNALS + "/all");
    };
    ProvidersProvider.prototype.getEquityTradesBySymbol = function (ticker) {
        return this.http.get(this.EQUITY_TRADES + "/tickers/" + ticker);
    };
    ProvidersProvider.prototype.getCryptoTradesBySymbol = function (ticker) {
        return this.http.get(this.CRYPTO_TRADES + "/tickers/" + ticker);
    };
    ProvidersProvider.prototype.getEquityTradesByStrategy = function (strategy) {
        return this.http.get(this.EQUITY_TRADES + "/strategies/" + strategy);
    };
    ProvidersProvider.prototype.getCryptoTradesByStrategy = function (strategy) {
        return this.http.get(this.CRYPTO_TRADES + "/strategies/" + strategy);
    };
    ProvidersProvider.prototype.getEquityTradesByTicker = function () {
        return this.http.get(this.EQUITY_TRADES + "/tickers");
    };
    ProvidersProvider.prototype.getCryptoTradesByTicker = function () {
        return this.http.get(this.CRYPTO_TRADES + "/tickers");
    };
    ProvidersProvider.prototype.getAllStrategies = function () {
        return this.http.get(this.API + "/all");
    };
    ProvidersProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ProvidersProvider);
    return ProvidersProvider;
}());

//# sourceMappingURL=providers.js.map

/***/ }),

/***/ 162:
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
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TickerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_providers_providers__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trade_trade__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TickerPage = /** @class */ (function () {
    function TickerPage(navCtrl, navParams, provider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.ticker = this.navParams.data;
    }
    TickerPage.prototype.ngOnInit = function () {
        var _this = this;
        this.provider.getEquityTradesBySymbol(this.ticker.name).subscribe(function (data) { return _this.equityTickerTrades = data; });
        this.provider.getCryptoTradesBySymbol(this.ticker.name).subscribe(function (data) { return _this.cryptoTickerTrades = data; });
    };
    TickerPage.prototype.tradeTapped = function ($event, trade) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__trade_trade__["a" /* TradePage */], trade);
    };
    TickerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TickerPage');
    };
    TickerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-ticker',template:/*ion-inline-start:"/Users/vincents/Desktop/ionic-ui/src/pages/ticker/ticker.html"*/'\n<ion-header>\n\n    <ion-navbar color = "secondary">\n      <ion-title text-center>{{ticker.name}}</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  <ion-content padding>\n      <ion-list-header>Equities</ion-list-header>\n\n      <ion-list inset>\n        <button *ngFor="let equityTickerTrade of equityTickerTrades" ion-item (click)="tradeTapped($event, equityTickerTrade)">\n            {{equityTickerTrade.direction}}\n            {{equityTickerTrade.ticker}}\n            <span [ngStyle]="{\'font-weight\': \'bold\', \'color\': equityTickerTrade.percentChange >= 0 ? \'green\' : \'red\'}">{{equityTickerTrade.percentChange}}%</span>  \n        </button>\n        \n      </ion-list>  \n      <ion-list-header>Crypto</ion-list-header>\n      <ion-list inset>\n        <button *ngFor="let cryptoTickerTrade of cryptoTickerTrades" ion-item (click)="tradeTapped($event, cryptoTickerTrade)">\n            {{cryptoTickerTrade.direction}}\n            {{cryptoTickerTrade.ticker}}\n            <span [ngStyle]="{\'font-weight\': \'bold\', \'color\': cryptoTickerTrade.percentChange >= 0 ? \'green\' : \'red\'}">{{cryptoTickerTrade.percentChange}}%</span>  \n        </button>\n      </ion-list>  \n  \n  \n  <ion-content padding>\n  \n  </ion-content>'/*ion-inline-end:"/Users/vincents/Desktop/ionic-ui/src/pages/ticker/ticker.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_providers_providers__["a" /* ProvidersProvider */]])
    ], TickerPage);
    return TickerPage;
}());

//# sourceMappingURL=ticker.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_providers_providers__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__statistics_statistics__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__closed_trades_closed_trades__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__open_trades_open_trades__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OverviewPage = /** @class */ (function () {
    function OverviewPage(navCtrl, provider) {
        this.navCtrl = navCtrl;
        this.provider = provider;
    }
    OverviewPage.prototype.ngOnInit = function () {
        var _this = this;
        this.provider.getOpenEquityTrades().subscribe(function (data) { return _this.opentrades = data; });
        this.provider.getClosedEquityTrades().subscribe(function (data) { return _this.closedtrades = data; });
    };
    OverviewPage.prototype.goToStatistics = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__statistics_statistics__["a" /* StatisticsPage */]);
    };
    OverviewPage.prototype.goToOpenTrades = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__open_trades_open_trades__["a" /* OpenTradesPage */]);
    };
    OverviewPage.prototype.goToClosedTrades = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__closed_trades_closed_trades__["a" /* ClosedTradesPage */]);
    };
    OverviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-overview',template:/*ion-inline-start:"/Users/vincents/Desktop/ionic-ui/src/pages/overview/overview.html"*/'<ion-header>\n    <ion-navbar color = "primary">\n        <button menuToggle ion-button icon-only>\n            <ion-icon name = "menu"></ion-icon>\n        </button>\n        <ion-title>Ephemera</ion-title>\n    </ion-navbar>\n    <ion-toolbar color = "secondary" >\n            <ion-title text-center>\n                    Overview\n            </ion-title>\n        </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-list>\n\n</ion-list>\n</ion-content>\n\n'/*ion-inline-end:"/Users/vincents/Desktop/ionic-ui/src/pages/overview/overview.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_providers_providers__["a" /* ProvidersProvider */]])
    ], OverviewPage);
    return OverviewPage;
}());

//# sourceMappingURL=overview.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_viewtradeby_viewtradeby__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_closed_trades_closed_trades__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_open_trades_open_trades__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_trade_trade__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_overview_overview__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_statistics_statistics__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_strategies_strategies__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_strategy_strategy__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_providers_providers__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tickers_tickers__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_ticker_ticker__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_component__ = __webpack_require__(283);
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
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_overview_overview__["a" /* OverviewPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_statistics_statistics__["a" /* StatisticsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_strategies_strategies__["a" /* StrategiesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_strategy_strategy__["a" /* StrategyPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_trade_trade__["a" /* TradePage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_closed_trades_closed_trades__["a" /* ClosedTradesPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_open_trades_open_trades__["a" /* OpenTradesPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_viewtradeby_viewtradeby__["a" /* ViewtradebyPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_tickers_tickers__["a" /* TickersPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_ticker_ticker__["a" /* TickerPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_overview_overview__["a" /* OverviewPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_statistics_statistics__["a" /* StatisticsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_strategies_strategies__["a" /* StrategiesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_strategy_strategy__["a" /* StrategyPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_trade_trade__["a" /* TradePage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_closed_trades_closed_trades__["a" /* ClosedTradesPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_open_trades_open_trades__["a" /* OpenTradesPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_viewtradeby_viewtradeby__["a" /* ViewtradebyPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_tickers_tickers__["a" /* TickersPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_ticker_ticker__["a" /* TickerPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_6__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_providers_providers__["a" /* ProvidersProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_viewtradeby_viewtradeby__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_overview_overview__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_statistics_statistics__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_strategies_strategies__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_closed_trades_closed_trades__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_open_trades_open_trades__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tickers_tickers__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_strategy_strategy__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_overview_overview__["a" /* OverviewPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.goStatistics = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_statistics_statistics__["a" /* StatisticsPage */]);
    };
    MyApp.prototype.goToStrategies = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_strategies_strategies__["a" /* StrategiesPage */]);
    };
    MyApp.prototype.goToStrategy = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_11__pages_strategy_strategy__["a" /* StrategyPage */]);
    };
    MyApp.prototype.goToOpenTrades = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__pages_open_trades_open_trades__["a" /* OpenTradesPage */]);
    };
    MyApp.prototype.goToClosedTrades = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_closed_trades_closed_trades__["a" /* ClosedTradesPage */]);
    };
    MyApp.prototype.goToViewTradesBy = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_0__pages_viewtradeby_viewtradeby__["a" /* ViewtradebyPage */]);
    };
    MyApp.prototype.goToTickers = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_10__pages_tickers_tickers__["a" /* TickersPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/vincents/Desktop/ionic-ui/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color = "secondary">\n      <ion-title text-center>Ephemera</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <ion-list-header>Navigate</ion-list-header>\n      <button menuClose ion-item (click)="goToOpenTrades()">Open Trades</button>\n      <button menuClose ion-item (click)="goToViewTradesBy()">View Closed Trades By</button>\n      <button menuClose ion-item (click)="goStatistics()">Statistics</button>\n\n\n</ion-list>\n  </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/vincents/Desktop/ionic-ui/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers_providers__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TradePage = /** @class */ (function () {
    function TradePage(navCtrl, navParams, provider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.trade = this.navParams.data;
    }
    TradePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TradePage');
    };
    TradePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trade',template:/*ion-inline-start:"/Users/vincents/Desktop/ionic-ui/src/pages/trade/trade.html"*/'\n<ion-header>\n\n  <ion-navbar color = "secondary">\n    <ion-title text-center> Trade #{{trade.id}}</ion-title>\n  </ion-navbar>\n<div>\n  <ion-list>\n    <ion-item>\n  ID: {{trade.id}} \n  </ion-item>\n  <ion-item>\n  Status: {{trade.status}}\n</ion-item>\n<ion-item>\n  Symbol: {{trade.ticker}}\n</ion-item>\n<ion-item>\n  Direction: {{trade.direction}}\n</ion-item>\n<ion-item>\n    Strategy: {{trade.strategy1}}\n  </ion-item>\n<ion-item>\n  Amount: {{trade.amount}}\n</ion-item>\n<ion-item>\n  Open Price: {{trade.signalBuyPrice}}\n</ion-item>\n<ion-item>\n  Open Time: {{trade.buyTimestamp}}\n</ion-item>\n<ion-item>\n  Close Price: {{trade.signalSellPrice}}\n</ion-item>\n<ion-item>\n  Close Time: {{trade.sellTimestamp}}\n</ion-item>\n<ion-item>\n  Percent Change: {{trade.percentChange}}\n</ion-item>\n\n<ion-item>\n  Notes: {{trade.strategy1Notes}}\n  </ion-item>\n  </ion-list>\n</div>\n\n\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/vincents/Desktop/ionic-ui/src/pages/trade/trade.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_providers_providers__["a" /* ProvidersProvider */]])
    ], TradePage);
    return TradePage;
}());

//# sourceMappingURL=trade.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClosedTradesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers_providers__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trade_trade__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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




var ClosedTradesPage = /** @class */ (function () {
    function ClosedTradesPage(navCtrl, navParams, provider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
    }
    ClosedTradesPage.prototype.ngOnInit = function () {
        this.getTrades();
    };
    ClosedTradesPage.prototype.ionViewDidLoad = function () {
    };
    ClosedTradesPage.prototype.getTrades = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, response1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.provider.getClosedEquityTrades().toPromise()];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, this.provider.getClosedCryptoTrades().toPromise()];
                    case 2:
                        response1 = _a.sent();
                        this.equityClosedTrades = response;
                        this.cryptoClosedTrades = response1;
                        return [4 /*yield*/, this.getStats(response, response1)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ClosedTradesPage.prototype.getStats = function (data, data1) {
        var count = 0;
        var count1 = 0;
        var tradesProfitable = 0;
        var tradesProfitable1 = 0;
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var trade = data_1[_i];
            count++;
            if (trade.percentChange >= 0) {
                tradesProfitable++;
            }
        }
        for (var _a = 0, data1_1 = data1; _a < data1_1.length; _a++) {
            var trade = data1_1[_a];
            count1++;
            if (trade.percentChange >= 0) {
                tradesProfitable1++;
            }
        }
        this.equityCount = count;
        this.cryptoCount = count1;
        this.totalCount = count + count1;
        this.equityProfitable = Math.round(((tradesProfitable / count) * 100) * 10) / 10;
        this.cryptoProfitable = Math.round(((tradesProfitable1 / count1) * 100) * 10) / 10;
        this.totalProfitable = Math.round((tradesProfitable + tradesProfitable1) / (count + count1) * 100) * 10 / 10;
    };
    ClosedTradesPage.prototype.custom_sort = function (a, b) {
        return new Date(a.lastUpdated).getTime() - new Date(b.lastUpdated).getTime();
    };
    ClosedTradesPage.prototype.getTotalCount = function () {
        this.totalCount = this.equityCount + this.cryptoCount;
    };
    ClosedTradesPage.prototype.closedTradeTapped = function ($event, closedTrade) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__trade_trade__["a" /* TradePage */], closedTrade);
    };
    ClosedTradesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-closed-trades',template:/*ion-inline-start:"/Users/vincents/Desktop/ionic-ui/src/pages/closed-trades/closed-trades.html"*/'\n<ion-header>\n\n  <ion-navbar color = "secondary">\n    <ion-title>Closed Trades</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n    <ion-grid>\n        <ion-row>\n          <ion-col>\n            Total Trades: {{totalCount}}\n          </ion-col>\n          <ion-col>\n            % Profitable: {{totalProfitable}}%\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            Total Equity: {{equityCount}}\n          </ion-col>\n          <ion-col>\n              % Profitable: {{equityProfitable}}%\n          </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n              Total Crypto: {{cryptoCount}}\n            </ion-col>\n            <ion-col>\n          % Profitable: {{cryptoProfitable}}%\n            </ion-col>\n          </ion-row>\n      </ion-grid>\n\n\n      <ion-grid>\n          <ion-row>\n            <ion-col>\n                <ion-list-header>Equity Trades</ion-list-header>\n            </ion-col>\n            <ion-col>\n                <ion-list-header>Crypto Trades</ion-list-header>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n                <ion-item *ngFor="let equityClosedTrade of equityClosedTrades" (click)="closedTradeTapped($event, equityClosedTrade)">\n                    {{equityClosedTrade.direction}}\n                    {{equityClosedTrade.ticker}}\n                    <span [ngStyle]="{\'font-weight\': \'bold\', \'color\': equityClosedTrade.percentChange >= 0 ? \'green\' : \'red\'}">{{equityClosedTrade.percentChange}}%</span>\n                    </ion-item>\n            </ion-col>\n            <ion-col>\n                <ion-item *ngFor="let cryptoClosedTrade of cryptoClosedTrades" (click)="closedTradeTapped($event, cryptoClosedTrade)">\n                    {{cryptoClosedTrade.direction}}\n                    {{cryptoClosedTrade.ticker}}\n                    <span [ngStyle]="{\'font-weight\': \'bold\', \'color\': cryptoClosedTrade.percentChange >= 0 ? \'green\' : \'red\'}">{{cryptoClosedTrade.percentChange}}%</span>  \n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/vincents/Desktop/ionic-ui/src/pages/closed-trades/closed-trades.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_providers_providers__["a" /* ProvidersProvider */]])
    ], ClosedTradesPage);
    return ClosedTradesPage;
}());

//# sourceMappingURL=closed-trades.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TickersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_providers_providers__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ticker_ticker__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TickersPage = /** @class */ (function () {
    function TickersPage(navCtrl, navParams, provider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
    }
    TickersPage.prototype.ngOnInit = function () {
        var _this = this;
        this.provider.getEquityTradesByTicker().subscribe(function (data) { return _this.equityTickers = data; });
        this.provider.getCryptoTradesByTicker().subscribe(function (data) { return _this.cryptoTickers = data; });
    };
    TickersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TickersPage');
    };
    TickersPage.prototype.equityTickerTapped = function ($event, equityTicker) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__ticker_ticker__["a" /* TickerPage */], equityTicker);
    };
    TickersPage.prototype.cryptoTickerTapped = function ($event, cryptoTicker) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__ticker_ticker__["a" /* TickerPage */], cryptoTicker);
    };
    TickersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-tickers',template:/*ion-inline-start:"/Users/vincents/Desktop/ionic-ui/src/pages/tickers/tickers.html"*/'\n<ion-header>\n\n  <ion-navbar color = "secondary">\n    <ion-title>Symbols</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list-header>Equities</ion-list-header>\n    <ion-list inset>\n      <button *ngFor="let equityTicker of equityTickers" ion-item (click)="equityTickerTapped($event, equityTicker)">\n        {{equityTicker.name}}\n      </button>\n    </ion-list>  \n    <ion-list-header>Crypto</ion-list-header>\n    <ion-list inset>\n      <button *ngFor="let cryptoTicker of cryptoTickers" ion-item (click)="cryptoTickerTapped($event, cryptoTicker)">\n        {{cryptoTicker.name}}\n      </button>\n    </ion-list>  \n\n</ion-content>\n'/*ion-inline-end:"/Users/vincents/Desktop/ionic-ui/src/pages/tickers/tickers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_providers_providers__["a" /* ProvidersProvider */]])
    ], TickersPage);
    return TickersPage;
}());

//# sourceMappingURL=tickers.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.js.map