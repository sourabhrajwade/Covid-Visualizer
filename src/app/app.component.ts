import { LoginService } from './services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CovidVisualizer';
  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.loginService.autoLogin();
  }
}
