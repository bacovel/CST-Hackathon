import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormControl, FormsModule, Validators, ValidationErrors } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import ComputePayloadHelper from 'src/app/_core/helpers/ComputePayloadHelper';
import { RegisterModel } from 'src/app/_core/models/RegisterModel';
import { AccountService } from 'src/app/_core/api/account.service';
import { userModel } from 'src/app/_core/models/UserModel';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  
  formGroup:FormGroup;

  constructor(
    private http: HttpClient, 
    private toastr: ToastrService,
    private accountService: AccountService
    ){
    this.formGroup = new FormGroup({
      username: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)])
    });
  }

  ngOnInit(): void {
    console.log(this.formGroup.validator)
  }

  registerAccount(): void{

    let payload: RegisterModel = ComputePayloadHelper.registerPayload(this.getEmail, this.getUsername, this.getPassword )
    this.accountService.registerUser(payload).subscribe({
      next: (res: any) => {
        this.toastr.success("Your account has been succesfully created!");
      },
      error: (err: HttpErrorResponse) => {
        this.toastr.error(err.error.message);
        // console.log(err.error.message);
      }
    })
  }

  get getUsername() : String{
    return this.formGroup.get("username")!.value;
  }

  get getEmail(){
    return this.formGroup.get("email")!.value;
  }
  get getPassword(){
    return this.formGroup.get("password")!.value;
  }
  
}
