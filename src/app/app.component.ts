import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UNAUTHORIZED } from './_core/constants/Errors';
import { Urls } from './_core/constants/Urls';
import { UserInfo } from './_core/models/UserInfo';
import { ErrorService } from './_core/services/error.service';
import { UserService } from './_core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 
  title = 'Angular-Template';

  userSubscription?: Subscription;

  constructor(
    private userService: UserService,
    private errorService: ErrorService,
    private router: Router
    ) {}
 
  ngOnInit(): void {
    this.loadSubscription();
  }

  loadSubscription(){
    this.userSubscription = this.userService.currentUser$.subscribe({
      next:(user:UserInfo) => {
          if(user?.token){
            this.router.navigate([Urls.BASE])
          }else{
            this.errorService.throwError(UNAUTHORIZED)
          }
          this.userSubscription?.unsubscribe();
      }
    })
  }
}
