import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Urls } from 'src/app/_core/constants/Urls';
import { ProjectModel } from 'src/app/_core/models/ProjectModel';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() project: ProjectModel|undefined;

  constructor(private router:Router){}

  redirect(){
    this.router.navigate([Urls.DASH,"project",this.project?.id])
  }
}
