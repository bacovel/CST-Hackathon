import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_core/services/user.service';

@Component({
  selector: 'app-access-denied',
  templateUrl: './access-denied.component.html',
  styleUrls: ['./access-denied.component.scss']
})
export class AccessDeniedComponent implements OnInit{
  constructor(  private userService: UserService){}

  ngOnInit(): void {
  this.userService.getCurrentUser({username:"user",password:"password"}).subscribe();
  }
}
