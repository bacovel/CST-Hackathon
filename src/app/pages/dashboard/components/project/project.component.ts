import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/_core/api/project.service';
import { TaskService } from 'src/app/_core/api/task.service';
import { ProjectModel } from 'src/app/_core/models/ProjectModel';
import { TaskModel } from 'src/app/_core/models/TaskModel';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnDestroy {
  private routeSubscribe: any;
  id:Number = 0;
  tasks : TaskModel[] = [];
  project:ProjectModel | undefined;

  constructor(
    private activeRoute: ActivatedRoute,
    private taskService: TaskService,
    private projectService: ProjectService,
    ){}

  ngOnInit(): void {
    this.routeSubscribe = this.activeRoute.params.subscribe(params => {
      this.id = +params['id']; 
      this.routeSubscribe.unsubscribe();
   });

   this.projectService.getById(this.id).subscribe({
      next:(project:ProjectModel)=>{
          this.project = project;
          this.taskService.getTaskByProject(this.id).subscribe({
            next:(tasks:TaskModel[]) => {
              this.tasks = tasks
            },
            error:() => {
              
            }
           })
      },
      error:() => {
        
      }
    })
  }

  ngOnDestroy() {
    this.routeSubscribe.unsubscribe();
  }
}
