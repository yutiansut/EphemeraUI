webpackJsonp([0],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StrategiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__strategy_strategy__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers_providers__ = __webpack_require__(17);
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
            selector: 'page-strategies',template:/*ion-inline-start:"/Users/vincents/Desktop/EphemeraUI/src/pages/strategies/strategies.html"*/'\n<ion-header>\n\n  <ion-navbar color = "secondary">\n    <ion-title text-center>Strategies</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<ion-title>\n  <br>\n  View Statistics on All Closed Trades\n  <br>\n  <br>\n</ion-title>\n\n  <ion-list-header>Strategies</ion-list-header>\n  <ion-list inset>\n    <button *ngFor="let strategy of strategies" ion-item (click)="equityStrategyTapped($event, strategy)">\n      {{strategy.name}}\n    </button>\n  </ion-list>  \n\n\n</ion-content>\n'/*ion-inline-end:"/Users/vincents/Desktop/EphemeraUI/src/pages/strategies/strategies.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_providers_providers__["a" /* ProvidersProvider */]])
    ], StrategiesPage);
    return StrategiesPage;
}());

//# sourceMappingURL=strategies.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StrategyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__trade_trade__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_providers_providers__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(15);
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




var StrategyPage = /** @class */ (function () {
    function StrategyPage(navCtrl, navParams, provider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.strategy = this.navParams.data;
    }
    StrategyPage.prototype.ngOnInit = function () {
        this.getTrades();
    };
    StrategyPage.prototype.getTrades = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, response1, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.provider.getEquityTradesByStrategy(this.strategy.name).toPromise()];
                    case 1:
                        response = _c.sent();
                        return [4 /*yield*/, this.provider.getCryptoTradesByStrategy(this.strategy.name).toPromise()];
                    case 2:
                        response1 = _c.sent();
                        this.equityStrategyTrades = response;
                        this.cryptoStrategyTrades = response1;
                        return [4 /*yield*/, this.getStats(response, response1)];
                    case 3:
                        _c.sent();
                        _a = this;
                        return [4 /*yield*/, this.equityStrategyTrades.sort(this.compare)];
                    case 4:
                        _a.equityStrategyTrades = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.cryptoStrategyTrades.sort(this.compare)];
                    case 5:
                        _b.cryptoStrategyTrades = _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StrategyPage.prototype.getStats = function (data, data1) {
        var count = 0;
        var count1 = 0;
        var tradesProfitable = 0;
        var tradesProfitable1 = 0;
        var tradesProfit = 0;
        var tradesProfit1 = 0;
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var trade = data_1[_i];
            count++;
            tradesProfit += (((trade.percentChange / 100) * trade.signalBuyPrice) * trade.amount);
            if (trade.percentChange >= 0) {
                tradesProfitable++;
            }
        }
        for (var _a = 0, data1_1 = data1; _a < data1_1.length; _a++) {
            var trade = data1_1[_a];
            count1++;
            tradesProfit1 += (((trade.percentChange / 100) * trade.signalBuyPrice) * trade.amount);
            if (trade.percentChange >= 0) {
                tradesProfitable1++;
            }
        }
        this.equityCount = count;
        this.cryptoCount = count1;
        this.totalCount = count + count1;
        this.equityProfitable = Math.round(((tradesProfitable / count) * 100) * 10) / 10;
        this.cryptoProfitable = Math.round(((tradesProfitable1 / count1) * 100) * 10) / 10;
        this.totalProfitable = Math.round(((tradesProfitable + tradesProfitable1) / (count + count1) * 100) * 10) / 10;
        this.equityProfit = +(tradesProfit.toFixed(2));
        this.cryptoProfit = +(tradesProfit1.toFixed(2));
        this.totalProfit = +((tradesProfit + tradesProfit1).toFixed(2));
    };
    StrategyPage.prototype.compare = function (a, b) {
        var tradeA = a.id;
        var tradeB = b.id;
        var comparison = 0;
        if (tradeA > tradeB) {
            comparison = 1;
        }
        else if (tradeA < tradeB) {
            comparison = -1;
        }
        return comparison * -1;
    };
    StrategyPage.prototype.tradeTapped = function ($event, trade) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__trade_trade__["a" /* TradePage */], trade);
    };
    StrategyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-strategy',template:/*ion-inline-start:"/Users/vincents/Desktop/EphemeraUI/src/pages/strategy/strategy.html"*/'\n<ion-header>\n\n    <ion-navbar color = "secondary">\n      <ion-title>{{strategy.name}}</ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content>\n      <ion-grid>\n          <ion-row>\n            <ion-col>\n              Total Trades: {{totalCount}}\n            </ion-col>\n            <ion-col>\n              Profitable: {{totalProfitable}}%\n            </ion-col>\n            <ion-col>\n                Profit: $<span [ngStyle]="{\'font-weight\': \'bold\', \'color\': totalProfit >= 0 ? \'green\' : \'red\'}">{{totalProfit}}</span>\n              </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              Total Equity: <span [ngStyle]="{\'visibility\': equityCount == 0 ? \'hidden\' : \'visible\' }">{{equityCount}}</span>\n            </ion-col>\n            <ion-col>\n                Profitable: <span [ngStyle]="{\'visibility\': equityCount == 0 ? \'hidden\' : \'visible\' }">{{equityProfitable}}%</span>\n            </ion-col>\n            <ion-col>\n                Profit: $<span [ngStyle]="{\'font-weight\': \'bold\', \'color\': equityProfit >= 0 ? \'green\' : \'red\', \'visibility\': equityCount == 0 ? \'hidden\' : \'visible\'}">{{equityProfit}}</span>\n              </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col>\n                Total Crypto: <span [ngStyle]="{\'visibility\': cryptoCount == 0 ? \'hidden\' : \'visible\' }">{{cryptoCount}}</span>\n              </ion-col>\n              <ion-col>\n            Profitable: <span [ngStyle]="{\'visibility\': cryptoCount == 0 ? \'hidden\' : \'visible\' }">{{cryptoProfitable}}%</span>\n              </ion-col>\n              <ion-col>\n                  Profit: $<span [ngStyle]="{\'font-weight\': \'bold\', \'color\': cryptoProfit >= 0 ? \'green\' : \'red\', \'visibility\': cryptoCount == 0 ? \'hidden\' : \'visible\'}">{{cryptoProfit}}</span>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n            <ion-col>\n                <ion-list-header>Equity Trades</ion-list-header>\n            </ion-col>\n            <ion-col>\n                <ion-list-header>Crypto Trades</ion-list-header>\n            </ion-col>\n          </ion-row>\n          </ion-grid>\n          <ion-content>\n            <ion-grid>\n          <ion-row>\n            <ion-col>\n                <ion-item *ngFor="let equityStrategyTrade of equityStrategyTrades" (click)="tradeTapped($event, equityStrategyTrade)">\n                    <h5>{{equityStrategyTrade.direction}}\n                    {{equityStrategyTrade.ticker}}\n                    <span [ngStyle]="{\'font-weight\': \'bold\', \'color\': equityStrategyTrade.percentChange >= 0 ? \'green\' : \'red\'}">{{equityStrategyTrade.percentChange}}%</span></h5>\n                    </ion-item>\n            </ion-col>\n            <ion-col>\n                <ion-item *ngFor="let cryptoStrategyTrade of cryptoStrategyTrades" (click)="tradeTapped($event, cryptoStrategyTrade)">\n                    <h5>{{cryptoStrategyTrade.direction}}\n                    {{cryptoStrategyTrade.ticker}}\n                    <span [ngStyle]="{\'font-weight\': \'bold\', \'color\': cryptoStrategyTrade.percentChange >= 0 ? \'green\' : \'red\'}">{{cryptoStrategyTrade.percentChange}}%</span></h5>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n  </ion-content>\n  '/*ion-inline-end:"/Users/vincents/Desktop/EphemeraUI/src/pages/strategy/strategy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_providers_providers__["a" /* ProvidersProvider */]])
    ], StrategyPage);
    return StrategyPage;
}());

