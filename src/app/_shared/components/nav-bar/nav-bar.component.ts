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
        { label: 'Calendar', icon: 'pi pi-fw pi-calendar', command: () => {this.router.navigate([Urls.DASH,Urls.PROFILE])} },
        { label: 'Edit', icon: 'pi pi-fw pi-pencil', command: () => {this.router.navigate([Urls.DASH,Urls.PROFILE])} },
        { label: 'Documentation', icon: 'pi pi-fw pi-file', command: () => {this.router.navigate([Urls.DASH,Urls.PROFILE])} },
        { label: 'Settings', icon: 'pi pi-fw pi-cog', command: () => {this.router.navigate([Urls.DASH,Urls.PROFILE])} }
    ];
  }
}
