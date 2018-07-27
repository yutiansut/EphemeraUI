import { ProvidersProvider } from '../../providers/providers/providers';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TickerPage } from '../ticker/ticker';


@Component({
  selector: 'page-tickers',
  templateUrl: 'tickers.html',
})
export class TickersPage {
  public equityTickers : any;
  public cryptoTickers : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public provider : ProvidersProvider) {
  }
  ngOnInit(){
  this.provider.getEquityTradesByTicker().subscribe(data => this.equityTickers = data);
  this.provider.getCryptoTradesByTicker().subscribe(data => this.cryptoTickers = data);
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad TickersPage');
  }

  equityTickerTapped($event, equityTicker){
    this.navCtrl.push(TickerPage, equityTicker);
  }
  cryptoTickerTapped($event, cryptoTicker){
    this.navCtrl.push(TickerPage, cryptoTicker);
  }
}
