import { ProvidersProvider } from '../../providers/providers/providers';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TickerPage } from '../ticker/ticker';


@Component({
  selector: 'page-tickers',
  templateUrl: 'tickers.html',
})
export class TickersPage {
  public countEquity : number;
  public countCrypto : number;
  public equityTickers : any;
  public cryptoTickers : any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public provider : ProvidersProvider) {
  }
  ngOnInit(){
      this.getInfo();
  } 

  async getInfo(){
    const response =  await this.provider.getEquityTradesByTicker().toPromise();
    const response1 = await this.provider.getCryptoTradesByTicker().toPromise();
    this.equityTickers = response;
    this.cryptoTickers = response1;

    }


  equityTickerTapped($event, equityTicker){
    this.navCtrl.push(TickerPage, equityTicker);
  }
  cryptoTickerTapped($event, cryptoTicker){
    this.navCtrl.push(TickerPage, cryptoTicker);
  }
}
