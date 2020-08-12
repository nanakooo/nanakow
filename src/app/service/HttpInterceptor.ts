import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { PlatformLocation } from '@angular/common';
import { AccountService } from './account.service';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private message: NzMessageService,
    private location: PlatformLocation,
    private accountService: AccountService,
  ) { }

  go() {
    if (!(/^\#\/login/.test(this.location.hash))) {
      if (!this.accountService.token) {
        this.router.navigate(['/login']);
      }
    }
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const Token = this.accountService.token || '';
    const Req = req.clone({
      url: /http/.test(req.url) ? req.url : environment.url + req.url,
      headers: /http/.test(req.url) ? req.headers : req.headers.append('Authorization', Token),
    });
    return next.handle(Req).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (event.body && event.body.status) {
            this.go();
            switch (event.body.status) {
              case '-3': {
              }
              case '-4': {
              }
              case '-6': {
              }
              case '-7': {
              }
              case '-8': {
                // this.accountService.token = null;
                // this.store.dispatch(new Actions.SetUserInfo(null));
                // this.go();
              }
              case '-1': {
                this.message.error(event.body.msg);
              }
            }
          }
        }
      }, (err: any) => {
        if (err instanceof HttpErrorResponse && (err.status < 200 || err.status >= 500)) {
          this.message.error(err.message);
        }
      })
    );
  }
}
