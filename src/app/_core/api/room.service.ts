import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private readonly url = '/Room';

  constructor(private apiService: ApiService) { }

  getProjectByUser(code : string): Observable<any>{
    return this.apiService.get(`${this.url}/GetRoom/${code}`);
  }
  closeRoom(code : string): Observable<any>{
    return this.apiService.patch(`${this.url}/CloseRoom/${code}`);
  }
  generateRoom(): Observable<any>{
    return this.apiService.post(`${this.url}/createroom/`);
  }
}
