import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { Urls } from 'src/app/_core/constants/Urls';
import { IsLoggedGuard } from 'src/app/_core/guard/is-logged.guard';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ProjectComponent } from './components/project/project.component';
import { RoomsComponent } from './components/rooms/rooms.component';

const routes: Routes = [
  { 
    path: '', 
    component: DashboardComponent,
    children: [
      {
        path: Urls.PROFILE,
        component: UserProfileComponent
      },
      {
        path: Urls.PROJECT,
        component: ProjectComponent
      },
      {
        path: Urls.ROOMS,
        component: RoomsComponent
      },
      {
        path: Urls.ONLINE,
        component: RoomsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
