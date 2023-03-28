import { Injectable } from '@angular/core';
import { ServerConfig } from '../models/ServerConfig';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, first, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerConfigService {

  private serverConfig?: ServerConfig;

  constructor(private httpClient: HttpClient) {
    this.loadServerConfig().pipe(first()).subscribe();
   }

  loadServerConfig() {
    return this.httpClient.get("../../../assets/server-config/server-config.json").pipe(
      tap((response: any) => {
        this.serverConfig = response;
      }),
      catchError((error: HttpErrorResponse) => {
        return of(error);
      })
    )
  }

  get server() {
    if(!this.serverConfig){
      throw Error("Server config could not be loaded");
    }

    return this.serverConfig.server;
  }
}
