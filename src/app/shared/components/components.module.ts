import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '@pages/login/login.component';
import { LayoutComponent } from '@layout/layout.component';
import { NotFoundComponent } from '@pages/not-found/not-found.component';
import { UnauthorizedComponent } from '@pages/unauthorized/unauthorized.component';
import { DashboardComponent } from '@pages/dashboard/dashboard.component';
import { SignUpComponent } from '@pages/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalErrorComponent } from './modal-error/modal-error.component';
import { HeaderComponent } from '@layout/components/header/header.component';
import { MiniHeaderTopComponent } from '@layout/components/header/mini-header-top/mini-header-top.component';
import { BannerComponent } from '@layout/components/banner/banner.component';

@NgModule({
  exports:[
    HeaderComponent,
    MiniHeaderTopComponent,
    BannerComponent,
  ],
  declarations: [
    HeaderComponent,
    MiniHeaderTopComponent,
    BannerComponent,
    LoginComponent,
    LayoutComponent,
    NotFoundComponent,
    UnauthorizedComponent,
    DashboardComponent,
    SignUpComponent,
    ModalErrorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