//# sourceMappingURL=strategy.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenTradesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__trade_trade__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers_providers__ = __webpack_require__(17);
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




var OpenTradesPage = /** @class */ (function () {
    function OpenTradesPage(navCtrl, navParams, provider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
    }
    OpenTradesPage.prototype.ngOnInit = function () {
        this.getTrades();
    };
    OpenTradesPage.prototype.getTrades = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, response1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.provider.getOpenEquityTrades().toPromise()];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, this.provider.getOpenCryptoTrades().toPromise()];
                    case 2:
                        response1 = _a.sent();
                        this.equityOpenTrades = response;
                        this.cryptoOpenTrades = response1;
                        return [4 /*yield*/, this.directionSplit(response, response1)];
                    case 3:
                        _a.sent();
                        this.equityShort = this.equityShort.sort(this.compare);
                        this.equityLong = this.equityLong.sort(this.compare);
                        this.cryptoShort = this.cryptoShort.sort(this.compare);
                        this.cryptoLong = this.cryptoLong.sort(this.compare);
                        return [2 /*return*/];
                }
            });
        });
    };
    OpenTradesPage.prototype.directionSplit = function (data, data1) {
        this.equityShort = data.filter(function (trade) { return trade.direction == "SHORT"; });
        this.equityLong = data.filter(function (trade) { return trade.direction == "LONG"; });
        this.cryptoShort = data1.filter(function (trade) { return trade.direction == "SHORT"; });
        this.cryptoLong = data1.filter(function (trade) { return trade.direction == "LONG"; });
    };
    OpenTradesPage.prototype.compare = function (a, b) {
        var tradeA = a.id;
        var tradeB = b.id;
        var comparison = 0;
        if (tradeA > tradeB) {
            comparison = 1;
        }
        else if (tradeA < tradeB) {
            comparison = -1;
        }
        return comparison * -1;
    };
    OpenTradesPage.prototype.openTradeTapped = function ($event, openTrade) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__trade_trade__["a" /* TradePage */], openTrade);
    };
    OpenTradesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-open-trades',template:/*ion-inline-start:"/Users/vincents/Desktop/EphemeraUI/src/pages/open-trades/open-trades.html"*/'\n<ion-header>\n\n  <ion-navbar color = "secondary">\n    <ion-title>Open Trades</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-grid>\n        <ion-row>\n          <ion-col>\n              <ion-list-header text-center>Equity Trades</ion-list-header>\n          </ion-col>\n          <ion-col>\n              <ion-list-header text-center>Crypto Trades</ion-list-header>\n          </ion-col>\n        </ion-row>\n        </ion-grid>\n<ion-content>\n        <ion-grid>\n        <ion-row>\n          <ion-col>\n              <ion-list-header [ngStyle]="{\'font-size\': \'9px\'}">Long</ion-list-header>\n              <ion-item *ngFor="let equityLong of equityLong" (click)="openTradeTapped($event, equityLong)">\n                  <h5>{{equityLong.ticker}} - \n                  {{equityLong.strategy1}}</h5>\n                  </ion-item>\n\n\n              <ion-list-header [ngStyle]="{\'font-size\': \'9px\'}">Short</ion-list-header>    \n              <ion-item *ngFor="let equityShort of equityShort" (click)="openTradeTapped($event, equityShort)">\n                      <h5>{{equityShort.ticker}} - \n                      {{equityShort.strategy1}}</h5>\n                      </ion-item>\n          </ion-col>\n          <ion-col>\n              <ion-list-header [ngStyle]="{\'font-size\': \'9px\'}">Long</ion-list-header>\n              <ion-item *ngFor="let cryptoLong of cryptoLong" (click)="openTradeTapped($event, cryptoLong)">\n                  <h5>{{cryptoLong.ticker}} - \n                  {{cryptoLong.strategy1}}</h5>\n            </ion-item>\n\n\n            <ion-list-header [ngStyle]="{\'font-size\': \'9px\'}">Short</ion-list-header>    \n            <ion-item *ngFor="let cryptoShort of cryptoShort" (click)="openTradeTapped($event, cryptoShort)">\n                    <h5>{{cryptoShort.ticker}} - \n                    {{cryptoShort.strategy1}}</h5>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/vincents/Desktop/EphemeraUI/src/pages/open-trades/open-trades.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__node_modules_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__node_modules_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_providers_providers__["a" /* ProvidersProvider */]])
    ], OpenTradesPage);
    return OpenTradesPage;
}());

//# sourceMappingURL=open-trades.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chart_js__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers_providers__ = __webpack_require__(17);
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




