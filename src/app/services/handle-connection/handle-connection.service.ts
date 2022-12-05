import { Injectable } from '@angular/core';
import { OnlineStatusService, OnlineStatusType } from 'ngx-online-status';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandleConnectionService {
  statusConnection: any = OnlineStatusType;
  private onlineState = new BehaviorSubject<boolean>(false);

  constructor(private onlineStatusService: OnlineStatusService) { 
    if(this.onlineStatusService.getStatus() === 1){
      this.setOnline(true)
    } else {
      this.setOnline(false);
    }
  }

  checkOnlineState() {
    this.onlineStatusService.status.subscribe((status: OnlineStatusType) => {
      if (status === OnlineStatusType.ONLINE) {
        this.setOnline(true);
      } else {
        this.setOnline(false);
      }
    })
  }
  get IsOnline() {
    return this.onlineState.asObservable();
  }

  setOnline(status: boolean) {
    this.onlineState.next(status);
  }
}
