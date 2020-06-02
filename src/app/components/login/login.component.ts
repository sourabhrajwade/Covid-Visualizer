import { AlertService } from 'ngx-alerts';
import { Login, Register } from './../../models/login.models';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private _LOGINURL = 'https://zen-user-api.herokuapp.com/users/authenticate';
  private _REGURL = 'https://zen-user-api.herokuapp.com/users/register';
  userForm: FormGroup;
  regForm: FormGroup;
  constructor(private http: HttpClient, private router: Router, private alertService: AlertService) {

    this.userForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });

    this.regForm = new FormGroup({
      first: new FormControl('', Validators.required),
      last: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  login() {
    this.http.post<Login>(this._LOGINURL, {
      email: this.userForm.get('email').value,
      password: this.userForm.get('password').value,
    }).subscribe((detail) => {
      if (detail && detail.token) {
        alert('Login Successful');
        localStorage.setItem('detail', detail.token);
        this.router.navigate(['/dash']);
      } else {
        alert('Incorrect detail, Please try again ');
      }
    });
  }
  register() {
    this.http.post<Register>(this._REGURL, {
      firstName: this.regForm.get('first').value,
      lastName: this.regForm.get('last').value,
      email: this.regForm.get('email').value,
      password: this.regForm.get('password').value,
    }). subscribe((entry) => {
      console.log(entry);
    });
  }


  ngOnInit(): void {
  }

}
