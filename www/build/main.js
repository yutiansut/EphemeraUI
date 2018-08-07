webpackJsonp([0],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TickersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_providers_providers__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ticker_ticker__ = __webpack_require__(209);
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
        this.tickers = "tickers";
        this.tickers = "equityTickers";
    }
    TickersPage.prototype.ngOnInit = function () {
        this.getInfo();
    };
    TickersPage.prototype.getInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, response1, response2, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.provider.getEquityTradesByTicker().toPromise()];
                    case 1:
                        response = _d.sent();
                        return [4 /*yield*/, this.provider.getCryptoTradesByTicker().toPromise()];
                    case 2:
                        response1 = _d.sent();
                        return [4 /*yield*/, this.provider.getForexTradesByTicker().toPromise()];
                    case 3:
                        response2 = _d.sent();
                        this.equityTickers = response;
                        this.cryptoTickers = response1;
                        this.forexTickers = response2;
                        _a = this;
                        return [4 /*yield*/, this.equityTickers.sort(this.compare)];
                    case 4:
                        _a.equityTickers = _d.sent();
                        _b = this;
                        return [4 /*yield*/, this.cryptoTickers.sort(this.compare)];
                    case 5:
                        _b.cryptoTickers = _d.sent();
                        _c = this;
                        return [4 /*yield*/, this.forexTickers.sort(this.compare)];
                    case 6:
                        _c.forexTickers = _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TickersPage.prototype.compare = function (a, b) {
        var tradeA = a.name;
        var tradeB = b.name;
        var comparison = 0;
        if (tradeA > tradeB) {
            comparison = 1;
        }
        else if (tradeA < tradeB) {
            comparison = -1;
        }
        return comparison;
    };
    TickersPage.prototype.equityTickerTapped = function ($event, equityTicker) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__ticker_ticker__["a" /* TickerPage */], equityTicker);
    };
    TickersPage.prototype.cryptoTickerTapped = function ($event, cryptoTicker) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__ticker_ticker__["a" /* TickerPage */], cryptoTicker);
    };
    TickersPage.prototype.forexTickerTapped = function ($event, forexTicker) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__ticker_ticker__["a" /* TickerPage */], forexTicker);
    };
    TickersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-tickers',template:/*ion-inline-start:"/Users/vincents/Desktop/EphemeraUI/src/pages/tickers/tickers.html"*/'\n<ion-header>\n    <ion-navbar color = "secondary">\n      <ion-title>Closed Trades</ion-title>\n    </ion-navbar>\n    <ion-toolbar no-border-top>\n      <ion-segment [(ngModel)]="tickers">\n        <ion-segment-button value = \'equityTickers\'>\n          Equity\n        </ion-segment-button>\n        <ion-segment-button value = \'forexTickers\'>\n          Forex\n        </ion-segment-button>\n        <ion-segment-button value = \'cryptoTickers\'>\n          Crypto\n        </ion-segment-button>\n      </ion-segment>\n    </ion-toolbar>\n  </ion-header>\n\n\n  <ion-content>\n      <div [ngSwitch]="tickers">\n        <ion-list *ngSwitchCase="\'equityTickers\'">\n          <ion-item *ngFor="let equityTicker of equityTickers" ion-item (click)="equityTickerTapped($event, equityTicker)">\n            {{equityTicker.name}}\n          </ion-item>\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'forexTickers\'">\n            <ion-item *ngFor="let forexTicker of forexTickers" ion-item (click)="forexTickerTapped($event, forexTicker)">\n            {{forexTicker.name}}\n            </ion-item>\n          </ion-list>\n\n      <ion-list *ngSwitchCase="\'cryptoTickers\'">\n        <ion-item *ngFor="let cryptoTicker of cryptoTickers" ion-item (click)="cryptoTickerTapped($event, cryptoTicker)">\n        {{cryptoTicker.name}}\n        </ion-item>\n        </ion-list>\n\n      </div>\n</ion-content>\n'/*ion-inline-end:"/Users/vincents/Desktop/EphemeraUI/src/pages/tickers/tickers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_providers_providers__["a" /* ProvidersProvider */]])
    ], TickersPage);
    return TickersPage;
}());

//# sourceMappingURL=tickers.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClosedTradesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers_providers__ = __webpack_require__(19);
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
    function ClosedTradesPage(navCtrl, navParams, provider, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.platform = platform;
        this.closedtrades = "closedtrades";
        this.closedtrades = "equityClosedTrades";
    }
    ClosedTradesPage.prototype.ngOnInit = function () {
        this.getTrades();
    };
    ClosedTradesPage.prototype.getTrades = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, response1, response2, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.provider.getClosedEquityTrades().toPromise()];
                    case 1:
                        response = _d.sent();
                        return [4 /*yield*/, this.provider.getClosedCryptoTrades().toPromise()];
                    case 2:
                        response1 = _d.sent();
                        return [4 /*yield*/, this.provider.getClosedForexTrades().toPromise()];
                    case 3:
                        response2 = _d.sent();
                        this.equityClosedTrades = response;
                        this.cryptoClosedTrades = response1;
                        this.forexClosedTrades = response2;
                        _a = this;
                        return [4 /*yield*/, this.equityClosedTrades.sort(this.compare)];
                    case 4:
                        _a.equityClosedTrades = _d.sent();
                        _b = this;
                        return [4 /*yield*/, this.forexClosedTrades.sort(this.compare)];
                    case 5:
                        _b.forexClosedTrades = _d.sent();
                        _c = this;
                        return [4 /*yield*/, this.cryptoClosedTrades.sort(this.compare)];
                    case 6:
                        _c.cryptoClosedTrades = _d.sent();
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
            selector: 'page-closed-trades',template:/*ion-inline-start:"/Users/vincents/Desktop/EphemeraUI/src/pages/closed-trades/closed-trades.html"*/'\n<ion-header>\n  <ion-navbar color = "secondary">\n    <ion-title>Closed Trades</ion-title>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="closedtrades">\n      <ion-segment-button value = \'equityClosedTrades\'>\n        Equity\n      </ion-segment-button>\n      <ion-segment-button value = \'forexClosedTrades\'>\n        Forex\n      </ion-segment-button>\n      <ion-segment-button value = \'cryptoClosedTrades\'>\n        Crypto\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div [ngSwitch]="closedtrades">\n    <ion-list *ngSwitchCase="\'equityClosedTrades\'">\n                <ion-item *ngFor="let equityClosedTrade of equityClosedTrades" (click)="closedTradeTapped($event, equityClosedTrade)">\n                    <h5>{{equityClosedTrade.direction}}\n                   {{equityClosedTrade.ticker}}\n                    <span [ngStyle]="{\'font-weight\': \'bold\', \'color\': equityClosedTrade.percentChange >= 0 ? \'green\' : \'red\'}">{{equityClosedTrade.percentChange}}%</span></h5>\n                </ion-item>\n      </ion-list>\n      <ion-list *ngSwitchCase="\'forexClosedTrades\'">\n          <ion-item *ngFor="let forexClosedTrade of forexClosedTrades" (click)="closedTradeTapped($event, forexClosedTrade)">\n              <h5>{{forexClosedTrade.direction}}\n              {{forexClosedTrade.pair}}\n              <span [ngStyle]="{\'font-weight\': \'bold\', \'color\': forexClosedTrade.percentChange >= 0 ? \'green\' : \'red\'}">{{forexClosedTrade.percentChange}}%</span></h5>\n              </ion-item>\n      </ion-list>\n      <ion-list *ngSwitchCase="\'cryptoClosedTrades\'">\n                <ion-item *ngFor="let cryptoClosedTrade of cryptoClosedTrades" (click)="closedTradeTapped($event, cryptoClosedTrade)">\n                    <h5>{{cryptoClosedTrade.direction}}\n                    {{cryptoClosedTrade.ticker}}\n                    <span [ngStyle]="{\'font-weight\': \'bold\', \'color\': cryptoClosedTrade.percentChange >= 0 ? \'green\' : \'red\'}">{{cryptoClosedTrade.percentChange}}%</span></h5>\n                    </ion-item>\n      </ion-list>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/vincents/Desktop/EphemeraUI/src/pages/closed-trades/closed-trades.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_providers_providers__["a" /* ProvidersProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]])
    ], ClosedTradesPage);
    return ClosedTradesPage;
}());

