import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private readonly url = '/Authentification';

  constructor(private apiService: ApiService) { }

  getCurrentUser(body:any): Observable<any> {
    return this.apiService.post(`${this.url}/Auth`,body);
  }
}
