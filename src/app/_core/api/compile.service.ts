import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';
import { ExecuteModel } from '../models/ExecuteModel.';

@Injectable({
  providedIn: 'root'
})
export class CompileService {

  private readonly url = '/JDoodle';

  constructor(private apiService: ApiService) { }

  Execute(body:ExecuteModel): Observable<any>{
    return this.apiService.post(`${this.url}/Execute`,body);
  }
}
