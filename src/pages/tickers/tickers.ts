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
  descending: boolean = false;
  order: number;
  column: string = 'name';

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

    compare1(a,b){
      const tradeA = a.profit;
      const tradeB = b.profit;
      let comparison = 0;
      if (tradeA > tradeB) {
        comparison = 1;
      } else if (tradeA < tradeB) {
        comparison = -1;
      }
      return comparison * -1;
    }

    compare2(a,b){
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

    compare3(a,b){
      const tradeA = a.count;
      const tradeB = b.count;
      let comparison = 0;
      if (tradeA > tradeB) {
        comparison = 1;
      } else if (tradeA < tradeB) {
        comparison = -1;
      }
      return comparison * -1;
    }

    profitSort(){
      this.equityTickers = this.equityTickers.sort(this.compare1);
      this.cryptoTickers = this.cryptoTickers.sort(this.compare1);
      this.forexTickers =  this.forexTickers.sort(this.compare1)
    }

    nameSort(){
      this.equityTickers = this.equityTickers.sort(this.compare2);
      this.cryptoTickers = this.cryptoTickers.sort(this.compare2);
      this.forexTickers =  this.forexTickers.sort(this.compare2)
    }

    countSort(){
      this.equityTickers = this.equityTickers.sort(this.compare3);
      this.cryptoTickers = this.cryptoTickers.sort(this.compare3);
      this.forexTickers =  this.forexTickers.sort(this.compare3)
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
