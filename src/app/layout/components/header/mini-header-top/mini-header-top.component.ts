import { trigger, state, style, animate, transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-header-top',
  templateUrl: './mini-header-top.component.html',
  styleUrls: ['./mini-header-top.component.css'],
  animations: [
    trigger('QRCode', [
      state('closed', style({
        display: 'none',
        position: 'fixed',
      })),
      state('open', style({
        position: 'fixed',
        top: '35px',
        left: '10px',
        zIndex: '5',
        background: 'white',
        borderRadius: '15px',
        boxShadow: 'rgb(0 0 0 / 24%) 0px 3px 8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      })),
    ])
  ]
})
export class MiniHeaderTopComponent implements OnInit {
  state = 'closed';
  constructor() { }


  ngOnInit(): void {
  }

  menuEnter(e: any) {
    this.state = "open";
  }
  menuLeave(e: any) {
    this.state = "closed";
  }
}
