import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ProjectService } from 'src/app/_core/api/project.service';
import { Urls } from 'src/app/_core/constants/Urls';
import { ProjectModel } from 'src/app/_core/models/ProjectModel';
import { userModel } from 'src/app/_core/models/UserModel';
import { UserService } from 'src/app/_core/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit{

  items: MenuItem[] = [];
  userName: String|undefined = "";
  visible: boolean | undefined;
  projects : ProjectModel[] = [];
  formGroup?: FormGroup;
  constructor(
    private router: Router,
    private userService: UserService,
    private projectService: ProjectService
  ){}

  showDialog() {
    this.visible = true;
} 

  ngOnInit(): void {
    this.userService.currentUser$.subscribe({
      next:(user:userModel) => {
        this.userName = user?.username
      }
    })
    
    this.items = [
        { label: 'Home', icon: 'pi pi-fw pi-home', command: () => {this.router.navigate([Urls.DASH,Urls.PROFILE])} },
        { label: 'Calendar', icon: 'pi pi-fw pi-calendar', command: () => {this.router.navigate([Urls.DASH,Urls.PROFILE])} },
        { label: 'Edit', icon: 'pi pi-fw pi-pencil', command: () => {this.router.navigate([Urls.DASH,Urls.PROFILE])} },
        { label: 'Documentation', icon: 'pi pi-fw pi-file', command: () => {this.router.navigate([Urls.DASH,Urls.PROFILE])} },
        { label: 'Settings', icon: 'pi pi-fw pi-cog', command: () => {this.router.navigate([Urls.DASH,Urls.PROFILE])} }
    ];

    this.projectService.getProjectByUser().subscribe({
      next:(response:ProjectModel[])=>{
       
          this.projects = response;
          console.log(this.projects)
      },
      error:()=>{

      }
    })

    this.formGroup = new FormGroup({
      name: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required])
    });
}
}
