import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Urls } from 'src/app/_core/constants/Urls';
import ComputePayloadHelper from 'src/app/_core/helpers/ComputePayloadHelper';
import { UserService } from 'src/app/_core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  formGroup:FormGroup;
  constructor(
    private userService : UserService,
    private router : Router
  ){
    this.formGroup = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    });
  }
  ngOnInit(): void {
   
  }

  login(){
    var payload = ComputePayloadHelper.loginPayload(this.getUsername,this.getPassword);

    this.userService.loginUser(payload).subscribe({
      next:(result:any) => {
        this.router.navigate([Urls.DASH,Urls.PROFILE])
        console.log(result)
      },
      error:(error:any) => {
        console.log(error)
      }
    })
  }

  get getUsername() : String{
    return this.formGroup.get("username")!.value;
  }

  get getPassword(){
    return this.formGroup.get("password")!.value;
  }

}
