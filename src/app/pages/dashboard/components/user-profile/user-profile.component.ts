import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MenuItem } from 'primeng/api';
import { ProjectService } from 'src/app/_core/api/project.service';
import { Urls } from 'src/app/_core/constants/Urls';
import ComputePayloadHelper from 'src/app/_core/helpers/ComputePayloadHelper';
import { ProjectModel } from 'src/app/_core/models/ProjectModel';
import { userModel } from 'src/app/_core/models/UserModel';
import { UserService } from 'src/app/_core/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit{


  userName: String|undefined = "";
  points: Number|undefined;
  level: Number|undefined;
  visible: boolean | undefined;
  projects : ProjectModel[] = [];
  users: userModel[] = [
    {
      id: 1,
      username: 'Mandarin',
      level: 1,
      experience: 200,
      needExperience: 500,
      profileImage: ''
    },
    {
      id: 2,
      username: 'Raul',
      level: 3,
      experience: 1500,
      needExperience: 500,
      profileImage: ''
    }
];
  formGroup?: FormGroup;
  constructor(
    private router: Router,
    private userService: UserService,
    private projectService: ProjectService,
    private toastr:ToastrService
  ){}

  showDialog() {
    this.visible = true;
} 

  ngOnInit(): void {
    this.userService.currentUser$.subscribe({
      next:(user:userModel) => {
        this.userName = user?.username,
        this.points = user?.experience,
        this.level = user?.experience
      }
    })
    
   

    this.projectService.getProjectByUser().subscribe({
      next:(response:ProjectModel[])=>{
       
          this.projects = response;
          
      },
      error:()=>{

      }
    })

    this.formGroup = new FormGroup({
      name: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required])
    });
  }

  createProject(){
    let payload = ComputePayloadHelper.projectPayload(this.projectModalName,this.projectModalDescription)
    console.log(payload)
    this.projectService.createProject(payload).subscribe({
      next:(project:ProjectModel)=>{
        this.toastr.success("An error occurred");
        this.projects.push(project);
        this.visible = false;
      },
      error:()=>{
        this.toastr.error("An error occurred");
      }
    })
  }

  get projectModalName() {
    return this.formGroup?.get("name")?.value;
  }
  get projectModalDescription() {
    return this.formGroup?.get("description")?.value;
  }
}
