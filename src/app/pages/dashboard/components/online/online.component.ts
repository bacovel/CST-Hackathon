import { Component, OnInit } from '@angular/core';

interface Type {
  name: string;
  code: string;
}

@Component({
  selector: 'app-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.scss']
})
export class OnlineComponent implements OnInit{
  taskType: Type[] | undefined;

  selectedType: Type | undefined;

  
  ngOnInit() {
    this.taskType = [
        { name: 'Programming', code: '1' },
        
    ];
  }
}
