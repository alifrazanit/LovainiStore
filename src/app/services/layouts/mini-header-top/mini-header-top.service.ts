import { Injectable } from '@angular/core';
import { CommonApiService } from '@services/common-api/common-api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiniHeaderTopService {

  constructor(
    private common: CommonApiService
  ) { }

    getBarcode(){
      return this.common.get('demo-qrcode.png', {}, { responseType: 'blob'}) as Observable<Blob>;
    }
}
