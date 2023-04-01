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
}
