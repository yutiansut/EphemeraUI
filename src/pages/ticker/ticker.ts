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
  count: number;
  tradeProfitable: number;
  tradeProfit: number;



  constructor(public navCtrl: NavController, public navParams: NavParams, public provider : ProvidersProvider) {
    this.ticker = this.navParams.data;
  }

  ngOnInit(){
   this.getTrades();

    }

    async getTrades(){
      const response =  await this.provider.getEquityTradesBySymbol(this.ticker.name).toPromise();
      const response1 = await this.provider.getCryptoTradesBySymbol(this.ticker.name).toPromise();
      this.equityTickerTrades = response;
      this.cryptoTickerTrades = response1;
      await this.getStats(response, response1);
      this.equityTickerTrades = await this.equityTickerTrades.sort(this.compare);
      this.cryptoTickerTrades = await this.cryptoTickerTrades.sort(this.compare)
    }

    getStats(data, data1){
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
          this.count = count;
          this.tradeProfitable = Math.round(((tradesProfitable/count) * 100) * 10)/10;
          this.tradeProfit = +(tradesProfit.toFixed(2));
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

    public async getEquityCount(symbol){
      var count = 0;
      const response =  await this.provider.getEquityTradesBySymbol(symbol.name).toPromise();
        for(let trade of response){
          count++;
        }

        return count;
    }

    public async getCryptoCount(symbol){
      var count = 0;
      const response = await this.provider.getCryptoTradesBySymbol(symbol.name).toPromise();
      for(let trade of response){
        count++;
      }

      return count;
    }

}
