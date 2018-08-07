import { ProvidersProvider } from '../../providers/providers/providers';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TickerPage } from '../ticker/ticker';


@Component({
  selector: 'page-tickers',
  templateUrl: 'tickers.html',
})
export class TickersPage {
  public tickers = "tickers";
  public countEquity : number;
  public countForex : number;
  public countCrypto : number;
  public equityTickers : any;
  public forexTickers : any;
  public cryptoTickers : any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public provider : ProvidersProvider) {
    this.tickers = "equityTickers";
  }
  ngOnInit(){
      this.getInfo();
  } 

  async getInfo(){
    const response =  await this.provider.getEquityTradesByTicker().toPromise();
    const response1 = await this.provider.getCryptoTradesByTicker().toPromise();
    const response2 = await this.provider.getForexTradesByTicker().toPromise();
    this.equityTickers = response;
    this.cryptoTickers = response1;
    this.forexTickers = response2;
    this.equityTickers = await this.equityTickers.sort(this.compare);
    this.cryptoTickers = await this.cryptoTickers.sort(this.compare);
    this.forexTickers = await this.forexTickers.sort(this.compare)
    }

    compare(a,b){
      const tradeA = a.name;
      const tradeB = b.name;
      let comparison = 0;
      if (tradeA > tradeB) {
        comparison = 1;
      } else if (tradeA < tradeB) {
        comparison = -1;
      }
      return comparison;
    }  



  equityTickerTapped($event, equityTicker){
    this.navCtrl.push(TickerPage, equityTicker);
  }
  cryptoTickerTapped($event, cryptoTicker){
    this.navCtrl.push(TickerPage, cryptoTicker);
  }

  forexTickerTapped($event, forexTicker){
    this.navCtrl.push(TickerPage, forexTicker);
  }
}
