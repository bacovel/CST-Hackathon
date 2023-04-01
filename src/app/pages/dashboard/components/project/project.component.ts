import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from 'src/app/_core/api/project.service';
import { TaskService } from 'src/app/_core/api/task.service';
import ComputePayloadHelper from 'src/app/_core/helpers/ComputePayloadHelper';
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
  visible : boolean = false;
  formGroup?: FormGroup;

  constructor(
    private activeRoute: ActivatedRoute,
    private taskService: TaskService,
    private projectService: ProjectService,
    private toastr:ToastrService
    ){}

  ngOnInit(): void {
    this.routeSubscribe = this.activeRoute.params.subscribe(params => {
      this.id = +params['id']; 
      this.routeSubscribe.unsubscribe();
   });
   this.formGroup = new FormGroup({
    name: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required])
  });
   this.projectService.getById(this.id).subscribe({
      next:(project:ProjectModel[])=>{
          this.project = project[0];
          console.log(this.project)
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

  createTask(){
    let payload = ComputePayloadHelper.createTaskPayload(this.taskModalName,this.tasktModalDescription,this.id)
    this.taskService.createTask(payload).subscribe({
      next:(response:TaskModel)=>{
        this.tasks.push(response);
        this.visible = false;
      },
      error:()=>{
        this.toastr.error("The task could not be created!")
      }
    })
  }

  get taskModalName() {
    return this.formGroup?.get("name")?.value;
  }
  get tasktModalDescription() {
    return this.formGroup?.get("description")?.value;
  }
}
