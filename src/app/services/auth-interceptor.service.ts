import { exhaustMap, take } from 'rxjs/operators';
import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private loginService: LoginService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.loginService.user.pipe(
      take(1),
      exhaustMap(user => {
        if (!user) {
          return next.handle(req);
        }
        const modifiedReq = req.clone({
          params: new HttpParams().set('token', user._token)
        });
        return next.handle(modifiedReq);
        }));
    }
}
