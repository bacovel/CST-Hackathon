import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { CardModule } from 'primeng/card';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TabMenuModule } from 'primeng/tabmenu';

@NgModule({
  declarations: [
    ProjectCardComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    TabMenuModule
  ],
  exports:[
    ProjectCardComponent,
    NavBarComponent
  ]
})
export class SharedModule { }
