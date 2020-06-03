import { Login, Register, Auth } from './../models/login.models';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token = null;
  private _LOGINURL = 'https://zen-user-api.herokuapp.com/users/authenticate';
  private _REGURL = 'https://zen-user-api.herokuapp.com/users/register';
  constructor(private http: HttpClient, private router: Router) { }



  getRegistered(reg: Register): Observable<any>{
   return this.http.post(this._REGURL, reg);
  }

  login(login): Observable<any>{
    return this.http.post<Login>(this._LOGINURL, login);
  }
  setToken(token) {
    window.localStorage.setItem('token', token);
  }
  checkLogin() {
    const tokenSearch = window.localStorage.getItem('token');
    if (tokenSearch) {
      return true;
    }
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
    }
  }


