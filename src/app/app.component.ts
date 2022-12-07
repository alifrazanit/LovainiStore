import { Component } from '@angular/core';
import { HandleConnectionService } from '@services/handle-connection/handle-connection.service';
import { OnlineStatusType } from 'ngx-online-status';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  statusConnection: any = OnlineStatusType;
  onlineStatusCheck: any = OnlineStatusType;
  statusConnectionStr: string = 'You are back online';

  onlineSub!: Subscription;
  constructor(
    private handleConnection: HandleConnectionService) {
    this.handleConnection.checkOnlineState();
    this.onlineSub = this.handleConnection.IsOnline.subscribe(statusOnline => {
      if (statusOnline) {
        this.statusConnection = OnlineStatusType.ONLINE;
        this.statusConnectionStr = 'You are back online';
      } else {
        this.statusConnection = OnlineStatusType.OFFLINE;
        this.statusConnectionStr = 'You are lose internet connection';
      }
    })
  }
}
