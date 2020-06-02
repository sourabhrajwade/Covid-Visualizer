import { Login } from './../models/login.models';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {HttpParams} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _LOGINURL = 'https://zen-user-api.herokuapp.com/users/authenticate';
  private _REGURL = 'https://zen-user-api.herokuapp.com/users/register'; _
  constructor(private http: HttpClient, router: Router) { }



  checkLogin(login: Login): Observable<Login>{
   return this.http.post<Login>(this._LOGINURL, login)
  }
}
