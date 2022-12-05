import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '@pages/login/login.component';
import { LayoutComponent } from '@layout/layout.component';
import { NotFoundComponent } from '@pages/not-found/not-found.component';
import { UnauthorizedComponent } from '@pages/unauthorized/unauthorized.component';
import { DashboardComponent } from '@pages/dashboard/dashboard.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { OnlineStatusModule } from 'ngx-online-status';
import { HttpClientModule } from '@angular/common/http';
import {
  NgxUiLoaderModule,
  NgxUiLoaderConfig,
  SPINNER,
  POSITION,
  PB_DIRECTION
} from "ngx-ui-loader";
const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: "red",
  bgsPosition: POSITION.bottomCenter,
  bgsSize: 40,
  bgsType: SPINNER.rectangleBounce,
  fgsType: SPINNER.chasingDots,
  pbDirection: PB_DIRECTION.leftToRight,
  pbThickness: 5, 
};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    NotFoundComponent,
    UnauthorizedComponent,
    DashboardComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OnlineStatusModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
