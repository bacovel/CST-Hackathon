import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MenuItem } from 'primeng/api';
import { AccountService } from 'src/app/_core/api/account.service';
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
  users: userModel[] = [];
  formGroup?: FormGroup;
  userDetails!: userModel;
  constructor(
    private router: Router,
    private userService: UserService,
    private projectService: ProjectService,
    private toastr:ToastrService,
    private accountService : AccountService
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

    this.accountService.getDetails().subscribe({
      next:(res:userModel) => {
        this.userDetails = res;
        console.log(this.userDetails)
      }
    })
    this.projectService.getProjectByUser().subscribe({
      next:(response:ProjectModel[])=>{
       
          this.projects = response;
          
      },
      error:()=>{

      }
    })

    this.accountService.getLeaderBoard().subscribe({
      next:(response:userModel[])=>{
        this.users = response;
      },
      error:()=>{
        this.toastr.error("Leaderboard cannot be load")
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
