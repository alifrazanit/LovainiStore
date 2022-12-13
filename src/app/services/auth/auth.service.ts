import { Injectable } from '@angular/core';
import { loginInterface, signUpInterface } from '@config/interfaces/auth.interface';
import { CommonApiService } from '@services/common-api/common-api.service';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private commonApi: CommonApiService
  ) { }

  login(payload: loginInterface): Observable<any> {
    return this.commonApi.post('auth/login', payload) as Observable<any>;
  }

  signUp(payload: signUpInterface): Observable<any> {
    return this.commonApi.post('auth/sign-up', payload) as Observable<any>;
  }
}
