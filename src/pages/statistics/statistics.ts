import { Chart } from 'chart.js';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProvidersProvider } from '../../providers/providers/providers';


@Component({
  selector: 'page-statistics',
  templateUrl: 'statistics.html',
})
export class StatisticsPage {
  @ViewChild('lineCanvas') lineCanvas;
  @ViewChild('lineCanvas1') lineCanvas1;
  @ViewChild('lineCanvas2') lineCanvas2;
  @ViewChild('barCanvas') barCanvas;
  @ViewChild('barCanvas1') barCanvas1;
  @ViewChild('barCanvas2') barCanvas2;

  lineChart: any;
  linechartInput: any;
  linechartData: any;
  linechartLabels: any;
  // lineChart1: any;
  // linechart1Input: any;
  // linechart1Data: any;
  // linechart1Labels: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public provider : ProvidersProvider) {
  }

  ngOnInit(){
    this.getTotalProfitChart();
    this.getTotalEquityProfitChart();
    this.getTotalCryptoProfitChart();
    this.getDailyProfitChart();
    this.getDailyEquityChart();
    this.getDailyCryptoChart();
  }


  async getTotalProfitChart(){
    const response =  await this.provider.getAllPnL().toPromise();
    this.linechartInput = await response.sort(this.compare);
    this.linechartLabels = await this.linechartInput.map(function(e) {
      return e.date;
   });
   this.linechartData= await this.linechartInput.map(function(e) {
    return e.runningTotal;
  });;
  
  this.lineChart = new Chart(this.lineCanvas.nativeElement, {
    type: 'line',
    options: {
      legend: {
          display: false
      },
      tooltips: {
          callbacks: {
             label: function(tooltipItem) {
                    return tooltipItem.yLabel;
             }
          }
      }
  },
    data: {
        labels: this.linechartLabels,
        
        datasets: [
            {
                label: "Total Profit",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: this.linechartData,
                spanGaps: false,
            }
        ]
        
    }
    
  
  });
  
  }
  async getTotalEquityProfitChart(){
    const response =  await this.provider.getAllPnL().toPromise();
    this.linechartInput = await response.sort(this.compare);
    this.linechartLabels = await this.linechartInput.map(function(e) {
      return e.date;
   });
   this.linechartData= await this.linechartInput.map(function(e) {
    return e.runningEquity;
  });;
  
  this.lineChart = new Chart(this.lineCanvas1.nativeElement, {
    type: 'line',
    options: {
      legend: {
          display: false
      },
      tooltips: {
          callbacks: {
             label: function(tooltipItem) {
                    return tooltipItem.yLabel;
             }
          }
      }
  },
    data: {
        labels: this.linechartLabels,
        datasets: [
            {
                label: "Total Equity Profit",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: this.linechartData,
                spanGaps: false,
            }
        ]  
    }
  });
  }
  async getTotalCryptoProfitChart(){
    const response =  await this.provider.getAllPnL().toPromise();
    this.linechartInput = await response.sort(this.compare);
    this.linechartLabels = await this.linechartInput.map(function(e) {
      return e.date;
   });
   this.linechartData= await this.linechartInput.map(function(e) {
    return e.runningCrypto;
  });;
  
  this.lineChart = new Chart(this.lineCanvas2.nativeElement, {
    type: 'line',
    options: {
      legend: {
          display: false
      },
      tooltips: {
          callbacks: {
             label: function(tooltipItem) {
                    return tooltipItem.yLabel;
             }
          }
      }
  },
    data: {
        labels: this.linechartLabels,
        datasets: [
            {
                label: "Total Crypto Profit",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: this.linechartData,
                spanGaps: false,
            }
        ]  
    }
  });
  }
  async getDailyProfitChart(){
    const response =  await this.provider.getAllPnL().toPromise();
    this.linechartInput = await response.sort(this.compare);
    this.linechartLabels = await this.linechartInput.map(function(e) {
      return e.date;
   });
   this.linechartData= await this.linechartInput.map(function(e) {
    return e.totalProfit;
  });;
  
  this.lineChart = new Chart(this.barCanvas.nativeElement, {
    type: 'bar',
    options: {
      legend: {
          display: false
      },
      tooltips: {
          callbacks: {
             label: function(tooltipItem) {
                    return tooltipItem.yLabel;
             }
          }
      }
  },
    data: {
        labels: this.linechartLabels,
        datasets: [
            {
                label: "Daily Profit",
                fill: false,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(75,192,192,1)",
                hoverBorderColor: "rgba(220,220,220,1)",
                hoverBorderWidth: 2,
                data: this.linechartData,
            }
        ]  
    }
  });
  }
  async getDailyEquityChart(){
      const response =  await this.provider.getAllPnL().toPromise();
      this.linechartInput = await response.sort(this.compare);
      this.linechartLabels = await this.linechartInput.map(function(e) {
        return e.date;
     });
     this.linechartData= await this.linechartInput.map(function(e) {
      return e.equityProfit;
    });;
    
    this.lineChart = new Chart(this.barCanvas1.nativeElement, {
      type: 'bar',
      options: {
        legend: {
            display: false
        },
        tooltips: {
            callbacks: {
               label: function(tooltipItem) {
                      return tooltipItem.yLabel;
               }
            }
        }
    },
      data: {
          labels: this.linechartLabels,
          datasets: [
              {
                  label: "Daily Equity Profit",
                  fill: false,
                  backgroundColor: "rgba(75,192,192,0.4)",
                  borderColor: "rgba(75,192,192,1)",
                  borderWidth: 1,
                  hoverBackgroundColor: "rgba(75,192,192,1)",
                  hoverBorderColor: "rgba(220,220,220,1)",
                  hoverBorderWidth: 2,
                  data: this.linechartData,
              }
          ]  
      }
    });
    
  }

  async getDailyCryptoChart(){
    const response =  await this.provider.getAllPnL().toPromise();
    this.linechartInput = await response.sort(this.compare);
    this.linechartLabels = await this.linechartInput.map(function(e) {
      return e.date;
   });
   this.linechartData= await this.linechartInput.map(function(e) {
    return e.cryptoProfit;
  });;
  
  this.lineChart = new Chart(this.barCanvas2.nativeElement, {
    type: 'bar',
    options: {
      legend: {
          display: false
      },
      tooltips: {
          callbacks: {
             label: function(tooltipItem) {
                    return tooltipItem.yLabel;
             }
          }
      }
  },
    data: {
        labels: this.linechartLabels,
        datasets: [
            {
                label: "Daily Equity Profit",
                fill: false,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(75,192,192,1)",
                hoverBorderColor: "rgba(220,220,220,1)",
                hoverBorderWidth: 2,
                data: this.linechartData,
            }
        ]  
    }
  });
  
}
  ionViewDidLoad() {
  }

  compare(a,b){
    const tradeA = a.id;
    const tradeB = b.id;
    let comparison = 0;
    if (tradeA > tradeB) {
      comparison = 1;
    } else if (tradeA < tradeB) {
      comparison = -1;
    }
    return comparison;
  }  
}
