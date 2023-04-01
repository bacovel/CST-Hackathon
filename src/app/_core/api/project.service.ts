import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private readonly url = '/Project';

  constructor(private apiService: ApiService) { }

  getProjectByUser(): Observable<any>{
    return this.apiService.get(`${this.url}/GetByUser`);
  }
}
