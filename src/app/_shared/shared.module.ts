import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { TableModule } from 'primeng/table';
import { TreeTableModule } from 'primeng/treetable';

import { CardModule } from 'primeng/card';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { MessageComponent } from './components/message/message.component';


@NgModule({
  declarations: [
    ProjectCardComponent,
    LeaderboardComponent,
    NavBarComponent,
    LeaderboardComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    TableModule,
    TreeTableModule,
    TabMenuModule
  ],
  exports:[
    ProjectCardComponent,
    LeaderboardComponent,
    NavBarComponent,
    MessageComponent,
    TabMenuModule,
    TableModule
  ],
 
})
export class SharedModule { }