var StatisticsPage = /** @class */ (function () {
    // lineChart1: any;
    // linechart1Input: any;
    // linechart1Data: any;
    // linechart1Labels: any;
    function StatisticsPage(navCtrl, navParams, provider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
    }
    StatisticsPage.prototype.ngOnInit = function () {
        this.getTotalProfitChart();
        this.getTotalEquityProfitChart();
        this.getTotalCryptoProfitChart();
        this.getDailyProfitChart();
        this.getDailyEquityChart();
        this.getDailyCryptoChart();
    };
    StatisticsPage.prototype.getTotalProfitChart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.provider.getAllPnL().toPromise()];
                    case 1:
                        response = _d.sent();
                        _a = this;
                        return [4 /*yield*/, response.sort(this.compare)];
                    case 2:
                        _a.linechartInput = _d.sent();
                        _b = this;
                        return [4 /*yield*/, this.linechartInput.map(function (e) {
                                return e.date;
                            })];
                    case 3:
                        _b.linechartLabels = _d.sent();
                        _c = this;
                        return [4 /*yield*/, this.linechartInput.map(function (e) {
                                return e.runningTotal;
                            })];
                    case 4:
                        _c.linechartData = _d.sent();
                        ;
                        this.lineChart = new __WEBPACK_IMPORTED_MODULE_0_chart_js__["Chart"](this.lineCanvas.nativeElement, {
                            type: 'line',
                            options: {
                                legend: {
                                    display: false
                                },
                                tooltips: {
                                    callbacks: {
                                        label: function (tooltipItem) {
                                            return tooltipItem.yLabel;
                                        }
                                    }
                                }
                            },
                            data: {
                                labels: this.linechartLabels,
                                datasets: [
                                    {
                                        label: "Total Profit",
                                        fill: false,
                                        lineTension: 0.1,
                                        backgroundColor: "rgba(75,192,192,0.4)",
                                        borderColor: "rgba(75,192,192,1)",
                                        borderCapStyle: 'butt',
                                        borderDash: [],
                                        borderDashOffset: 0.0,
                                        borderJoinStyle: 'miter',
                                        pointBorderColor: "rgba(75,192,192,1)",
                                        pointBackgroundColor: "#fff",
                                        pointBorderWidth: 1,
                                        pointHoverRadius: 5,
                                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                                        pointHoverBorderColor: "rgba(220,220,220,1)",
                                        pointHoverBorderWidth: 2,
                                        pointRadius: 1,
                                        pointHitRadius: 10,
                                        data: this.linechartData,
                                        spanGaps: false,
                                    }
                                ]
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    StatisticsPage.prototype.getTotalEquityProfitChart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.provider.getAllPnL().toPromise()];
                    case 1:
                        response = _d.sent();
                        _a = this;
                        return [4 /*yield*/, response.sort(this.compare)];
                    case 2:
                        _a.linechartInput = _d.sent();
                        _b = this;
                        return [4 /*yield*/, this.linechartInput.map(function (e) {
                                return e.date;
                            })];
                    case 3:
                        _b.linechartLabels = _d.sent();
                        _c = this;
                        return [4 /*yield*/, this.linechartInput.map(function (e) {
                                return e.runningEquity;
                            })];
                    case 4:
                        _c.linechartData = _d.sent();
                        ;
                        this.lineChart = new __WEBPACK_IMPORTED_MODULE_0_chart_js__["Chart"](this.lineCanvas1.nativeElement, {
                            type: 'line',
                            options: {
                                legend: {
                                    display: false
                                },
                                tooltips: {
                                    callbacks: {
                                        label: function (tooltipItem) {
                                            return tooltipItem.yLabel;
                                        }
                                    }
                                }
                            },
                            data: {
                                labels: this.linechartLabels,
                                datasets: [
                                    {
                                        label: "Total Equity Profit",
                                        fill: false,
                                        lineTension: 0.1,
                                        backgroundColor: "rgba(75,192,192,0.4)",
                                        borderColor: "rgba(75,192,192,1)",
                                        borderCapStyle: 'butt',
                                        borderDash: [],
                                        borderDashOffset: 0.0,
                                        borderJoinStyle: 'miter',
                                        pointBorderColor: "rgba(75,192,192,1)",
                                        pointBackgroundColor: "#fff",
                                        pointBorderWidth: 1,
                                        pointHoverRadius: 5,
                                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                                        pointHoverBorderColor: "rgba(220,220,220,1)",
                                        pointHoverBorderWidth: 2,
                                        pointRadius: 1,
                                        pointHitRadius: 10,
                                        data: this.linechartData,
                                        spanGaps: false,
                                    }
                                ]
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    StatisticsPage.prototype.getTotalCryptoProfitChart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.provider.getAllPnL().toPromise()];
                    case 1:
                        response = _d.sent();
                        _a = this;
                        return [4 /*yield*/, response.sort(this.compare)];
                    case 2:
                        _a.linechartInput = _d.sent();
                        _b = this;
                        return [4 /*yield*/, this.linechartInput.map(function (e) {
                                return e.date;
                            })];
                    case 3:
                        _b.linechartLabels = _d.sent();
                        _c = this;
                        return [4 /*yield*/, this.linechartInput.map(function (e) {
                                return e.runningCrypto;
                            })];
                    case 4:
                        _c.linechartData = _d.sent();
                        ;
                        this.lineChart = new __WEBPACK_IMPORTED_MODULE_0_chart_js__["Chart"](this.lineCanvas2.nativeElement, {
                            type: 'line',
                            options: {
                                legend: {
                                    display: false
                                },
                                tooltips: {
                                    callbacks: {
                                        label: function (tooltipItem) {
                                            return tooltipItem.yLabel;
                                        }
                                    }
                                }
                            },
                            data: {
                                labels: this.linechartLabels,
                                datasets: [
                                    {
                                        label: "Total Crypto Profit",
                                        fill: false,
                                        lineTension: 0.1,
                                        backgroundColor: "rgba(75,192,192,0.4)",
                                        borderColor: "rgba(75,192,192,1)",
                                        borderCapStyle: 'butt',
                                        borderDash: [],
                                        borderDashOffset: 0.0,
                                        borderJoinStyle: 'miter',
                                        pointBorderColor: "rgba(75,192,192,1)",
                                        pointBackgroundColor: "#fff",
                                        pointBorderWidth: 1,
                                        pointHoverRadius: 5,
                                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                                        pointHoverBorderColor: "rgba(220,220,220,1)",
                                        pointHoverBorderWidth: 2,
                                        pointRadius: 1,
                                        pointHitRadius: 10,
                                        data: this.linechartData,
                                        spanGaps: false,
                                    }
                                ]
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    StatisticsPage.prototype.getDailyProfitChart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.provider.getAllPnL().toPromise()];
                    case 1:
                        response = _d.sent();
                        _a = this;
                        return [4 /*yield*/, response.sort(this.compare)];
                    case 2:
                        _a.linechartInput = _d.sent();
                        _b = this;
                        return [4 /*yield*/, this.linechartInput.map(function (e) {
                                return e.date;
                            })];
                    case 3:
                        _b.linechartLabels = _d.sent();
                        _c = this;
                        return [4 /*yield*/, this.linechartInput.map(function (e) {
                                return e.totalProfit;
                            })];
                    case 4:
                        _c.linechartData = _d.sent();
                        ;
                        this.lineChart = new __WEBPACK_IMPORTED_MODULE_0_chart_js__["Chart"](this.barCanvas.nativeElement, {
                            type: 'bar',
                            options: {
                                legend: {
                                    display: false
                                },
                                tooltips: {
                                    callbacks: {
                                        label: function (tooltipItem) {
                                            return tooltipItem.yLabel;
                                        }
                                    }
                                }
                            },
                            data: {
                                labels: this.linechartLabels,
                                datasets: [
                                    {
                                        label: "Daily Profit",
                                        fill: false,
                                        backgroundColor: "rgba(75,192,192,0.4)",
                                        borderColor: "rgba(75,192,192,1)",
                                        borderWidth: 1,
                                        hoverBackgroundColor: "rgba(75,192,192,1)",
                                        hoverBorderColor: "rgba(220,220,220,1)",
                                        hoverBorderWidth: 2,
                                        data: this.linechartData,
                                    }
                                ]
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    StatisticsPage.prototype.getDailyEquityChart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.provider.getAllPnL().toPromise()];
                    case 1:
                        response = _d.sent();
                        _a = this;
                        return [4 /*yield*/, response.sort(this.compare)];
                    case 2:
                        _a.linechartInput = _d.sent();
                        _b = this;
                        return [4 /*yield*/, this.linechartInput.map(function (e) {
                                return e.date;
                            })];
                    case 3:
                        _b.linechartLabels = _d.sent();
                        _c = this;
                        return [4 /*yield*/, this.linechartInput.map(function (e) {
                                return e.equityProfit;
                            })];
                    case 4:
                        _c.linechartData = _d.sent();
                        ;
                        this.lineChart = new __WEBPACK_IMPORTED_MODULE_0_chart_js__["Chart"](this.barCanvas1.nativeElement, {
                            type: 'bar',
                            options: {
                                legend: {
                                    display: false
                                },
                                tooltips: {
                                    callbacks: {
                                        label: function (tooltipItem) {
                                            return tooltipItem.yLabel;
                                        }
                                    }
                                }
                            },
                            data: {
                                labels: this.linechartLabels,
                                datasets: [
                                    {
                                        label: "Daily Equity Profit",
                                        fill: false,
                                        backgroundColor: "rgba(75,192,192,0.4)",
                                        borderColor: "rgba(75,192,192,1)",
                                        borderWidth: 1,
                                        hoverBackgroundColor: "rgba(75,192,192,1)",
                                        hoverBorderColor: "rgba(220,220,220,1)",
                                        hoverBorderWidth: 2,
                                        data: this.linechartData,
                                    }
                                ]
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    StatisticsPage.prototype.getDailyCryptoChart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.provider.getAllPnL().toPromise()];
                    case 1:
                        response = _d.sent();
                        _a = this;
                        return [4 /*yield*/, response.sort(this.compare)];
                    case 2:
                        _a.linechartInput = _d.sent();
                        _b = this;
                        return [4 /*yield*/, this.linechartInput.map(function (e) {
                                return e.date;
                            })];
                    case 3:
                        _b.linechartLabels = _d.sent();
                        _c = this;
                        return [4 /*yield*/, this.linechartInput.map(function (e) {
                                return e.cryptoProfit;
                            })];
                    case 4:
                        _c.linechartData = _d.sent();
                        ;
                        this.lineChart = new __WEBPACK_IMPORTED_MODULE_0_chart_js__["Chart"](this.barCanvas2.nativeElement, {
                            type: 'bar',
                            options: {
                                legend: {
                                    display: false
                                },
                                tooltips: {
                                    callbacks: {
                                        label: function (tooltipItem) {
                                            return tooltipItem.yLabel;
                                        }
                                    }
                                }
                            },
                            data: {
                                labels: this.linechartLabels,
                                datasets: [
                                    {
                                        label: "Daily Equity Profit",
                                        fill: false,
                                        backgroundColor: "rgba(75,192,192,0.4)",
                                        borderColor: "rgba(75,192,192,1)",
                                        borderWidth: 1,
                                        hoverBackgroundColor: "rgba(75,192,192,1)",
                                        hoverBorderColor: "rgba(220,220,220,1)",
                                        hoverBorderWidth: 2,
                                        data: this.linechartData,
                                    }
                                ]
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    StatisticsPage.prototype.ionViewDidLoad = function () {
    };
    StatisticsPage.prototype.compare = function (a, b) {
        var tradeA = a.id;
        var tradeB = b.id;
        var comparison = 0;
        if (tradeA > tradeB) {
            comparison = 1;
        }
        else if (tradeA < tradeB) {
            comparison = -1;
        }
        return comparison;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('lineCanvas'),
        __metadata("design:type", Object)
    ], StatisticsPage.prototype, "lineCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('lineCanvas1'),
        __metadata("design:type", Object)
    ], StatisticsPage.prototype, "lineCanvas1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('lineCanvas2'),
        __metadata("design:type", Object)
    ], StatisticsPage.prototype, "lineCanvas2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('barCanvas'),
        __metadata("design:type", Object)
    ], StatisticsPage.prototype, "barCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('barCanvas1'),
        __metadata("design:type", Object)
    ], StatisticsPage.prototype, "barCanvas1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('barCanvas2'),
        __metadata("design:type", Object)
    ], StatisticsPage.prototype, "barCanvas2", void 0);
    StatisticsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-statistics',template:/*ion-inline-start:"/Users/vincents/Desktop/EphemeraUI/src/pages/statistics/statistics.html"*/'\n<ion-header>\n  <ion-navbar color = "secondary">\n    <ion-title text-center>Statistics</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n          <ion-card>\n      <h2 text-center>Total Profit</h2>\n      <canvas #lineCanvas></canvas>\n      </ion-card>\n  </ion-col>\n  <ion-col>\n      <ion-card>\n      <h2 text-center>Daily Profit</h2>\n      <canvas #barCanvas></canvas>\n      </ion-card>\n  </ion-col>\n  </ion-row>\n \n\n<ion-row>\n  <ion-col>\n  <ion-card>\n  <h2 text-center>Total Equity Profit</h2>\n  <canvas #lineCanvas1></canvas>\n  </ion-card>\n  </ion-col>\n  <ion-col>\n      <ion-card>\n      <h2 text-center>Daily Equity Profit</h2>\n      <canvas #barCanvas1></canvas>\n      </ion-card>\n  </ion-col>\n  </ion-row>\n\n<ion-row>\n    <ion-col>\n    <ion-card>\n    <h2 text-center>Total Crypto Profit</h2>\n    <canvas #lineCanvas2></canvas>\n    </ion-card>\n    </ion-col>\n    <ion-col>\n        <ion-card>\n        <h2 text-center>Daily Crypto Profit</h2>\n        <canvas #barCanvas2></canvas>\n        </ion-card>\n    </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/vincents/Desktop/EphemeraUI/src/pages/statistics/statistics.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_providers_providers__["a" /* ProvidersProvider */]])
    ], StatisticsPage);
    return StatisticsPage;
}());

//# sourceMappingURL=statistics.js.map

/***/ }),

/***/ 126:
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
webpackEmptyAsyncContext.id = 126;

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewtradebyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_providers_providers__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tickers_tickers__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__strategies_strategies__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__closed_trades_closed_trades__ = __webpack_require__(59);
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
            selector: 'page-viewtradeby',template:/*ion-inline-start:"/Users/vincents/Desktop/EphemeraUI/src/pages/viewtradeby/viewtradeby.html"*/'\n<ion-header>\n\n  <ion-navbar color = "secondary">\n    <ion-title>View Closed Trades By</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list inset>\n      <button ion-item (click)="goToClosedTrades()">\n        All\n      </button>\n      <button ion-item (click)="goToStrategies()">\n        Strategy\n      </button>\n      <button ion-item (click)="goToTickers()">\n        Symbol\n      </button>\n    </ion-list>  \n   \n\n</ion-content>\n'/*ion-inline-end:"/Users/vincents/Desktop/EphemeraUI/src/pages/viewtradeby/viewtradeby.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_providers_providers__["a" /* ProvidersProvider */]])
    ], ViewtradebyPage);
    return ViewtradebyPage;
}());