//# sourceMappingURL=closed-trades.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenTradesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__trade_trade__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers_providers__ = __webpack_require__(19);
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
        this.opentrades = "opentrades";
        this.opentrades = "equityOpenTrades";
    }
    OpenTradesPage.prototype.ngOnInit = function () {
        this.getTrades();
    };
    OpenTradesPage.prototype.getTrades = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, response1, response2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.provider.getOpenEquityTrades().toPromise()];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, this.provider.getOpenCryptoTrades().toPromise()];
                    case 2:
                        response1 = _a.sent();
                        return [4 /*yield*/, this.provider.getOpenForexTrades().toPromise()];
                    case 3:
                        response2 = _a.sent();
                        this.equityOpenTrades = response;
                        this.cryptoOpenTrades = response1;
                        this.forexOpenTrades = response2;
                        return [4 /*yield*/, this.directionSplit(response, response1, response2)];
                    case 4:
                        _a.sent();
                        this.equityShort = this.equityShort.sort(this.compare);
                        this.equityLong = this.equityLong.sort(this.compare);
                        this.cryptoShort = this.cryptoShort.sort(this.compare);
                        this.cryptoLong = this.cryptoLong.sort(this.compare);
                        this.forexShort = this.forexShort.sort(this.compare);
                        this.forexLong = this.forexLong.sort(this.compare);
                        return [2 /*return*/];
                }
            });
        });
    };
    OpenTradesPage.prototype.directionSplit = function (data, data1, data2) {
        this.equityShort = data.filter(function (trade) { return trade.direction == "SHORT"; });
        this.equityLong = data.filter(function (trade) { return trade.direction == "LONG"; });
        this.cryptoShort = data1.filter(function (trade) { return trade.direction == "SHORT"; });
        this.cryptoLong = data1.filter(function (trade) { return trade.direction == "LONG"; });
        this.forexShort = data2.filter(function (trade) { return trade.direction == "SHORT"; });
        this.forexLong = data2.filter(function (trade) { return trade.direction == "LONG"; });
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
            selector: 'page-open-trades',template:/*ion-inline-start:"/Users/vincents/Desktop/EphemeraUI/src/pages/open-trades/open-trades.html"*/'\n<ion-header>\n        <ion-navbar color = "secondary">\n          <ion-title>Open Trades</ion-title>\n        </ion-navbar>\n        <ion-toolbar no-border-top>\n          <ion-segment [(ngModel)]="opentrades">\n            <ion-segment-button value = \'equityOpenTrades\'>\n              Equity\n            </ion-segment-button>\n            <ion-segment-button value = \'forexOpenTrades\'>\n              Forex\n            </ion-segment-button>\n            <ion-segment-button value = \'cryptoOpenTrades\'>\n              Crypto\n            </ion-segment-button>\n          </ion-segment>\n        </ion-toolbar>\n      </ion-header>\n\n\n<ion-content>\n        <div [ngSwitch]="opentrades">\n            <ion-list *ngSwitchCase="\'equityOpenTrades\'">\n              <ion-list-header>Long</ion-list-header>\n              <ion-item *ngFor="let equityLong of equityLong" (click)="openTradeTapped($event, equityLong)">\n                  <h5>{{equityLong.ticker}} - \n                  {{equityLong.strategy1}}</h5>\n                  </ion-item>\n              <ion-list-header>Short</ion-list-header>    \n              <ion-item *ngFor="let equityShort of equityShort" (click)="openTradeTapped($event, equityShort)">\n                      <h5>{{equityShort.ticker}} - \n                      {{equityShort.strategy1}}</h5>\n                </ion-item>\n            </ion-list>\n\n\n        <ion-list *ngSwitchCase="\'forexOpenTrades\'">\n                <ion-list-header>Long</ion-list-header>\n                <ion-item *ngFor="let forexLong of forexLong" (click)="openTradeTapped($event, forexLong)">\n                    <h5>{{forexLong.pair}} - \n                    {{forexLong.strategy1}}</h5>\n              </ion-item>\n  \n              <ion-list-header>Short</ion-list-header>    \n              <ion-item *ngFor="let forexShort of forexShort" (click)="openTradeTapped($event, forexShort)">\n                      <h5>{{forexShort.pair}} - \n                      {{forexShort.strategy1}}</h5>\n              </ion-item>\n          </ion-list>\n\n        <ion-list *ngSwitchCase="\'cryptoOpenTrades\'">\n              <ion-list-header>Long</ion-list-header>\n              <ion-item *ngFor="let cryptoLong of cryptoLong" (click)="openTradeTapped($event, cryptoLong)">\n                  <h5>{{cryptoLong.ticker}} - \n                  {{cryptoLong.strategy1}}</h5>\n            </ion-item>\n\n            <ion-list-header>Short</ion-list-header>    \n            <ion-item *ngFor="let cryptoShort of cryptoShort" (click)="openTradeTapped($event, cryptoShort)">\n                    <h5>{{cryptoShort.ticker}} - \n                    {{cryptoShort.strategy1}}</h5>\n            </ion-item>\n        </ion-list>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/vincents/Desktop/EphemeraUI/src/pages/open-trades/open-trades.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__node_modules_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__node_modules_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_providers_providers__["a" /* ProvidersProvider */]])
    ], OpenTradesPage);
    return OpenTradesPage;
}());

