import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('menuJumbo', [
      state('closed', style({
        display: 'none',
        position: 'fixed',
      })),
      state('open', style({
        position: 'absolute',
        top: '100%',
        background: 'white',
        zIndex: '4',
        left: '0',
        padding: '5px',
        boxShadow: 'rgb(0 0 0 / 24%) 0px 3px 8px',
        display: 'flex',
        width: '100%',
        height: 'auto',
      })),
    ])
  ]
})
export class HeaderComponent implements OnInit {
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
