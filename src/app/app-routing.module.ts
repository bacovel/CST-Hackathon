import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Urls } from './_core/constants/Urls';
import { IsLoggedGuard } from './_core/guard/is-logged.guard';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: Urls.BASE
  },
  {
    path: Urls.ERROR,
    loadChildren: () => import("./pages/error-pages/error-pages.module").then(m => m.ErrorPagesModule)    
  },
  { 
    path: Urls.AUTH,
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) 
  },
  { 
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) ,
    canActivate: [
        IsLoggedGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
