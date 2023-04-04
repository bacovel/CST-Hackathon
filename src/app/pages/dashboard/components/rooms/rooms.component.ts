import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/_core/api/account.service';
import { CompileService } from 'src/app/_core/api/compile.service';
import { RoomService } from 'src/app/_core/api/room.service';
import { Urls } from 'src/app/_core/constants/Urls';
import ComputePayloadHelper from 'src/app/_core/helpers/ComputePayloadHelper';
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
  editorOptions = {theme: 'vs-dark', language: 'java'};
  code: string= 'public class MyClass {\r\n    public static void main(String args[]) {\r\n      int x=10;\r\n      int y=25;\r\n      int z=x+y;\r\n\r\n      System.out.println(\"Sum of x+y = \" + z);\r\n    }\r\n}';
  inputMessage: string = '';
  output: string = '';
  messages: MessageModel[] = []
  
  constructor(
    private signalR : SignalrService,
    private activeRoute: ActivatedRoute,
    private compileService: CompileService,
    private roomService: RoomService,
    private toastr: ToastrService,
    private router: Router,
    private accountService: AccountService
    ){}

  ngOnInit(): void {
    this.routeSubscribe = this.activeRoute.params.subscribe(params => {
      this.id = params['id']; 
      this.routeSubscribe.unsubscribe();
   });
    this.signalR.startConnection("https://localhost:44314/hub/RoomHub");
    this.signalR.getMessage().subscribe({
      next:(response:MessageModel) =>{
        
        this.messages.push(response)
      },
      error:(error:any)=>{
        console.log(error)
      }
    })
    setTimeout(() => {
      this.signalR.JoinGroup(this.id);
    },1000)
  }

  sendMessage(){
    this.signalR.SendMessage(this.id,this.inputMessage);
    this.inputMessage = ''
  }

  compile(){
    var payload = ComputePayloadHelper.executePayload(this.code,"java","3")
    this.compileService.Execute(payload).subscribe({
      next:(response:any) =>{
        this.output = response.output; 
      },
      error:(err:any)=>{
        this.output = err;
      }
    })
  }

  finishRoom(){
    this.roomService.closeRoom(this.id).subscribe({
      next:() =>{
         let paylaod = ComputePayloadHelper.updateExpPayload(100);
          this.accountService.updateExp(paylaod).subscribe({
            next:()=>{
              this.toastr.success(`You have received 100 points!`)
            },
            error:()=>{
              this.toastr.error("you could not get points")
            }
          })
          this.router.navigate([Urls.DASH,Urls.PROFILE]);
      },
      error: (err:HttpErrorResponse) => {
          this.toastr.error(err.error);
      }
    })
  }
}
