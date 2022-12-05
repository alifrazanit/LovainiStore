import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams, HttpContext, HttpEvent, HttpParamsOptions } from '@angular/common/http';
import { OnlineStatusService, OnlineStatusType } from 'ngx-online-status';
import { UtilsService } from '@utils/utils.service';
import { environment } from 'src/environments/environment';
import { catchError, retry, timeout } from 'rxjs/operators';

interface reqOptsInterface {
  headers?: HttpHeaders;
  context?: HttpContext;
  observe?: 'body';
  params?: HttpParams;
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class CommonApiService {
  statusConnection: any = OnlineStatusType;
  headers: HttpHeaders | undefined;

  constructor(
    private http: HttpClient,
    private onlineStatusService: OnlineStatusService,
    private utils: UtilsService
  ) {
    this.onlineStatusService.status.subscribe((status: OnlineStatusType) => {
      this.statusConnection = status;
    });
  }

  getHeaders(headers?: any): HttpHeaders {
    const headerObj: any = {
      Authorization: 'Bearer ' + this.utils.getToken()
    };
    if (headers) {
      headers.forEach((value: string, key: string) => {
        headerObj[key] = value;
      });
    }
    return this.headers = new HttpHeaders(headerObj);
  }

  get(url: string, params?: any, reqOpts?: reqOptsInterface): Observable<any> {
    if (this.checkConnection()) {

      if (!reqOpts) {
        reqOpts = {
          params: new HttpParams(),
          withCredentials: true,
          responseType: 'json',
          headers: undefined,
        };
      }
      if (this.utils.getToken()) {
        reqOpts.headers = this.getHeaders();
      }
      if (params) {
        reqOpts.params = new HttpParams();
        for (const reqParams in params) {
          reqOpts.params = reqOpts.params.set(reqParams, params[reqParams]);
        }
      }
      this.utils.showLoading();
      return this.http.get(`${environment.baseUrl}${url}`, reqOpts)
        .pipe(
          catchError(err => {
            this.utils.hideLoading();
            throw 'error in source. Details: ' + err;
          })
        );
    } else {
      return of(null)
    }
  }

  checkConnection() {
    if (this.statusConnection === OnlineStatusType.ONLINE) {
      return true;
    } else {
      return false;
    }
  }
}
