import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { Urls } from 'src/app/_core/constants/Urls';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { 
    path: '', 
    component: AuthComponent,
    children: [
      {
        path: Urls.LOGIN,
        component: LoginComponent
      },
      {
        path: Urls.REGISTER,
        component: RegisterComponent
      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
