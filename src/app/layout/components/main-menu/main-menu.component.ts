import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MainMenuService } from '@services/layouts/main-menu/main-menu.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  dataMenu: any[] = [];

  constructor(
    private mainMenuService: MainMenuService
  ) { }

  ngOnInit(): void {
    this.dataMenu.map(dm => ({manu: dm, selected: false }));
    this.getMenu();
  }

  getMenu(){
    this.mainMenuService.getDummyMen().subscribe(data => {
      console.log(data)
      this.dataMenu = data;
    })
  }



  selectMenu(menu: any){
    let old = this.dataMenu.find((dm:any) => dm.selected === true);
    if(old){
      old.selected = false;
    }
    menu.selected = true;
  }
}