//# sourceMappingURL=open-trades.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chart_js__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers_providers__ = __webpack_require__(19);
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
    function StatisticsPage(navCtrl, navParams, provider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
    }
    StatisticsPage.prototype.ngOnInit = function () {
        this.getTotalProfitChart();
        this.getTotalEquityProfitChart();
        this.getTotalCryptoProfitChart();
        this.getTotalForexProfitChart();
        this.getDailyProfitChart();
        this.getDailyEquityChart();
        this.getDailyCryptoChart();
        this.getDailyForexChart();
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
    StatisticsPage.prototype.getTotalForexProfitChart = function () {
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
                                return e.runningForex;
                            })];
                    case 4:
                        _c.linechartData = _d.sent();
                        ;
                        this.lineChart = new __WEBPACK_IMPORTED_MODULE_0_chart_js__["Chart"](this.lineCanvas3.nativeElement, {
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
                                        label: "Total Forex Profit",
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
    StatisticsPage.prototype.getDailyForexChart = function () {
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
                                return e.forexProfit;
                            })];
                    case 4:
                        _c.linechartData = _d.sent();
                        ;
                        this.lineChart = new __WEBPACK_IMPORTED_MODULE_0_chart_js__["Chart"](this.barCanvas3.nativeElement, {
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
                                        label: "Daily Forex Profit",
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('lineCanvas3'),
        __metadata("design:type", Object)
    ], StatisticsPage.prototype, "lineCanvas3", void 0);
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('barCanvas3'),
        __metadata("design:type", Object)
    ], StatisticsPage.prototype, "barCanvas3", void 0);
    StatisticsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-statistics',template:/*ion-inline-start:"/Users/vincents/Desktop/EphemeraUI/src/pages/statistics/statistics.html"*/'\n<ion-header>\n  <ion-navbar color = "secondary">\n    <ion-title text-center>Statistics</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n          <ion-card>\n      <h2 text-center>Total Profit</h2>\n      <canvas #lineCanvas></canvas>\n      </ion-card>\n  </ion-col>\n  <ion-col>\n      <ion-card>\n      <h2 text-center>Daily Profit</h2>\n      <canvas #barCanvas></canvas>\n      </ion-card>\n  </ion-col>\n  </ion-row>\n \n\n<ion-row>\n  <ion-col>\n  <ion-card>\n  <h2 text-center>Total Equity Profit</h2>\n  <canvas #lineCanvas1></canvas>\n  </ion-card>\n  </ion-col>\n  <ion-col>\n      <ion-card>\n      <h2 text-center>Daily Equity Profit</h2>\n      <canvas #barCanvas1></canvas>\n      </ion-card>\n  </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n    <ion-card>\n    <h2 text-center>Total Forex Profit</h2>\n    <canvas #lineCanvas3></canvas>\n    </ion-card>\n    </ion-col>\n    <ion-col>\n        <ion-card>\n        <h2 text-center>Daily Forex Profit</h2>\n        <canvas #barCanvas3></canvas>\n        </ion-card>\n    </ion-col>\n    </ion-row>\n\n<ion-row>\n    <ion-col>\n    <ion-card>\n    <h2 text-center>Total Crypto Profit</h2>\n    <canvas #lineCanvas2></canvas>\n    </ion-card>\n    </ion-col>\n    <ion-col>\n        <ion-card>\n        <h2 text-center>Daily Crypto Profit</h2>\n        <canvas #barCanvas2></canvas>\n        </ion-card>\n    </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/vincents/Desktop/EphemeraUI/src/pages/statistics/statistics.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_providers_providers__["a" /* ProvidersProvider */]])
    ], StatisticsPage);
    return StatisticsPage;
}());

//# sourceMappingURL=statistics.js.map

/***/ }),

/***/ 124:
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
webpackEmptyAsyncContext.id = 124;

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalContentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalContentPage = /** @class */ (function () {
    function ModalContentPage(platform, params, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        var pages = [
            {
                name: 'Abstract',
                items: [
                    { content: 'Ephemera is a full-stack, autonomous trading system.' },
                    { content: 'A suite of software used for the collection and synthesis of data across equity, foreign exchange and cryptocurrency markets.' },
                    { content: 'Microservices exist for automatic data collection, data synthesis, algorithmic trade signalling and execution, and post-trade analysis.' }
                ]
            },
            {
                name: 'Technology',
                items: [
                    { content: 'Ephemera utilizes a full-stack technology architecture.' },
                    { content: 'Ephemera\'s backend consists of three Java Spring Boot microservice applications: Data Collection, Trade Signal Synthesis, and Trade Execution.' },
                    { content: 'Each microservice is equipped with an accompanying mySQL database for data persistence. Both the Trade Signal Synthesis and Trade Execution layers point to the previous application\'s database for required data. ' },
                    { content: 'The Ionic 2 Angular framework is used to develop the frontend.' },
                    { content: 'The freely available AlphaVantage API is used in collection of data, the current iteration of Ephemera makes 5000+ calls per day to AlphaVantage endpoints.' }
                ]
            },
            {
                name: 'Strategies',
                items: [
                    { content: 'Ephemera\'s current release performs technical analysis using three popular algorithms which I have coded in Java for this project. Each symbol traded for each asset class uses unique parameters which have been backtested to suggest future profitability.' },
                    { content: 'K39 - A strategy utilizing two technical indicators: Stochastic Oscillator \'K%D\' and On-Base Volume (OBV). A buy signal is generated when %K=39,%D=0 crosses 50% from below and OBV is greater than it\'s M30.' },
                    { content: 'SMA Cross - A Simple Moving Average weights all data points in a set equally. In an SMA Cross strategy, a buy signal is generated when a fast SMA period crosses above a slower one. Vice versa for a short position.' },
                    { content: 'EMA Cross - An Exponential Moving Average weights more recent data more heavily, and signals the same way as an SMA Cross strategy.' },
                    { content: 'Next to be added are RSI and MACD strategies.' }
                ]
            },
        ];
        this.page = pages[this.params.get('page')];
    }
    ModalContentPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalContentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-content',template:/*ion-inline-start:"/Users/vincents/Desktop/EphemeraUI/src/pages/about/modal-content.html"*/'\n<ion-header>\n  <ion-toolbar color = "secondary">\n    <ion-title>\n      {{page.name}}\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span showWhen="ios">Back</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <br>\n        <ion-item *ngFor="let item of page[\'items\']">\n          <ion-note class = "ion-content" item-end>\n            <br>\n            {{item.content}}\n            <br>\n            <br>\n          </ion-note>\n        </ion-item>\n\n  </ion-content>'/*ion-inline-end:"/Users/vincents/Desktop/EphemeraUI/src/pages/about/modal-content.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
    ], ModalContentPage);
    return ModalContentPage;
}());

//# sourceMappingURL=modal-content.js.map

/***/ }),

