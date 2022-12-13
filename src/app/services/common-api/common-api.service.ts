import { Injectable } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams, HttpContext, HttpEvent, HttpParamsOptions } from '@angular/common/http';
import { OnlineStatusType } from 'ngx-online-status';
import { UtilsService } from '@utils/utils.service';
import { environment } from 'src/environments/environment';
import { catchError, retry, timeout } from 'rxjs/operators';
import { HandleConnectionService } from '@services/handle-connection/handle-connection.service';


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
  onlineSub!: Subscription;

  constructor(
    private http: HttpClient,
    private handleConnection: HandleConnectionService,
    private utils: UtilsService
  ) {
    this.handleConnection.checkOnlineState();
    this.onlineSub = this.handleConnection.IsOnline.subscribe(statusOnline => {
      if (statusOnline) {
        this.statusConnection = OnlineStatusType.ONLINE;
      } else {
        this.statusConnection = OnlineStatusType.OFFLINE;
      }
    })
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
            throw  err;
          })
        );
    } else {
      return of(null)
    }
  }

  post(url: string, body: any, params?: any, reqOpts?: reqOptsInterface): Observable<any> {
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
      return this.http.post(`${environment.baseUrl}${url}`, body, reqOpts)
      .pipe(
        catchError(err => {
          this.utils.hideLoading();
          throw  err;
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
