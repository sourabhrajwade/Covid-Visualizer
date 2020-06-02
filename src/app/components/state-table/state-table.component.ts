import { IndiaDataService } from './../../services/india-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state-table',
  templateUrl: './state-table.component.html',
  styleUrls: ['./state-table.component.css']
})
export class StateTableComponent implements OnInit {
  public dataIndState;
  public total;
  constructor(private indiaData: IndiaDataService) { }

  ngOnInit(): void {
    this.indiaData.getData().subscribe((data) => {
      this.dataIndState = data.statewise.splice(1, );
      this.total = data.statewise[0];

      //console.log(this.dataIndState, this.total);
    });
  }

}
