import { IndiaDataService } from './../../services/india-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public data;
  public Active: string;
  public Confirmed: string;
  public Deaths: string;
  constructor(private indiaData: IndiaDataService) { }

  ngOnInit() {
    this.indiaData.getData().subscribe((event) => {
      this.data = event.statewise[0];
      this.Active = this.data.active;
      this.Confirmed = this.data.confirmed;
      this.Deaths = this.data.deaths;
      console.log(this.data);
    });
  }

}
