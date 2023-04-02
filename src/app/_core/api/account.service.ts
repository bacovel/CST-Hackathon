import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { ApiService } from '../services/api.service';
import { RegisterModel } from '../models/RegisterModel';
import { LoginModel } from '../models/LoginModel';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private readonly url = '/Authentification';

  constructor(private apiService: ApiService) { }

  registerUser(body:RegisterModel): Observable<any>{
    return this.apiService.post(`${this.url}/CreateUser`, body);
  }

  loginUser(body:LoginModel): Observable<any>{
    return this.apiService.post(`${this.url}/Auth`,body);
  }

  getUser(): Observable<any>{
    return this.apiService.get(`${this.url}/GetUser`);
  }
  getDetails(): Observable<any>{
    return this.apiService.get(`${this.url}/GetUserDetails`);
  }

  getLeaderBoard(): Observable<any>{
    return this.apiService.get(`${this.url}/GetLeaderBoard`);
  }

  updateExp(body:any){
    return this.apiService.post(`${this.url}/UpdateExp`,body); 
  }
}
