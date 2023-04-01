import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './components/project-card/project-card.component';



@NgModule({
  declarations: [
    ProjectCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ProjectCardComponent
  ]
})
export class SharedModule { }
