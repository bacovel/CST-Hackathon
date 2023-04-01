import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { Observable, Subject } from 'rxjs';
import { StorageHelperService } from './storage-helper.service';
import * as msgPack from '@microsoft/signalr-protocol-msgpack';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {
  private hubConnection: signalR.HubConnection | undefined;
  private messageReceived = new Subject<string>();

  constructor(private storageService:StorageHelperService) { }

   public startConnection(url: string): Promise<void> {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(url, {
        accessTokenFactory: () => this.storageService.getToken()
      })
      .withHubProtocol(new msgPack.MessagePackHubProtocol())
      .build();

    this.hubConnection.on('receiveMessage', (data: any) => {
      this.messageReceived.next(data);
    });

    return this.hubConnection.start();
  }

  public JoinGroup(message: string): void {
    this.hubConnection!.invoke('JoinGroup', message).catch(error => console.error(error));
  }

  public SendMessage(room:string,message: string): void {
    this.hubConnection!.invoke('SendMessage', room,message).catch(error => console.error(error));
  }

  public getMessage(): Observable<any> {
    return this.messageReceived.asObservable();
  }
}
