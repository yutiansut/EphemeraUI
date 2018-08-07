
import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { ProvidersProvider } from '../../providers/providers/providers';
import { TradePage } from '../trade/trade';



@Component({
  selector: 'page-closed-trades',
  templateUrl: 'closed-trades.html',
})
export class ClosedTradesPage {

  closedtrades: string = "closedtrades";
  equityClosedTrades : any;
  forexClosedTrades : any;
  cryptoClosedTrades : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public provider : ProvidersProvider, public platform: Platform) {
    this.closedtrades = "equityClosedTrades";
  
  }

  ngOnInit(){
    this.getTrades();
    }

  async getTrades(){
    const response =  await this.provider.getClosedEquityTrades().toPromise();
    const response1 = await this.provider.getClosedCryptoTrades().toPromise();
    const response2 = await this.provider.getClosedForexTrades().toPromise();
    this.equityClosedTrades = response;
    this.cryptoClosedTrades = response1;
    this.forexClosedTrades = response2;
    this.equityClosedTrades = await this.equityClosedTrades.sort(this.compare);
    this.forexClosedTrades = await this.forexClosedTrades.sort(this.compare)
    this.cryptoClosedTrades = await this.cryptoClosedTrades.sort(this.compare)
  }



  compare(a,b){
    const tradeA = a.id;
    const tradeB = b.id;
    let comparison = 0;
    if (tradeA > tradeB) {
      comparison = 1;
    } else if (tradeA < tradeB) {
      comparison = -1;
    }
    return comparison * -1;
  }  

  closedTradeTapped($event, closedTrade){
  this.navCtrl.push(TradePage, closedTrade);
}


}