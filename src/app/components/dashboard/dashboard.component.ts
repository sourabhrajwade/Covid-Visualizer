import { LoginService } from './../../services/login.service';
import { IndiaDataService } from './../../services/india-data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  public data;
  public Active: string;
  public Confirmed: string;
  public Deaths: string;
  constructor(private indiaData: IndiaDataService, private loginService: LoginService) { }
  private userSub: Subscription;


  ngOnInit() {

    this.userSub = this.loginService.user.subscribe( user => {
      this.isAuthenticated = !!user;
    });


    this.indiaData.getData().subscribe((event) => {
      this.data = event.statewise[0];
      this.Active = this.data.active;
      this.Confirmed = this.data.confirmed;
      this.Deaths = this.data.deaths;
      console.log(this.data);
    });
  }
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
