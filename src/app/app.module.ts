import { ModalContentPage } from './../pages/about/modal-content';
import { ViewtradebyPage } from '../pages/viewtradeby/viewtradeby';
import { HttpClientModule } from '@angular/common/http';
import { ClosedTradesPage } from '../pages/closed-trades/closed-trades';
import { OpenTradesPage } from '../pages/open-trades/open-trades';
import { TradePage } from '../pages/trade/trade';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OverviewPage } from '../pages/overview/overview';
import { StatisticsPage } from '../pages/statistics/statistics';
import { StrategiesPage } from '../pages/strategies/strategies';
import { StrategyPage } from '../pages/strategy/strategy';
import { ProvidersProvider } from '../providers/providers/providers';
import { TickersPage } from '../pages/tickers/tickers';
import { TickerPage } from '../pages/ticker/ticker';
import { AboutPage } from '../pages/about/about';
import { MyApp } from './app.component';


@NgModule({
  declarations: [
    MyApp,
    OverviewPage,
    StatisticsPage,
    StrategiesPage,
    StrategyPage,
    TradePage,
    ClosedTradesPage,
    OpenTradesPage,
    ViewtradebyPage,
    TickersPage,
    TickerPage,
    AboutPage,
    ModalContentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OverviewPage,
    StatisticsPage,
    StrategiesPage,
    StrategyPage,
    TradePage,
    ClosedTradesPage,
    OpenTradesPage,
    ViewtradebyPage,
    TickersPage,
    TickerPage,
    AboutPage,
    ModalContentPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProvidersProvider,

  ]
})
export class AppModule {}
