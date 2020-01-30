import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http:HttpClient) { }

  Login(user){
    return this.http.post("http://127.0.0.1:8000/api/login",{"email":user.email,"password":user.passwoard})
  }
}
