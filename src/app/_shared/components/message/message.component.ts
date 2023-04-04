import { Component, Input } from '@angular/core';
import { MessageModel } from 'src/app/_core/models/MessageModel';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  @Input() users: MessageModel[] = [];

  constructor(){}
  
}
