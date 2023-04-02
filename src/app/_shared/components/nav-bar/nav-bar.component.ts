import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Urls } from 'src/app/_core/constants/Urls';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(private router:Router){}
  ngOnInit(): void {
     this.items = [
        { label: 'Home', icon: 'pi pi-fw pi-home', command: () => {this.router.navigate([Urls.DASH,Urls.PROFILE])} },
        { label: 'Connect with firends', icon: 'pi pi-users', command: () => {this.router.navigate([Urls.DASH,Urls.ONLINE])} },
        
    ];
  }
}
