import { AuthInterceptorService } from './services/auth-interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-alerts';
import { StateTableComponent } from './components/state-table/state-table.component';

import { ChartsModule } from 'ng2-charts';
import { MyLineChartComponent } from './components/charts/my-line-chart/my-line-chart.component';
import { StatesInfoComponent } from './components/states-info/states-info.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';

import { NgHttpLoaderModule } from 'ng-http-loader';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,

    LoginComponent,
    StateTableComponent,
    MyLineChartComponent,
    StatesInfoComponent,
    SideNavbarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    AlertModule.forRoot({ maxMessages: 5, timeout: 3000, position: 'right' }),
    ChartsModule,
    NgHttpLoaderModule.forRoot()
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
