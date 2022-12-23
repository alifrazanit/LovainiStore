import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainMenuService {

  constructor(
    private http: HttpClient
  ) { }

  getDummyMen(): Observable<any> {
    return this.http.get('assets/mocks/menu-jumbo.json') as Observable<any>;
  }
}
