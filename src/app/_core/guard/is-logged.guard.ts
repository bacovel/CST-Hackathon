import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { UserInfo } from '../models/UserInfo';
import { UserService } from '../services/user.service';
import { StorageHelperService } from '../services/storage-helper.service';
import { AccountService } from '../api/account.service';
import { Urls } from '../constants/Urls';


@Injectable({
  providedIn: 'root'
})
export class IsLoggedGuard {
  userSubscription?: Subscription;

  constructor(
    private userService: UserService,
    private storageHelper: StorageHelperService,
    private accountService: AccountService,
    private router:Router,
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let token  = this.storageHelper.getToken();
    if(token !== ""){
      this.userService.currentUser$.subscribe({
        next:(result:UserInfo) => {
          if(result == null){
            this.accountService.getUser().subscribe({
              next:(result:any) => {
                  this.userService.setCurrentUser({token:token,username:result.username});
              }
            })
          }
        }
      })
      return true;
    }
    this.router.navigate([Urls.ERROR,Urls.ACCESS_DENIED]);
    return false;
  }
  
}
