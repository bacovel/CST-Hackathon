import { Component, Input } from '@angular/core';
import { ProjectModel } from 'src/app/_core/models/ProjectModel';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() project: ProjectModel|undefined;

  constructor(){}
}
