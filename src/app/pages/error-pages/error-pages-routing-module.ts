import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Urls } from 'src/app/_core/constants/Urls';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ErrorPagesComponent } from './error-pages.component';

const routes: Routes = [
    {
        path: '',
        component: ErrorPagesComponent,
        children: [
            {
                path: Urls.ACCESS_DENIED,
                component: AccessDeniedComponent
            },
            {
                path:Urls.NOT_FOUND,
                component: NotFoundComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ErrorPagesRoutingModule { }
