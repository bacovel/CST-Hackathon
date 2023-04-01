import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageHelperService } from '../services/storage-helper.service';

@Injectable()
export class HttpRequestsInterceptor implements HttpInterceptor {

  constructor(private storageHelper: StorageHelperService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let newRequest = this.setHeaders(request)
    return next.handle(newRequest);
  }

  setHeaders(request: HttpRequest<any>){
    let newHeaders = request.headers;

    const token = this.storageHelper.getToken();
    if(token && request.url.indexOf('Authentification/Auth') == -1){
      newHeaders = newHeaders.set('Authorization',`Bearer ${token}`)
    }

    return request.clone({headers: newHeaders, withCredentials: true});
  }
}
