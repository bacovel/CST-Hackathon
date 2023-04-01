import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { UserProfileComponent } from './components/user-profile/user-profile.component';


@NgModule({
  declarations: [
    
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  providers:[]
})
export class DashboardModule { }
