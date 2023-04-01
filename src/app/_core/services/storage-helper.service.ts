import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Urls } from '../constants/Urls';
@Injectable({
  providedIn: 'root'
})
export class StorageHelperService {

  private readonly tokenKey: string = "accessToken";

  constructor(private cookieService : CookieService) { }

  saveToken(token: string) : void{
    this.cookieService.set(this.tokenKey,token, new Date(new Date().getTime() + 30 * 60 * 1000),Urls.BASE);
  }
  deleteToken() : void {
    this.cookieService.delete(this.tokenKey);
  }
  getToken() : string{
    return this.cookieService.get(this.tokenKey);
  }
}
