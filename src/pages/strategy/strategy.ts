import { TradePage } from '../trade/trade';
import { ProvidersProvider } from '../../providers/providers/providers';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-strategy',
  templateUrl: 'strategy.html',
})
export class StrategyPage {
  closedtrades: string;
  strategy: any;
  equityStrategyTrades: any;
  cryptoStrategyTrades: any;
  forexStrategyTrades: any;
  equityCount: number;
  cryptoCount: number;
  forexCount: number;
  totalCount: number;
  totalProfitable : number;
  equityProfitable: number;
  cryptoProfitable: number;
  forexProfitable: number;
  equityProfit: number;
  cryptoProfit: number;
  forexProfit: number;
  totalProfit: number;


  constructor(public navCtrl: NavController, public navParams: NavParams, public provider : ProvidersProvider) {
    this.strategy = this.navParams.data;

  }

  ngOnInit(){
    this.getTrades();
    
  }

    async getTrades(){
      const response =  await this.provider.getEquityTradesByStrategy(this.strategy.name).toPromise();
      const response1 = await this.provider.getCryptoTradesByStrategy(this.strategy.name).toPromise();
      const response2 = await this.provider.getForexTradesByStrategy(this.strategy.name).toPromise();
      this.equityStrategyTrades = response;
      this.cryptoStrategyTrades = response1;
      this.forexStrategyTrades = response2;
      await this.getStats(response, response1, response2);
      await this.getStartupView();
      this.equityStrategyTrades = await this.equityStrategyTrades.sort(this.compare);
      this.cryptoStrategyTrades = await this.cryptoStrategyTrades.sort(this.compare);
      this.forexStrategyTrades = await this.forexStrategyTrades.sort(this.compare)
  
    }

    getStats(data, data1, data2){
      var count = 0;
      var count1 = 0;
      var count2 = 0;
      var tradesProfitable = 0
      var tradesProfitable1 = 0;
      var tradesProfitable2 = 0;
      var tradesProfit = 0;
      var tradesProfit1 = 0;
      var tradesProfit2 = 0;
        for(let trade of data){
          count++;
          tradesProfit += (((trade.percentChange/100) * trade.signalBuyPrice)*trade.amount);
          if(trade.percentChange >= 0){
            tradesProfitable++;
          }
        }
        for(let trade of data1){
          count1++;
          tradesProfit1 += (((trade.percentChange/100) * trade.signalBuyPrice)*trade.amount);
          if(trade.percentChange >= 0){
            tradesProfitable1++;
          }
        }

        for(let trade of data2){
          count2++;
          tradesProfit2 += (((trade.percentChange/100) * trade.signalBuyPrice)*trade.amount);
          if(trade.percentChange >= 0){
            tradesProfitable2++;
          }
        }
          this.equityCount = count;
          this.cryptoCount = count1; 
          this.forexCount = count2;
          this.totalCount = count + count1 + count2;
          this.equityProfitable = Math.round(((tradesProfitable/count) * 100) * 10)/10;
          this.cryptoProfitable = Math.round(((tradesProfitable1/count1) * 100) * 10)/10;
          this.forexProfitable = Math.round(((tradesProfitable2/count2) * 100) * 10)/10;
          this.totalProfitable = Math.round(((tradesProfitable + tradesProfitable1 + tradesProfitable2)/(count + count1 + count2)*100)*10)/10;
          this.equityProfit = +(tradesProfit.toFixed(2));
          this.cryptoProfit = +(tradesProfit1.toFixed(2));
          this.forexProfit = +(tradesProfit2.toFixed(2));
          this.totalProfit = +((tradesProfit + tradesProfit1 + tradesProfit2).toFixed(2));
        } 

    getStartupView(){
      if(this.equityCount > 0){
        this.closedtrades = "equityStrategyTrades";
      } else if (this.forexCount > 0){
        this.closedtrades = "forexStrategyTrades";
      } else this.closedtrades = "cryptoStrategyTrades";
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
