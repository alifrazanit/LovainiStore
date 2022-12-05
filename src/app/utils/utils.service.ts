import { Injectable } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private loader: NgxUiLoaderService
  ) { }

  showLoading(): void {
    this.loader.start();
  }

  hideLoading(): void {
    this.loader.stop();
  }
  
  getToken(): string {
    const currentUrl = window.location.host;
    const tokenName = 's' + btoa(currentUrl) + 'S0';
    const token = atob(localStorage.getItem(tokenName) || '');
    return token;
  }
  
}
