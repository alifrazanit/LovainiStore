import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from '@layout/layout-routing.module';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { HoverJumboMenuDirective } from '@directives/hover-jumbo-menu/hover-jumbo-menu.directive';
import { MiniHeaderTopComponent } from '@layout/components/header/mini-header-top/mini-header-top.component';
import { BannerComponent } from '@layout/components/banner/banner.component';
import { HeaderComponent } from '@layout/components/header/header.component';
import { LayoutComponent } from '@layout/layout.component';


@NgModule({
  declarations: [ 
    MainMenuComponent,
    HoverJumboMenuDirective,
    MiniHeaderTopComponent,
    BannerComponent,
    HeaderComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
  ],
  exports:[
    HoverJumboMenuDirective,
    MiniHeaderTopComponent,
    BannerComponent,
    HeaderComponent
  ],
})
export class LayoutModule { }
