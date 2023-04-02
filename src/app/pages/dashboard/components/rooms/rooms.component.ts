import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageModel } from 'src/app/_core/models/MessageModel';
import { SignalrService } from 'src/app/_core/services/signalr.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit{
  private routeSubscribe: any;
  id:string = '';
  editorOptions = {theme: 'vs-dark', language: 'javascript'};
  code: string= 'function x() {\nconsole.log("Hello world!");\n}';
  users: MessageModel[] = [
    {
      author: "mandarin",
      message: "sugi pula ca te fac"
    }
  ]
  
  constructor(
    private signalR : SignalrService,
    private activeRoute: ActivatedRoute,
    ){}

  ngOnInit(): void {
    this.routeSubscribe = this.activeRoute.params.subscribe(params => {
      this.id = params['id']; 
      this.routeSubscribe.unsubscribe();
   });
    this.signalR.startConnection("https://localhost:44314/hub/RoomHub");
    this.signalR.getMessage().subscribe({
      next:(response:any) =>{
        console.log(response)
      },
      error:(error:any)=>{
        console.log(error)
      }
    }) 
  }

  sendMessage(){
    console.log("id")
    this.signalR.sendMessage(this.id);
  }
}
