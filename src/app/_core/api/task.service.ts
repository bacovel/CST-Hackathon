import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private readonly url = '/Task';

  constructor(private apiService: ApiService) { }

  getTaskByProject(id:Number): Observable<any>{
    return this.apiService.get(`${this.url}/GetByProject/${id}`);
  }

  createTask(body:any) :Observable<any>{
    return this.apiService.post(`${this.url}/CreateTask`,body);
  }
}
