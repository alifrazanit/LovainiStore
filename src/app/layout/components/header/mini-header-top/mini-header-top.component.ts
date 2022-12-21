import { trigger, state, style, animate, transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-header-top',
  templateUrl: './mini-header-top.component.html',
  styleUrls: ['./mini-header-top.component.css'],
  animations:[
    trigger('menuLayer', [
      state('closed', style({ 
        display:'block'
      })),
      state('open', style({
        position: 'absolute',
        top: '100%',
        zIndex: '5',
        background: 'red',
        width: '100%',
        height: '100%',
        left: '0',
        display:'block'
      })),
      transition('closed => open', animate(300)),
      transition('open => closed', animate(800))
    ])
  ]
})
export class MiniHeaderTopComponent implements OnInit {
  state = 'closed';
  constructor() { }

   
  ngOnInit(): void {
  }

  menuEnter(e: any){
    this.state = "open";
  }

  menuLeave(e: any){
    this.state = "closed";
  }
}
