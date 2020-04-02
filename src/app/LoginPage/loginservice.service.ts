import { AppState } from '../State/app-state';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store , select } from "@ngrx/store";
import * as LoginActions from "../LoginPage/state/login.action";
import * as LoginReducer from "../LoginPage/state/login.reducer";

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http:HttpClient , private route:Router , private store:Store<AppState>) { }

  Login(user){
    return this.http.post("http://127.0.0.1:8000/api/login",{"email":user.email,"password":user.passwoard})
  }
  checkLogin() :boolean{
    var token = localStorage.token;
    if(token){
          return true;
    }else{
          return false;
    }
  }
  logout(){
   this.store.dispatch(new LoginActions.LOGOUT); 
   localStorage.removeItem('token');
   this.route.navigate(['/login']);

  }
  me(){
    return this.http.get("http://127.0.0.1:8000/api/me")
  }
}
