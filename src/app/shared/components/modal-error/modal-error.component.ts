import { Component, OnInit } from '@angular/core';
import { Label } from '@config/label';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-error',
  templateUrl: './modal-error.component.html',
  styleUrls: ['./modal-error.component.css']
})
export class ModalErrorComponent implements OnInit {
  message: string = '';
  label = Label;
  constructor(
    private modalService: BsModalService,
    private modalRef: BsModalRef) { 
    const data:any = this.modalService.config.initialState;
    this.message = data.message;
  }

  ngOnInit(): void {
  }
 
  closeModal(): void {
    this.modalRef.hide();
  }

  
}
