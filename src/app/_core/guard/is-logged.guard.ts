import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { UNAUTHORIZED } from '../constants/Errors';
import * as Urls from '../constants/Urls';
import { UserInfo } from '../models/UserInfo';
import { UserService } from '../services/user.service';
import { StorageHelperService } from '../services/storage-helper.service';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedGuard {
  userSubscription?: Subscription;

  constructor(
    private userService: UserService,
    private router: Router,
    private storageHelper: StorageHelperService
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(this.storageHelper.getToken() != null){
      return true;
    }
    
    return false;
  }
  
}
