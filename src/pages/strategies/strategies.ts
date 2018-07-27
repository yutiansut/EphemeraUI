import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StrategyPage } from '../strategy/strategy';
import { ProvidersProvider } from '../../providers/providers/providers';




@Component({
  selector: 'page-strategies',
  templateUrl: 'strategies.html',
})
export class StrategiesPage {

  public strategies : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public provider : ProvidersProvider) {
  }
  ngOnInit(){
    this.provider.getAllStrategies().subscribe(data => this.strategies = data);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StrategiesPage');
  }

  equityStrategyTapped($event, strategy){
    this.navCtrl.push(StrategyPage, strategy);
  }
  cryptoStrategyTapped($event, strategy){
    this.navCtrl.push(StrategyPage, strategy);
  }


}
