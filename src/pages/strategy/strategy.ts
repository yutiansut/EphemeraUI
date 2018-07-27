import { TradePage } from '../trade/trade';
import { ProvidersProvider } from '../../providers/providers/providers';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-strategy',
  templateUrl: 'strategy.html',
})
export class StrategyPage {

  public strategy: any;
  public equityStrategyTrades: any;
  public cryptoStrategyTrades: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public provider : ProvidersProvider) {
    this.strategy = this.navParams.data;
  }

  ngOnInit(){
    this.provider.getEquityTradesByStrategy(this.strategy.name).subscribe(data => this.equityStrategyTrades = data);
    this.provider.getCryptoTradesByStrategy(this.strategy.name).subscribe(data => this.cryptoStrategyTrades = data);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad StrategyPage');
  }

  tradeTapped($event, trade){
    this.navCtrl.push(TradePage, trade);
  }


}
