import { AlertService } from 'ngx-alerts';
import { Login, Register } from './../../models/login.models';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public mode = 1;

  userForm;
  regForm;
  constructor(
    private http: HttpClient,
    private router: Router,
    private alertService: AlertService,
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.userForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', Validators.required),
    });

    this.regForm = new FormGroup({
      first: new FormControl(''),
      last: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('', Validators.required),
    });
  }
  login() {
    this.userService.checkLogin(this.userForm.value).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
      });
  }
  // login() {
  //   this.http
  //     .post<Login>(this._LOGINURL, {
  //       email: this.userForm.get('email').value,
  //       password: this.userForm.get('password').value,
  //     })
  //     .subscribe((detail) => {
  //       if (detail && detail.token) {
  //         alert('Login Successful');
  //         localStorage.setItem('detail', detail.token);
  //         this.router.navigate(['/dash']);
  //       } else {
  //         this.alertService.danger('Email/Password is incorrect');
  //       }
  //     });
  // }
  register() {
    this.http
      .post<Register>(this._REGURL, {
        firstName: this.regForm.get('first').value,
        lastName: this.regForm.get('last').value,
        email: this.regForm.get('email').value,
        password: this.regForm.get('password').value,
      })
      .subscribe((entry) => {
        console.log(entry);
        this.alertService.success('Registration successfull. Please Login');
      });
  }

  ngOnInit(): void {}
  doLogin() {
    this.mode = 1;
  }
  doRegister() {
    this.mode = undefined;
  }
}
