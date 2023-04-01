import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormGroup, FormControl, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  
  formGroup:FormGroup;

  constructor(private http: HttpClient){
    this.formGroup = new FormGroup({
      username: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)])
    });
  }

  ngOnInit(): void {
    
  }

  registerAccount(): void{
      console.log("Hello")
  }
  
}
