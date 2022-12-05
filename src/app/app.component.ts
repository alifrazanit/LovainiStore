import { Component } from '@angular/core';
import { OnlineStatusService, OnlineStatusType } from 'ngx-online-status';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  statusConnection:any = OnlineStatusType; 
  onlineStatusCheck: any = OnlineStatusType;
  statusConnectionStr: string = 'You are back online';

  constructor(private onlineStatusService: OnlineStatusService) {
    this.onlineStatusService.status.subscribe((status: OnlineStatusType) => {
      this.statusConnection = status;
      if(this.statusConnection == OnlineStatusType.ONLINE) {
        this.statusConnectionStr = 'You are back online'
      } else {
        this.statusConnectionStr = 'You lose internet connection'
      }
    });
  }

  checkConnection(): boolean{
    if(this.statusConnection == OnlineStatusType.ONLINE) {
      return true;
    } else {
      return false;
    }
  }
}