//# sourceMappingURL=viewtradeby.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvidersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(128);
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
        this.PNL = this.API + '/pnl';
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
    ProvidersProvider.prototype.getAllPnL = function () {
        return this.http.get(this.PNL + "/all");
    };
    ProvidersProvider.prototype.getPnLDates = function () {
        return this.http.get(this.PNL + "/dates");
    };
    ProvidersProvider.prototype.getRunningTotal = function () {
        return this.http.get(this.PNL + "/runningprofit");
    };
    ProvidersProvider.prototype.getRunningEquity = function () {
        return this.http.get(this.PNL + "/runningequity");
    };
    ProvidersProvider.prototype.getRunningCrypto = function () {
        return this.http.get(this.PNL + "/runningcrypto");
    };
    ProvidersProvider.prototype.getDailyTotal = function () {
        return this.http.get(this.PNL + "/dailyprofit");
    };
    ProvidersProvider.prototype.getDailyEquity = function () {
        return this.http.get(this.PNL + "/dailyequity");
    };
    ProvidersProvider.prototype.getDailyCrypto = function () {
        return this.http.get(this.PNL + "/dailycrypto");
    };
    ProvidersProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ProvidersProvider);
    return ProvidersProvider;
}());

//# sourceMappingURL=providers.js.map

/***/ }),

/***/ 170:
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
webpackEmptyAsyncContext.id = 170;

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TickerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_providers_providers__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trade_trade__ = __webpack_require__(47);
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




