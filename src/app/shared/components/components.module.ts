import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '@pages/login/login.component';
import { NotFoundComponent } from '@pages/not-found/not-found.component';
import { UnauthorizedComponent } from '@pages/unauthorized/unauthorized.component';
import { DashboardComponent } from '@pages/dashboard/dashboard.component';
import { SignUpComponent } from '@pages/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalErrorComponent } from './modal-error/modal-error.component';

@NgModule({
  declarations: [
    LoginComponent,
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
