import { Login, Register, Auth, User } from './../models/login.models';
import { Router } from '@angular/router';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, first, tap } from 'rxjs/operators';
import { Observable, throwError, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  token = null;
  private _LOGINURL = 'https://zen-user-api.herokuapp.com/users/authenticate';
  private _REGURL = 'https://zen-user-api.herokuapp.com/users/register';
  constructor(private http: HttpClient, private router: Router) {}

  user = new BehaviorSubject<User>(null);
  setToken(token) {
    window.localStorage.setItem('token', token);
  }
  checkLogin() {
    const tokenSearch = window.localStorage.getItem('token');
    if (tokenSearch) {
      return true;
    }
  }

  autoLogin() {
    const userData: {
      firstName: string;
      lastName: string;
      email: string;
      createdDate: string;
      id: string;
      token: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }
    const loadedUser = new User(
      userData.firstName,
      userData.lastName,
      userData.email,
      userData.createdDate,
      userData.id,
      userData.token
    );
    if (loadedUser._token) {
      this.user.next(loadedUser);
    }
  }

  logOut() {
    this.user.next(null);
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
    localStorage.setItem('userData', JSON.stringify(user));
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
