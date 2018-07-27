import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import { Injectable } from '@angular/core';


@Injectable()
export class ProvidersProvider {

  public API = 'http://167.99.52.238:8080';
  public EQUITY_TRADES  = this.API + '/equity-trades';
  public EQUITY_TRADE_SIGNALS  = this.API + '/equity-trade-signals';
  public CRYPTO_TRADES  = this.API + '/crypto-trades';
  public CRYPTO_TRADE_SIGNALS  = this.API + '/crypto-trade-signals';

  constructor(public http: HttpClient) {
  }

getAllEquityTrades(): Observable<any>{
  return this.http.get(this.EQUITY_TRADES + "/all")
}

getAllCryptoTrades(): Observable<any>{
  return this.http.get(this.CRYPTO_TRADES + "/all")
}

getOpenEquityTrades(): Observable<any>{
  return this.http.get(this.EQUITY_TRADES + "/open")
}

getClosedEquityTrades(): Observable<any> {
  return this.http.get(this.EQUITY_TRADES + "/closed")

}

getOpenCryptoTrades(): Observable<any>{
  return this.http.get(this.CRYPTO_TRADES + "/open")
}

getClosedCryptoTrades(): Observable<any>{
  return this.http.get(this.CRYPTO_TRADES + "/closed")
}

getAllEquityTradeSignals(): Observable<any>{
  return this.http.get(this.EQUITY_TRADE_SIGNALS + "/all")
}

getAllCryptoTradeSignals(): Observable<any>{
  return this.http.get(this.CRYPTO_TRADE_SIGNALS + "/all")
}

getEquityTradesBySymbol(ticker): Observable<any>{
  return this.http.get(this.EQUITY_TRADES + "/tickers/" + ticker)
}

getCryptoTradesBySymbol(ticker): Observable<any>{
  return this.http.get(this.CRYPTO_TRADES + "/tickers/" + ticker)

}

getEquityTradesByStrategy(strategy): Observable<any>{
  return this.http.get(this.EQUITY_TRADES + "/strategies/" + strategy)
}

getCryptoTradesByStrategy(strategy): Observable<any>{
  return this.http.get(this.CRYPTO_TRADES + "/strategies/" + strategy)
}

getEquityTradesByTicker(): Observable<any>{
  return this.http.get(this.EQUITY_TRADES + "/tickers")
}

getCryptoTradesByTicker(): Observable<any>{
  return this.http.get(this.CRYPTO_TRADES + "/tickers")
}

getAllStrategies(): Observable<any>{
  return this.http.get(this.API + "/all")
}


}
