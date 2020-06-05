import { Login, Register, Auth, User } from './../models/login.models';
import { Router } from '@angular/router';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, first, tap } from 'rxjs/operators';
import { Observable, throwError, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  token = null;
  private _LOGINURL = 'https://zen-user-api.herokuapp.com/users/authenticate';
  private _REGURL = 'https://zen-user-api.herokuapp.com/users/register';
  constructor(private http: HttpClient, private router: Router) {}

  user = new Subject<User>();
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
  singup(firstN: string, lastN: string, emailId: string, pass: string) {
    return this.http
      .post<Auth>(this._REGURL, {
        firstName: firstN,
        lastName: lastN,
        email: emailId,
        password: pass,
      })
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handleAuthentication(
            resData.firstName,
            resData.lastName,
            resData.email,
            resData.createdDate,
            resData.id,
            resData.token
          );
        })
      );
  }
  login(emailId: string, pass: string) {
    return this.http
      .post<Auth>(this._LOGINURL, {
        "email": emailId,
        "password": pass
      })
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handleAuthentication(
            resData.firstName,
            resData.lastName,
            resData.email,
            resData.createdDate,
            resData.id,
            resData.token
          );
        })
      );
  }

  private handleAuthentication(
    firstName: string,
    lastName: string,
    email: string,
    createdDate: string,
    id: string,
    token: string
  ) {
    const user = new User(firstName, lastName, email, createdDate, id, token);
    this.user.next(user);
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred';
    if (!errorRes.error || !errorRes.error.message) {
      return throwError(errorMessage);
    } else if (errorRes.error.message) {
      errorMessage = 'This email already exists';
    }
    return throwError(errorMessage);
  }
}
