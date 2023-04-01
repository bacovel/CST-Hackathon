import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class StorageHelperService {

  private readonly tokenKey: string = "accessToken";

  constructor(private cookieService : CookieService) { }

  saveToken(token: string) : void{
    this.cookieService.set(this.tokenKey,token, 1);
  }
  deleteToken() : void {
    this.cookieService.delete(this.tokenKey);
  }
  getToken() : string{
    return this.cookieService.get(this.tokenKey);
  }
}
