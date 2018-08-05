import { ViewtradebyPage } from '../pages/viewtradeby/viewtradeby';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OverviewPage } from '../pages/overview/overview';
import { StatisticsPage } from '../pages/statistics/statistics';
import { OpenTradesPage } from '../pages/open-trades/open-trades';
import { TickersPage } from '../pages/tickers/tickers';
import { AboutPage } from '../pages/about/about';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = OverviewPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  goToStatistics(){
    this.nav.push(StatisticsPage)
  }

  goToAbout(){
    this.nav.push(AboutPage);
  }

  goToOpenTrades(){
    this.nav.push(OpenTradesPage)
  }

  goToViewTradesBy(){
    this.nav.push(ViewtradebyPage)
  }
  goToTickers(){
    this.nav.push(TickersPage)
  }

  
}
