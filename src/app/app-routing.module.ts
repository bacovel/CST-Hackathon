import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Urls } from './_core/constants/Urls';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
