import { AppState } from './../State/app-state';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from "@ngrx/store";
import * as LoginActions from "../LoginPage/state/login.action";
@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate  {
  constructor( private store:Store<AppState> , private route:Router ){  }
  Loading$ :Observable<boolean>; 
  loading :boolean = true;


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean | Observable<boolean> {
    if(localStorage.token){
      this.store.dispatch(new LoginActions.ISLOGGEDIN);  
      return true
    }else{
      this.route.navigate(['/login']);
      return false;
    }
  }
 
  
}