var TickerPage = /** @class */ (function () {
    function TickerPage(navCtrl, navParams, provider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.ticker = this.navParams.data;
    }
    TickerPage.prototype.ngOnInit = function () {
        this.getTrades();
    };
    TickerPage.prototype.getTrades = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, response1, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.provider.getEquityTradesBySymbol(this.ticker.name).toPromise()];
                    case 1:
                        response = _c.sent();
                        return [4 /*yield*/, this.provider.getCryptoTradesBySymbol(this.ticker.name).toPromise()];
                    case 2:
                        response1 = _c.sent();
                        this.equityTickerTrades = response;
                        this.cryptoTickerTrades = response1;
                        return [4 /*yield*/, this.getStats(response, response1)];
                    case 3:
                        _c.sent();
                        _a = this;
                        return [4 /*yield*/, this.equityTickerTrades.sort(this.compare)];
                    case 4:
                        _a.equityTickerTrades = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.cryptoTickerTrades.sort(this.compare)];
                    case 5:
                        _b.cryptoTickerTrades = _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TickerPage.prototype.getStats = function (data, data1) {
        var count = 0;
        var tradesProfitable = 0;
        var tradesProfit = 0;
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var trade = data_1[_i];
            count++;
            tradesProfit += (((trade.percentChange / 100) * trade.signalBuyPrice) * trade.amount);
            if (trade.percentChange >= 0) {
                tradesProfitable++;
            }
        }
        for (var _a = 0, data1_1 = data1; _a < data1_1.length; _a++) {
            var trade = data1_1[_a];
            count++;
            tradesProfit += (((trade.percentChange / 100) * trade.signalBuyPrice) * trade.amount);
            if (trade.percentChange >= 0) {
                tradesProfitable++;
            }
        }
        this.count = count;
        this.tradeProfitable = Math.round(((tradesProfitable / count) * 100) * 10) / 10;
        this.tradeProfit = +(tradesProfit.toFixed(2));
    };
    TickerPage.prototype.compare = function (a, b) {
        var tradeA = a.id;
        var tradeB = b.id;
        var comparison = 0;
        if (tradeA > tradeB) {
            comparison = 1;
        }
        else if (tradeA < tradeB) {
            comparison = -1;
        }
        return comparison * -1;
    };
    TickerPage.prototype.tradeTapped = function ($event, trade) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__trade_trade__["a" /* TradePage */], trade);
    };
    TickerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-ticker',template:/*ion-inline-start:"/Users/vincents/Desktop/EphemeraUI/src/pages/ticker/ticker.html"*/'\n<ion-header>\n\n    <ion-navbar color = "secondary">\n      <ion-title text-center>{{ticker.name}}</ion-title>\n    </ion-navbar>\n\n  </ion-header>\n    <ion-content padding>\n<ion-grid>\n    <ion-row>\n        <ion-col>\n          <span class = "ion-heading">Trades</span><br>\n          <span class = "ion-content">{{count}}</span>\n        </ion-col>\n        <ion-col>\n            <span class = "ion-heading">Profitable</span><br> \n            <span class = "ion-content">{{tradeProfitable}}%</span>\n        </ion-col>\n        <ion-col>\n            <span class = "ion-heading">Profit</span><br>\n            $<span class = "ion-content" [ngStyle]="{\'font-weight\': \'bold\', \'color\': tradeProfit >= 0 ? \'green\' : \'red\'}">{{tradeProfit}}</span>\n          </ion-col>\n      </ion-row>\n  </ion-grid>\n\n  <ion-content>\n      <ion-list>\n        <button *ngFor="let equityTickerTrade of equityTickerTrades" ion-item (click)="tradeTapped($event, equityTickerTrade)">\n            {{equityTickerTrade.direction}}\n            {{equityTickerTrade.ticker}}\n            <span [ngStyle]="{\'font-weight\': \'bold\', \'color\': equityTickerTrade.percentChange >= 0 ? \'green\' : \'red\'}">{{equityTickerTrade.percentChange}}%</span>  \n        </button>\n        \n      </ion-list>  \n      <ion-list inset>\n        <button *ngFor="let cryptoTickerTrade of cryptoTickerTrades" ion-item (click)="tradeTapped($event, cryptoTickerTrade)">\n            {{cryptoTickerTrade.direction}}\n            {{cryptoTickerTrade.ticker}}\n            <span [ngStyle]="{\'font-weight\': \'bold\', \'color\': cryptoTickerTrade.percentChange >= 0 ? \'green\' : \'red\'}">{{cryptoTickerTrade.percentChange}}%</span>  \n        </button>\n      </ion-list>  \n  \n  \n  <ion-content padding>\n  \n  </ion-content>'/*ion-inline-end:"/Users/vincents/Desktop/EphemeraUI/src/pages/ticker/ticker.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_providers_providers__["a" /* ProvidersProvider */]])
    ], TickerPage);
    return TickerPage;
}());

//# sourceMappingURL=ticker.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chart_js__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers_providers__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__statistics_statistics__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__closed_trades_closed_trades__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__open_trades_open_trades__ = __webpack_require__(112);
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







