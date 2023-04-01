import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerConfigService } from './server-config.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly apiUrl;

  constructor(
    private http: HttpClient,
    private serverConfig: ServerConfigService
  ) {
    this.apiUrl = this.serverConfig.server;
   }

  get(path: string, params = {}, headers = {}) {
    return this.http.get(`${this.apiUrl}${path}`, { params, headers });
  }

  put(path: string, body = {}, params = {}) {
    return this.http.put(`${this.apiUrl}${path}`, body, { params });
  }

  patch(path: string, body = {}, params = {}) {
    return this.http.patch(`${this.apiUrl}${path}`, body, { params });
  }

  post(path: string, body = {}, params = {}, headers = {}) {
    return this.http.post(`${this.apiUrl}${path}`, body, { params, headers });
  }

  delete(path: string, params = {}) {
    return this.http.delete(`${this.apiUrl}${path}`, { params });
  }
}
