import { LoginService } from './login.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { take, exhaustMap } from 'rxjs/operators';
import { userInfo } from 'os';

@Injectable({
  providedIn: 'root',
})
export class IndiaDataService {
  private _URL = 'https://api.covid19india.org/data.json';
  public dataArray = [];
  constructor(private http: HttpClient, private loginService: LoginService) {}

  getData(): Observable<any> {
        return this.http.get(this._URL);
  }
}
