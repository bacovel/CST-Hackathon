import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { Urls } from 'src/app/_core/constants/Urls';
import { IsLoggedGuard } from 'src/app/_core/guard/is-logged.guard';

const routes: Routes = [
  { 
    path: '', 
    component: DashboardComponent,
    children: [
      {
        path: Urls.PROFILE,
        component: DashboardComponent,
        canActivate: [
          IsLoggedGuard
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
