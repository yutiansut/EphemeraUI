import { ProvidersProvider } from '../../providers/providers/providers';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TradePage } from '../trade/trade';



@Component({
  selector: 'page-ticker',
  templateUrl: 'ticker.html',
})
export class TickerPage {

  public ticker : any;
  public equityTickerTrades: any;
  public cryptoTickerTrades: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public provider : ProvidersProvider) {
    this.ticker = this.navParams.data;
  }

  ngOnInit(){
    this.provider.getEquityTradesBySymbol(this.ticker.name).subscribe(data => this.equityTickerTrades = data);
    this.provider.getCryptoTradesBySymbol(this.ticker.name).subscribe(data => this.cryptoTickerTrades = data);

    }

    tradeTapped($event, trade){
      this.navCtrl.push(TradePage, trade);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TickerPage');
  }

}
