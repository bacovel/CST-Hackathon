import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { ErrorPagesRoutingModule } from './error-pages-routing-module';

@NgModule({
  declarations: [
    NotFoundComponent,
    AccessDeniedComponent
  ],
  imports: [
    CommonModule,
    ErrorPagesRoutingModule
  ]
})
export class ErrorPagesModule { }
