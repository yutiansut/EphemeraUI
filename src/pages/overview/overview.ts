import { NavController } from 'ionic-angular';
import { ProvidersProvider } from '../../providers/providers/providers';
import { StatisticsPage } from '../statistics/statistics';
import { Component } from '@angular/core';
import { ClosedTradesPage } from '../closed-trades/closed-trades';
import { OpenTradesPage } from '../open-trades/open-trades';

@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html'
})
export class OverviewPage {

  closedtrades: any;
  opentrades : any;

  constructor(private navCtrl: NavController, public provider : ProvidersProvider) {
  }

ngOnInit(){
this.provider.getOpenEquityTrades().subscribe(data => this.opentrades = data);
this.provider.getClosedEquityTrades().subscribe(data => this.closedtrades = data);

}


goToStatistics(){
this.navCtrl.push(StatisticsPage);
}
goToOpenTrades(){
  this.navCtrl.push(OpenTradesPage);
}
goToClosedTrades(){
  this.navCtrl.push(ClosedTradesPage);
}
}