var OverviewPage = /** @class */ (function () {
    function OverviewPage(navCtrl, provider) {
        this.navCtrl = navCtrl;
        this.provider = provider;
    }
    OverviewPage.prototype.ngOnInit = function () {
        this.getTrades();
        this.getChart();
    };
    OverviewPage.prototype.getTrades = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, response1, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.provider.getClosedEquityTrades().toPromise()];
                    case 1:
                        response = _c.sent();
                        return [4 /*yield*/, this.provider.getClosedCryptoTrades().toPromise()];
                    case 2:
                        response1 = _c.sent();
                        this.equityClosedTrades = response;
                        this.cryptoClosedTrades = response1;
                        return [4 /*yield*/, this.getStats(response, response1)];
                    case 3:
                        _c.sent();
                        _a = this;
                        return [4 /*yield*/, this.equityClosedTrades.sort(this.compare2)];
                    case 4:
                        _a.equityClosedTrades = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.cryptoClosedTrades.sort(this.compare2)];
                    case 5:
                        _b.cryptoClosedTrades = _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OverviewPage.prototype.getChart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.provider.getAllPnL().toPromise()];
                    case 1:
                        response = _d.sent();
                        _a = this;
                        return [4 /*yield*/, response.sort(this.compare)];
                    case 2:
                        _a.linechartInput = _d.sent();
                        _b = this;
                        return [4 /*yield*/, this.linechartInput.map(function (e) {
                                return e.date;
                            })];
                    case 3:
                        _b.linechartLabels = _d.sent();
                        _c = this;
                        return [4 /*yield*/, this.linechartInput.map(function (e) {
                                return e.runningTotal;
                            })];
                    case 4:
                        _c.linechartData = _d.sent();
                        ;
                        this.lineChart = new __WEBPACK_IMPORTED_MODULE_0_chart_js__["Chart"](this.lineCanvas.nativeElement, {
                            type: 'line',
                            options: {
                                legend: {
                                    display: false
                                },
                                tooltips: {
                                    callbacks: {
                                        label: function (tooltipItem) {
                                            return tooltipItem.yLabel;
                                        }
                                    }
                                }
                            },
                            data: {
                                labels: this.linechartLabels,
                                datasets: [
                                    {
                                        label: "Total Profit",
                                        fill: false,
                                        lineTension: 0.1,
                                        backgroundColor: "rgba(75,192,192,0.4)",
                                        borderColor: "rgba(75,192,192,1)",
                                        borderCapStyle: 'butt',
                                        borderDash: [],
                                        borderDashOffset: 0.0,
                                        borderJoinStyle: 'miter',
                                        pointBorderColor: "rgba(75,192,192,1)",
                                        pointBackgroundColor: "#fff",
                                        pointBorderWidth: 1,
                                        pointHoverRadius: 5,
                                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                                        pointHoverBorderColor: "rgba(220,220,220,1)",
                                        pointHoverBorderWidth: 2,
                                        pointRadius: 1,
                                        pointHitRadius: 10,
                                        data: this.linechartData,
                                        spanGaps: false,
                                    }
                                ]
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    OverviewPage.prototype.getStats = function (data, data1) {
        var count = 0;
        var count1 = 0;
        var tradesProfitable = 0;
        var tradesProfitable1 = 0;
        var tradesProfit = 0;
        var tradesProfit1 = 0;
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var trade = data_1[_i];
            count++;
            tradesProfit += (((trade.percentChange / 100) * trade.signalBuyPrice) * trade.amount);
            if (trade.percentChange >= 0) {
                tradesProfitable++;
            }
        }
        for (var _a = 0, data1_1 = data1; _a < data1_1.length; _a++) {
            var trade = data1_1[_a];
            count1++;
            tradesProfit1 += (((trade.percentChange / 100) * trade.signalBuyPrice) * trade.amount);
            if (trade.percentChange >= 0) {
                tradesProfitable1++;
            }
        }
        this.equityCount = count;
        this.cryptoCount = count1;
        this.totalCount = count + count1;
        this.equityProfitable = Math.round(((tradesProfitable / count) * 100) * 10) / 10;
        this.cryptoProfitable = Math.round(((tradesProfitable1 / count1) * 100) * 10) / 10;
        this.totalProfitable = Math.round(((tradesProfitable + tradesProfitable1) / (count + count1) * 100) * 10) / 10;
        this.equityProfit = +(tradesProfit.toFixed(2));
        this.cryptoProfit = +(tradesProfit1.toFixed(2));
        this.totalProfit = +((tradesProfit + tradesProfit1).toFixed(2));
    };
    OverviewPage.prototype.compare = function (a, b) {
        var tradeA = a.id;
        var tradeB = b.id;
        var comparison = 0;
        if (tradeA > tradeB) {
            comparison = 1;
        }
        else if (tradeA < tradeB) {
            comparison = -1;
        }
        return comparison;
    };
    OverviewPage.prototype.compare2 = function (a, b) {
        var tradeA = a.id;
        var tradeB = b.id;
        var comparison = 0;
        if (tradeA > tradeB) {
            comparison = 1;
        }
        else if (tradeA < tradeB) {
            comparison = -1;
        }
        return comparison * -1;
    };
    OverviewPage.prototype.ionViewDidLoad = function () {
    };
    OverviewPage.prototype.goToStatistics = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__statistics_statistics__["a" /* StatisticsPage */]);
    };
    OverviewPage.prototype.goToOpenTrades = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__open_trades_open_trades__["a" /* OpenTradesPage */]);
    };
    OverviewPage.prototype.goToClosedTrades = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__closed_trades_closed_trades__["a" /* ClosedTradesPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_8" /* ViewChild */])('lineCanvas'),
        __metadata("design:type", Object)
    ], OverviewPage.prototype, "lineCanvas", void 0);
    OverviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-overview',template:/*ion-inline-start:"/Users/vincents/Desktop/EphemeraUI/src/pages/overview/overview.html"*/'<ion-header>\n    <ion-navbar color = "primary">\n        <button menuToggle ion-button icon-only>\n            <ion-icon name = "menu"></ion-icon>\n        </button>\n        <ion-title>Ephemera</ion-title>\n    </ion-navbar>\n    <ion-toolbar color = "secondary" >\n            <ion-title text-center>\n                    Overview\n            </ion-title>\n        </ion-toolbar>\n</ion-header>\n<ion-content>\n        <h5 text-center>Total Profit</h5>\n        <canvas #lineCanvas></canvas>\n        <ion-grid>\n                <ion-row>\n                  <ion-col>\n                    <span class = "ion-heading">Total Trades </span><br>\n                    <span class = "ion-content">{{totalCount}}</span>\n                  </ion-col>\n                  <ion-col>\n                    <span class = "ion-heading">Profitable </span><br>\n                    <span class = "ion-content">{{totalProfitable}}%</span>\n                  </ion-col>\n                  <ion-col>\n                    <span class = "ion-heading">Profit </span><br>\n                      $<span class = "ion-content" [ngStyle]="{\'font-weight\': \'bold\', \'color\': totalProfit >= 0 ? \'green\' : \'red\'}">{{totalProfit}}</span>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                        <span class = "ion-heading">Total Equity </span><br>\n                    <span class = "ion-content">{{equityCount}}</span>\n                  </ion-col>\n                  <ion-col>\n                        <span class = "ion-heading">Profitable </span><br>\n                      <span class = "ion-content">{{equityProfitable}}%</span>\n                  </ion-col>\n                  <ion-col>\n                        <span class = "ion-heading">Profit </span><br>\n                      $<span class = "ion-content" [ngStyle]="{\'font-weight\': \'bold\', \'color\': equityProfit >= 0 ? \'green\' : \'red\'}">{{equityProfit}}</span>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                            <span class = "ion-heading">Total Crypto </span><br>\n                        <span class = "ion-content">{{cryptoCount}}</span>\n                    </ion-col>\n                    <ion-col>\n                        <span class = "ion-heading">Profitable </span> <br>\n                        <span class = "ion-content">{{cryptoProfitable}}%</span>\n                    </ion-col>\n                    <ion-col>\n                        <span class = "ion-heading">Profit </span><br>\n                        $<span class = "ion-content" [ngStyle]="{\'font-weight\': \'bold\', \'color\': cryptoProfit >= 0 ? \'green\' : \'red\'}">{{cryptoProfit}}</span>\n                      </ion-col>\n                  </ion-row>\n              </ion-grid>\n        \n</ion-content>\n\n'/*ion-inline-end:"/Users/vincents/Desktop/EphemeraUI/src/pages/overview/overview.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers_providers__["a" /* ProvidersProvider */]])
    ], OverviewPage);
    return OverviewPage;
}());

