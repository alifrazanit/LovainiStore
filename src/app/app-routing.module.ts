import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '@layout/layout.module';
import { AuthGuardService as AuthGuard } from '@services/auth-gruard/auth-guard.service';
import { LoginComponent } from '@pages/login/login.component';
import { SignUpComponent } from '@pages/sign-up/sign-up.component';
import { NotFoundComponent } from '@pages/not-found/not-found.component';
import { UnauthorizedComponent } from '@pages/unauthorized/unauthorized.component';

const routes: Routes = [
  { path: '', loadChildren: () => LayoutModule, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'not-found', component: NotFoundComponent},
  { path: 'unauthorized', component: UnauthorizedComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
