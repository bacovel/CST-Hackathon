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
    },
    {
      author: "raul",
      message: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
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
