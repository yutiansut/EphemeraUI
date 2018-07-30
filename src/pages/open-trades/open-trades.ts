import { TradePage } from '../trade/trade';
import { Component } from '@angular/core';
import { NavController, NavParams } from '../../../node_modules/ionic-angular';
import { ProvidersProvider } from '../../providers/providers/providers';


@Component({
  selector: 'page-open-trades',
  templateUrl: 'open-trades.html',
})
export class OpenTradesPage {

  equityOpenTrades : any;
  cryptoOpenTrades : any;
  equityLong : any;
  equityShort: any;
  cryptoLong: any;
  cryptoShort: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public provider : ProvidersProvider) {
  }

  ngOnInit(){
      this.getTrades();
    }

    async getTrades(){
      const response =  await this.provider.getOpenEquityTrades().toPromise();
      const response1 = await this.provider.getOpenCryptoTrades().toPromise();
      this.equityOpenTrades = response;
      this.cryptoOpenTrades = response1;
      await this.directionSplit(response, response1);
      this.equityShort = this.equityShort.sort(this.compare);
      this.equityLong = this.equityLong.sort(this.compare);
      this.cryptoShort = this.cryptoShort.sort(this.compare);
      this.cryptoLong = this.cryptoLong.sort(this.compare);
    }


    directionSplit(data, data1){
      this.equityShort = data.filter(trade => trade.direction == "SHORT");
      this.equityLong = data.filter(trade => trade.direction == "LONG");
      this.cryptoShort = data1.filter(trade => trade.direction == "SHORT");
      this.cryptoLong = data1.filter(trade => trade.direction == "LONG");




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

  openTradeTapped($event, openTrade){
    this.navCtrl.push(TradePage, openTrade);
  }

}