/***/ 167:
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
webpackEmptyAsyncContext.id = 167;

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvidersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(208);
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
        this.FOREX_TRADES = this.API + '/forex-trades';
        this.FOREX_TRADE_SIGNALS = this.API + '/forex-trade-signals';
        this.PNL = this.API + '/pnl';
    }
    ProvidersProvider.prototype.getAllEquityTrades = function () {
        return this.http.get(this.EQUITY_TRADES + "/all");
    };
    ProvidersProvider.prototype.getAllCryptoTrades = function () {
        return this.http.get(this.CRYPTO_TRADES + "/all");
    };
    ProvidersProvider.prototype.getAllForexTrades = function () {
        return this.http.get(this.FOREX_TRADES + "/all");
    };
    ProvidersProvider.prototype.getOpenEquityTrades = function () {
        return this.http.get(this.EQUITY_TRADES + "/open");
    };
    ProvidersProvider.prototype.getClosedEquityTrades = function () {
        return this.http.get(this.EQUITY_TRADES + "/closed");
    };
    ProvidersProvider.prototype.getOpenForexTrades = function () {
        return this.http.get(this.FOREX_TRADES + "/open");
    };
    ProvidersProvider.prototype.getClosedForexTrades = function () {
        return this.http.get(this.FOREX_TRADES + "/closed");
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
    ProvidersProvider.prototype.getAllForexTradeSignals = function () {
        return this.http.get(this.FOREX_TRADE_SIGNALS + "/all");
    };
    ProvidersProvider.prototype.getEquityTradesBySymbol = function (ticker) {
        return this.http.get(this.EQUITY_TRADES + "/tickers/" + ticker);
    };
    ProvidersProvider.prototype.getCryptoTradesBySymbol = function (ticker) {
        return this.http.get(this.CRYPTO_TRADES + "/tickers/" + ticker);
    };
    ProvidersProvider.prototype.getForexTradesBySymbol = function (ticker) {
        return this.http.get(this.FOREX_TRADES + "/tickers/" + ticker);
    };
    ProvidersProvider.prototype.getEquityTradesByStrategy = function (strategy) {
        return this.http.get(this.EQUITY_TRADES + "/strategies/" + strategy);
    };
    ProvidersProvider.prototype.getCryptoTradesByStrategy = function (strategy) {
        return this.http.get(this.CRYPTO_TRADES + "/strategies/" + strategy);
    };
    ProvidersProvider.prototype.getForexTradesByStrategy = function (strategy) {
        return this.http.get(this.FOREX_TRADES + "/strategies/" + strategy);
    };
    ProvidersProvider.prototype.getEquityTradesByTicker = function () {
        return this.http.get(this.EQUITY_TRADES + "/tickers");
    };
    ProvidersProvider.prototype.getCryptoTradesByTicker = function () {
        return this.http.get(this.CRYPTO_TRADES + "/tickers");
    };
    ProvidersProvider.prototype.getForexTradesByTicker = function () {
        return this.http.get(this.FOREX_TRADES + "/tickers");
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

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewtradebyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_providers_providers__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tickers_tickers__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__strategies_strategies__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__closed_trades_closed_trades__ = __webpack_require__(109);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_providers_providers__["a" /* ProvidersProvider */]])
    ], ViewtradebyPage);
    return ViewtradebyPage;
}());

//# sourceMappingURL=viewtradeby.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TickerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_providers_providers__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_providers_providers__["a" /* ProvidersProvider */]])
    ], TickerPage);
    return TickerPage;
}());

//# sourceMappingURL=ticker.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StrategiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__strategy_strategy__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers_providers__ = __webpack_require__(19);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_providers_providers__["a" /* ProvidersProvider */]])
    ], StrategiesPage);
    return StrategiesPage;
}());

