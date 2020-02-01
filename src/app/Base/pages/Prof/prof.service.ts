import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfService {

  constructor(private http:HttpClient) { }

  getprofs(){
   return  this.http.get("http://127.0.0.1:8000/api/prof")
  }
}
