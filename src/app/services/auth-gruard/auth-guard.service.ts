import { Injectable } from '@angular/core';
import { UtilsService } from '@utils/utils.service';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(
    private utils: UtilsService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.utils.getToken()) {
      return true;
    } else {
      this.router.navigate(['login']).then(() => {
        window.location.reload();
      });
      return false;
    }
  }
}
