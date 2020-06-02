import { StateTableComponent } from './components/state-table/state-table.component';
import { MyLineChartComponent } from './components/charts/my-line-chart/my-line-chart.component';
import { StatesInfoComponent } from './components/states-info/states-info.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dash',
    component: DashboardComponent
  },
  {
    path: 'dash',
    component: MyLineChartComponent
  },
  {
    path: 'dash',
    component: StateTableComponent
  },
  {
    path: 'dash/states',
    component: StatesInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
