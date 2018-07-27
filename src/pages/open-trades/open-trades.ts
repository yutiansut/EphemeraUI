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

  constructor(public navCtrl: NavController, public navParams: NavParams, public provider : ProvidersProvider) {
  }

  ngOnInit(){
    this.provider.getOpenEquityTrades().subscribe(data => this.equityOpenTrades = data);
    this.provider.getOpenCryptoTrades().subscribe(data => this.cryptoOpenTrades = data);
    }

  ionViewDidLoad() {

  }

  openTradeTapped($event, openTrade){
    this.navCtrl.push(TradePage, openTrade);
  }

}
