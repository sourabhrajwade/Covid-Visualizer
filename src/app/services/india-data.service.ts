import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class IndiaDataService {
  private _URL = 'https://api.covid19india.org/data.json';
  public dataArray = [];
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this._URL);
  }

}
