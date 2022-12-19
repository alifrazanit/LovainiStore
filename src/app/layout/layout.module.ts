import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from '@layout/layout-routing.module';
import { MainMenuComponent } from './components/main-menu/main-menu.component';


@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  declarations: [ 
  
    MainMenuComponent
  ]
})
export class LayoutModule { }
