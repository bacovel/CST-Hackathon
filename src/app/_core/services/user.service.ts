import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, first, Observable, tap, catchError, of } from 'rxjs';
import { AccountService } from '../api/account.service';
import { Urls } from '../constants/Urls';
import StorageHelper from '../helpers/StorageHelper';
import { UserInfo } from '../models/UserInfo';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  _currentUser: UserInfo | null = null
  private currentUserSource = new BehaviorSubject<UserInfo| any>(null);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(
    private accountService: AccountService,
    private router: Router
  ) {
    console.log("Aici")
    this.getCurrentUser().pipe(first()).subscribe();
   }

  getCurrentUser(): Observable<any> {
    return this.accountService.getCurrentUser().pipe(
      tap((response: UserInfo) => {
        this.setCurrentUser(response);
        StorageHelper.saveToken(response.token);
      }),
      catchError( (error: HttpErrorResponse) => {
        if(error.status != 401 && error.status != 403){
          this.setCurrentUser(null);
          StorageHelper.deleteToken();
        }
        else{
          let user: UserInfo = {
            token: "Unauthorised",
            level: 0
          }
          this.router.navigate([Urls.ACCESS_DENIED]);
          this.setCurrentUser(user);
        }
        return of(null);
      })
    );
  }

  setCurrentUser(currentUser: UserInfo | any) {
    this._currentUser = currentUser;
    this.currentUserSource.next(currentUser);
  }
}