//# sourceMappingURL=strategies.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StrategyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__trade_trade__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_providers_providers__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(14);
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
            var response, response1, response2, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.provider.getEquityTradesByStrategy(this.strategy.name).toPromise()];
                    case 1:
                        response = _d.sent();
                        return [4 /*yield*/, this.provider.getCryptoTradesByStrategy(this.strategy.name).toPromise()];
                    case 2:
                        response1 = _d.sent();
                        return [4 /*yield*/, this.provider.getForexTradesByStrategy(this.strategy.name).toPromise()];
                    case 3:
                        response2 = _d.sent();
                        this.equityStrategyTrades = response;
                        this.cryptoStrategyTrades = response1;
                        this.forexStrategyTrades = response2;
                        return [4 /*yield*/, this.getStats(response, response1, response2)];
                    case 4:
                        _d.sent();
                        return [4 /*yield*/, this.getStartupView()];
                    case 5:
                        _d.sent();
                        _a = this;
                        return [4 /*yield*/, this.equityStrategyTrades.sort(this.compare)];
                    case 6:
                        _a.equityStrategyTrades = _d.sent();
                        _b = this;
                        return [4 /*yield*/, this.cryptoStrategyTrades.sort(this.compare)];
                    case 7:
                        _b.cryptoStrategyTrades = _d.sent();
                        _c = this;
                        return [4 /*yield*/, this.forexStrategyTrades.sort(this.compare)];
                    case 8:
                        _c.forexStrategyTrades = _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StrategyPage.prototype.getStats = function (data, data1, data2) {
        var count = 0;
        var count1 = 0;
        var count2 = 0;
        var tradesProfitable = 0;
        var tradesProfitable1 = 0;
        var tradesProfitable2 = 0;
        var tradesProfit = 0;
        var tradesProfit1 = 0;
        var tradesProfit2 = 0;
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
        for (var _b = 0, data2_1 = data2; _b < data2_1.length; _b++) {
            var trade = data2_1[_b];
            count2++;
            tradesProfit2 += (((trade.percentChange / 100) * trade.signalBuyPrice) * trade.amount);
            if (trade.percentChange >= 0) {
                tradesProfitable2++;
            }
        }
        this.equityCount = count;
        this.cryptoCount = count1;
        this.forexCount = count2;
        this.totalCount = count + count1 + count2;
        this.equityProfitable = Math.round(((tradesProfitable / count) * 100) * 10) / 10;
        this.cryptoProfitable = Math.round(((tradesProfitable1 / count1) * 100) * 10) / 10;
        this.forexProfitable = Math.round(((tradesProfitable2 / count2) * 100) * 10) / 10;
        this.totalProfitable = Math.round(((tradesProfitable + tradesProfitable1 + tradesProfitable2) / (count + count1 + count2) * 100) * 10) / 10;
        this.equityProfit = +(tradesProfit.toFixed(2));
        this.cryptoProfit = +(tradesProfit1.toFixed(2));
        this.forexProfit = +(tradesProfit2.toFixed(2));
        this.totalProfit = +((tradesProfit + tradesProfit1 + tradesProfit2).toFixed(2));
    };
    StrategyPage.prototype.getStartupView = function () {
        if (this.equityCount > 0) {
            this.closedtrades = "equityStrategyTrades";
        }
        else if (this.forexCount > 0) {
            this.closedtrades = "forexStrategyTrades";
        }
        else
            this.closedtrades = "cryptoStrategyTrades";
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
            selector: 'page-strategy',template:/*ion-inline-start:"/Users/vincents/Desktop/EphemeraUI/src/pages/strategy/strategy.html"*/'\n<ion-header>\n\n    <ion-navbar color = "secondary">\n      <ion-title>{{strategy.name}}</ion-title>\n    </ion-navbar>\n    <ion-toolbar no-border-top>\n        <ion-segment [(ngModel)]="closedtrades">\n          <ion-segment-button value = \'equityStrategyTrades\'>\n            Equity\n          </ion-segment-button>\n          <ion-segment-button value = \'forexStrategyTrades\'>\n            Forex\n          </ion-segment-button>\n          <ion-segment-button value = \'cryptoStrategyTrades\'>\n            Crypto\n          </ion-segment-button>\n        </ion-segment>\n      </ion-toolbar>\n    </ion-header>\n\n\n\n  <ion-content>\n\n\n          <ion-content>\n              <div [ngSwitch]="closedtrades">\n                  <ion-list *ngSwitchCase="\'equityStrategyTrades\'">\n                    <ion-row>\n                      <ion-col>\n                        Total Trades: {{totalCount}}\n                      </ion-col>\n                      <ion-col>\n                        Profitable: {{totalProfitable}}%\n                      </ion-col>\n                      <ion-col>\n                          Profit: $<span [ngStyle]="{\'font-weight\': \'bold\', \'color\': totalProfit >= 0 ? \'green\' : \'red\'}">{{totalProfit}}</span>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col>\n                          Total Equity: <span [ngStyle]="{\'visibility\': equityCount == 0 ? \'hidden\' : \'visible\' }">{{equityCount}}</span>\n                        </ion-col>\n                        <ion-col>\n                            Profitable: <span [ngStyle]="{\'visibility\': equityCount == 0 ? \'hidden\' : \'visible\' }">{{equityProfitable}}%</span>\n                        </ion-col>\n                        <ion-col>\n                            Profit: $<span [ngStyle]="{\'font-weight\': \'bold\', \'color\': equityProfit >= 0 ? \'green\' : \'red\', \'visibility\': equityCount == 0 ? \'hidden\' : \'visible\'}">{{equityProfit}}</span>\n                          </ion-col>\n                      </ion-row>\n                <ion-item *ngFor="let equityStrategyTrade of equityStrategyTrades" (click)="tradeTapped($event, equityStrategyTrade)">\n                    <h5>{{equityStrategyTrade.direction}}\n                    {{equityStrategyTrade.ticker}}\n                    <span [ngStyle]="{\'font-weight\': \'bold\', \'color\': equityStrategyTrade.percentChange >= 0 ? \'green\' : \'red\'}">{{equityStrategyTrade.percentChange}}%</span></h5>\n                    </ion-item>\n            </ion-list>\n            <ion-list *ngSwitchCase="\'forexStrategyTrades\'">\n                <ion-grid>\n                  <ion-row>\n                    <ion-col>\n                      Total Trades: {{totalCount}}\n                    </ion-col>\n                    <ion-col>\n                      Profitable: {{totalProfitable}}%\n                    </ion-col>\n                    <ion-col>\n                        Profit: $<span [ngStyle]="{\'font-weight\': \'bold\', \'color\': totalProfit >= 0 ? \'green\' : \'red\'}">{{totalProfit}}</span>\n                      </ion-col>\n                  </ion-row>\n\n                <ion-row>\n              <ion-col>\n                Total Forex: <span [ngStyle]="{\'visibility\': forexCount == 0 ? \'hidden\' : \'visible\' }">{{forexCount}}</span>\n              </ion-col>\n              <ion-col>\n            Profitable: <span [ngStyle]="{\'visibility\': forexCount == 0 ? \'hidden\' : \'visible\' }">{{forexProfitable}}%</span>\n              </ion-col>\n              <ion-col>\n                  Profit: $<span [ngStyle]="{\'font-weight\': \'bold\', \'color\': forexProfit >= 0 ? \'green\' : \'red\', \'visibility\': cryptoCount == 0 ? \'hidden\' : \'visible\'}">{{forexProfit}}</span>\n                </ion-col>\n            </ion-row>\n          </ion-grid>\n                    <ion-item *ngFor="let forexStrategyTrade of forexStrategyTrades" (click)="tradeTapped($event, forexStrategyTrade)">\n                        <h5>{{forexStrategyTrade.direction}}\n                        {{forexStrategyTrade.ticker}}\n                        <span [ngStyle]="{\'font-weight\': \'bold\', \'color\': forexStrategyTrade.percentChange >= 0 ? \'green\' : \'red\'}">{{forexStrategyTrade.percentChange}}%</span></h5>\n                  </ion-item>\n                  </ion-list>              \n                  \n                  \n\n\n              <ion-list *ngSwitchCase="\'cryptoStrategyTrades\'">\n                <ion-grid>\n                  <ion-row>\n                    <ion-col>\n                      Total Trades: {{totalCount}}\n                    </ion-col>\n                    <ion-col>\n                      Profitable: {{totalProfitable}}%\n                    </ion-col>\n                    <ion-col>\n                        Profit: $<span [ngStyle]="{\'font-weight\': \'bold\', \'color\': totalProfit >= 0 ? \'green\' : \'red\'}">{{totalProfit}}</span>\n                      </ion-col>\n                  </ion-row>\n\n                <ion-row>\n              <ion-col>\n                Total Crypto: <span [ngStyle]="{\'visibility\': cryptoCount == 0 ? \'hidden\' : \'visible\' }">{{cryptoCount}}</span>\n              </ion-col>\n              <ion-col>\n            Profitable: <span [ngStyle]="{\'visibility\': cryptoCount == 0 ? \'hidden\' : \'visible\' }">{{cryptoProfitable}}%</span>\n              </ion-col>\n              <ion-col>\n                  Profit: $<span [ngStyle]="{\'font-weight\': \'bold\', \'color\': cryptoProfit >= 0 ? \'green\' : \'red\', \'visibility\': cryptoCount == 0 ? \'hidden\' : \'visible\'}">{{cryptoProfit}}</span>\n                </ion-col>\n            </ion-row>\n          </ion-grid>\n                    <ion-item *ngFor="let cryptoStrategyTrade of cryptoStrategyTrades" (click)="tradeTapped($event, cryptoStrategyTrade)">\n                        <h5>{{cryptoStrategyTrade.direction}}\n                        {{cryptoStrategyTrade.ticker}}\n                        <span [ngStyle]="{\'font-weight\': \'bold\', \'color\': cryptoStrategyTrade.percentChange >= 0 ? \'green\' : \'red\'}">{{cryptoStrategyTrade.percentChange}}%</span></h5>\n                  </ion-item>\n                  </ion-list>\n    \n    \n\n\n</div>\n  </ion-content>\n  '/*ion-inline-end:"/Users/vincents/Desktop/EphemeraUI/src/pages/strategy/strategy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_providers_providers__["a" /* ProvidersProvider */]])
    ], StrategyPage);
    return StrategyPage;
}());