//# sourceMappingURL=overview.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(367);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_viewtradeby_viewtradeby__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_closed_trades_closed_trades__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_open_trades_open_trades__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_trade_trade__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_overview_overview__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_statistics_statistics__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_strategies_strategies__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_strategy_strategy__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_providers_providers__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tickers_tickers__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_ticker_ticker__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_component__ = __webpack_require__(467);
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

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 223,
	"./af.js": 223,
	"./ar": 224,
	"./ar-dz": 225,
	"./ar-dz.js": 225,
	"./ar-kw": 226,
	"./ar-kw.js": 226,
	"./ar-ly": 227,
	"./ar-ly.js": 227,
	"./ar-ma": 228,
	"./ar-ma.js": 228,
	"./ar-sa": 229,
	"./ar-sa.js": 229,
	"./ar-tn": 230,
	"./ar-tn.js": 230,
	"./ar.js": 224,
	"./az": 231,
	"./az.js": 231,
	"./be": 232,
	"./be.js": 232,
	"./bg": 233,
	"./bg.js": 233,
	"./bm": 234,
	"./bm.js": 234,
	"./bn": 235,
	"./bn.js": 235,
	"./bo": 236,
	"./bo.js": 236,
	"./br": 237,
	"./br.js": 237,
	"./bs": 238,
	"./bs.js": 238,
	"./ca": 239,
	"./ca.js": 239,
	"./cs": 240,
	"./cs.js": 240,
	"./cv": 241,
	"./cv.js": 241,
	"./cy": 242,
	"./cy.js": 242,
	"./da": 243,
	"./da.js": 243,
	"./de": 244,
	"./de-at": 245,
	"./de-at.js": 245,
	"./de-ch": 246,
	"./de-ch.js": 246,
	"./de.js": 244,
	"./dv": 247,
	"./dv.js": 247,
	"./el": 248,
	"./el.js": 248,
	"./en-au": 249,
	"./en-au.js": 249,
	"./en-ca": 250,
	"./en-ca.js": 250,
	"./en-gb": 251,
	"./en-gb.js": 251,
	"./en-ie": 252,
	"./en-ie.js": 252,
	"./en-il": 253,
	"./en-il.js": 253,
	"./en-nz": 254,
	"./en-nz.js": 254,
	"./eo": 255,
	"./eo.js": 255,
	"./es": 256,
	"./es-do": 257,
	"./es-do.js": 257,
	"./es-us": 258,
	"./es-us.js": 258,
	"./es.js": 256,
	"./et": 259,
	"./et.js": 259,
	"./eu": 260,
	"./eu.js": 260,
	"./fa": 261,
	"./fa.js": 261,
	"./fi": 262,
	"./fi.js": 262,
	"./fo": 263,
	"./fo.js": 263,
	"./fr": 264,
	"./fr-ca": 265,
	"./fr-ca.js": 265,
	"./fr-ch": 266,
	"./fr-ch.js": 266,
	"./fr.js": 264,
	"./fy": 267,
	"./fy.js": 267,
	"./gd": 268,
	"./gd.js": 268,
	"./gl": 269,
	"./gl.js": 269,
	"./gom-latn": 270,
	"./gom-latn.js": 270,
	"./gu": 271,
	"./gu.js": 271,
	"./he": 272,
	"./he.js": 272,
	"./hi": 273,
	"./hi.js": 273,
	"./hr": 274,
	"./hr.js": 274,
	"./hu": 275,
	"./hu.js": 275,
	"./hy-am": 276,
	"./hy-am.js": 276,
	"./id": 277,
	"./id.js": 277,
	"./is": 278,
	"./is.js": 278,
	"./it": 279,
	"./it.js": 279,
	"./ja": 280,
	"./ja.js": 280,
	"./jv": 281,
	"./jv.js": 281,
	"./ka": 282,
	"./ka.js": 282,
	"./kk": 283,
	"./kk.js": 283,
	"./km": 284,
	"./km.js": 284,
	"./kn": 285,
	"./kn.js": 285,
	"./ko": 286,
	"./ko.js": 286,
	"./ky": 287,
	"./ky.js": 287,
	"./lb": 288,
	"./lb.js": 288,
	"./lo": 289,
	"./lo.js": 289,
	"./lt": 290,
	"./lt.js": 290,
	"./lv": 291,
	"./lv.js": 291,
	"./me": 292,
	"./me.js": 292,
	"./mi": 293,
	"./mi.js": 293,
	"./mk": 294,
	"./mk.js": 294,
	"./ml": 295,
	"./ml.js": 295,
	"./mn": 296,
	"./mn.js": 296,
	"./mr": 297,
	"./mr.js": 297,
	"./ms": 298,
	"./ms-my": 299,
	"./ms-my.js": 299,
	"./ms.js": 298,
	"./mt": 300,
	"./mt.js": 300,
	"./my": 301,
	"./my.js": 301,
	"./nb": 302,
	"./nb.js": 302,
	"./ne": 303,
	"./ne.js": 303,
	"./nl": 304,
	"./nl-be": 305,
	"./nl-be.js": 305,
	"./nl.js": 304,
	"./nn": 306,
	"./nn.js": 306,
	"./pa-in": 307,
	"./pa-in.js": 307,
	"./pl": 308,
	"./pl.js": 308,
	"./pt": 309,
	"./pt-br": 310,
	"./pt-br.js": 310,
	"./pt.js": 309,
	"./ro": 311,
	"./ro.js": 311,
	"./ru": 312,
	"./ru.js": 312,
	"./sd": 313,
	"./sd.js": 313,
	"./se": 314,
	"./se.js": 314,
	"./si": 315,
	"./si.js": 315,
	"./sk": 316,
	"./sk.js": 316,
	"./sl": 317,
	"./sl.js": 317,
	"./sq": 318,
	"./sq.js": 318,
	"./sr": 319,
	"./sr-cyrl": 320,
	"./sr-cyrl.js": 320,
	"./sr.js": 319,
	"./ss": 321,
	"./ss.js": 321,
	"./sv": 322,
	"./sv.js": 322,
	"./sw": 323,
	"./sw.js": 323,
	"./ta": 324,
	"./ta.js": 324,
	"./te": 325,
	"./te.js": 325,
	"./tet": 326,
	"./tet.js": 326,
	"./tg": 327,
	"./tg.js": 327,
	"./th": 328,
	"./th.js": 328,
	"./tl-ph": 329,
	"./tl-ph.js": 329,
	"./tlh": 330,
	"./tlh.js": 330,
	"./tr": 331,
	"./tr.js": 331,
	"./tzl": 332,
	"./tzl.js": 332,
	"./tzm": 333,
	"./tzm-latn": 334,
	"./tzm-latn.js": 334,
	"./tzm.js": 333,
	"./ug-cn": 335,
	"./ug-cn.js": 335,
	"./uk": 336,
	"./uk.js": 336,
	"./ur": 337,
	"./ur.js": 337,
	"./uz": 338,
	"./uz-latn": 339,
	"./uz-latn.js": 339,
	"./uz.js": 338,
	"./vi": 340,
	"./vi.js": 340,
	"./x-pseudo": 341,
	"./x-pseudo.js": 341,
	"./yo": 342,
	"./yo.js": 342,
	"./zh-cn": 343,
	"./zh-cn.js": 343,
	"./zh-hk": 344,
	"./zh-hk.js": 344,
	"./zh-tw": 345,
	"./zh-tw.js": 345
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 448;

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_viewtradeby_viewtradeby__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_overview_overview__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_statistics_statistics__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_strategies_strategies__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_closed_trades_closed_trades__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_open_trades_open_trades__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tickers_tickers__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_strategy_strategy__ = __webpack_require__(111);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/vincents/Desktop/EphemeraUI/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color = "secondary">\n      <ion-title text-center>Ephemera</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <ion-list-header>Navigate</ion-list-header>\n      <button menuClose ion-item (click)="goToOpenTrades()">Open Trades</button>\n      <button menuClose ion-item (click)="goToViewTradesBy()">View Closed Trades By</button>\n      <button menuClose ion-item (click)="goStatistics()">Statistics</button>\n\n\n</ion-list>\n  </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/vincents/Desktop/EphemeraUI/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers_providers__ = __webpack_require__(17);
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
            selector: 'page-trade',template:/*ion-inline-start:"/Users/vincents/Desktop/EphemeraUI/src/pages/trade/trade.html"*/'\n<ion-header>\n  <ion-navbar color = "secondary">\n    <ion-title text-center> Trade #{{trade.id}}</ion-title>\n  </ion-navbar>\n</ion-header> \n\n\n<ion-content>\n  <ion-grid>\n\n <ion-row>   \n    <ion-col>\n      <ion-item>\n          <span class = "ion-heading">Status </span><br>\n          <span class = "ion-content">{{trade.status}}</span>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n        <ion-item [ngStyle]="{\'visibility\': trade.status == \'OPEN\' ? \'hidden\' : \'visible\' }">\n            <span class = "ion-heading">Percent Change </span><br>\n            <span class = "ion-content" [ngStyle]="{\'font-weight\': \'bold\', \'color\': percentChange >= 0 ? \'green\' : \'red\'}">{{trade.percentChange}}%</span>          \n          </ion-item>\n    </ion-col>\n</ion-row>\n<ion-row>   \n    <ion-col>\n      <ion-item>\n          <span class = "ion-heading">Symbol </span><br> \n          <span class = "ion-content">{{trade.ticker}}</span>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n        <ion-item>\n            <span class = "ion-heading">Amount </span><br>\n            <span class = "ion-content">{{trade.amount}}</span>\n          </ion-item>\n      </ion-col>\n</ion-row>\n\n<ion-row>   \n    <ion-col>\n      <ion-item>\n          <span class = "ion-heading">Direction </span><br>\n          <span class = "ion-content">{{trade.direction}}</span>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n        <ion-item>\n            <span class = "ion-heading">Strategy </span><br>\n            <span class = "ion-content">{{trade.strategy1}}</span>\n          </ion-item>\n      </ion-col>\n</ion-row>\n<ion-row>   \n    <ion-col>\n        <ion-item>\n            <span class = "ion-heading">Open Price </span><br>\n            <span class = "ion-content">${{trade.signalBuyPrice}}</span>\n          </ion-item>\n    </ion-col>\n    <ion-col>\n        <ion-item>\n            <span class = "ion-heading">Open Time </span><br>\n            <span class = "ion-content">{{trade.buyTimestamp}}</span>\n          </ion-item>\n      </ion-col>\n</ion-row>        \n<ion-row [ngStyle]="{\'visibility\': trade.status == \'OPEN\' ? \'hidden\' : \'visible\' }">   \n    <ion-col>\n        <ion-item>\n            <span class = "ion-heading">Close Price </span><br>\n            <span class = "ion-content">${{trade.signalSellPrice}}</span>\n          </ion-item>\n    </ion-col>\n    <ion-col>\n        <ion-item>\n            <span class = "ion-heading">Close Time </span><br>\n            <span class = "ion-content">{{trade.sellTimestamp}}</span>\n          </ion-item>\n      </ion-col>\n</ion-row>   \n<ion-row>  \n    <ion-col>\n          <ion-item>\n            <span class = "ion-heading">Notes </span><br>\n            <span class = "ion-content">{{trade.strategy1Notes}}</span>\n          </ion-item>\n      </ion-col>\n</ion-row>   \n</ion-grid> \n</ion-content>\n'/*ion-inline-end:"/Users/vincents/Desktop/EphemeraUI/src/pages/trade/trade.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_providers_providers__["a" /* ProvidersProvider */]])
    ], TradePage);
    return TradePage;
}());

