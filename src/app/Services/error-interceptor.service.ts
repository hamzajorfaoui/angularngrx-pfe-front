import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { LoginserviceService } from '../LoginPage/loginservice.service';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor{

  constructor(private authS :LoginserviceService) { }
  intercept(req: HttpRequest<any> , next: HttpHandler  ){
    return next.handle(req).pipe(
      catchError(error =>{
            if(error.status == 401){
                  console.log(error.status);
                  if(localStorage.token){
                    this.authS.logout();
                  }
                 
            }else{
               const err = error.error.message || error.error.statuts
               return throwError(err)
            }  
           })       
      )}
  }

