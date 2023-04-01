import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { TableModule } from 'primeng/table';
import { TreeTableModule } from 'primeng/treetable';


@NgModule({
  declarations: [
    ProjectCardComponent,
    LeaderboardComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    TreeTableModule
  ],
  exports:[
    ProjectCardComponent,
    LeaderboardComponent
  ]
})
export class SharedModule { }
