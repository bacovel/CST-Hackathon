import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { UserProfileComponent } from './components/user-profile/user-profile.component';


import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SharedModule } from 'src/app/_shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectComponent } from './components/project/project.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { DropdownModule } from 'primeng/dropdown';
import { OnlineComponent } from './components/online/online.component';
import { AboutComponent } from './components/about/about.component';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';


@NgModule({
  declarations: [ 
    UserProfileComponent,
    ProjectComponent,
    RoomsComponent,
    OnlineComponent,
    AboutComponent      
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    CardModule,
    AvatarModule,
    MonacoEditorModule.forRoot()
  ]
})
export class DashboardModule { }
