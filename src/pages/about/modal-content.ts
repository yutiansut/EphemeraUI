import { Component } from '@angular/core';
import { NavParams, Platform, ViewController } from 'ionic-angular';


@Component({
    selector: 'page-modal-content',
    templateUrl: 'modal-content.html'
  })

export class ModalContentPage {
    page;
  
    constructor(
      public platform: Platform,
      public params: NavParams,
      public viewCtrl: ViewController
    ) {
      var pages = [
        {
          name: 'Abstract',
          items: [
            { content: 'Ephemera is a full-stack, autonomous trading system.'},
            { content: 'A suite of software used for the collection and synthesis of data across equity, foreign exchange and cryptocurrency markets.'},
            { content: 'Microservices exist for automatic data collection, data synthesis, algorithmic trade signalling and execution, and post-trade analysis.'}
          ]
        },
        {
            name: 'Technology',
            items: [
                { content: 'Ephemera utilizes a full-stack technology architecture.'},
                { content: 'Ephemera\'s backend consists of three Java Spring Boot microservice applications: Data Collection, Trade Signal Synthesis, and Trade Execution.'},
                { content: 'Each microservice is equipped with an accompanying mySQL database for data persistence. Both the Trade Signal Synthesis and Trade Execution layers point to the previous application\'s database for required data. '},
                { content: 'The Ionic 2 Angular framework is used to develop the frontend.'},
                { content: 'The freely available AlphaVantage API is used in collection of data, the current iteration of Ephemera makes 5000+ calls per day to AlphaVantage endpoints.'}
            ]
          },
          {
            name: 'Strategies',
            items: [
                { content: 'Ephemera\'s current release performs technical analysis using three popular algorithms which I have coded in Java for this project. Each symbol traded for each asset class uses unique parameters which have been backtested to suggest future profitability.'},
                { content: 'K39 - A strategy utilizing two technical indicators: Stochastic Oscillator \'K%D\' and On-Base Volume (OBV). A buy signal is generated when %K=39,%D=0 crosses 50% from below and OBV is greater than it\'s M30.' },
                { content: 'SMA Cross - A Simple Moving Average weights all data points in a set equally. In an SMA Cross strategy, a buy signal is generated when a fast SMA period crosses above a slower one. Vice versa for a short position.' },
                { content: 'EMA Cross - An Exponential Moving Average weights more recent data more heavily, and signals the same way as an SMA Cross strategy.' },
                { content: 'Next to be added are RSI and MACD strategies.' }
            ]               
        },
      ];
      this.page = pages[this.params.get('page')];
    }
  
    dismiss() {
      this.viewCtrl.dismiss();
    }
  }