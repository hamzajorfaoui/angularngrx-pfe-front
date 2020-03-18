import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any> , next: HttpHandler  ){
    if (localStorage.token) {
      // console.log(req.headers);
      const modifiereq = req.clone({
        setHeaders: {
            // 'Content-Type':  'application/json',
            Authorization: `bearer ${localStorage.getItem('token')}`
          },
        
    });
    return next.handle(modifiereq);
    } else {
      return next.handle(req);
    }
  }
}
