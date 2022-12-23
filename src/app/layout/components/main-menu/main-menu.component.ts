import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor() { }
  DUMMYMENU = [
    { menu: 'Rumah Tangga', selected: false },
    { menu: 'Buku', selected: false },
    { menu: 'Elektronik', selected: false },
  ]
  ngOnInit(): void {
    this.DUMMYMENU.map(dm => ({manu: dm, isSelected: false }));
  }



  selectMenu(menu: any){
    let old = this.DUMMYMENU.find((dm:any) => dm.selected === true);
    if(old){
      old.selected = false;
    }
    menu.selected = true;
  }
}
