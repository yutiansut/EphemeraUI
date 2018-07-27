import { ProvidersProvider } from '../../providers/providers/providers';
import { TickersPage } from '../tickers/tickers';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StrategiesPage } from '../strategies/strategies';
import { ClosedTradesPage } from '../closed-trades/closed-trades';



@Component({
  selector: 'page-viewtradeby',
  templateUrl: 'viewtradeby.html',
})
export class ViewtradebyPage {

  public eCount;
  public cCount;


  constructor(public navCtrl: NavController, public navParams: NavParams, public provider : ProvidersProvider) {
  }

  ngOnInit(){
  }

  ionViewDidLoad() {
    console.log(this.eCount);
  }

  goToStrategies(){
    this.navCtrl.push(StrategiesPage);
    }

  goToTickers(){
    this.navCtrl.push(TickersPage);
    }

    goToClosedTrades(){
      this.navCtrl.push(ClosedTradesPage)
    }
}
