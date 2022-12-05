import { Injectable } from '@angular/core';
import { loginInterface } from '@config/interfaces/auth.interface';
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
}
