import { Injectable } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalErrorComponent } from '@shared/components/modal-error/modal-error.component';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  modalRef!: BsModalRef;

  constructor(
    private loader: NgxUiLoaderService,
    private modalService: BsModalService
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


  showError(message: string) {
    const payload: any = {
      message
    };
    this.modalRef = this.modalService.show(ModalErrorComponent, {
      class: 'modal-sm',
      initialState: payload
    });
  }
}
