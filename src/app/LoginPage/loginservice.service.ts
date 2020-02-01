import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http:HttpClient , private route:Router) { }

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
   localStorage.removeItem('token');
   this.route.navigate['/login'];
  }
}