//# sourceMappingURL=trade.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClosedTradesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers_providers__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trade_trade__ = __webpack_require__(47);
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
    ClosedTradesPage.prototype.getTrades = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, response1, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.provider.getClosedEquityTrades().toPromise()];
                    case 1:
                        response = _c.sent();
                        return [4 /*yield*/, this.provider.getClosedCryptoTrades().toPromise()];
                    case 2:
                        response1 = _c.sent();
                        this.equityClosedTrades = response;
                        this.cryptoClosedTrades = response1;
                        _a = this;
                        return [4 /*yield*/, this.equityClosedTrades.sort(this.compare)];
                    case 3:
                        _a.equityClosedTrades = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.cryptoClosedTrades.sort(this.compare)];
                    case 4:
                        _b.cryptoClosedTrades = _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ClosedTradesPage.prototype.compare = function (a, b) {
        var tradeA = a.id;
        var tradeB = b.id;
        var comparison = 0;
        if (tradeA > tradeB) {
            comparison = 1;
        }
        else if (tradeA < tradeB) {
            comparison = -1;
        }
        return comparison * -1;
    };
    ClosedTradesPage.prototype.closedTradeTapped = function ($event, closedTrade) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__trade_trade__["a" /* TradePage */], closedTrade);
    };
    ClosedTradesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-closed-trades',template:/*ion-inline-start:"/Users/vincents/Desktop/EphemeraUI/src/pages/closed-trades/closed-trades.html"*/'\n<ion-header>\n\n  <ion-navbar color = "secondary">\n    <ion-title>Closed Trades</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content >\n      <ion-grid>\n          <ion-row>\n            <ion-col>\n                <ion-list-header>Equity Trades</ion-list-header>\n            </ion-col>\n            <ion-col>\n                <ion-list-header>Crypto Trades</ion-list-header>\n            </ion-col>\n          </ion-row>\n          </ion-grid>\n<ion-content>\n      <ion-grid>\n          <ion-row>\n            <ion-col>\n                <ion-item *ngFor="let equityClosedTrade of equityClosedTrades" (click)="closedTradeTapped($event, equityClosedTrade)">\n                    <h5>{{equityClosedTrade.direction}}\n                   {{equityClosedTrade.ticker}}\n                    <span [ngStyle]="{\'font-weight\': \'bold\', \'color\': equityClosedTrade.percentChange >= 0 ? \'green\' : \'red\'}">{{equityClosedTrade.percentChange}}%</span></h5>\n                    </ion-item>\n            </ion-col>\n            <ion-col>\n                <ion-item *ngFor="let cryptoClosedTrade of cryptoClosedTrades" (click)="closedTradeTapped($event, cryptoClosedTrade)">\n                    <h5>{{cryptoClosedTrade.direction}}\n                    {{cryptoClosedTrade.ticker}}\n                    <span [ngStyle]="{\'font-weight\': \'bold\', \'color\': cryptoClosedTrade.percentChange >= 0 ? \'green\' : \'red\'}">{{cryptoClosedTrade.percentChange}}%</span></h5>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/vincents/Desktop/EphemeraUI/src/pages/closed-trades/closed-trades.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_providers_providers__["a" /* ProvidersProvider */]])
    ], ClosedTradesPage);
    return ClosedTradesPage;
}());

//# sourceMappingURL=closed-trades.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TickersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_providers_providers__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ticker_ticker__ = __webpack_require__(210);
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




var TickersPage = /** @class */ (function () {
    function TickersPage(navCtrl, navParams, provider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
    }
    TickersPage.prototype.ngOnInit = function () {
        this.getInfo();
    };
    TickersPage.prototype.getInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, response1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.provider.getEquityTradesByTicker().toPromise()];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, this.provider.getCryptoTradesByTicker().toPromise()];
                    case 2:
                        response1 = _a.sent();
                        this.equityTickers = response;
                        this.cryptoTickers = response1;
                        return [2 /*return*/];
                }
            });
        });
    };
    TickersPage.prototype.equityTickerTapped = function ($event, equityTicker) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__ticker_ticker__["a" /* TickerPage */], equityTicker);
    };
    TickersPage.prototype.cryptoTickerTapped = function ($event, cryptoTicker) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__ticker_ticker__["a" /* TickerPage */], cryptoTicker);
    };
    TickersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-tickers',template:/*ion-inline-start:"/Users/vincents/Desktop/EphemeraUI/src/pages/tickers/tickers.html"*/'\n<ion-header>\n\n  <ion-navbar color = "secondary">\n    <ion-title>Symbols</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-list-header text-center>Equities</ion-list-header>\n      </ion-col>\n      <ion-col>  \n        <ion-list-header text-center>Crypto</ion-list-header>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-list>\n          <button *ngFor="let equityTicker of equityTickers" ion-item (click)="equityTickerTapped($event, equityTicker)">\n            {{equityTicker.name}}\n          </button>\n        </ion-list>\n      </ion-col>\n\n    <ion-col>\n      <ion-list>\n        <button *ngFor="let cryptoTicker of cryptoTickers" ion-item (click)="cryptoTickerTapped($event, cryptoTicker)">\n        {{cryptoTicker.name}}\n        </button>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/vincents/Desktop/EphemeraUI/src/pages/tickers/tickers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_providers_providers__["a" /* ProvidersProvider */]])
    ], TickersPage);
    return TickersPage;
}());

//# sourceMappingURL=tickers.js.map

/***/ })

},[346]);
//# sourceMappingURL=main.js.map