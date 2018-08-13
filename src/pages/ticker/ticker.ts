import { ProvidersProvider } from '../../providers/providers/providers';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TradePage } from '../trade/trade';

@Component({
  selector: 'page-ticker',
  templateUrl: 'ticker.html',
})
export class TickerPage {

  ticker : any;
  equityTickerTrades: any;
  cryptoTickerTrades: any;
  forexTickerTrades: any;
  count: any;
  tradeProfitable: any;
  tradeProfit: any;



  constructor(public navCtrl: NavController, public navParams: NavParams, public provider : ProvidersProvider) {
    this.ticker = this.navParams.data;
  }

  ngOnInit(){
   this.getTrades();

    }

    async getTrades(){
      const response =  await this.provider.getEquityTradesBySymbol(this.ticker.name).toPromise();
      const response1 = await this.provider.getCryptoTradesBySymbol(this.ticker.name).toPromise();
      const response2 = await this.provider.getForexTradesBySymbol(this.ticker.name).toPromise();
      this.equityTickerTrades = response;
      this.cryptoTickerTrades = response1;
      this.forexTickerTrades = response2;
      await this.getStats(response, response1, response2);
      this.equityTickerTrades = await this.equityTickerTrades.sort(this.compare);
      this.cryptoTickerTrades = await this.cryptoTickerTrades.sort(this.compare)
      this.forexTickerTrades = await this.forexTickerTrades.sort(this.compare)
    }

    getStats(data, data1, data2){
      var count = 0;
      var tradesProfitable = 0
      var tradesProfit = 0;
        for(let trade of data){
          count++;
          tradesProfit += (((trade.percentChange/100) * trade.signalBuyPrice)*trade.amount);
          if(trade.percentChange >= 0){
            tradesProfitable++;
          }
        }
        for(let trade of data1){
          count++;
          tradesProfit += (((trade.percentChange/100) * trade.signalBuyPrice)*trade.amount);
          if(trade.percentChange >= 0){
            tradesProfitable++;
          }
        }
        for(let trade of data2){
          count++;
          tradesProfit += (((trade.percentChange/100) * trade.signalBuyPrice)*trade.amount);
          if(trade.percentChange >= 0){
            tradesProfitable++;
          }
        }
          this.count = count;
          this.tradeProfitable = Number((tradesProfitable/count)* 100).toFixed(1);
          this.tradeProfit = Number(tradesProfit).toFixed(2);
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

    tradeTapped($event, trade){
      this.navCtrl.push(TradePage, trade);
    }



}
