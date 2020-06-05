import { IndiaDataService } from './../../../services/india-data.service';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-my-line-chart',
  templateUrl: './my-line-chart.component.html',
  styleUrls: ['./my-line-chart.component.css']
})
export class MyLineChartComponent implements OnInit {
  public dataContainer;
  public totalConformed = [];
  public totalDeceased = [];
  public totalRecoverd = [];
  public days = [];
  public lineChartData: ChartDataSets[] = [
    { data: this.totalConformed, label: 'Confirmed' },
    { data: this.totalRecoverd, label: 'Recovered' },
    { data: this.totalDeceased, label: 'Deceased' }
  ];
  public lineChartLabels: Label[] = this.days;
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor(private indiaData: IndiaDataService) { }

  ngOnInit(){
    this.indiaData.getData().subscribe((data) => {
      this.dataContainer = data.cases_time_series;
      this.dataContainer.forEach((item) => {
        this.totalConformed.push(item.totalconfirmed);
        this.days.push(item.date);
        this.totalDeceased.push(item.dailydeceased);
        this.totalRecoverd.push(item.dailyrecovered);
      });

      // console.log(this.dataContainer);
      // console.log(this.days);
      // console.log(this.totalConformed);
    });

  }
}