//# sourceMappingURL=strategy.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chart_js__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers_providers__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__statistics_statistics__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__closed_trades_closed_trades__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__open_trades_open_trades__ = __webpack_require__(110);
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
            var response, response1, response2, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.provider.getClosedEquityTrades().toPromise()];
                    case 1:
                        response = _d.sent();
                        return [4 /*yield*/, this.provider.getClosedCryptoTrades().toPromise()];
                    case 2:
                        response1 = _d.sent();
                        return [4 /*yield*/, this.provider.getClosedForexTrades().toPromise()];
                    case 3:
                        response2 = _d.sent();
                        this.equityClosedTrades = response;
                        this.cryptoClosedTrades = response1;
                        this.forexClosedTrades = response2;
                        return [4 /*yield*/, this.getStats(response, response1, response2)];
                    case 4:
                        _d.sent();
                        _a = this;
                        return [4 /*yield*/, this.equityClosedTrades.sort(this.compare2)];
                    case 5:
                        _a.equityClosedTrades = _d.sent();
                        _b = this;
                        return [4 /*yield*/, this.cryptoClosedTrades.sort(this.compare2)];
                    case 6:
                        _b.cryptoClosedTrades = _d.sent();
                        _c = this;
                        return [4 /*yield*/, this.forexClosedTrades.sort(this.compare2)];
                    case 7:
                        _c.forexClosedTrades = _d.sent();
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
    OverviewPage.prototype.getStats = function (data, data1, data2) {
        var count = 0;
        var count1 = 0;
        var count2 = 0;
        var tradesProfitable = 0;
        var tradesProfitable1 = 0;
        var tradesProfitable2 = 0;
        var tradesProfit = 0;
        var tradesProfit1 = 0;
        var tradesProfit2 = 0;
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
        for (var _b = 0, data2_1 = data2; _b < data2_1.length; _b++) {
            var trade = data2_1[_b];
            count2++;
            tradesProfit2 += (((trade.percentChange / 100) * trade.signalBuyPrice) * trade.amount);
            if (trade.percentChange >= 0) {
                tradesProfitable2++;
            }
        }
        this.equityCount = count;
        this.cryptoCount = count1;
        this.forexCount = count2;
        this.totalCount = count + count1 + count2;
        this.equityProfitable = Math.round(((tradesProfitable / count) * 100) * 10) / 10;
        this.cryptoProfitable = Math.round(((tradesProfitable1 / count1) * 100) * 10) / 10;
        this.forexProfitable = Math.round(((tradesProfitable2 / count2) * 100) * 10) / 10;
        this.totalProfitable = Math.round(((tradesProfitable + tradesProfitable1 + tradesProfitable2) / (count + count1 + count2) * 100) * 10) / 10;
        this.equityProfit = +(tradesProfit.toFixed(2));
        this.cryptoProfit = +(tradesProfit1.toFixed(2));
        this.forexProfit = +(tradesProfit2.toFixed(2));
        this.totalProfit = +((tradesProfit + tradesProfit1 + tradesProfit2).toFixed(2));
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
            selector: 'page-overview',template:/*ion-inline-start:"/Users/vincents/Desktop/EphemeraUI/src/pages/overview/overview.html"*/'<ion-header>\n    <ion-navbar color = "primary">\n        <button menuToggle ion-button icon-only>\n            <ion-icon name = "menu"></ion-icon>\n        </button>\n        <ion-title>Ephemera</ion-title>\n    </ion-navbar>\n    <ion-toolbar color = "secondary" >\n            <ion-title text-center>\n                    Overview\n            </ion-title>\n        </ion-toolbar>\n</ion-header>\n<ion-content>\n        <h5 text-center>Total Profit</h5>\n        <canvas #lineCanvas></canvas>\n        <ion-grid>\n                <ion-row>\n                  <ion-col>\n                    <span class = "ion-heading">Total Trades </span><br>\n                    <span class = "ion-content">{{totalCount}}</span>\n                  </ion-col>\n                  <ion-col>\n                    <span class = "ion-heading">Profitable </span><br>\n                    <span class = "ion-content">{{totalProfitable}}%</span>\n                  </ion-col>\n                  <ion-col>\n                    <span class = "ion-heading">Profit </span><br>\n                      $<span class = "ion-content" [ngStyle]="{\'font-weight\': \'bold\', \'color\': totalProfit >= 0 ? \'green\' : \'red\'}">{{totalProfit}}</span>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                        <span class = "ion-heading">Total Equity </span><br>\n                    <span class = "ion-content">{{equityCount}}</span>\n                  </ion-col>\n                  <ion-col>\n                        <span class = "ion-heading">Profitable </span><br>\n                      <span class = "ion-content">{{equityProfitable}}%</span>\n                  </ion-col>\n                  <ion-col>\n                        <span class = "ion-heading">Profit </span><br>\n                      $<span class = "ion-content" [ngStyle]="{\'font-weight\': \'bold\', \'color\': equityProfit >= 0 ? \'green\' : \'red\'}">{{equityProfit}}</span>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                            <span class = "ion-heading">Total Forex </span><br>\n                        <span class = "ion-content">{{forexCount}}</span>\n                    </ion-col>\n                    <ion-col>\n                        <span class = "ion-heading">Profitable </span> <br>\n                        <span class = "ion-content">{{forexProfitable}}%</span>\n                    </ion-col>\n                    <ion-col>\n                        <span class = "ion-heading">Profit </span><br>\n                        $<span class = "ion-content" [ngStyle]="{\'font-weight\': \'bold\', \'color\': forexProfit >= 0 ? \'green\' : \'red\'}">{{forexProfit}}</span>\n                      </ion-col>\n                  </ion-row>\n                <ion-row>\n                    <ion-col>\n                            <span class = "ion-heading">Total Crypto </span><br>\n                        <span class = "ion-content">{{cryptoCount}}</span>\n                    </ion-col>\n                    <ion-col>\n                        <span class = "ion-heading">Profitable </span> <br>\n                        <span class = "ion-content">{{cryptoProfitable}}%</span>\n                    </ion-col>\n                    <ion-col>\n                        <span class = "ion-heading">Profit </span><br>\n                        $<span class = "ion-content" [ngStyle]="{\'font-weight\': \'bold\', \'color\': cryptoProfit >= 0 ? \'green\' : \'red\'}">{{cryptoProfit}}</span>\n                      </ion-col>\n                  </ion-row>\n              </ion-grid>\n        \n</ion-content>\n\n'/*ion-inline-end:"/Users/vincents/Desktop/EphemeraUI/src/pages/overview/overview.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_providers_providers__["a" /* ProvidersProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_providers_providers__["a" /* ProvidersProvider */]) === "function" && _b || Object])
    ], OverviewPage);
    return OverviewPage;
    var _a, _b;
}());

