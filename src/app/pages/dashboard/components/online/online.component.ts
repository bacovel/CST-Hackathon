import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoomService } from 'src/app/_core/api/room.service';
import { Urls } from 'src/app/_core/constants/Urls';
import { RoomModel } from 'src/app/_core/models/RoomModel';

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
  inputCreate :string = '';
  inputJoin : string = '';

  constructor(private roomService : RoomService,private router : Router,private toastr: ToastrService){}
  ngOnInit() {
    this.taskType = [
        { name: 'Programming', code: '1' },
        
    ];
  }

  join(){
    this.roomService.getProjectByUser(this.inputJoin).subscribe({
      next:(response:RoomModel)=>{
        this.router.navigate([Urls.DASH,"rooms",response.roomCode]);
      },
      error:(error:HttpErrorResponse)=>{
        this.toastr.error("Room not found");
      }
    })
  }

  createRoom(){
    this.roomService.generateRoom().subscribe({
      next:(response:RoomModel)=>{
        this.router.navigate([Urls.DASH,"rooms",response.roomCode]);
      },
      error:(err:HttpErrorResponse)=>{
        this.toastr.error(err.error)
      }
    })
  }
}
