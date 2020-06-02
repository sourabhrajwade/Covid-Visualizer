import { IndiaDataService } from './../../services/india-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  public dataContainer;
  public totalConformed = [];
  public days = [];
  type = 'line';
  data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
  options = {
    responsive: true,
    maintainAspectRatio: false
  };
  constructor(private indiaData: IndiaDataService) { }

  ngOnInit(){
    this.indiaData.getData().subscribe((data) => {
      this.dataContainer = data.cases_time_series;
      this.dataContainer.forEach((item) => {
        this.totalConformed.push(item.totalconfirmed);
        this.days.push(item.date);
      });

      console.log(this.dataContainer);
      console.log(this.days);
      //console.log(this.totalConformed);
    });
  }

}
