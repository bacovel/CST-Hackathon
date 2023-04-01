import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';
import { ProjectReqModel } from '../models/ProjectReqModel';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private readonly url = '/Project';

  constructor(private apiService: ApiService) { }

  getProjectByUser(): Observable<any>{
    return this.apiService.get(`${this.url}/GetByUser`);
  }

  getById(id:Number): Observable<any>{
    return this.apiService.get(`${this.url}/GetById/${id}`);
  }
  createProject(body:ProjectReqModel): Observable<any>{
    return this.apiService.post(`${this.url}/CreateProject`,body);
  }
}
