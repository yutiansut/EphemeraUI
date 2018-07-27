import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProvidersProvider } from '../../providers/providers/providers';


@Component({
  selector: 'page-trade',
  templateUrl: 'trade.html',
})
export class TradePage {
  public trade : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public provider : ProvidersProvider) {
    this.trade = this.navParams.data;

    }



  ionViewDidLoad() {
    console.log('ionViewDidLoad TradePage');
  }

}