//# sourceMappingURL=overview.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_content__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    AboutPage.prototype.openModal = function (page) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__modal_content__["a" /* ModalContentPage */], page);
        modal.present();
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/vincents/Desktop/EphemeraUI/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar color = "secondary">\n    <ion-title>About</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>\n      Ephemera \n    </ion-list-header>\n    <a ion-item (click)="openModal({page: 0})">\n      Abstract\n    </a>\n    <a ion-item (click)="openModal({page: 1})">\n      Technology\n    </a>\n    <a ion-item (click)="openModal({page: 2})">\n      Strategies\n    </a>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/vincents/Desktop/EphemeraUI/src/pages/about/about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* ModalController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(369);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_about_modal_content__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_viewtradeby_viewtradeby__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_closed_trades_closed_trades__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_open_trades_open_trades__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_trade_trade__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_overview_overview__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_statistics_statistics__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_strategies_strategies__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_strategy_strategy__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_providers_providers__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tickers_tickers__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_ticker_ticker__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_about_about__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_component__ = __webpack_require__(469);
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
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_overview_overview__["a" /* OverviewPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_statistics_statistics__["a" /* StatisticsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_strategies_strategies__["a" /* StrategiesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_strategy_strategy__["a" /* StrategyPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_trade_trade__["a" /* TradePage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_closed_trades_closed_trades__["a" /* ClosedTradesPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_open_trades_open_trades__["a" /* OpenTradesPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_viewtradeby_viewtradeby__["a" /* ViewtradebyPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tickers_tickers__["a" /* TickersPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_ticker_ticker__["a" /* TickerPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_about_modal_content__["a" /* ModalContentPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_overview_overview__["a" /* OverviewPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_statistics_statistics__["a" /* StatisticsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_strategies_strategies__["a" /* StrategiesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_strategy_strategy__["a" /* StrategyPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_trade_trade__["a" /* TradePage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_closed_trades_closed_trades__["a" /* ClosedTradesPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_open_trades_open_trades__["a" /* OpenTradesPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_viewtradeby_viewtradeby__["a" /* ViewtradebyPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tickers_tickers__["a" /* TickersPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_ticker_ticker__["a" /* TickerPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_about_modal_content__["a" /* ModalContentPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_providers_providers__["a" /* ProvidersProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 224,
	"./af.js": 224,
	"./ar": 225,
	"./ar-dz": 226,
	"./ar-dz.js": 226,
	"./ar-kw": 227,
	"./ar-kw.js": 227,
	"./ar-ly": 228,
	"./ar-ly.js": 228,
	"./ar-ma": 229,
	"./ar-ma.js": 229,
	"./ar-sa": 230,
	"./ar-sa.js": 230,
	"./ar-tn": 231,
	"./ar-tn.js": 231,
	"./ar.js": 225,
	"./az": 232,
	"./az.js": 232,
	"./be": 233,
	"./be.js": 233,
	"./bg": 234,
	"./bg.js": 234,
	"./bm": 235,
	"./bm.js": 235,
	"./bn": 236,
	"./bn.js": 236,
	"./bo": 237,
	"./bo.js": 237,
	"./br": 238,
	"./br.js": 238,
	"./bs": 239,
	"./bs.js": 239,
	"./ca": 240,
	"./ca.js": 240,
	"./cs": 241,
	"./cs.js": 241,
	"./cv": 242,
	"./cv.js": 242,
	"./cy": 243,
	"./cy.js": 243,
	"./da": 244,
	"./da.js": 244,
	"./de": 245,
	"./de-at": 246,
	"./de-at.js": 246,
	"./de-ch": 247,
	"./de-ch.js": 247,
	"./de.js": 245,
	"./dv": 248,
	"./dv.js": 248,
	"./el": 249,
	"./el.js": 249,
	"./en-au": 250,
	"./en-au.js": 250,
	"./en-ca": 251,
	"./en-ca.js": 251,
	"./en-gb": 252,
	"./en-gb.js": 252,
	"./en-ie": 253,
	"./en-ie.js": 253,
	"./en-il": 254,
	"./en-il.js": 254,
	"./en-nz": 255,
	"./en-nz.js": 255,
	"./eo": 256,
	"./eo.js": 256,
	"./es": 257,
	"./es-do": 258,
	"./es-do.js": 258,
	"./es-us": 259,
	"./es-us.js": 259,
	"./es.js": 257,
	"./et": 260,
	"./et.js": 260,
	"./eu": 261,
	"./eu.js": 261,
	"./fa": 262,
	"./fa.js": 262,
	"./fi": 263,
	"./fi.js": 263,
	"./fo": 264,
	"./fo.js": 264,
	"./fr": 265,
	"./fr-ca": 266,
	"./fr-ca.js": 266,
	"./fr-ch": 267,
	"./fr-ch.js": 267,
	"./fr.js": 265,
	"./fy": 268,
	"./fy.js": 268,
	"./gd": 269,
	"./gd.js": 269,
	"./gl": 270,
	"./gl.js": 270,
	"./gom-latn": 271,
	"./gom-latn.js": 271,
	"./gu": 272,
	"./gu.js": 272,
	"./he": 273,
	"./he.js": 273,
	"./hi": 274,
	"./hi.js": 274,
	"./hr": 275,
	"./hr.js": 275,
	"./hu": 276,
	"./hu.js": 276,
	"./hy-am": 277,
	"./hy-am.js": 277,
	"./id": 278,
	"./id.js": 278,
	"./is": 279,
	"./is.js": 279,
	"./it": 280,
	"./it.js": 280,
	"./ja": 281,
	"./ja.js": 281,
	"./jv": 282,
	"./jv.js": 282,
	"./ka": 283,
	"./ka.js": 283,
	"./kk": 284,
	"./kk.js": 284,
	"./km": 285,
	"./km.js": 285,
	"./kn": 286,
	"./kn.js": 286,
	"./ko": 287,
	"./ko.js": 287,
	"./ky": 288,
	"./ky.js": 288,
	"./lb": 289,
	"./lb.js": 289,
	"./lo": 290,
	"./lo.js": 290,
	"./lt": 291,
	"./lt.js": 291,
	"./lv": 292,
	"./lv.js": 292,
	"./me": 293,
	"./me.js": 293,
	"./mi": 294,
	"./mi.js": 294,
	"./mk": 295,
	"./mk.js": 295,
	"./ml": 296,
	"./ml.js": 296,
	"./mn": 297,
	"./mn.js": 297,
	"./mr": 298,
	"./mr.js": 298,
	"./ms": 299,
	"./ms-my": 300,
	"./ms-my.js": 300,
	"./ms.js": 299,
	"./mt": 301,
	"./mt.js": 301,
	"./my": 302,
	"./my.js": 302,
	"./nb": 303,
	"./nb.js": 303,
	"./ne": 304,
	"./ne.js": 304,
	"./nl": 305,
	"./nl-be": 306,
	"./nl-be.js": 306,
	"./nl.js": 305,
	"./nn": 307,
	"./nn.js": 307,
	"./pa-in": 308,
	"./pa-in.js": 308,
	"./pl": 309,
	"./pl.js": 309,
	"./pt": 310,
	"./pt-br": 311,
	"./pt-br.js": 311,
	"./pt.js": 310,
	"./ro": 312,
	"./ro.js": 312,
	"./ru": 313,
	"./ru.js": 313,
	"./sd": 314,
	"./sd.js": 314,
	"./se": 315,
	"./se.js": 315,
	"./si": 316,
	"./si.js": 316,
	"./sk": 317,
	"./sk.js": 317,
	"./sl": 318,
	"./sl.js": 318,
	"./sq": 319,
	"./sq.js": 319,
	"./sr": 320,
	"./sr-cyrl": 321,
	"./sr-cyrl.js": 321,
	"./sr.js": 320,
	"./ss": 322,
	"./ss.js": 322,
	"./sv": 323,
	"./sv.js": 323,
	"./sw": 324,
	"./sw.js": 324,
	"./ta": 325,
	"./ta.js": 325,
	"./te": 326,
	"./te.js": 326,
	"./tet": 327,
	"./tet.js": 327,
	"./tg": 328,
	"./tg.js": 328,
	"./th": 329,
	"./th.js": 329,
	"./tl-ph": 330,
	"./tl-ph.js": 330,
	"./tlh": 331,
	"./tlh.js": 331,
	"./tr": 332,
	"./tr.js": 332,
	"./tzl": 333,
	"./tzl.js": 333,
	"./tzm": 334,
	"./tzm-latn": 335,
	"./tzm-latn.js": 335,
	"./tzm.js": 334,
	"./ug-cn": 336,
	"./ug-cn.js": 336,
	"./uk": 337,
	"./uk.js": 337,
	"./ur": 338,
	"./ur.js": 338,
	"./uz": 339,
	"./uz-latn": 340,
	"./uz-latn.js": 340,
	"./uz.js": 339,
	"./vi": 341,
	"./vi.js": 341,
	"./x-pseudo": 342,
	"./x-pseudo.js": 342,
	"./yo": 343,
	"./yo.js": 343,
	"./zh-cn": 344,
	"./zh-cn.js": 344,
	"./zh-hk": 345,
	"./zh-hk.js": 345,
	"./zh-tw": 346,
	"./zh-tw.js": 346
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
webpackContext.id = 450;

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_viewtradeby_viewtradeby__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_overview_overview__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_statistics_statistics__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_open_trades_open_trades__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tickers_tickers__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_about__ = __webpack_require__(347);
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
    MyApp.prototype.goToStatistics = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_statistics_statistics__["a" /* StatisticsPage */]);
    };
    MyApp.prototype.goToAbout = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */]);
    };
    MyApp.prototype.goToOpenTrades = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_open_trades_open_trades__["a" /* OpenTradesPage */]);
    };
    MyApp.prototype.goToViewTradesBy = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_0__pages_viewtradeby_viewtradeby__["a" /* ViewtradebyPage */]);
    };
    MyApp.prototype.goToTickers = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_tickers_tickers__["a" /* TickersPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/vincents/Desktop/EphemeraUI/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color = "secondary">\n      <ion-title text-center>Ephemera</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <ion-list-header>Navigate</ion-list-header>\n      <button menuClose ion-item (click)="goToOpenTrades()">Open Trades</button>\n      <button menuClose ion-item (click)="goToViewTradesBy()">View Closed Trades By</button>\n      <button menuClose ion-item (click)="goToStatistics()">Statistics</button>\n      <button menuClose ion-item (click)="goToAbout()">About</button>\n\n\n</ion-list>\n  </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/vincents/Desktop/EphemeraUI/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers_providers__ = __webpack_require__(19);
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
            selector: 'page-trade',template:/*ion-inline-start:"/Users/vincents/Desktop/EphemeraUI/src/pages/trade/trade.html"*/'\n<ion-header>\n  <ion-navbar color = "secondary">\n    <ion-title text-center> Trade #{{trade.id}}</ion-title>\n  </ion-navbar>\n</ion-header> \n\n\n<ion-content>\n  <ion-grid>\n\n <ion-row>   \n    <ion-col>\n      <ion-item>\n          <span class = "ion-heading">Status </span><br>\n          <span class = "ion-content">{{trade.status}}</span>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n        <ion-item [ngStyle]="{\'visibility\': trade.status == \'OPEN\' ? \'hidden\' : \'visible\' }">\n            <span class = "ion-heading">Percent Change </span><br>\n            <span class = "ion-content" [ngStyle]="{\'font-weight\': \'bold\', \'color\': trade.percentChange >= 0 ? \'green\' : \'red\'}">{{trade.percentChange}}%</span>          \n          </ion-item>\n    </ion-col>\n</ion-row>\n<ion-row>   \n    <ion-col>\n      <ion-item>\n          <span class = "ion-heading">Symbol </span><br> \n          <span class = "ion-content">{{trade.ticker}}</span>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n        <ion-item>\n            <span class = "ion-heading">Amount </span><br>\n            <span class = "ion-content">{{trade.amount}}</span>\n          </ion-item>\n      </ion-col>\n</ion-row>\n\n<ion-row>   \n    <ion-col>\n      <ion-item>\n          <span class = "ion-heading">Direction </span><br>\n          <span class = "ion-content">{{trade.direction}}</span>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n        <ion-item>\n            <span class = "ion-heading">Strategy </span><br>\n            <span class = "ion-content">{{trade.strategy1}}</span>\n          </ion-item>\n      </ion-col>\n</ion-row>\n<ion-row>   \n    <ion-col>\n        <ion-item>\n            <span class = "ion-heading">Open Price </span><br>\n            <span class = "ion-content">${{trade.signalBuyPrice}}</span>\n          </ion-item>\n    </ion-col>\n    <ion-col>\n        <ion-item>\n            <span class = "ion-heading">Open Time </span><br>\n            <span class = "ion-content">{{trade.buyTimestamp}}</span>\n          </ion-item>\n      </ion-col>\n</ion-row>        \n<ion-row [ngStyle]="{\'visibility\': trade.status == \'OPEN\' ? \'hidden\' : \'visible\' }">   \n    <ion-col>\n        <ion-item>\n            <span class = "ion-heading">Close Price </span><br>\n            <span class = "ion-content">${{trade.signalSellPrice}}</span>\n          </ion-item>\n    </ion-col>\n    <ion-col>\n        <ion-item>\n            <span class = "ion-heading">Close Time </span><br>\n            <span class = "ion-content">{{trade.sellTimestamp}}</span>\n          </ion-item>\n      </ion-col>\n</ion-row>   \n<ion-row>  \n    <ion-col>\n          <ion-item>\n            <span class = "ion-heading">Notes </span><br>\n            <span class = "ion-content">{{trade.strategy1Notes}}</span>\n          </ion-item>\n      </ion-col>\n</ion-row>   \n</ion-grid> \n</ion-content>\n'/*ion-inline-end:"/Users/vincents/Desktop/EphemeraUI/src/pages/trade/trade.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_providers_providers__["a" /* ProvidersProvider */]])
    ], TradePage);
    return TradePage;
}());

//# sourceMappingURL=trade.js.map

/***/ })

},[348]);
//# sourceMappingURL=main.js.map