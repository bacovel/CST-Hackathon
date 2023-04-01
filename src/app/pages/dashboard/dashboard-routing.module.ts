import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { Urls } from 'src/app/_core/constants/Urls';


const routes: Routes = [
  { 
    path: '', 
    component: DashboardComponent,
    children: [
      {
        path: Urls.PROFILE,
        component: DashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
